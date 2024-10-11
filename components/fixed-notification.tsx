"use client";
import { useAppDispatch } from "@/redux-store/hooks";
import {
  setShowCartOverlay,
  setShowCartOverlayMobile,
} from "@/redux-store/slices/backdrop/cart";
import Link from "next/link";
import React from "react";
import { IoIosClose } from "react-icons/io";

export const CancellableNotification = React.memo(
  ({ text, handlePrompt }: { text: string; handlePrompt: () => void }) => {
    // This prevents the click event from propagating to parent elements
    const handleClose = (event: React.MouseEvent) => {
      event.stopPropagation(); // Prevent the event from bubbling up
      handlePrompt(); // Call handlePrompt to close the notification
    };
    return (
      <div className="bg-grey-900 py-2.5 md:py-3 px-3.5 flex w-full max-sm500:max-w-[calc(100%-40px)] sm500:w-[350px] items-center rounded-md absolute max-h-[44px] top-10 md:top-10 z-10">
        <div className="absolute -top-1.5 left-4 w-4 h-4 bg-gray-900 rotate-45"></div>
        <p className="flex-1 text-grey-300 text-sm text-left">{text}</p>
        <IoIosClose
          className="text-grey-200 text-3xl cursor-pointer"
          onClick={handleClose}
        />
      </div>
    );
  }
);

const WRAPPERCLASSNAMES =
  "bg-[#0A1910F2] py-3 px-4 flex w-full max-sm500:max-w-[calc(100%-30px)] sm500:w-[350px] items-center rounded-md fixed bottom-[72px] lg:bottom-[30px] left-1/2 -translate-x-1/2 max-h-[44px] z-10 text-sm text-white justify-between";

export const AuthNotification = () => {
  return (
    <Link href={"/login"}>
      <div className={WRAPPERCLASSNAMES}>
        <div className="flex items-center gap-2">
          <UserIcon />
          <p className="flex-1 text-sm text-left">Login/Create account</p>
        </div>

        <p className="font-bold">Sign in</p>
      </div>
    </Link>
  );
};

export const CartNotification = () => {
  const dispatch = useAppDispatch();

  const handleShowCart = () => {
    dispatch(setShowCartOverlayMobile(true));
  };
  return (
    <div onClick={handleShowCart} className={WRAPPERCLASSNAMES}>
      <div className="flex items-center gap-2 font-light">
        <CartIcon />
        <p className="flex items-center gap-1">
          Cart (3)
          <span>
            <DotIcon />
          </span>
          ₦2,000.00
        </p>
      </div>

      <ArrowUpIcon />
    </div>
  );
};

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0007 1.6665C7.69947 1.6665 5.83398 3.53198 5.83398 5.83317C5.83398 8.13436 7.69947 9.99984 10.0007 9.99984C12.3018 9.99984 14.1673 8.13436 14.1673 5.83317C14.1673 3.53198 12.3018 1.6665 10.0007 1.6665ZM7.50065 5.83317C7.50065 4.45246 8.61994 3.33317 10.0007 3.33317C11.3814 3.33317 12.5007 4.45246 12.5007 5.83317C12.5007 7.21388 11.3814 8.33317 10.0007 8.33317C8.61994 8.33317 7.50065 7.21388 7.50065 5.83317Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0006 19.1665C8.7169 19.1665 6.85883 18.875 5.46351 18.2643C4.77851 17.9645 4.08186 17.5354 3.67711 16.9143C3.46425 16.5877 3.32968 16.2029 3.33409 15.7733C3.33846 15.3477 3.47852 14.9399 3.71391 14.5605C4.85508 12.7212 7.18964 10.8332 10.0006 10.8332C12.8117 10.8332 15.1462 12.7212 16.2874 14.5605C16.5228 14.9399 16.6628 15.3477 16.6672 15.7733C16.6716 16.2029 16.5371 16.5877 16.3242 16.9143C15.9194 17.5354 15.2228 17.9645 14.5378 18.2643C13.1425 18.875 11.2844 19.1665 10.0006 19.1665ZM5.13014 15.4392C5.02042 15.616 5.00129 15.7296 5.00067 15.7905C5.00008 15.8474 5.0147 15.9142 5.07345 16.0044C5.21193 16.2169 5.54821 16.4821 6.13176 16.7375C7.27352 17.2372 8.89501 17.4998 10.0006 17.4998C11.1063 17.4998 12.7278 17.2372 13.8695 16.7375C14.4531 16.4821 14.7894 16.2169 14.9278 16.0044C14.9866 15.9142 15.0012 15.8474 15.0006 15.7905C15 15.7296 14.9809 15.616 14.8712 15.4392C13.936 13.932 12.0709 12.4998 10.0006 12.4998C7.93037 12.4998 6.06527 13.932 5.13014 15.4392Z"
      fill="white"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.08333 0.833496C1.6231 0.833496 1.25 1.20659 1.25 1.66683C1.25 2.12707 1.6231 2.50016 2.08333 2.50016C2.69035 2.50016 3.22066 2.94123 3.32984 3.56183L3.90141 6.81074L3.90192 6.81361L4.26813 8.86023C4.49716 10.1403 4.68006 11.1625 4.9113 11.9745C5.14977 12.8119 5.45884 13.5009 5.98376 14.0832C6.3443 14.4831 6.76614 14.8255 7.23364 15.0987C7.91088 15.4945 8.65747 15.6688 9.54511 15.7522C10.4099 15.8335 11.4817 15.8335 12.8319 15.8335H13.2424C13.8429 15.8335 14.338 15.8335 14.7459 15.8038C15.1708 15.7729 15.5575 15.707 15.9327 15.5471C16.4799 15.3138 16.9591 14.9471 17.3221 14.4792C17.5727 14.1561 17.7291 13.7999 17.8574 13.402C17.9798 13.0223 18.0915 12.5543 18.2256 11.992L18.2425 11.9211C18.4465 11.0664 18.6131 10.3681 18.6937 9.79788C18.7767 9.21116 18.7858 8.65933 18.5969 8.12742C18.3313 7.37967 17.8086 6.75015 17.1246 6.34004C16.6428 6.05114 16.098 5.9381 15.4935 5.88516C14.9033 5.83348 14.1638 5.83349 13.2512 5.8335H5.42175L4.9713 3.27306C4.72412 1.86803 3.51195 0.833496 2.08333 0.833496ZM13.2122 7.50016C14.173 7.50016 14.8393 7.50092 15.3481 7.54548C15.851 7.58952 16.1024 7.67043 16.2676 7.76946C16.628 7.98556 16.8934 8.31093 17.0264 8.68525C17.0843 8.84844 17.1108 9.08855 17.0435 9.56441C16.9751 10.0479 16.8276 10.6698 16.6118 11.5745C16.4684 12.1754 16.3713 12.58 16.2711 12.8906C16.1746 13.19 16.0921 13.3456 16.0052 13.4576C15.8193 13.6973 15.57 13.8899 15.2791 14.0139C15.139 14.0736 14.955 14.1176 14.6249 14.1416C14.2847 14.1663 13.8504 14.1668 13.2122 14.1668H12.874C11.4724 14.1668 10.4788 14.166 9.70108 14.0929C8.93732 14.0211 8.45978 13.8849 8.0746 13.6598C7.75362 13.4722 7.46605 13.2383 7.22168 12.9672C6.93152 12.6454 6.71522 12.2238 6.51424 11.518C6.30866 10.7961 6.13956 9.85667 5.90092 8.52298L5.7179 7.50016H13.2122Z"
      fill="white"
    />
    <path
      d="M8.75 17.2918C8.75 17.8671 8.28363 18.3335 7.70833 18.3335C7.13304 18.3335 6.66667 17.8671 6.66667 17.2918C6.66667 16.7165 7.13304 16.2502 7.70833 16.2502C8.28363 16.2502 8.75 16.7165 8.75 17.2918Z"
      fill="white"
    />
    <path
      d="M15.2083 18.3335C15.7836 18.3335 16.25 17.8671 16.25 17.2918C16.25 16.7165 15.7836 16.2502 15.2083 16.2502C14.633 16.2502 14.1667 16.7165 14.1667 17.2918C14.1667 17.8671 14.633 18.3335 15.2083 18.3335Z"
      fill="white"
    />
  </svg>
);

const DotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4"
    height="4"
    viewBox="0 0 4 4"
    fill="none"
  >
    <circle opacity="0.9" cx="2" cy="2" r="2" fill="white" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M8.85838 6.59753C9.50013 5.99353 10.5012 5.99353 11.1429 6.59753L17.6551 12.7267C17.9903 13.0421 18.0063 13.5695 17.6908 13.9046C17.3754 14.2398 16.848 14.2558 16.5128 13.9403L10.0007 7.8112L3.48846 13.9403C3.15331 14.2558 2.62592 14.2398 2.31049 13.9046C1.99506 13.5695 2.01104 13.0421 2.34618 12.7267L8.85838 6.59753Z"
      fill="white"
    />
  </svg>
);
