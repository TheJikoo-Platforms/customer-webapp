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
import AddressForm from "./address-form";
import useLocationSuggestions from "./hooks/use-location-suggestions";
import { LocationPrompt } from "./propmt";

export interface LocationProps {
  handlePageChange: (page: string) => void;
  handleCloseBackdrop: () => void;
}

export const LocationOverlay = () => {
  const { suggestions, loading, fetchSuggestions } = useLocationSuggestions();
  const currentLocationPage = useAppSelector(
    (state: RootState) => state.location.currentLocationPage
  );
  const dispatch = useAppDispatch();

  // Dispatching overlay state actions
  const handleOverlay = () => {
    dispatch(handleLocationOverlay());
  };

  const handlePageChange = (page: string) => {
    dispatch(setCurrentLocationPage(page));
  };

  const [isOnScreen, setIsOnScreen] = useState(true);
  const clickOutsideRef = useRef<HTMLDivElement>(null);

  // Close overlay and dispatch Redux action
  const handleCloseBackdrop = () => {
    setIsOnScreen(false);
    dispatch(setShowLocationOverlay(false));
  };

  useOnClickOutside(clickOutsideRef, handleCloseBackdrop);

  return (
    <AnimatePresence>
      {isOnScreen && (
        <Backdrop variants={slideUp}>
          <div className="h-full flex w-full justify-center items-center overscroll-contain">
            {currentLocationPage === "prompt" && (
              <LocationPrompt
                handleCloseBackdrop={handleCloseBackdrop}
                handlePageChange={handlePageChange}
                fetchSuggestions={fetchSuggestions}
                ref={clickOutsideRef}
              />
            )}
            {currentLocationPage === "address" && (
              <AddressForm
                ref={clickOutsideRef}
                handleCloseBackdrop={handleCloseBackdrop}
                handlePageChange={handlePageChange}
                suggestions={suggestions} // Passing suggestions to the address form
                loading={loading} // Passing loading to the address form
                fetchSuggestions={fetchSuggestions} // Passing fetchSuggestions to the address form
              />
            )}
          </div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
