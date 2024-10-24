"use client";
import BorderedDiv from "@/components/auth/bordered-div";
import InnerHeader from "@/components/inner-page-header-mobile";
import { AddressProps } from "@/components/types";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setCurrentAddress } from "@/redux-store/slices/saved-address";
import { setShowSettingsOverlay } from "@/redux-store/slices/settings-slice";
import { RootState } from "@/redux-store/store";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

export const SavedAddress = React.memo(
  ({
    handleActiveScreen,
    handleCurrentScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
    handleCurrentScreen: (screen: string) => void;
  }) => {
    const addressList = useAppSelector(
      (state: RootState) => state.savedAddress.addressState.addressList
    );
    // console.log(addressList, currentAddressIndex);
    const dispatch = useAppDispatch();
    const handleDelete = (index: number) => {
      dispatch(
        setShowSettingsOverlay({
          showSettingsOverlay: true,
          activeScreen: "delete",
        })
      );
      dispatch(setCurrentAddress(index));
    };
    return (
      <>
        <InnerHeader
          className="md:hidden"
          onClick={() => handleActiveScreen("home")}
          text="Saved address"
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block pt-1 pb-5">
            Saved address
          </h3>
          <div className="">
            <button
              type="button"
              className="w-full inline-flex"
              onClick={() => handleCurrentScreen("add")}
            >
              <BorderedDiv className="items-center gap-2 mb-2">
                <SlLocationPin className="text-grey-900" />
                <p className="text-sm text-grey-400">Add new address</p>
              </BorderedDiv>
            </button>
            <>
              {addressList?.map((item, key) => (
                <LocationItem
                  key={key}
                  address={item.address}
                  area={item.area}
                  handleClick={() => handleDelete(key)}
                />
              ))}
            </>
          </div>
        </div>
      </>
    );
  }
);

interface LocationItemProps extends AddressProps {
  handleClick: () => void;
}
const LocationItem: React.FC<LocationItemProps> = ({
  address,
  area,
  handleClick,
}) => {
  return (
    <div className="flex items-center gap-3 py-4 border-b border-b-grey-100 w-full justify-between">
      <div className="text-sm space-x-0.5 text-left">
        <p className="text-black">{address}</p>
        <p className="text-[#8080808C]">{area}</p>
      </div>

      <button type="button" onClick={handleClick}>
        <RiDeleteBin6Line className="text-lg text-state-error-300" />
      </button>
    </div>
  );
};
