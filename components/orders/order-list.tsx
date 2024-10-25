import { useState } from "react";
import { IDummyOrders } from ".";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

export default function OrderList({
  data,
  activeOrder,
  setActiveOrder,
}: {
  data: IDummyOrders[];
  activeOrder: number;
  setActiveOrder: (index: number) => void;
}) {
  return (
    <div className="pb-[125px]  lg:pt-2 bg-white md:rounded-xl md:px-0 lg:px-6 md:py-4">
      <h2 className="text-[#121212] text-2xl md:text-xl border-b border-b-[#EBEBEB] md:border-b-transparent py-3 pt-5 md:pt-0 px-5 lg:px-0 font-medium md:font-bold lg:block tracking-[-0.48px]">
        My Orders
      </h2>

      <div className="px-5 lg:px-0 mt-4 md:mt-2">
        <div className="space-y-4 ">
          {data.map((items, index) => (
            <div
              className={`cursor-pointer rounded-xl transition-all ${
                activeOrder === index ? "bg-[#F0F2F5]" : "bg-transparent"
              }`}
              key={index}
              onClick={() => setActiveOrder(index)}
            >
              <OrderItem data={items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const OrderItem = ({ data }: { data: IDummyOrders }) => {
  return (
    <div className="flex p-4 border border-grey-200 rounded-md ">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between">
          <p
            className={`px-3 py-0.5 ${
              data.state === "Ongoing"
                ? " bg-secondary-400"
                : "bg-state-success-600"
            } text-xs text-white font-medium rounded-full w-fit`}
          >
            {data.state}
          </p>
          <RiArrowRightSLine />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <Image
              src={data.storeLogo}
              height={55}
              width={55}
              alt=""
              className="w-[27.5px] h-[27.5px]"
            />

            <p className="text-[#1E1E1E] text-sm">{data.store}</p>
          </div>

          <p className="text-jikoo-brand-green font-bold text-sm">
            {data.price}
          </p>
        </div>

        <p className="truncate text-gray-500 text-sm">
          Chicken Girl (1) • Beef (2) • Plantain (4) Fish (2) • Pepsi (2)
        </p>

        <div className="flex items-center justify-between text-grey-900 text-sm font-medium">
          <p className="">
            {data.state === "Ongoing"
              ? "Expected time of arrival"
              : "Delivered"}
          </p>
          <p className="">{data.time}</p>
        </div>
      </div>
    </div>
  );
};
