"use client";
import React, { useState } from "react";
import { NairaIcon, UsdtIcon } from "../ui/icons";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const WalletCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="bg-[#242E25] rounded-b-3xl  md:rounded-md pt-2 md:p-6 p-6 w-full md:min-w-[260px md:max-w-[45%] lg:max-w-[364px] font-dm-sans flex items-center justify-between md:h-[177px] flex-1">
      <div className="">
        <div className={`flex ${isVisible ? "items-center" : "items-start"}`}>
          <p
            className={`font-extrabold text-2xl md:text-[32px] text-white flex ${
              isVisible ? "items-center" : "items-start"
            }`}
          >
            <NairaIcon className="w-[18px] md:w-[26px] md:h-[24px] h-[20px]" />
            {
              <span className="transition-all">
                {isVisible ? "520,000.00" : "*******"}
              </span>
            }
          </p>
          <BsFillEyeSlashFill
            className="text-[#009933] text-xl ml-0.5 transform scale-x-[-1]"
            role="button"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        </div>
        <div className="flex items-center md:mt-2">
          <UsdtIcon />
          <p className="text-[10px] md:text-sm text-[#6DFF9E] ml-2">
            $1.00 = ₦2,000.00
          </p>
        </div>
      </div>
      <button
        type="button"
        className="bg-jikoo-brand-green rounded-full padding-[3px] w-[30px] h-[30px] flex items-center justify-center"
      >
        <FaPlus className="text-white text-sm md:text-xl" />
      </button>
    </div>
  );
};

export default WalletCard;
