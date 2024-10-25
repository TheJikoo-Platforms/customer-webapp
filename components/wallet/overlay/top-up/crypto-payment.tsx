import InnerHeader from "@/components/inner-page-header-mobile";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { CopyIcon } from "@/components/ui/icons";
import { IoClose } from "react-icons/io5";

export const CryptoPayment = React.memo(
  ({
    handleCurrentScreen,
  }: {
    handleCurrentScreen: (screen: string) => void;
  }) => {
    const walletAddress = "0x34ca5e426aF4bb9b9656e49FbECO21314...";

    const copyToClipboard = () => {
      navigator.clipboard.writeText(walletAddress);
      alert("Address copied to clipboard!");
    };
    return (
      <div className="bg-white w-full h-full sm500:h-[initial] sm500:rounded-2xl text-center max-w-[550px] sm500:max-w-[420px] pb-20 sm500:pb-2">
        <InnerHeader
          onClick={() => handleCurrentScreen("crypto")}
          className="sm500:hidden"
          text="Crypto top up"
        />
        <div className="hidden mx-6 sm500:flex items-center justify-between border-b border-b-grey-100 mb-6 sm500:mb-0 py-6">
          <h2 className="tracking-[-0.4px] text-xl font-bold">Crypto Top up</h2>

          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => handleCurrentScreen("crypto")}
          />
        </div>
        <div className="py-4 px-5">
          <div className="text-left mb-4">
            <span className="text-sm">Pay:</span>
            <h2 className="text-xl font-bold tracking-[-0.4px]">20.00 USDT</h2>
          </div>

          {/* QR Code */}
          <div className="flex justify-center my-8">
            <QRCodeSVG fgColor="#101928" value={walletAddress} size={160} />
          </div>

          {/* Wallet Address with Copy Functionality */}
          <div className="relative flex items-center justify-between border border-grey-300 rounded-sm px-2.5 py-3">
            <span className="truncate text-grey-700 text-sm">
              {walletAddress}
            </span>
            <button onClick={copyToClipboard} className="ml-2">
              <CopyIcon className="w-6 h-6 fill-grey-900" />
            </button>
          </div>
          <Button
            onClick={() => handleCurrentScreen("paymentProcess")}
            className="w-full mt-[100px] sm500:mt-4 px-6 py-4"
          >
            I have paid
          </Button>

          <button
            type="button"
            className="text-jikoo-brand-green w-full tracking-normal mt-4 font-bold"
            onClick={() => handleCurrentScreen("crypto")}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
);
