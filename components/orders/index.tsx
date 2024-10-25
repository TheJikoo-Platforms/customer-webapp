"use client";
import { useState } from "react";
import OrderDetails from "./order-details";
import OrderList from "./order-list";
import InnerHeader from "../inner-page-header-mobile";
import { useMediaQuery } from "react-responsive";
import { scrollToTop } from "@/lib/utils";

export interface IDummyOrders {
  state: string;
  store: string;
  storeLogo: string;
  price: string;
  time: string;
}

const dummyOrders: IDummyOrders[] = [
  {
    state: "Ongoing",
    store: "Chicken Republic",
    storeLogo: "/vendors/kilimajiro.png",
    price: "₦ 20,500",
    time: "9:23AM",
  },

  {
    state: "Completed",
    store: "Domino's Pizza",
    storeLogo: "/vendors/dominos.png",
    price: "₦ 3,500",
    time: "13th Jun., 2024",
  },
  {
    state: "Completed",
    store: "Domino's Pizza",
    storeLogo: "/vendors/dominos.png",
    price: "₦ 3,000",
    time: "13th Jun., 2024",
  },
  {
    state: "Completed",
    store: "Domino's Pizza",
    storeLogo: "/vendors/dominos.png",
    price: "₦ 1,500",
    time: "13th Jun., 2024",
  },
  {
    state: "Completed",
    store: "Domino's Pizza",
    storeLogo: "/vendors/dominos.png",
    price: "₦ 2,500",
    time: "13th Jun., 2024",
  },
];

export default function OrderContainer() {
  const [activeOrder, setActiveOrder] = useState(0);
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  const handleActiveOrders = (index: number) => {
    setIsShowingDetails(true);
    scrollToTop();
    setActiveOrder(index);
  };

  const handleGoBack = () => {
    scrollToTop();
    setIsShowingDetails(false);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  console.log(isMobile, isShowingDetails);
  return (
    <>
      <div className={`${isMobile && isShowingDetails ? "block" : "hidden"}`}>
        <InnerHeader
          className="md:hidden border-b-[#EBEBEB]"
          text="Orders"
          onClick={handleGoBack}
        />
      </div>
      <div className="md:grid md:grid-cols-[calc(56%-24px),44%] md:gap-4 lg:gap-6 md:mt-4 lg:mt-6 md:mb-0 items-start max-w-[954px] mx-auto md:px-4">
        <div
          className={`${
            isMobile && isShowingDetails ? "hidden md:block" : "block"
          }`}
        >
          <OrderList
            data={dummyOrders}
            setActiveOrder={handleActiveOrders}
            activeOrder={activeOrder}
          />
        </div>
        <div
          className={`${
            isMobile && isShowingDetails ? "block" : "hidden md:block"
          }`}
        >
          <OrderDetails activeOrder={activeOrder} data={dummyOrders} />
        </div>
      </div>
    </>
  );
}
