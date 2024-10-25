"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { slideUp } from "@/variants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Cart from "./cart";
import Checkout from "./checkout";
import Backdrop from "../ui/backdrop";

const CartOverLayMobile = () => {
  const showCartOverlayMobile = useAppSelector(
    (state: RootState) => state.cart.showCartOverlayMobile
  );
  const flowState = useAppSelector((state: RootState) => state.cart.flowState);

  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {showCartOverlayMobile && (
          <Backdrop variants={slideUp}>
            <div className="h-full w-full bg-white scrollbar-none overflow-y-auto pb-20">
              {flowState === "cart" && <Cart />}
              {flowState === "checkout" && <Checkout />}
            </div>
          </Backdrop>
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
