"use client";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowProductItemOverlay } from "@/redux-store/slices/backdrop/food-items";
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
import { addToCart } from "@/redux-store/slices/backdrop/food-items-data";

export const FoodItemOverlay = () => {
  const [isRequiredSelected, setIsRequiredSelected] = useState(false);
  const [isErrorShowing, setIsErrorShowing] = useState(false);
  const dispatch = useAppDispatch();
  const { showProductItemOverlay, currentProductItem } = useAppSelector(
    (state: RootState) => state.foodItemOverlay
  );
  const productRef = useRef<HTMLDivElement>(null);
  const outerErrorRef = useRef<HTMLDivElement>(null);
  const innerErrorRef = useRef<HTMLDivElement>(null);
  const handleCloseFoodItems = () => {
    dispatch(setShowProductItemOverlay(false));
  };
  const handleCloseError = () => {
    if (isErrorShowing) {
      setIsErrorShowing(false);
    }
    return;
  };
  const cartItems = useAppSelector((state) => state.foodItemData.cartItems);
  const isAddedToCart = currentProductItem
    ? cartItems?.some((item) => item.product._id === currentProductItem._id)
    : false;

  useOnClickOutside(innerErrorRef, handleCloseError);
  useOnClickOutside([productRef, outerErrorRef], handleCloseFoodItems);
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAddToCart = (name: string) => {
    // if (currentProductItem?.options && !isRequiredSelected) {
    //   setIsErrorShowing(true);
    //   return;
    // }
    if (currentProductItem) {
      dispatch(addToCart(currentProductItem));
      handleCloseFoodItems();
    }
  };

  return (
    <AnimatePresence>
      {showProductItemOverlay && (
        <>
          <Backdrop variants={slideUp}>
            <div className="flex w-full justify-center h-full">
              <div
                ref={productRef}
                className="rounded-t-xl sm600:rounded-b-xl w-full self-end sm600:self-center sm600:max-w-[520px] overflow-y-auto scrollbar-none max-h-screen relative"
              >
                <div className="mt-4 sm600:mt-0">
                  <Image
                    src={currentProductItem?.image ?? ""}
                    height={1000}
                    width={1000}
                    quality={100}
                    alt={currentProductItem?.name ?? "Food Item"}
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
                      <p className="w-full truncate overflow-hidden whitespace-nowrap text-left text-sm font-semibold capitalize ">
                        {currentProductItem?.name}
                      </p>

                      <p className="my-2 text-xs text-[#475467] leading-[16.4px]">
                        {currentProductItem?.description}
                      </p>

                      <div className="mt-1.5 flex items-center">
                        {/* Logo */}
                        <Image
                          src={currentProductItem?.store.photo ?? ""}
                          alt="Resturant Logo"
                          className="w-3 h-3 rounded-full object-cover"
                          width={55}
                          height={55}
                          unoptimized
                        />

                        <p className="ml-1 flex text-xs items-center text-grey-500">
                          {currentProductItem?.store.name}{" "}
                          <LuDot className="mx-1 text-[#667185]" />
                          <span className="mr-1">{234} sold</span>
                        </p>
                      </div>

                      <div className="mt-1.5 flex items-center text-grey-500 text-xs">
                        <p className="flex gap-1 items-center">
                          <TiStarFullOutline />
                          <span>{4.5}</span>
                        </p>
                        <LuDot className="mx-0.5 text-[#667185]" />
                        <p className="flex gap-1 items-center">
                          <PiCookingPot />
                          <span>{"1-2 hours"}</span>
                        </p>
                        <LuDot className="mx-0.5 text-[#667185]" />
                        <p className="flex gap-1 items-center">
                          <PiBicycleThin /> <span>{"₦2500"}</span>
                        </p>
                      </div>

                      <div className="mt-2 flex justify-between">
                        <div className="flex flex-col font-inter">
                          <p className="text-jikoo-brand-green font-bold text-lg">
                            ₦
                            {currentProductItem?.price &&
                            currentProductItem?.discount !== undefined
                              ? currentProductItem.price -
                                currentProductItem.discount
                              : 0}
                          </p>
                          <p className="line-through text-xs text-grey-400">
                            ₦{currentProductItem?.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* {currentProductItem?.options && (
                      <div className="">
                        {/* Required */}
                    {/* {currentProductItem?.options[0] && (
                          <>
                            <div className="flex py-2 px-5 bg-grey-100 items-center justify-between">
                              <p className="font-medium">
                                {currentProductItem?.options[0].name}
                              </p>
                              <p className="text-[#DD524D] text-xs italic">
                                required
                              </p>
                            </div>

                            <div className="flex flex-col gap-4 px-5 pt-2 pb-4 text-grey-500 text-sm">
                              {currentProductItem?.options[0].items.map(
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
                        )} */}

                    {/* Optional */}
                    {/* {currentProductItem?.options[1] && (
                          <>
                            <div className="flex py-2 px-5 bg-grey-100 items-center justify-between">
                              <p className="font-medium">
                                {currentProductItem?.options[1].name}
                              </p>
                              <p className="italic text-xs">Optional</p>
                            </div>

                            <div className="flex flex-col gap-4 px-5 pt-2 pb-4 text-grey-500 text-sm">
                              {currentProductItem?.options[1].items.map(
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
                        )} */}
                    {/* </div>
                    )}  */}

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
                          handleAddToCart(currentProductItem?.name ?? "")
                        }
                      >
                        {isAddedToCart ? "Update" : "Add to cart"}
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
                ref={outerErrorRef}
                className="px-6 flex h-full w-full items-center justify-center"
              >
                <div
                  ref={innerErrorRef}
                  className="bg-white p-6 rounded-2xl flex flex-col text-grey-900 font-bold tracking-[-0.4px] w-full sm600:max-w-96"
                >
                  <p className="text-xl tracking-[-0.4px]">Required</p>
                  <p className="text-sm font-normal mt-4 mb-6">
                    Select a required option
                  </p>
                  <button
                    onClick={() => {
                      handleCloseError();
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
