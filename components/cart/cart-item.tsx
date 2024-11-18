"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DeleteIcon, NairaIcon, PencilEditIcon } from "../ui/icons";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { IProductItem } from "../types";
import { setShowCartOverlay } from "@/redux-store/slices/backdrop/cart";
import {
  setCurrentProductItem,
  setShowProductItemOverlay,
} from "@/redux-store/slices/backdrop/food-items";
import {
  decreaseQuantity,
  ICartItem,
  increaseQuantity,
} from "@/redux-store/slices/backdrop/cart-items";
interface Item {
  name: string;
  price: string;
}

interface Option {
  name: string;
  isOptional: boolean;
  items: Item[];
}

export const CartItem = ({ data }: { data: ICartItem }) => {
  const dispatch = useAppDispatch();
  const handleShowOverlay = () => {
    dispatch(setShowProductItemOverlay(true));
    dispatch(setCurrentProductItem(data.product));
  };

  const incrementQuantity = () => {
    dispatch(increaseQuantity(data.product._id));
  };
  const decrementQuantity = () => {
    dispatch(decreaseQuantity(data.product._id));
  };
  return (
    <div className="flex gap-2 border-b border-b-grey-100 pb-4 justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={data?.product?.image}
          height={100}
          width={100}
          alt="Product Image"
          className="w-[56px] h-[64px] object-cover rounded-md"
        />

        <div className="flex flex-col gap-2 w-full max-w-[137px]">
          <p className="text-sm font-bold tracking-[-0.35px] text-[#1E1E1E] truncate capitalize">
            {data?.product?.name}
          </p>
          <p className="text-jikoo-brand-green font-extrabold text-xl flex items-center">
            <NairaIcon className="size-4 fill-jikoo-brand-green" />{" "}
            {data?.product?.price - data?.product?.discount}
          </p>
        </div>
      </div>

      <div className="bg-state-success-50 border border-jikoo-brand-green h-[56px] items-center flex justify-between py-[15px] px-5 w-full max-w-[119px] rounded-md text-xl font-bold">
        <button type="button" onClick={decrementQuantity}>
          <FaMinus className="text-base text-jikoo-brand-green" />
        </button>
        <span>{data?.quantity}</span>
        <button type="button" onClick={incrementQuantity}>
          <FaPlus className="text-base text-jikoo-brand-green" />
        </button>
      </div>
    </div>
  );
};
