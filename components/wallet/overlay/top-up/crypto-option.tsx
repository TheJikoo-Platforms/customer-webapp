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

const coinOptions = [
  {
    value: "usdt",
    label: "USDT",
    src: "/usdt.jpeg",
  },
  {
    value: "btc",
    label: "BTC",
    src: "/usdt.jpeg",
  },
  {
    value: "eth",
    label: "ETH",
    src: "/usdt.jpeg",
  },
];

export const CryptoOption = React.memo(
  ({
    handleCurrentScreen,
  }: {
    handleCurrentScreen: (screen: string) => void;
  }) => {
    const [selectedCoin, setSelectedCoin] = useState(coinOptions[0].value);
    const [amount, setAmount] = useState("");

    const handleCoinChange = (selectedOption: any) => {
      setSelectedCoin(selectedOption.value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(e.target.value);
    };

    const handleContinue = () => {
      // if (!amount || parseFloat(amount) <= 0) {
      //   console.log("Please enter a valid amount.");
      //   return;
      // }
      handleCurrentScreen("cryptoPayment");
    };

    return (
      <div className="bg-white w-full h-full sm500:h-[initial] sm500:rounded-2xl text-center max-w-[550px] sm500:max-w-[420px] pb-20 sm500:pb-2">
        <InnerHeader
          onClick={() => handleCurrentScreen("bank")}
          className="sm500:hidden"
          text="Crypto top up"
        />

        <div className="hidden mx-6 sm500:flex items-center justify-between border-b border-b-grey-100 mb-6 sm500:mb-0 py-6">
          <h2 className="tracking-[-0.4px] text-xl font-bold">Crypto Top up</h2>

          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => handleCurrentScreen("bank")}
          />
        </div>
        <div className="py-4 px-5">
          <label
            className="text-grey-500 text-sm text-left font-medium mb-1 block"
            htmlFor="amount"
          >
            Select Coin
          </label>
          <Select
            options={coinOptions}
            styles={customStyles}
            components={{
              Option: CustomOption,
              SingleValue: CustomSingleValue,
            }}
            placeholder="Select Coin"
          />

          <div className="text-left mt-8 mb-6">
            <label
              className="text-grey-900 text-sm font-medium mb-1"
              htmlFor="amount"
            >
              Top up amount
            </label>
            <BorderedDiv className="items-center gap-2 p-4">
              <UnstyledInput
                type="number"
                min="0"
                id="amount"
                placeholder="0.00"
                value={amount}
                onChange={handleAmountChange}
                className="text-sm text-grey-400 placeholder:text-grey-400"
              />
              <span className="text-grey-500 text-sm">USD</span>
            </BorderedDiv>
          </div>

          <Button onClick={handleContinue} className="w-full">
            Continue
          </Button>
        </div>
      </div>
    );
  }
);
