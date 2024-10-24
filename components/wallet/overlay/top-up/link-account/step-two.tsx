import BorderedDiv from "@/components/auth/bordered-div";
import InnerHeader from "@/components/inner-page-header-mobile";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import Select from "react-select"; // Ensure Select is imported from the correct library
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { customStyles } from "@/components/ui/custom-option";
import { ISelectOption } from "./step-one";

// Define sample options for city and state
const cityOptions: ISelectOption[] = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
];

const stateOptions: ISelectOption[] = [
  { value: "lagos-state", label: "Lagos State" },
  { value: "fct", label: "Federal Capital Territory" },
];

export const StepTwo = React.memo(
  ({ handleCurrentStep }: { handleCurrentStep: (screen: string) => void }) => {
    const [phoneNumer, setPhoneNumer] = useState("");
    const [address, setAddress] = useState("");
    const [selectedCity, setSelectedCity] = useState<ISelectOption | null>(
      null
    ); // State for city
    const [selectedState, setSelectedState] = useState<ISelectOption | null>(
      null
    ); // State for state

    return (
      <div className="bg-white w-full h-full sm500:h-[initial] sm500:rounded-2xl text-center max-w-[550px] sm500:max-w-[420px] pb-20 sm500:pb-2">
        <InnerHeader
          onClick={() => handleCurrentStep("one")}
          className="sm500:hidden"
          text="Add your account"
        />

        <div className="hidden mx-6 sm500:flex items-center justify-between border-b border-b-grey-100 mb-6 sm500:mb-0 py-6">
          <h2 className="tracking-[-0.4px] text-xl font-bold">
            Add your account
          </h2>

          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => handleCurrentStep("one")}
          />
        </div>

        <div className="py-4 px-5 space-y-4 ">
          <p className="text-sm text-grey-500 text-left">
            To use your account for deposits, complete the next steps.
          </p>
          {/* Phone Number */}
          <div className="text-left">
            <label
              className="text-grey-900 text-sm font-medium mb-1"
              htmlFor="Phone number"
            >
              Phone number
            </label>
            <BorderedDiv className="items-center gap-2 p-4">
              <UnstyledInput
                type="number"
                min="0"
                id="Phone number"
                placeholder="Enter phone number"
                value={phoneNumer}
                onChange={(e) => setPhoneNumer(e.target.value)}
                className="text-sm text-grey-400 placeholder:text-grey-400 font-normal placeholder:font-normal"
              />
            </BorderedDiv>
          </div>

          {/* Residential Address */}
          <div className="text-left">
            <label
              className="text-grey-900 text-sm font-medium mb-1"
              htmlFor="residential-address"
            >
              Residential address
            </label>
            <BorderedDiv className="items-center gap-2 p-4">
              <UnstyledInput
                type="text"
                id="residential-address"
                placeholder="Enter your residential address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="text-sm text-grey-400 placeholder:text-grey-400 font-normal placeholder:font-normal"
              />
            </BorderedDiv>
          </div>

          {/* City and State */}
          <div className="flex space-x-4">
            {/* State/Region */}
            <div className="text-left w-1/2">
              <label
                className="text-grey-900 text-sm font-medium mb-1"
                htmlFor="state"
              >
                State/Region
              </label>
              <Select
                options={stateOptions}
                styles={customStyles}
                placeholder="State"
                value={selectedState}
                onChange={(selectedOption) => setSelectedState(selectedOption)}
              />
            </div>

            {/* City/Town */}
            <div className="text-left w-1/2">
              <label
                className="text-grey-900 text-sm font-medium mb-1"
                htmlFor="city"
              >
                City/Town
              </label>
              <Select
                options={cityOptions}
                styles={customStyles}
                placeholder="City"
                value={selectedCity}
                onChange={(selectedOption) => setSelectedCity(selectedOption)}
              />
            </div>
          </div>

          {/* Continue Button */}
          <Button onClick={() => handleCurrentStep("three")} className="w-full">
            Continue
          </Button>
        </div>
      </div>
    );
  }
);
