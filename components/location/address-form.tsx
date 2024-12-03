"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, LocationSearchIcon } from "../ui/icons";
import BorderedDiv from "../auth/bordered-div";
import { UnstyledInput } from "../ui/unstyled-input";
import UseCurrentLocationButton from "./use-current-location";
import LocationItem from "./location-item";
import { LocationProps } from "./overlay";
import { AddressProps } from "../types";
import Image from "next/image";
import LOADING from "@/public/loading/loader-green.gif";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  addAddress,
  setCurrentAddress,
} from "@/redux-store/slices/saved-address";
import { RootState } from "@/redux-store/store";

interface AddressFormProps extends LocationProps {
  suggestions: AddressProps[];
  loading: boolean;
  fetchSuggestions: (input: string) => void;
}

const AddressForm = React.forwardRef<HTMLDivElement, AddressFormProps>(
  ({ suggestions, loading, fetchSuggestions, handleCloseBackdrop }, ref) => {
    const [inputValue, setInputValue] = useState("");
    // Handle input change and trigger fetchSuggestions
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      fetchSuggestions(value); // Call the fetch function on input change
    };
    const dispatch = useAppDispatch();
    const handleSaveAddress = (item: AddressProps) => {
      dispatch(addAddress(item));
      dispatch(setCurrentAddress(item));
      handleCloseBackdrop();
    };

    return (
      <div
        className="bg-white py-6 flex flex-col w-full pb-10 text-center md:max-w-[500px] h-full md:h-fit md:max-h-[90vh] md:rounded-2xl min-h-[480px] overflow-auto overscroll-none"
        ref={ref}
      >
        <div className="flex pb-4 md:hidden items-center justify-center relative border-b border-b-grey-100">
          <button
            onClick={handleCloseBackdrop}
            className="cursor-pointer absolute left-6"
          >
            <ArrowLeftIcon />
          </button>
          <p className="text-lg font-medium text-[#121212]">Address</p>
        </div>

        <form className="space-y-3 px-6">
          <BorderedDiv className="items-center gap-2 mt-6 md:my-0">
            <LocationSearchIcon />
            <UnstyledInput
              type="text"
              placeholder="Enter your location"
              className="placeholder:text-grey-400 font-normal focus:border-jikoo-brand-green"
              value={inputValue}
              onChange={handleInputChange}
            />
          </BorderedDiv>

          {/* Use current location button */}
          <UseCurrentLocationButton fetchSuggestions={fetchSuggestions} />

          {/* Conditional rendering for loading state */}
          {loading ? (
            <div className="">
              <Image
                alt="Loader Animation"
                width={LOADING.width}
                height={LOADING.height}
                className="h-auto w-28 mx-auto"
                src={LOADING}
              />
              <p className="">Loading suggestions...</p>
            </div>
          ) : (
            suggestions?.map((item) => (
              <button
                onClick={() => handleSaveAddress(item)}
                type="button"
                className="w-full"
                key={item.address}
              >
                <LocationItem item={item} />
              </button>
            ))
          )}
        </form>
      </div>
    );
  }
);

AddressForm.displayName = "AddressForm";

export default AddressForm;
