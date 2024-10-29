"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { slideUp } from "@/variants";
import { setShowSearchOverlay } from "@/redux-store/slices/backdrop/search";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import Backdrop from "@/components/ui/backdrop";
import { SearchUIDesktopOverlay } from "./search-ui-overlay-desktop";

export const SearchUIOverlay = () => {
  const dispatch = useAppDispatch();
  const showSearchOverlay = useAppSelector(
    (state: RootState) => state.search.showsearchOverlay
  );
  const mainRef = useRef<HTMLDivElement>(null);
  const handleCloseSearch = () => {
    dispatch(setShowSearchOverlay(false));
  };
  useOnClickOutside(mainRef, handleCloseSearch);
  return (
    <div className="hidden md:block">
      <AnimatePresence>
        {showSearchOverlay && (
          <Backdrop variants={slideUp}>
            <div className="w-full min-h-screen flex items-center justify-center">
              <div
                ref={mainRef}
                className="sm600:rounded-xl bg-white mb-4 flex flex-col gap-6 sm600:w-[599px] lg:w-[800px] h-[calc(100vh-68px)] sm600:max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-none"
              >
                <SearchUIDesktopOverlay />
              </div>
            </div>
          </Backdrop>
        )}
      </AnimatePresence>
    </div>
  );
};
