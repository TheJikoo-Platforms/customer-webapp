"use client";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import React from "react";
import { InnerHeaderMain } from "../inner-page-header-mobile";
import { Button } from "../ui/button";
import Image from "next/image";
import { LuFilter } from "react-icons/lu";
import TransactionList, { Transaction } from "./transaction-list";
import { setShowWalletOverlay } from "@/redux-store/slices/wallet-slice";

export const WalletHome = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const isAuthenticated = useAppSelector(
      (state: RootState) => state.auth.isAuthenticated
    );
    const transactions: Transaction[] = [
      {
        date: "13/09/2024",
        description: "Order for 3 chicken wings",
        amount: "+ ₦500",
        type: "credit",
      },
      {
        date: "13/09/2024",
        description: "Order for 3 chicken wings",
        amount: "+ ₦500",
        type: "credit",
      },
      {
        date: "13/09/2024",
        description: "Wallet Top-up",
        amount: "- ₦500",
        type: "debit",
        status: "Canceled",
      },
      {
        date: "13/09/2024",
        description: "Order for 3 chicken wings",
        amount: "+ ₦500",
        type: "credit",
      },
    ];

    const dispatch = useAppDispatch();
    const handleFilter = () => {
      dispatch(
        setShowWalletOverlay({
          showWalletOverlay: true,
          activeScreen: "filter",
        })
      );
    };
    const handleTopUp = () => {
      dispatch(
        setShowWalletOverlay({
          showWalletOverlay: true,
          activeScreen: "topUp",
        })
      );
    };

    return (
      <div className="bg-white rounded-xl md:pb-20 h-full max-h-[calc(100dvh-125px)] md:max-h-[calc(100dvh-60px)] overflow-auto scrollbar-none">
        <InnerHeaderMain text="Wallet" className="md:hidden" />
        {!isAuthenticated ? (
          <>
            <h2 className="text-black text-xl font-bold tracking-[-0.48px] hidden md:block px-5 pt-4">
              Wallet
            </h2>
            <div className="px-5 py-4 h-[calc(90dvh-61px)] min-h-[420px] flex items-center max-w-[297px] mx-auto">
              <div className="w-full space-y-5">
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    quality={100}
                    src="/wallet-empty-state.svg"
                    alt="Empty Wallet"
                    className="w-[150px] h-[150px] mx-auto"
                  />
                  <p className="text-sm text-black mt-8 mb-6 text-center">
                    Login to access your wallet balance and history.
                  </p>

                  <Button
                    type="button"
                    className="w-full flex py-4 px-6 text-base"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="">
            <div className="bg-white px-5 py-4 md:pt-5 top-[60px] md:top-0 sticky">
              <h2 className="text-black text-xl font-bold tracking-[-0.48px] hidden md:block pb-5">
                Wallet
              </h2>
              <div className="flex flex-col items-center bg-state-success-50 px-6 py-5 rounded-[7.5px] mb-6 md:mb-0">
                <h3 className="text-grey-700 text-xs md:text-sm">
                  Available Balance
                </h3>
                <p className="text-2xl font-medium text-grey-900 mb-1">
                  ₦ 20,000
                </p>
                <Button
                  type="button"
                  onClick={handleTopUp}
                  className="p-3 rounded-md max-w-[114px] md:max-w-[164px] w-full mt-4 text-sm md:text-base"
                >
                  Top up
                </Button>
              </div>
            </div>

            <div className="border-t-4 border-t-grey-100 md:border-t-transparent px-5 py-4 md:pt-0">
              <div className="flex items-center justify-between gap-2 my-6 md:mt-0">
                <h3 className="text-grey-900 font-bold">Transaction History</h3>
                <button onClick={handleFilter} type="button">
                  <LuFilter className="text-lg text-grey-400" />
                </button>
              </div>
              {transactions.length > 0 ? (
                <div>
                  <TransactionList
                    handleActiveScreen={handleActiveScreen}
                    transactions={transactions}
                  />

                  <p className="my-6 uppercase text-grey-500 text-sm font-semibold tracking-[1.68px]">
                    July 2024
                  </p>

                  <TransactionList
                    handleActiveScreen={handleActiveScreen}
                    transactions={transactions.slice(-3)}
                  />
                </div>
              ) : (
                <div className="max-w-[166px] w-full mx-auto">
                  <Image
                    width={1000}
                    height={1000}
                    quality={100}
                    src="/wallet-empty-state.svg"
                    alt="Empty Wallet"
                    className="w-[150px] h-[150px] mx-auto"
                  />
                  <p className="text-sm text-grey-500 mt-4 text-center">
                    No transaction record here. Try making your first a deposit.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);
