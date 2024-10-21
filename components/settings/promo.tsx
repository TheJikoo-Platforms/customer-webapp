"use client";
import React from "react";
import InnerHeader from "../inner-page-header-mobile";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux-store/hooks";
import { setShowSettingsOverlay } from "@/redux-store/slices/settings-slice";

const promos = [
  { promoName: "Promo name", amount: 100, expirationDate: "Oct 14" },
  { promoName: "Promo name", amount: 100, expirationDate: "Oct 14" },
  { promoName: "Promo name", amount: 100, expirationDate: "Oct 14" },
  { promoName: "Promo name", amount: 100, expirationDate: "Oct 14" },
];

export const Promo = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    return (
      <>
        <InnerHeader
          className="md:hidden"
          onClick={() => handleActiveScreen("home")}
          text="Promo code"
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          <div className="">
            <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block pt-1 pb-2">
              Promo code
            </h3>

            <div className="space-y-4">
              {promos.map((promo, index) => (
                <PromoCard
                  key={index}
                  promoName={promo.promoName}
                  amount={promo.amount}
                  expirationDate={promo.expirationDate}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
);

interface PromoCardProps {
  amount: number;
  expirationDate: string;
  promoName: string;
}

const PromoCard: React.FC<PromoCardProps> = ({
  amount,
  expirationDate,
  promoName,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="p-4 rounded-xl bg-grey-50">
      <div className="flex justify-between items-center text-black pb-2 mb-2 border-grey-100">
        <div className="">
          <h2 className="text-sm font-bold">{promoName}</h2>
          <p className="text-xs">Expires on {expirationDate}</p>
        </div>
        <div className="font-bold">₦{amount}</div>
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-xs text-grey-500 flex gap-2 items-center"
          onClick={() =>
            dispatch(
              setShowSettingsOverlay({
                showSettingsOverlay: true,
                activeScreen: "promo",
              })
            )
          }
        >
          Rule of use
          <ChevronRightIcon />
        </button>
        <Button type="button" className=" px-4 py-2 rounded-md text-sm">
          Apply
        </Button>
      </div>
    </div>
  );
};
