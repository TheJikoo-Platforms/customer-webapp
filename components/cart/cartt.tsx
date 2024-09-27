import Image from "next/image";
import React from "react";
import { GetStarted } from "../orders/orderss";

const Cart = () => {
  return (
    <div className="">
      <h3 className="text-lg font-bold flex gap-2 items-center">
        My Cart
        <span className="rounded-full font-normal w-[26px] h-[26px] bg-jikoo-brand-green text-white text-xs flex justify-center items-center font-inter">
          0
        </span>
      </h3>

      <div className="flex flex-col items-center mt-[22px] mb-2.5">
        <Image
          alt="Empty State"
          src="/empty-state.png"
          width={80}
          height={80}
        />
        <p className="text-grey-500 text-sm mb-8">
          Login or sign up to see your cart
        </p>
        <GetStarted />
      </div>
    </div>
  );
};

export default Cart;
