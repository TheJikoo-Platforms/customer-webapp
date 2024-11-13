"use client";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { CgShoppingCart } from "react-icons/cg";
import { TiStarFullOutline } from "react-icons/ti";
import { PiCookingPot } from "react-icons/pi";
import { WishlistButton } from "../wishlist-button";
import {
  AddedToCartIcon,
  AddToCartIcon,
  CartIcon,
  NairaIcon,
} from "../ui/icons";
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
          <WishlistButton
            product={data}
            className="absolute top-[8px] left-[5px]"
          />
        </div>

        {/* Right */}
        <div className="ml-3 w-[66%] overflow-x-auto scrollbar-none text-nowrap tracking-[-0.4px]">
          <p className="w-full truncate overflow-hidden whitespace-nowrap text-left text-sm font-extrabold capitalize">
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

            <div className="ml-1 flex text-[13px] tracking-[-0.4px] items-center text-[#787D78E5]">
              <p className="truncate max-w-32 sm500:max-w-full lg:max-w-32">
                {data?.store?.name}
              </p>
              <LuDot className="mx-0.5" />
              <span className="mr-1">{data?.sold} sold</span>
            </div>
          </div>

          <div className="mt-1.5 flex items-center text-[#787D78E5] text-[13px]">
            <p className="flex gap-2 items-center">
              <TiStarFullOutline /> <span>{"4.5"}</span>
            </p>
            <LuDot className="mx-0.5" />
            <p className="flex gap-1 items-center">
              <PiCookingPot /> <span>{data?.cookingTime}</span>
            </p>
          </div>

          <div className="mt-2 flex justify-between max-w-[95%] md:max-w-[240px] lg:max-w-[95%] xl:max-w-[230px]">
            <div className="flex flex-col">
              <p className="text-jikoo-brand-green font-extrabold text-xl flex items-center">
                <NairaIcon className="size-4 fill-jikoo-brand-green mb-px" />{" "}
                {data?.price - data?.discount}
              </p>
              <p className="line-through text-xs text-[#787D78E5]">
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
              <CgShoppingCart
                className={`text-xl ${
                  isAddedToCart ? "text-white" : "text-jikoo-brand-green"
                }`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
