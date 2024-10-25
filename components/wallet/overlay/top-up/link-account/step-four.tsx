"use client";
import { SuccessfulIcon } from "@/components/ui/icons";
import Spinner from "@/components/ui/spinner";
import { useAppDispatch } from "@/redux-store/hooks";
import { setShowWalletOverlay } from "@/redux-store/slices/wallet-slice";
import { AnimatePresence, motion } from "framer-motion";
import { Dot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export const StepFour = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const handleCloseBackdrop = () => {
    dispatch(
      setShowWalletOverlay({ showWalletOverlay: false, activeScreen: "" })
    );
  };
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }, []);
  return (
    <div className="bg-white p-6 mx-5 w-full rounded-2xl pb-10 text-center max-w-[550px] sm500:max-w-[450px] min-h-[234px]">
      <div className="flex items-center justify-between sm500:border-b sm500:border-b-grey-100 sm500:mb-6 sm500:pb-6">
        <h2 className="tracking-[-0.4px] text-xl font-bold">Successful</h2>

        <IoClose
          className="text-2xl cursor-pointer"
          onClick={handleCloseBackdrop}
        />
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          className="flex flex-col justify-center items-center w-full mt-8"
        >
          <SuccessfulIcon />
        </motion.div>
        <p className="text-sm font-medium mt-2 flex gap-1 items-center justify-center">
          <span className="text-grey-500">Access Bank PLC</span>
          <Dot className="text-grey-500" />
          1380790800
        </p>
        <p className="text-sm font-medium mt-2">
          Your bank details have been saved
        </p>
      </AnimatePresence>
    </div>
  );
};
