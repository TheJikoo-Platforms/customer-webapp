import React from "react";
import { NairaIcon, UsdtIcon } from "../ui/icons";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const WalletCard = () => {
  return (
    <div className="bg-[#242E25] rounded-md p-6 w-full max-w-[364px] font-dm-sans flex items-center justify-between h-[177px]">
      <div className="">
        <div className="flex items-center">
          <p className="font-extrabold text-[32px] text-white flex items-baseline">
            <NairaIcon />
            <span className="">*******</span>
          </p>
          <BsFillEyeSlashFill className="text-[#009933] text-xl ml-0.5 transform scale-x-[-1]" />
        </div>
        <div className="flex items-center mt-2">
          <UsdtIcon />
          <p className="text-sm text-[#6DFF9E] ml-2">$1.00 = ₦2,000.00</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-jikoo-brand-green rounded-full padding-[3px] w-[30px] h-[30px] flex items-center justify-center"
      >
        <FaPlus className="text-white text-xl" />
      </button>
    </div>
  );
};

export default WalletCard;
