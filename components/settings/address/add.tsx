"use client";
import BorderedDiv from "@/components/auth/bordered-div";
import InnerHeader from "@/components/inner-page-header-mobile";
import useLocationSuggestions from "@/components/location/hooks/use-location-suggestions";
import LocationItem from "@/components/location/location-item";
import LOADING from "@/public/loading/loader-green.gif";
import UseCurrentLocationButton from "@/components/location/use-current-location";
import { AddressProps } from "@/components/types";
import { ArrowLeftIcon, LocationSearchIcon } from "@/components/ui/icons";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/redux-store/hooks";
import Image from "next/image";
import React, { useState } from "react";
import {
  addAddress,
  setCurrentAddress,
} from "@/redux-store/slices/saved-address";
export const AddAddress = React.memo(
  ({
    handleCurrentScreen,
  }: {
    handleCurrentScreen: (screen: string) => void;
  }) => {
    const { toast } = useToast();
    const { suggestions, loading, fetchSuggestions } = useLocationSuggestions();
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
      handleCurrentScreen("saved");
    };

    return (
      <>
        <InnerHeader
          className="md:hidden"
          onClick={() => handleCurrentScreen("saved")}
          text="Add address"
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          <button
            onClick={() => handleCurrentScreen("saved")}
            type="button"
            className="flex items-center gap-2 pt-1 pb-5"
          >
            <ArrowLeftIcon />
            <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block">
              Add address
            </h3>
          </button>

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
      </>
    );
  }
);
