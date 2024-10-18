"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { slideUp } from "@/variants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Cart from "./cart";
import Checkout from "./checkout";

const CartOverLayMobile = () => {
  const showCartOverlayMobile = useAppSelector(
    (state: RootState) => state.cart.showCartOverlayMobile
  );
  const flowState = useAppSelector((state: RootState) => state.cart.flowState);

  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {showCartOverlayMobile && (
          <motion.div
            key="cart-overlay-mobile"
            variants={slideUp}
            initial={{
              opacity: 0,
              y: "50%",
            }}
            animate={{ opacity: 100, y: "0", transition: { type: "tween" } }}
            exit={{ opacity: 0, y: "100%" }}
            className="pb-20 gap-6 h-screen overflow-y-auto scrollbar-none fixed inset-0 z-[100] bg-white"
          >
            <div className="rounded-2xl bg-white">
              {flowState === "cart" && <Cart />}
              {flowState === "checkout" && <Checkout />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartOverLayMobile;

export const CartFlow = () => {
  const flowState = useAppSelector((state: RootState) => state.cart.flowState);
  return (
    <div>
      {flowState === "cart" && <Cart />}
      {flowState === "checkout" && <Checkout />}
    </div>
  );
};
