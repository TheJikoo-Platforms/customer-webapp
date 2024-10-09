"use client";
import { NewNotificationItem, NotificationItem } from "./notification-item";
import { ArrowLeftIcon, FilterIcon } from "../ui/icons";
import Backdrop from "../ui/backdrop";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { AnimatePresence, motion } from "framer-motion";
import { slideFromRight, slideUp } from "@/variants";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowNotificationsOverlay } from "@/redux-store/slices/backdrop/notifications";
import { RootState } from "@/redux-store/store";
import { useMediaQuery } from "react-responsive";

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
const FILTERARRAY = ["Recent", "Unread"];

export const NotificationsOverlay = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isMobile ? (
        <NotificationsOverlayMobile />
      ) : (
        <NotificationOverlayDesktop />
      )}
    </>
  );
};

const NotificationOverlayDesktop = () => {
  const [currentFilter, setCurrentFilter] = useState("recent");
  const [isShowingFilters, setIsShowingFilters] = useState(false);
  const dispatch = useAppDispatch();
  const showNotificationOverlay = useAppSelector(
    (state: RootState) => state.notificationOverlay.showNotificationsOverlay
  );
  const mainRef = useRef<HTMLDivElement>(null);
  const handleCloseNotifications = () => {
    dispatch(setShowNotificationsOverlay(false));
  };
  useOnClickOutside(mainRef, handleCloseNotifications);

  return (
    <AnimatePresence>
      {showNotificationOverlay && (
        <Backdrop variants={slideUp}>
          <div className="flex w-full justify-end items-center relative">
            <motion.div
              variants={slideFromRight}
              initial="initial"
              animate="animate"
              exit="exit"
              ref={mainRef}
              className="bg-white rounded-xl h-screen w-full rounded-l-2xl max-w-[520px] overflow-y-auto scrollbar-none"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between p-6 gap-6 bg-white sticky top-0 w-full z-30 pb-3 rounded-tl-2xl">
                <p className="text-grey-900 text-xl font-bold tracking-[-0.4px]">
                  Notifications
                </p>

                <button
                  type="button"
                  onClick={() => setIsShowingFilters((prev) => !prev)}
                >
                  <FilterIcon />
                </button>

                {isShowingFilters && (
                  <div className="bg-white p-6 flex flex-col gap-6 self-end w-[320px] rounded-xl pb-10 fixed top-14 right-6 shadow-xx-large">
                    <div className="flex items-center justify-between">
                      <p className="text-lg text-black tracking-[-0.4px] font-medium">
                        Sort by
                      </p>
                      <button
                        type="button"
                        className="text-sm tracking-[-0.35px] text-grey-600"
                      >
                        Clear filter
                      </button>
                    </div>

                    {/* Filter Button */}
                    <div className="flex items-center gap-3">
                      {FILTERARRAY.map((filter) => (
                        <button
                          key={filter}
                          type="button"
                          className={`text-sm py-2 rounded-full transition-all duration-400 ${
                            currentFilter === filter.toLowerCase()
                              ? "text-white bg-jikoo-brand-green px-4"
                              : "text-[#344054] bg-transparent"
                          }`}
                          onClick={() => setCurrentFilter(filter.toLowerCase())}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <ul className="p-10">
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
            </motion.div>
          </div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

const NotificationsOverlayMobile = () => {
  const [currentFilter, setCurrentFilter] = useState("recent");
  const [isShowingFilters, setIsShowingFilters] = useState(false);
  const dispatch = useAppDispatch();
  const showNotificationOverlay = useAppSelector(
    (state: RootState) => state.notificationOverlay.showNotificationsOverlay
  );
  const handleCloseNotifications = () => {
    dispatch(setShowNotificationsOverlay(false));
  };
  const handleHideFilter = () => {
    setIsShowingFilters(false);
  };
  const filterRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(filterRef, handleHideFilter);

  return (
    <AnimatePresence>
      {showNotificationOverlay && (
        <Backdrop className="z-[100]" variants={slideUp}>
          <div className="flex w-full justify-end items-center relative">
            <div className="bg-white rounded-xl h-screen w-full overflow-y-auto scrollbar-none">
              <div className="flex items-center justify-between p-6 gap-6 bg-white sticky top-0 w-full z-30 pb-3 ">
                <button
                  className=""
                  onClick={handleCloseNotifications}
                  type="button"
                >
                  <ArrowLeftIcon />
                </button>
                <p className="text-2xl font-medium tracking-[-0.48px] text-grey-900 lg:text-xl lg:font-bold lg:tracking-[-0.4px]">
                  Notifications
                </p>

                <button
                  type="button"
                  onClick={() => setIsShowingFilters((prev) => !prev)}
                >
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
            {/* Mobile Filter */}
            <div className="">
              <AnimatePresence>
                {isShowingFilters && (
                  <Backdrop variants={slideUp}>
                    <div className="h-full flex w-full">
                      <div
                        className="bg-white p-6 flex flex-col gap-6 self-end w-full rounded-t-3xl pb-10"
                        ref={filterRef}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xl text-black tracking-[-0.4px] font-medium">
                            Sort by
                          </p>
                          <button
                            type="button"
                            className="text-sm tracking-[-0.35px] text-grey-600"
                          >
                            Clear filter
                          </button>
                        </div>

                        {/* Filter Button */}
                        <div className="flex items-center gap-3">
                          {FILTERARRAY.map((filter) => (
                            <button
                              key={filter}
                              type="button"
                              className={`text-sm py-2 rounded-full transition-all duration-400 ${
                                currentFilter === filter.toLowerCase()
                                  ? "text-white bg-jikoo-brand-green px-4"
                                  : "text-[#344054] bg-transparent"
                              }`}
                              onClick={() =>
                                setCurrentFilter(filter.toLowerCase())
                              }
                            >
                              {filter}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Backdrop>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
