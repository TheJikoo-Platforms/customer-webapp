import Wallet from "@/components/wallet/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet",
  description: "Wallet",
};

export default function WalletPage() {
  return (
    <>
      <Wallet />
    </>
  );
}
