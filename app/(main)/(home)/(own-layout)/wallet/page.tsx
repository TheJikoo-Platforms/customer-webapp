import Wallet from "@/components/wallet/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet",
  description: "Wallet",
};

export default async function WalletPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <>
      <Wallet />
    </>
  );
}
