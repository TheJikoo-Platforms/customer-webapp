"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { handleLocationOverlay } from "@/redux-store/slices/backdrop/location";
import { CancellableNotification } from "../fixed-notifications/location";
import { LocationIconMain } from "../ui/icons";
import { RootState } from "@/redux-store/store";

export const EnterLocation = ({ className }: { className: string }) => {
  const [isShowingPrompt, setIsShowingPrompt] = useState(true);
  const handlePrompt = () => {
    setIsShowingPrompt(false);
  };
  const dispatch = useAppDispatch();
  const handleOverlay = () => {
    dispatch(handleLocationOverlay());
  };
  const { currentAddress } = useAppSelector(
    (state: RootState) => state.savedAddress
  );
  return (
    <div
      className={cn(
        "bg-transparent md:bg-white md:pl-3 pr-4 py-2 max-h-[36px] relative",
        className
      )}
    >
      <div
        className="max-w-[160px] sm:max-w-[180px] md:max-w-[242px] flex items-center gap-2 cursor-pointer"
        onClick={handleOverlay}
      >
        <LocationIconMain className="block md:hidden" />
        <IoLocationOutline className="text-jikoo-brand-green hidden md:block" />

        <p className="text-sm text-white md:text-[#333] font-medium tracking-[-0.4px] truncate">
          {currentAddress ? currentAddress.address : "Where are you"}
        </p>
        <IoIosArrowDown className="text-white md:text-grey-500 mt-px" />
      </div>
      <div className="hidden md:block">
        {isShowingPrompt && (
          <CancellableNotification
            text="Enter your delivery address here"
            handlePrompt={handlePrompt}
          />
        )}
      </div>
    </div>
  );
};
