"use client";
import React from "react";
import { Minus, Plus } from "lucide-react";
// import { CartItem, useCartStore } from "@/store/cartStore";
import {CartBtn} from "./cart-btn";
import { cn } from "@/lib/utils";

export const CartModulate = ({ item = null, className}: { item?: any, className?:string }) => {
//   const { addToCart, deleteFromCart } = useCartStore((state) => state);
  return (
    <div className={cn("flex items-center  self-start gap-4 md:gap-6  justify-self-start ", className)}>
      <CartBtn
        onClick={() => {
        //   deleteFromCart(item?.id);
        }}
      >
        <Minus className="z-10" size={12} />
      </CartBtn>
      {/* <input
        type="text"
        className=" w-7 px-1"
        onBlur={(e) => {}}
        value={item?.quantity}
        width={5}
      /> */}
      <div className="font-bold text-[10px] sm:text-sm md:text-xl lg:text-2xl">3</div>
      <CartBtn
        onClick={() => {
        //   addToCart(item);
        }}
      >
        <Plus className="z-10" size={12} />
      </CartBtn>
    </div>
  );
};

// export default CartModulate;
