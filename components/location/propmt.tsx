"use client";
import React, { useRef, useState } from "react";
import BorderedDiv from "../auth/bordered-div";
import { SlLocationPin } from "react-icons/sl";
import { LocationProps } from "./overlay";
import { Button } from "../ui/button";

export const LocationPrompt = React.forwardRef<HTMLDivElement, LocationProps>(
  ({ handleCloseBackdrop, handlePageChange }, ref) => {
    return (
      <div
        className="bg-white p-6 flex flex-col self-end sm500:self-center w-full rounded-t-3xl sm500:rounded-2xl pb-10 text-center max-w-[550px] sm500:max-w-[450px]"
        ref={ref}
      >
        <h2 className="text-black text-xl font-bold tracking-[-0.4px]">
          Turn on your location
        </h2>

        <p className="text-sm leading-[20.3px] text-black pt-3">
          Allow location permission to location or enter a delivery address.
        </p>

        <button
          type="button"
          className="w-full inline-flex"
          onClick={() => handlePageChange("address")}
        >
          <BorderedDiv className="items-center gap-2 my-6">
            <SlLocationPin className="text-grey-500" />
            <p className="text-sm text-grey-400">Enter your location</p>
          </BorderedDiv>
        </button>

        <Button
          type="button"
          className={`bg-primary w-full rounded-md font-bold`}
        >
          Allow current location
        </Button>

        <Button
          variant={"outline"}
          className="text-gray-700 w-full tracking-normal mt-3 font-bold border-grey-300"
          type="button"
          onClick={handleCloseBackdrop}
        >
          Close
        </Button>
      </div>
    );
  }
);
