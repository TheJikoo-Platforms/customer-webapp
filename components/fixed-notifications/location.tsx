"use client";
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
