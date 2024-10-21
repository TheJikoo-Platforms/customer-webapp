"use client";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowSettingsOverlay } from "@/redux-store/slices/settings-slice";
import { RootState } from "@/redux-store/store";
import { useRef } from "react";

export const RuleOfUse = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleCloseBackdrop = () => {
    dispatch(
      setShowSettingsOverlay({ showSettingsOverlay: false, activeScreen: "" })
    );
  };
  useOnClickOutside(ref, handleCloseBackdrop);
  return (
    <div
      ref={ref}
      className="bg-white p-6 flex flex-col self-end sm500:self-center w-full rounded-t-3xl sm500:rounded-2xl pb-10 text-center max-w-[550px] sm500:max-w-[450px]"
    >
      <h2 className="text-grey-900 font-bold">Rule of use</h2>

      <p className="text-grey-900 text-xs mt-1">
        ₦1,000 off on orders over ₦5,000
      </p>
    </div>
  );
};
