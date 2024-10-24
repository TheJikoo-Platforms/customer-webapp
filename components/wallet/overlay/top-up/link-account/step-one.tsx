import BorderedDiv from "@/components/auth/bordered-div";
import InnerHeader from "@/components/inner-page-header-mobile";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import Select from "react-select"; // Ensure Select is imported from the correct library
import React, { useState } from "react";
import { IoChevronDown, IoClose } from "react-icons/io5";
import {
  CustomOption,
  CustomSingleValue,
  customStyles,
} from "@/components/ui/custom-option";
import { Button } from "@/components/ui/button";

export interface ISelectOption {
  value: string;
  label: string;
}

const bankOption: ISelectOption[] = [
  { value: "wema-bank", label: "Wema Bank" },
  { value: "access-bank", label: "Access Bank PLC" },
];

export const StepOne = React.memo(
  ({
    handleCurrentScreen,
    handleCurrentStep,
  }: {
    handleCurrentScreen: (screen: string) => void;
    handleCurrentStep: (step: string) => void;
  }) => {
    const [accountNumber, setAccountNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const [selectedBank, setSelectedBank] = useState<ISelectOption | null>(
      null
    );

    return (
      <div className="bg-white w-full h-full sm500:h-[initial] sm500:rounded-2xl text-center max-w-[550px] sm500:max-w-[420px] pb-20 sm500:pb-2">
        <InnerHeader
          onClick={() => handleCurrentScreen("account")}
          className="sm500:hidden"
          text="Add your account"
        />

        <div className="hidden mx-6 sm500:flex items-center justify-between border-b border-b-grey-100 mb-6 sm500:mb-0 py-6">
          <h2 className="tracking-[-0.4px] text-xl font-bold">
            Add your account
          </h2>

          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => handleCurrentScreen("account")}
          />
        </div>
        <div className="py-4 px-5 space-y-4">
          <div className="text-left">
            <label
              className="text-grey-900 text-sm font-medium mb-1"
              htmlFor="bank"
            >
              Choose bank
            </label>
            <Select
              options={bankOption}
              styles={customStyles}
              placeholder="Select your bank"
              value={selectedBank}
              onChange={(selectedOption) => setSelectedBank(selectedOption)}
            />
          </div>

          <div className="text-left">
            <label
              className="text-grey-900 text-sm font-medium mb-1"
              htmlFor="account-number"
            >
              Account number
            </label>
            <BorderedDiv className="items-center gap-2 p-4">
              <UnstyledInput
                type="number"
                min="0"
                id="account-number"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="text-sm text-grey-400 placeholder:text-grey-400"
              />
            </BorderedDiv>
          </div>

          <div className="text-left">
            <label
              className="text-grey-900 text-sm font-medium mb-1"
              htmlFor="account-name"
            >
              Account name
            </label>
            <BorderedDiv className="items-center gap-2 p-4">
              <UnstyledInput
                type="text"
                id="account-name"
                placeholder="Enter account name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="text-sm text-grey-400 placeholder:text-grey-400"
              />
            </BorderedDiv>
          </div>

          <Button onClick={() => handleCurrentStep("two")} className="w-full">
            Continue
          </Button>
        </div>
      </div>
    );
  }
);
