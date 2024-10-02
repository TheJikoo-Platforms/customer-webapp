"use client";
import { Button } from "@/components/ui/button";
import { createFilledArray } from "@/lib/utils";
import { NewNotificationItem, NotificationItem } from "./notification-item";
import { ArrowLeftIcon, FilterIcon } from "../ui/icons";
import { IoClose } from "react-icons/io5";
import { useTransitionRouter } from "next-view-transitions";
import Backdrop from "../ui/backdrop";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { AnimatePresence, motion } from "framer-motion";
import { backdropVariants } from "@/variants";

const NOTIFICATIONS = [
  {
    imageUrl: "",
    title: "Wallet top up successful",
    message: "You have successfully added funds to your wallet account.",
    time: "1 min ago",
  },
  {
    imageUrl: "/avatar.png",
    title: "You just placed an Order",
    message: "Your order has been received. Delivery on its way. Stay Tune",
    time: "2 mins age",
  },
  {
    imageUrl: "",
    title: "Wallet top up successful",
    message:
      "You have successfully added funds to your wallet account. Click on cart to complete your purchases or search for a food you would like to purchase and add it to your cart. But make sure you just buy something even if it holandia youghurt and mallam sokoto suya from jikoo street port harcourt",
    time: "1 min ago",
  },
  {
    imageUrl: "/avatar.png",
    title: "You just placed an Order",
    message: "Your order has been received. Delivery on its way. Stay Tune",
    time: "2 mins age",
  },
  {
    imageUrl: "",
    title: "Wallet top up successful",
    message:
      "You have successfully added funds to your wallet account. Click on cart to complete your purchases.",
    time: "1 min ago",
  },
  {
    imageUrl: "/avatar.png",
    title: "You just placed an Order",
    message: "Your order has been received. Delivery on its way. Stay Tune",
    time: "2 mins age",
  },
  {
    imageUrl: "",
    title: "Wallet top up successful",
    message:
      "You have successfully added funds to your wallet account. Click on cart to complete your purchases or search for a food you would like to purchase and add it to your cart. But make sure you just buy something even if it holandia youghurt and mallam sokoto suya from jikoo street port harcourt",
    time: "1 min ago",
  },
  {
    imageUrl: "/avatar.png",
    title: "You just placed an Order",
    message: "Your order has been received. Delivery on its way. Stay Tune",
    time: "2 mins age",
  },
  {
    imageUrl: "",
    title: "Wallet top up successful",
    message: "You have successfully added funds to your wallet account. ",
    time: "1 min ago",
  },
  {
    imageUrl: "/avatar.png",
    title: "You just placed an Order",
    message: "Your order has been received. Delivery on its way. Stay Tune",
    time: "2 mins age",
  },
];

export const NotificationsDesktop = () => {
  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-[800px]">
      <div className="flex items-center justify-between mt-3 mb-9">
        <div className="flex items-center gap-6">
          <p className="text-xl font-bold tracking-[ -0.4px]">Notifications</p>

          <button type="button">
            <FilterIcon />
          </button>
        </div>

        <button type="button">
          <IoClose className="text-2xl text-grey-900" />
        </button>
      </div>
      <ul className="">
        {createFilledArray("_", 10).map((item, key) => (
          <li key={key}>
            <NotificationItem />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const NotificationsMobile = () => {
  const router = useTransitionRouter();
  const [currentFilter, setCurrentFilter] = useState("recent");
  const [isShowingFilters, setIsShowingFilters] = useState(false);
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const handleOnClickOutside = () => {
    setIsShowingFilters(false);
  };
  useOnClickOutside(clickOutsideRef, handleOnClickOutside);

  return (
    <>
      <div className="bg-white rounded-xl w-full max-w-[800px]">
        <div className="flex items-center justify-between  p-6 gap-6 bg-white sticky top-0 w-full z-30 pb-3">
          <button onClick={() => router.back()} type="button">
            <ArrowLeftIcon />
          </button>
          <p className="text-2xl font-medium tracking-[-0.48px]">
            Notifications
          </p>

          <button type="button" onClick={() => setIsShowingFilters(true)}>
            <FilterIcon />
          </button>
        </div>

        <ul className="p-6">
          {NOTIFICATIONS.map((item, key) => (
            <li key={key}>
              <NewNotificationItem
                imageUrl={item.imageUrl}
                time={item.time}
                title={item.title}
                message={item.message}
              />
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isShowingFilters && (
          <Backdrop>
            <div className="h-full flex w-full">
              <div
                className="bg-white p-6 flex flex-col gap-6 self-end w-full rounded-t-3xl pb-10"
                ref={clickOutsideRef}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xl text-black tracking-[-0.4px] font-medium">
                    Sort by
                  </p>
                  <button
                    type="button"
                    className="text-sm tracking-[-0.35px] text-grey-600"
                    onClick={() => setIsShowingFilters(false)}
                  >
                    Clear filter
                  </button>
                </div>

                {/* Filter Button */}
                <div className="flex items-center">
                  <button
                    type="button"
                    className={`text-sm px-4 py-2 rounded-full transition-all duration-400 ${
                      currentFilter === "recent"
                        ? "text-white bg-jikoo-brand-green"
                        : "text-[#344054] bg-transparent"
                    }`}
                    onClick={() => setCurrentFilter("recent")}
                  >
                    Recent
                  </button>
                  <button
                    className={`text-sm px-4 py-2 rounded-full transition-all duration-400 ${
                      currentFilter === "unread"
                        ? "text-white bg-jikoo-brand-green"
                        : "text-[#344054] bg-transparent"
                    }`}
                    onClick={() => setCurrentFilter("unread")}
                    type="button"
                  >
                    Unread
                  </button>
                </div>
              </div>
            </div>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
};
