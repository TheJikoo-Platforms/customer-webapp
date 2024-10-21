import InnerHeader from "@/components/inner-page-header-mobile";
import { ChevronRight } from "lucide-react";
import React from "react";
import { IoClose } from "react-icons/io5";

interface BankAccountProps {
  bankName: string;
  accountNumber: string;
  handleCurrentScreen: (screen: string) => void;
}

export const BankAccount: React.FC<BankAccountProps> = ({
  bankName,
  accountNumber,
  handleCurrentScreen,
}) => {
  return (
    <div className="bg-white w-full h-full sm500:h-[initial] sm500:rounded-2xl text-center max-w-[550px] sm500:max-w-[420px] pb-20 sm500:pb-2">
      <InnerHeader
        className="sm500:hidden"
        onClick={() => handleCurrentScreen("bank")}
        text="Bank"
      />
      <div className="hidden mx-6 sm500:flex items-center justify-between border-b border-b-grey-100 mb-6 py-6">
        <h2 className="tracking-[-0.4px] text-xl font-bold">Topup</h2>

        <IoClose
          className="text-2xl cursor-pointer"
          onClick={() => handleCurrentScreen("bank")}
        />
      </div>
      <div className="mt-4 px-5 py-4">
        <div
          onClick={() => handleCurrentScreen("paymentProcess")}
          className="bg-grey-100 rounded-xl p-4 mb-4 flex justify-between items-center cursor-pointer"
        >
          <div className="text-sm font-medium">
            <p className="text-grey-500">{bankName}</p>
            <p className="text-black text-left mt-2">{accountNumber}</p>
          </div>
          <ChevronRight className="text-grey-500" />
        </div>

        {/* Link new account button */}
        <button
          type="button"
          className="w-full bg-white border border-grey-300 text-grey-700 rounded-md font-bold py-4 px-6 hover:bg-grey-100 transition"
        >
          Link new account
        </button>
      </div>
    </div>
  );
};
