"use client";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowProductItemOverlay } from "@/redux-store/slices/backdrop/food-items";
import { RootState } from "@/redux-store/store";
import { fadeIn, slideUp } from "@/variants";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Backdrop from "../ui/backdrop";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "../ui/button";
import { addToCart } from "@/redux-store/slices/backdrop/cart-items";
import { PotIcon, StarIcon } from "./food-item";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";

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
  const existingCartItem =
    isAddedToCart && currentProductItem
      ? cartItems.find((item) => item.product._id === currentProductItem._id)
      : null;
  useOnClickOutside(innerErrorRef, handleCloseError);
  useOnClickOutside([productRef, outerErrorRef], handleCloseFoodItems);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (existingCartItem) {
      setQuantity(existingCartItem.quantity);
    }
  }, [existingCartItem]);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAddToCart = (name: string) => {
    if (currentProductItem) {
      dispatch(addToCart({ product: currentProductItem, quantity: quantity }));
      handleCloseFoodItems();
    }
  };
  // State to track selected options for each group
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string[]>
  >({});

  // Handle option selection or unselection
  const handleOptionSelect = (groupName: string, optionName: string) => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[groupName] || [];
      const updatedOptions = currentOptions.includes(optionName)
        ? currentOptions.filter((item) => item !== optionName) // Remove the option if it exists
        : [...currentOptions, optionName]; // Add the option if it doesn't exist

      return {
        ...prev,
        [groupName]: updatedOptions,
      };
    });
  };

  // Check if any extra group has no options selected
  const isAnyGroupEmpty = currentProductItem?.extra?.some((extraGroup) => {
    const selected = selectedOptions[extraGroup.groupName];
    return !selected || selected.length === 0; // No options selected for the group
  });

  // Check if all groups (extras) have been handled (selected options for each group)
  const isExtrasHandled =
    currentProductItem?.extra?.length === Object.keys(selectedOptions).length;

  // Disable the button if any group is empty or extras are not handled
  const isButtonDisabled = isAnyGroupEmpty || !isExtrasHandled;

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
                      <p className="w-full truncate overflow-hidden whitespace-nowrap text-left text-lg font-bold capitalize">
                        {currentProductItem?.name}
                      </p>

                      <p className="my-2 text-sm text-grey-500 leading-[20.3px]">
                        {currentProductItem?.description}
                      </p>

                      <div className="mt-1.5 flex items-center">
                        {/* Logo */}
                        <Image
                          src={currentProductItem?.store?.photo ?? ""}
                          alt="Resturant Logo"
                          className="w-3 h-3 rounded-full object-cover"
                          width={55}
                          height={55}
                          unoptimized
                        />

                        <p className="ml-1 flex text-xs items-center text-grey-500 capitalize">
                          {currentProductItem?.store?.name}{" "}
                          <LuDot className="mx-1 text-[#667185]" />
                          <span className="mr-1">
                            {currentProductItem?.sold} sold
                          </span>
                        </p>
                      </div>

                      <div className="mt-1.5 flex items-center text-grey-500 text-xs">
                        <p className="flex gap-1 items-center">
                          <StarIcon />
                          <span>{4.5}</span>
                        </p>
                        <LuDot className="mx-0.5 text-[#667185]" />
                        <p className="flex gap-1 items-center">
                          <PotIcon />{" "}
                          <span>{currentProductItem?.cookingTime}</span>
                        </p>
                      </div>

                      <div className="mt-2 flex justify-between">
                        <div className="flex flex-col font-inter">
                          <p className="text-jikoo-brand-green font-bold text-lg">
                            ₦
                            {currentProductItem?.price &&
                            currentProductItem?.discount !== undefined
                              ? currentProductItem?.price -
                                currentProductItem?.discount
                              : 0}
                          </p>
                          <p className="line-through text-xs text-grey-400">
                            ₦{currentProductItem?.price}
                          </p>
                        </div>
                      </div>
                    </div>
                    {currentProductItem?.extra && (
                      <div>
                        {currentProductItem?.extra?.map((extraGroup, index) => (
                          <div key={index} className="mb-4">
                            {/* Group Header */}
                            <div className="flex py-2 px-5 bg-grey-100 items-center justify-between">
                              <p className="font-medium capitalize text-sm">
                                {extraGroup?.groupName}
                              </p>
                              <p className="text-[#DD524D] text-xs italic">
                                required
                              </p>
                            </div>

                            {/* Options */}
                            <div className="flex flex-col gap-4 px-5 pt-3.5 pb-4 text-grey-500 text-sm">
                              {extraGroup?.options?.map((item) => (
                                <div
                                  key={item?.name}
                                  className="flex justify-between items-center"
                                >
                                  <div className="flex items-center gap-3">
                                    <button
                                      className={clsx([
                                        "w-5 h-5 border-2 border-jikoo-brand-green rounded flex items-center justify-center transition-all",
                                        {
                                          "bg-jikoo-brand-green":
                                            selectedOptions[
                                              extraGroup?.groupName
                                            ]?.includes(item?.name), // Check if item is in the array of selected options
                                          "bg-transparent": !selectedOptions[
                                            extraGroup?.groupName
                                          ]?.includes(item?.name), // If not in the array, it’s transparent
                                        },
                                      ])}
                                      onClick={() =>
                                        handleOptionSelect(
                                          extraGroup?.groupName,
                                          item.name
                                        )
                                      }
                                      aria-label={`Select ${item?.name}`}
                                    >
                                      {selectedOptions[
                                        extraGroup?.groupName
                                      ]?.includes(item.name) && (
                                        <CheckIcon className="text-white text-sm" />
                                      )}
                                    </button>

                                    <span className="text-gray-700 capitalize">
                                      {item?.name}
                                    </span>
                                  </div>
                                  <span className="text-gray-500 text-xs">
                                    {item?.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add to cart section */}
                    <div
                      className="bg-white fixed sm600:sticky bottom-0 w-full sm600:max-w-[520px] flex gap-4 p-5 shadow-md sm600:rounded-b-xl"
                      style={{
                        boxShadow: "0px 0px 39px -14px rgba(0, 153, 51, 0.56)",
                      }}
                    >
                      <div className="bg-state-success-50 border border-jikoo-brand-green h-[56px] items-center flex justify-between py-[15px] px-5 w-full max-w-[119px] sm600:max-w-[125px] rounded-md text-xl font-bold">
                        <button type="button" onClick={decrementQuantity}>
                          <FaMinus className="text-base text-jikoo-brand-green" />
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={incrementQuantity}>
                          <FaPlus className="text-base text-jikoo-brand-green" />
                        </button>
                      </div>
                      <Button
                        type="button"
                        className="flex-1 py-3.5 px-6 md:text-base disabled:bg-grey-300 disabled:"
                        disabled={isButtonDisabled}
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
        </>
      )}
    </AnimatePresence>
  );
};
