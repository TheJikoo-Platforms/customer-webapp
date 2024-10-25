"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DeleteIcon, PencilEditIcon } from "../ui/icons";
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
} from "@/redux-store/slices/backdrop/food-items-data";
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
  const handleRemoveItem = () => {
    dispatch(setCurrentProductItem(data.product));
    dispatch(
      setShowCartOverlay({ showOverlay: true, activeItem: "removeItem" })
    );
  };
  return (
    <div className="flex flex-col gap-2 border-b border-b-grey-100 pb-4">
      <div className="flex gap-3 items-center">
        <Image
          src={data?.product?.image}
          height={100}
          width={128}
          alt="Product Image"
          className="w-[120px] h-[99px] object-cover rounded-xl"
        />

        <div className="flex flex-col gap-1 max-w-[calc(100%-140px)]">
          <p className="text-sm font-semibold tracking-[-0.35px] text-[#1E1E1E] truncate capitalize">
            {data?.product?.name}
          </p>
          {/* {data?.options?.length ? (
              <p className="font-normal text-xs/[17.4px] text-grey-500 pr-1.5">
                <span className="font-bold">Options: </span>
                {extractNamesAsText(data?.options)}
              </p>
            ) : null} */}
        </div>
      </div>

      <div className="flex justify-between gap-2 items-center">
        <div className="flex gap-3">
          <button
            className="py-1.5 px-3 flex items-center gap-1 rounded-full border border-grey-300 text-sm font-medium"
            type="button"
            onClick={handleShowOverlay}
          >
            <PencilEditIcon />
            Edit
          </button>
          <button
            className="py-1.5 px-3 flex items-center gap-1 rounded-full border border-grey-300 text-sm font-medium max-w-8 max-h-8 justify-center"
            type="button"
            onClick={handleRemoveItem}
          >
            <DeleteIcon />
          </button>
        </div>

        <div className="bg-grey-50 border border-grey-100 h-[36px] items-center flex justify-between p-2 w-full max-w-[98px] rounded-full text-sm">
          <button type="button" onClick={decrementQuantity}>
            <FaMinus className="text-grey-500" />
          </button>
          <span>{data?.quantity}</span>
          <button type="button" onClick={incrementQuantity}>
            <FaPlus className="text-grey-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

const extractNamesAsText = (options: Option[]): string => {
  return options
    .flatMap((option) => {
      const optionName = option.name;
      const itemNames = option.items.map((item) => item.name);
      return [optionName, ...itemNames];
    })
    .join(", ");
};
