"use client";
import React, { useState } from "react";
import { NairaIcon, UsdtIcon } from "../ui/icons";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch } from "@/redux-store/hooks";
import { setShowTopUpModal } from "@/redux-store/slices/top-up-slice";

const WalletCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const balance = "520,000.00";
  const maskLength = balance.replace(/,/g, "").length + 2;
  const maskedBalance = "*".repeat(maskLength);
  const dispatch = useAppDispatch();

  const handleOpenTopUpModal = () => {
    dispatch(setShowTopUpModal(true));
  };

  return (
    <div className="bg-[#242E25] rounded-3xl md:rounded-md p-6 w-full font-dm-sans flex items-center justify-between md:h-[115px] flex-1">
      <div className="">
        <div className={`flex ${isVisible ? "items-center" : "items-start"}`}>
          <p
            className={`font-extrabold text-2xl text-white flex ${
              isVisible ? "items-center" : "items-center"
            }`}
          >
            <NairaIcon className="w-auto md:w-[26px] md:h-[24px] h-[19.7px]" />
            <AnimatePresence mode="wait">
              {isVisible ? (
                <motion.span
                  key="balance"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {balance}
                </motion.span>
              ) : (
                <motion.span
                  key="hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {maskedBalance}
                </motion.span>
              )}
            </AnimatePresence>
          </p>
          <BsFillEyeSlashFill
            className="text-[#009933] text-xl ml-0.5 transform scale-x-[-1]"
            role="button"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        </div>
        <div className="flex items-center mt-1 md:mt-2">
          <UsdtIcon />
          <p className="text-[10px] md:text-sm text-[#6DFF9E] ml-2">
            $1.00 = ₦2,000.00
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleOpenTopUpModal}
        className="bg-jikoo-brand-green rounded-full padding-[3px] w-[30px] h-[30px] flex items-center justify-center"
      >
        <FaPlus className="text-white text-sm md:text-xl" />
      </button>
    </div>
  );
};

export default WalletCard;
