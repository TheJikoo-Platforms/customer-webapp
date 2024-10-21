"use client";
import React, { useState } from "react";
import { BankOption } from "./bank-option";
import { BankAccount } from "./bank-account";
import { PaymentProcess } from "./payment-process";

export const TopUp = () => {
  const [currentScreen, setCurrentScreen] = useState("bank");
  const handleCurrentScreen = (screen: string) => {
    setCurrentScreen(screen);
  };
  return (
    <>
      {currentScreen === "bank" && (
        <BankOption
          handleCurrentScreen={handleCurrentScreen}
          currentScreen={currentScreen}
        />
      )}
      {currentScreen === "account" && (
        <BankAccount
          bankName="Access Bank PLC"
          accountNumber="1380790800"
          handleCurrentScreen={handleCurrentScreen}
        />
      )}
      {currentScreen === "paymentProcess" && <PaymentProcess />}
    </>
  );
};
