import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  setShowTopUpModal,
  setSelectedOption,
  setShowAmountModal,
} from "@/redux-store/slices/top-up-slice";
import Image from "next/image";
import Backdrop from "@/components/ui/backdrop";
import { slideUp } from "@/variants";
import clsx from "clsx";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useRef } from "react";

interface PaymentOptionProps {
  type: "naira" | "crypto";
  title: string;
  subtitle: string;
  icon: string;
  isSelected: boolean;
  onSelect: (type: "naira" | "crypto") => void;
}

const PaymentOption = ({
  type,
  title,
  subtitle,
  icon,
  isSelected,
  onSelect,
}: PaymentOptionProps) => (
  <button
    onClick={() => onSelect(type)}
    className={clsx("w-full flex items-center justify-between px-0 py-1")}
  >
    <div className="flex items-center gap-3">
      <Image src={icon} alt={type} width={32} height={32} className="w-8 h-8" />
      <div className="text-left">
        <p className="font-bold text-sm tracking-[-0.4px]">{title}</p>
        <p className="text-xs text-[#5B5B5B]">{subtitle}</p>
      </div>
    </div>
    <div
      className={clsx(
        "w-5 h-5 border-2 rounded-full flex justify-center items-center cursor-pointer transition-all",
        {
          "border-jikoo-brand-green": isSelected,
          "border-grey-300": !isSelected,
        }
      )}
    >
      {isSelected && (
        <span className="w-3 h-3 bg-jikoo-brand-green rounded-full"></span>
      )}
    </div>
  </button>
);

export const TopUpOptionsModal = () => {
  const dispatch = useAppDispatch();
  const { selectedOption } = useAppSelector((state) => state.topUp);

  const handleClose = () => {
    dispatch(setShowTopUpModal(false));
  };

  const handleOptionSelect = (option: "naira" | "crypto") => {
    if (option === "naira") {
      dispatch(setSelectedOption(option));
    } else {
      return;
    }
  };

  const handleContinue = () => {
    if (selectedOption) {
      dispatch(setShowTopUpModal(false));
      dispatch(setShowAmountModal(true));
    }
  };
  const innerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(innerRef, handleClose);

  return (
    <Backdrop variants={slideUp}>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          ref={innerRef}
          className="mx-auto max-w-md rounded-lg bg-white p-6 w-full"
        >
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-bold tracking-[-0.4px]">
              Select Top Up Option
            </p>
            <button onClick={handleClose}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <PaymentOption
              type="naira"
              title="Pay with Naira (NGN)"
              subtitle="Paystack"
              icon="/naira-icon.svg"
              isSelected={selectedOption === "naira"}
              onSelect={handleOptionSelect}
            />
            <PaymentOption
              type="crypto"
              title="Pay with Crypto (USDT)"
              subtitle="Connect your wallet"
              icon="/crypto-icon.svg"
              isSelected={selectedOption === "crypto"}
              onSelect={handleOptionSelect}
            />
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedOption}
            className={clsx("w-full mt-6 py-3 rounded-lg", {
              "bg-jikoo-brand-green text-white": selectedOption,
              "bg-grey-100 text-grey-400": !selectedOption,
            })}
          >
            Continue
          </button>
        </div>
      </div>
    </Backdrop>
  );
};
