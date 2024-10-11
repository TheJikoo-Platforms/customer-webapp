"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { slideUp } from "@/variants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Cart from "./cart";

const CartOverLayMobile = () => {
  const showCartOverlayMobile = useAppSelector(
    (state: RootState) => state.cart.showCartOverlayMobile
  );
  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {showCartOverlayMobile && (
          <motion.div
            key="search-overlay-mobile"
            variants={slideUp}
            initial={{
              opacity: 0,
              y: "50%",
            }}
            animate={{ opacity: 100, y: "0", transition: { type: "tween" } }}
            exit={{ opacity: 0, y: "100%" }}
            className="pb-20 gap-6 h-screen overflow-y-auto scrollbar-none fixed inset-0 z-50 bg-white"
          >
            <div className="rounded-2xl bg-white">
              <Cart />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartOverLayMobile;
