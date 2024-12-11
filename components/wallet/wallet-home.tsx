"use client";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import React from "react";
import { InnerHeaderMain } from "../inner-page-header-mobile";
import { Button } from "../ui/button";
import WalletCard from "./wallet-card";
import { SearchButton } from "./search-button";
import { TransactionHistory } from "./transaction-history";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useTransitionRouter } from "next-view-transitions";
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

export const WalletHome = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const router = useTransitionRouter();

  return (
    <div className="max-w-[840px] mx-auto md:px-5">
      <SearchButton />

      <div className="bg-white rounded-xl h-full min-h-dvh md:min-h-[initial] md:max-h-[calc(100dvh-10x)] overflow-auto scrollbar-none pb-32">
        <div className="flex md:hidden items-center justify-center p-4 gap-6 w-full pb-3">
          <div className="relative w-full px-6 lg:px-0">
            <p className="text-lg font-medium tracking-[-0.48px] text-grey-900 text-center">
              Wallet
            </p>
            <button
              className="absolute right-5 top-0"
              onClick={() => router.push("wallet/transactions")}
              type="button"
            >
              <FiSearch className="text-xl text-[#242e25]" />
            </button>
          </div>
        </div>
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
            <div className="bg-white p-5 top-0 md:sticky">
              <WalletCard />
            </div>
            <TransactionHistory />
          </div>
        )}
      </div>
    </div>
  );
};
