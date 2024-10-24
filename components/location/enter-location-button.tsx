"use client";
import React, { useRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch } from "@/redux-store/hooks";
import { handleLocationOverlay } from "@/redux-store/slices/backdrop/location";
import { CancellableNotification } from "../fixed-notifications/location";

export const EnterLocation = ({ className }: { className: string }) => {
  const [isShowingPrompt, setIsShowingPrompt] = useState(true);
  const handlePrompt = () => {
    setIsShowingPrompt(false);
  };
  const dispatch = useAppDispatch();
  const handleOverlay = () => {
    dispatch(handleLocationOverlay());
  };
  return (
    <div
      className={cn("bg-white pl-3 pr-4 py-2 max-h-[36px] relative", className)}
    >
      <div
        className="max-w-[242px] flex items-center gap-2 cursor-pointer"
        onClick={handleOverlay}
      >
        <IoLocationOutline className="text-jikoo-brand-green" />
        <p className="text-sm text-black">Enter your location</p>
        <IoIosArrowDown className="text-grey-500" />
      </div>
      {isShowingPrompt && (
        <CancellableNotification
          text="Enter your delivery address here"
          handlePrompt={handlePrompt}
        />
      )}
    </div>
  );
};
