"use client";
import { useState } from "react";
import { WalletHome } from "./wallet-home";
import { useMediaQuery } from "react-responsive";
import { TransactionDetails } from "./transaction-details";

export default function Wallet() {
  const [activeScreen, setActiveScreen] = useState("home");
  const handleActiveScreen = (screen: string) => {
    setActiveScreen(screen);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="bg-white min-h-screen md:min-h-[700px] pb-[125x]  md:grid md:grid-cols-[55%,45%] md:gap-4 md:bg-transparent md:mt-6 md:px-6 max-w-[1104px] justify-center lg:grid-cols-[560px,420px] mx-auto">
      <div
        className={`${
          isMobile && activeScreen === "home" ? "block" : "hidden md:block"
        }`}
      >
        <WalletHome handleActiveScreen={handleActiveScreen} />
      </div>
      <div
        className={`${
          isMobile && activeScreen === "details" ? "block" : "hidden md:block"
        }`}
      >
        <TransactionDetails handleActiveScreen={handleActiveScreen} />
      </div>
    </div>
  );
}
