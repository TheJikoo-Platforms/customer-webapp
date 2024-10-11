"use client";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  setAddedToCart,
  setShowFoodItemOverlay,
} from "@/redux-store/slices/backdrop/food-items";
import { RootState } from "@/redux-store/store";
import { fadeIn, slideUp } from "@/variants";
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Backdrop from "../ui/backdrop";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import { PiBicycleThin, PiCookingPot } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "../ui/button";
import { updateAddedToCart } from "@/redux-store/slices/backdrop/food-items-data";

export const FoodItemOverlay = () => {
  const [isRequiredSelected, setIsRequiredSelected] = useState(false);
  const [isErrorShowing, setIsErrorShowing] = useState(false);
  const dispatch = useAppDispatch();
  const { showFoodItemOverlay, currentFoodItem } = useAppSelector(
    (state: RootState) => state.foodItemOverlay
  );
  const mainRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const handleCloseFoodItems = () => {
    dispatch(setShowFoodItemOverlay(false));
  };
  useOnClickOutside([mainRef, errorRef], handleCloseFoodItems);

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAddToCart = (name: string) => {
    if (currentFoodItem?.options && !isRequiredSelected) {
      setIsErrorShowing(true);
      return;
    }
    dispatch(updateAddedToCart({ itemName: name, addedToCart: true }));
    handleCloseFoodItems();
  };

  return (
    <AnimatePresence>
      {showFoodItemOverlay && (
        <>
          <Backdrop variants={slideUp} className="z-50">
            <div className="flex w-full justify-center h-full">
              <div
                ref={mainRef}
                className="rounded-t-xl sm600:rounded-b-xl w-full self-end sm600:self-center sm600:max-w-[520px] overflow-y-auto scrollbar-none max-h-screen relative"
              >
                <div className="mt-4 sm600:mt-0">
                  <Image
                    src={currentFoodItem?.imageUrl ?? ""}
                    height={1000}
                    width={1000}
                    quality={100}
                    alt={currentFoodItem?.name ?? "Food Item"}
                    className="max-h-[200px] w-full object-cover"
                  />
                  <button
                    onClick={handleCloseFoodItems}
                    className="w-8 h-8 rounded-full flex justify-center items-center bg-white absolute top-8 right-5 shadow-soft-medium"
                    type="button"
                  >
                    <IoIosClose className="text-black text-xl" />
                  </button>

                  <div className="bg-white pb-[100px] sm600:pb-0 relative">
                    <div className="px-5 py-4">
                      <p className="w-full truncate overflow-hidden whitespace-nowrap text-left text-sm font-semibold">
                        {currentFoodItem?.name}
                      </p>

                      <p className="my-2 text-xs text-[#475467] leading-[16.4px]">
                        {currentFoodItem?.description}
                      </p>

                      <div className="mt-1.5 flex items-center">
                        {/* Logo */}
                        <Image
                          src={currentFoodItem?.storeLogo ?? ""}
                          alt="Resturant Logo"
                          className="w-3 h-3 rounded-full object-cover"
                          width={55}
                          height={55}
                          unoptimized
                        />

                        <p className="ml-1 flex text-xs items-center text-grey-500">
                          {currentFoodItem?.store}{" "}
                          <LuDot className="mx-1 text-[#667185]" />
                          <span className="mr-1">
                            {currentFoodItem?.numberSold} sold
                          </span>
                        </p>
                      </div>

                      <div className="mt-1.5 flex items-center text-grey-500 text-xs">
                        <p className="flex gap-1 items-center">
                          <TiStarFullOutline />{" "}
                          <span>{currentFoodItem?.stars}</span>
                        </p>
                        <LuDot className="mx-0.5 text-[#667185]" />
                        <p className="flex gap-1 items-center">
                          <PiCookingPot />{" "}
                          <span>{currentFoodItem?.cookingTime}</span>
                        </p>
                        <LuDot className="mx-0.5 text-[#667185]" />
                        <p className="flex gap-1 items-center">
                          <PiBicycleThin />{" "}
                          <span>{currentFoodItem?.ridingTime}</span>
                        </p>
                      </div>

                      <div className="mt-2 flex justify-between">
                        <div className="flex flex-col font-inter">
                          <p className="text-jikoo-brand-green font-bold text-lg">
                            {currentFoodItem?.discountPrice}
                          </p>
                          <p className="line-through text-xs text-grey-400">
                            {currentFoodItem?.originalPrice}
                          </p>
                        </div>
                      </div>
                    </div>

                    {currentFoodItem?.options && (
                      <div className="">
                        {/* Required */}
                        {currentFoodItem?.options[0] && (
                          <>
                            <div className="flex py-2 px-5 bg-grey-100 items-center justify-between">
                              <p className="font-medium">
                                {currentFoodItem?.options[0].name}
                              </p>
                              <p className="text-[#DD524D] text-xs italic">
                                required
                              </p>
                            </div>

                            <div className="flex flex-col gap-4 px-5 pt-2 pb-4 text-grey-500 text-sm">
                              {currentFoodItem?.options[0].items.map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between items-center"
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="w-4 h-4 border p-2.5 border-grey-300 rounded"></span>
                                      <span className="text-gray-700 capitalize">
                                        {item.name}
                                      </span>
                                    </div>
                                    <span className="text-gray-500 text-xs">
                                      {item.price}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </>
                        )}

                        {/* Optional */}
                        {currentFoodItem?.options[1] && (
                          <>
                            <div className="flex py-2 px-5 bg-grey-100 items-center justify-between">
                              <p className="font-medium">
                                {currentFoodItem?.options[1].name}
                              </p>
                              <p className="italic text-xs">Optional</p>
                            </div>

                            <div className="flex flex-col gap-4 px-5 pt-2 pb-4 text-grey-500 text-sm">
                              {currentFoodItem?.options[1].items.map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between items-center"
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="w-4 h-4 border p-2.5 border-grey-300 rounded"></span>
                                      <span className="text-gray-700 capitalize">
                                        {item.name}
                                      </span>
                                    </div>
                                    <span className="text-gray-500 text-xs">
                                      {item.price}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Add to cart section */}
                    <div className="bg-white fixed sm600:sticky bottom-0 w-full sm600:max-w-[520px] flex gap-4 p-5 shadow-md sm600:rounded-b-xl">
                      <div className="bg-grey-50 border border-grey-100 h-12 items-center flex justify-between p-4 w-full max-w-[150px] rounded-full">
                        <button type="button" onClick={decrementQuantity}>
                          <FaMinus className="text-grey-500" />
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={incrementQuantity}>
                          <FaPlus className="text-grey-500" />
                        </button>
                      </div>
                      <Button
                        type="button"
                        className="flex-1 py-3.5 px-6 md:text-base"
                        onClick={() =>
                          handleAddToCart(currentFoodItem?.name ?? "")
                        }
                      >
                        {currentFoodItem?.addedToCart
                          ? "Update"
                          : "Add to cart"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Backdrop>

          {isErrorShowing && (
            <Backdrop variants={fadeIn}>
              <div
                ref={errorRef}
                className="px-6 flex items-center justify-center"
              >
                <div className="bg-white p-6 rounded-2xl flex flex-col text-grey-900 font-bold tracking-[-0.4px] w-full sm600:max-w-96">
                  <p className="text-xl tracking-[-0.4px]">Required</p>
                  <p className="text-sm font-normal mt-4 mb-6">
                    Select a required option
                  </p>
                  <button
                    onClick={() => {
                      setIsErrorShowing(false);
                      setIsRequiredSelected(true);
                    }}
                    className="self-end"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </Backdrop>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
