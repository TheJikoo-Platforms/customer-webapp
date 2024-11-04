import { Button } from "@/components/ui/button";
import { useVerifyPayment } from "@/components/wallet/use-topup";
import React from "react";
import { usePaystackPayment } from "react-paystack";

interface IProps {
  reference: string;
  email: string;
  name: string;
  topupAmount: number;
  children: React.ReactNode;
}

export const PaystackButton = ({
  email,
  reference,
  topupAmount,
  children,
  name,
}: IProps) => {
  const config = {
    reference: reference,
    name: name,
    email: email,
    amount: topupAmount * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey:
      process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ??
      "pk_test_9d97cf0be86b0758ece444694d57a8db41a4be59",
  };

  const { mutate: verifyPayment, isLoading: isVerifying } = useVerifyPayment(); // Use the verification hook

  // Function to handle payment success
  const onSuccess = () => {
    handleProcess(); // Trigger the verification process
  };

  const handleProcess = async () => {
    // Call the verifyPayment mutation with the reference
    verifyPayment(reference);
  };

  // Function to handle dialog close
  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  const options = { onSuccess, onClose };

  return (
    <Button
      onClick={() => {
        initializePayment(options);
      }}
      className={`w-full mt-6 py-4 transition-all ${
        isVerifying && "opacity-65"
      }`}
      disabled={isVerifying}
    >
      {isVerifying ? "Verifying..." : children}
    </Button>
  );
};
