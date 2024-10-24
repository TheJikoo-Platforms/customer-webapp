"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import {
  setFlowState,
  setShowCartOverlay,
  setShowCartOverlayMobile,
} from "@/redux-store/slices/backdrop/cart";
import InnerHeader from "../inner-page-header-mobile";
import { CartItem } from "./cart-item";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(
    (state: RootState) => state.foodItemData.cartItems
  );

  const handleCartOverlay = () => {
    dispatch(setShowCartOverlay({ showOverlay: true, activeItem: "message" }));
  };

  const handleOverlayMobile = () => {
    dispatch(setShowCartOverlayMobile(false));
  };

  const handleFlowState = () => {
    dispatch(setFlowState("checkout"));
  };

  return (
    <>
      <h3 className="text-xl font-bold tracking-[-0.4px] border-b border-b-grey-200 pb-4 hidden lg:block">
        My Cart
      </h3>

      {/* Mobile top bar */}
      <InnerHeader
        text="Cart"
        onClick={handleOverlayMobile}
        className="lg:hidden"
      />

      <>
        {/* Empty State */}
        {(!cartItems || cartItems.length === 0) && <EmptyCart />}

        <div className="px-6 lg:px-0">
          {cartItems?.length > 0 && (
            <div className="flex flex-col gap-4 mt-8">
              {cartItems.map((item, key) => (
                <CartItem data={item} key={key} />
              ))}
            </div>
          )}

          {/* Form Trigger */}
          <div className="">
            {cartItems?.length > 0 && (
              <div className="mt-6">
                <p className="text-grey-900 font-bold">Add a message</p>

                <button
                  type="button"
                  className="text-grey-400 text-xs sm400:text-sm lg:text-xs xl:text-sm text-left font-normal mt-3 flex w-full rounded-sm border border-[#d0d4dd] p-4"
                  onClick={handleCartOverlay}
                >
                  Type an important message for the vendor
                </button>

                <div className="mt-5 flex justify-between items-center">
                  <p className="text-grey-500">Subtotal:</p>
                  <p className="text-grey-800 font-bold">₦4,000</p>
                </div>
              </div>
            )}

            <Button
              type="button"
              disabled={!cartItems || cartItems.length === 0}
              className={`w-full text-base mt-6 font-dm-sans disabled:bg-grey-300`}
              onClick={handleFlowState}
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    </>
  );
}

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center mt-6 px-6 lg:px-0">
      <Image alt="Empty State" src="/empty-state.png" width={80} height={80} />

      <p className="text-grey-500 text-sm max-w-[300px] text-center">
        Nothing to see here. Add a food here and it will show here
      </p>
    </div>
  );
};
