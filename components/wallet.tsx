"use client";
import { HiWallet } from "react-icons/hi2";
import { BiSolidChevronDown } from "react-icons/bi";

import { cn, updateURLParameters } from "@/lib/utils";
// import { WalletSelect } from "./wallet/wallet-select";

export const Wallet = () => {
  return (
    <div className="flex rounded-lg md:rounded-dm bg-white dark:bg-secondary-foreground overflow-hidden">
      {/* <WalletSelect/> */}
      <button
        className="bg-primary/20 px-2 py-2.5 block"
        onClick={() => updateURLParameters({ modal: "wallet" })}
      >
        <HiWallet className="text-primary size-4  md:size-6" />
      </button>
    </div>
  );
};
