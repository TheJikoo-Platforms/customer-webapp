import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { Button } from "../ui/button";
import { LoveIcon } from "../ui/icons";

const FoodItem = () => {
  return (
    <div className="bg-white rounded-xl py-4 px-6 flex gap-4 flex-col">
      <button
        type="button"
        className="text-grey-600 font-bold text-sm self-end flex gap-1 items-center"
      >
        <IoClose className="text-grey-900 text-lg" /> close
      </button>

      <Image
        src="/food-item.png"
        width={432}
        height={214}
        alt="Food Item"
        className="rounded w-[432px] h-[214px] object-cover"
      />

      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <p className="text-grey-900 font-bold">Pizza Livaroca</p>
          <span>
            <LoveIcon />
          </span>
        </div>

        <p className="text-sm text-grey-600">
          Mixed with vegetables with avocado and cilantro, served with lemon
          herb
        </p>

        <div className="flex gap-3 items-center">
          <p className="font-bold text-[#1E1E1E] text-xl tracking-[-0.9px]">
            ₦ 3,500
          </p>
          <p className="text-sm text-[#1E1E1E] flex items-center gap-1">
            4.5 <FaStar className="text-[#F5B546] text-lg" />
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[140px] bg-grey-50 border border-grey-100 rounded-full flex items-center px-5 py-4 h-[48px] justify-between">
          <button type="button" className="text-grey-500">
            <FaMinus />
          </button>

          <span className="text-[#000]">1</span>

          <button type="button" className="text-grey-500">
            <FaPlus />
          </button>
        </div>

        <Button type="button" className="text-base flex-1">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default FoodItem;
