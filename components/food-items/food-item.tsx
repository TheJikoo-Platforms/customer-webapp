"use client";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { PiCookingPot } from "react-icons/pi";
import { PiBicycleThin } from "react-icons/pi";
import { WishlistButton } from "../wishlist-button";
import { AddedToCartIcon, AddToCartIcon } from "../ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";

import {
  setCurrentProductItem,
  setShowProductItemOverlay,
} from "@/redux-store/slices/backdrop/food-items";
import { IProductItem } from "../types";

export const FoodItem = ({ data }: { data: IProductItem }) => {
  const cartItems = useAppSelector((state) => state.foodItemData.cartItems);
  const isAddedToCart = cartItems?.some(
    (item) => item.product._id === data._id
  );
  const dispatch = useAppDispatch();
  const handleShowOverlay = () => {
    dispatch(setShowProductItemOverlay(true));
    dispatch(setCurrentProductItem(data));
  };
  return (
    <div onClick={handleShowOverlay} className="w-full cursor-pointer">
      <div className="flex">
        {/* Left */}
        <div className="relative flex-1 w-[33%]">
          <Image
            alt=""
            src={data?.image}
            width={200}
            height={200}
            className="w-full min-w-[102px] object-cover rounded-md rounded-br-[32px] h-full max-h-[120px]"
            quality={100}
          />
          <WishlistButton className="absolute top-[8px] left-[5px]" />
          {/* Exclusive */}
          <div className="bg-[#4A1AAD] text-xs text-white pl-[11px] pr-[15px] pt-[1px] pb-[2px] absolute bottom-3 left-0 text-nowrap rounded-r-full">
            Exclusive ✨
          </div>
        </div>

        {/* Right */}
        <div className="ml-3 w-[66%] overflow-x-auto scrollbar-none text-nowrap">
          <p className="w-full truncate overflow-hidden whitespace-nowrap text-left text-sm font-semibold capitalize">
            {data.name}
          </p>

          <div className="mt-1.5 flex items-center">
            {/* Logo */}
            <Image
              src={data?.store?.photo}
              alt="Resturant Logo"
              className="w-3 h-3 rounded-full object-cover"
              width={55}
              height={55}
              unoptimized
            />

            <div className="ml-1 flex text-xs items-center text-grey-500">
              <p className="truncate max-w-32 sm500:max-w-full lg:max-w-32">
                {data?.store?.name}
              </p>
              <LuDot className="mx-1 text-[#667185]" />
              <span className="mr-1">{234} sold</span>
            </div>
          </div>

          <div className="mt-1.5 flex items-center text-grey-500 text-xs">
            <p className="flex gap-2 items-center">
              <TiStarFullOutline /> <span>{"4.5"}</span>
            </p>
            <LuDot className="mx-0.5 text-[#667185]" />
            <p className="flex gap-1 items-center">
              <PiCookingPot /> <span>{"40-50mins"}</span>
            </p>
            <LuDot className="mx-0.5 text-[#667185]" />
            <p className="flex gap-1 items-center">
              <PiBicycleThin /> <span>{"₦3,500"}</span>
            </p>
          </div>

          <div className="mt-2 flex justify-between max-w-[95%] md:max-w-[245px] lg:max-w-[95%] xl:max-w-[245px]">
            <div className="flex flex-col">
              <p className="text-jikoo-brand-green font-bold text-lg">
                ₦{data?.price - data?.discount}
              </p>
              <p className="line-through text-xs text-grey-400">
                ₦{data?.price}
              </p>
            </div>

            <span
              className={`${
                isAddedToCart
                  ? "bg-jikoo-brand-green"
                  : "border border-jikoo-brand-green"
              } rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200`}
            >
              {isAddedToCart ? <AddedToCartIcon /> : <AddToCartIcon />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
