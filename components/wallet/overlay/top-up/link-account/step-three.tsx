import BorderedDiv from "@/components/auth/bordered-div";
import InnerHeader from "@/components/inner-page-header-mobile";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import Select from "react-select"; // Ensure Select is imported from the correct library
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { customStyles } from "@/components/ui/custom-option";
import { ISelectOption } from "./step-one";
import PaymentConfirmation, {
  PaymentConfirmationProps,
} from "./payment-confirmation";

const paymentData: PaymentConfirmationProps = {
  fee: "N50",
  accountNumber: "23497173928",
  accountName: "NIBSS Direct Debit",
  bankName: "Wema Bank",
};

export const StepThree = React.memo(
  ({ handleCurrentStep }: { handleCurrentStep: (screen: string) => void }) => {
    return (
      <div className="bg-white w-full h-full sm500:h-[initial] sm500:rounded-2xl text-center max-w-[550px] sm500:max-w-[420px] pb-20 sm500:pb-2">
        <InnerHeader
          onClick={() => handleCurrentStep("one")}
          className="sm500:hidden"
          text="Confirm Linking Attempt"
        />

        <div className="hidden mx-6 sm500:flex items-center justify-between border-b border-b-grey-100 mb-6 sm500:mb-0 py-6">
          <h2 className="tracking-[-0.4px] text-xl font-bold">
            Confirm Linking Attempt
          </h2>

          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => handleCurrentStep("one")}
          />
        </div>

        <div className="py-4 px-5 space-y-4 text-left">
          <p className="text-sm text-grey-500 mb-6">
            To use your account for deposits, send N50 only from your account
            now
          </p>

          <PaymentConfirmation data={paymentData} />

          {/* Continue Button */}
          <Button
            onClick={() => handleCurrentStep("four")}
            className="w-full tracking-normal"
          >
            I have paid
          </Button>
        </div>
      </div>
    );
  }
);
