"use client";
// import { useCartStore } from "@/store/cartStore";
import { Checkbox } from '@/components/ui/checkbox'
import { CartItem } from "@/components/cart/cart-item";
import React from "react";
import { MobileCartItem } from "@/components/cart/mobile-cart-item";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CouponModal } from '@/components/cart/coupon-modal';

export const CartList = ({next}:{next:()=>void}) => {
  //   const { cart } = useCartStore((state) => state);
  const cart = [1, 2];
  return (
    <>
      {cart.length > 0 && (
        <>
          <table className="w-full max-md:hidden">
            <style jsx>
              {`
                th,
                td {
                  padding: 30px 0;
                }
              `}
            </style>
            <thead>
              <tr className="text-left">
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((el) => (
                <CartItem item={el} />
              ))}
            </tbody>
          </table>
          <ul className="md:hidden">
            <li>
              <MobileCartItem />
            </li>
            <li>
              <MobileCartItem />
            </li>
          </ul>
          <div className="text-[11px] sm:text-xs md:text-base lg:text-lg px-4 max-w-[890px] mx-auto">
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 py-5 sm:py-7 md:py-8 lg:py-10">
              <div className="flex justify-between">
                <p className="font-bold flex items-center gap-1 md:gap-2">
                  <Checkbox />
                  Packaging
                </p>
                <h3 className=" text-black/60 dark:text-[#8A8A8B]">₦2,500</h3>
              </div>
              <div className="flex justify-between">
                <p className="font-bold ">Subtotal</p>
                <h3 className=" text-black/60 dark:text-[#8A8A8B]">₦2,500</h3>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold dark:text-[#8A8A8B]">Discount Code:</p>
                <CouponModal />
              </div>
            </div>
            <div className="mt-[30px] sm:mt-8 md:mt-6 lg:mt-8 flex justify-center ">
              <Button className="w-full" onClick={next}>
                Continue
              </Button>
            </div>
          </div>
        </>
      )}
      {cart.length === 0 && <p className="text-center ">Your cart is empty</p>}
    </>
  );
};
