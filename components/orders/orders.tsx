"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { OrderItemHome } from "./order-item";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { GetStarted } from "../home/get-started";

interface OrdersProps {
  a?: string;
}

export const OrdersHome: React.FC<OrdersProps> = ({ a }) => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <div className="">
      <h3 className="text-lg font-bold flex gap-2 items-center">
        Ongoing orders
        <span className="rounded-full font-normal px-3 py-0.5 h-fit bg-jikoo-brand-green text-white text-xs flex justify-center items-center">
          0
        </span>
      </h3>

      {!isAuthenticated ? (
        <div className="flex flex-col items-center mt-[22px] mb-2.5">
          <Image
            alt="Empty State"
            src="/empty-state-order.png"
            width={80}
            height={80}
          />
          <p className="text-grey-500 text-sm mb-8">
            Login or sign up to see your on-going orders
          </p>
          <GetStarted />
        </div>
      ) : (
        <OrderItemHome />
      )}
    </div>
  );
};
