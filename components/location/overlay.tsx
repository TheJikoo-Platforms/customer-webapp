"use client";
import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import Backdrop from "../ui/backdrop";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  handleLocationOverlay,
  setCurrentLocationPage,
  setShowLocationOverlay,
} from "@/redux-store/slices/backdrop/location";
import { RootState } from "@/redux-store/store";
import { slideUp } from "@/variants";
import { LocationPrompt } from "./propmt";
import { AddressForm } from "./address-form";

export interface LocationProps {
  handlePageChange: (page: string) => void;
  handleCloseBackdrop: () => void;
}

export const LocationOverlay = () => {
  const currentLocationPage = useAppSelector(
    (state: RootState) => state.location.currentLocationPage
  );
  const dispatch = useAppDispatch();
  const handleOverlay = () => {
    dispatch(handleLocationOverlay());
  };
  const handlePageChange = (page: string) => {
    dispatch(setCurrentLocationPage(page));
  };

  const [isOnScreen, setIsOnScreen] = useState(true);
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const handleCloseBackdrop = () => {
    setIsOnScreen(false);
    dispatch(setShowLocationOverlay(false));
  };
  useOnClickOutside(clickOutsideRef, handleCloseBackdrop);
  return (
    <AnimatePresence>
      {isOnScreen && (
        <Backdrop variants={slideUp}>
          <div className="h-full flex w-full justify-center items-center ">
            {currentLocationPage === "prompt" && (
              <LocationPrompt
                handleCloseBackdrop={handleCloseBackdrop}
                handlePageChange={handlePageChange}
                ref={clickOutsideRef}
              />
            )}
            {currentLocationPage === "address" && (
              <AddressForm
                ref={clickOutsideRef}
                handleCloseBackdrop={handleCloseBackdrop}
                handlePageChange={handlePageChange}
              />
            )}
          </div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
