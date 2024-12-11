import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyPayment } from "./use-topup";

export const usePaymentVerification = () => {
  const searchParams = useSearchParams();
  const { mutate: verifyPayment } = useVerifyPayment();
  const router = useRouter();

  useEffect(() => {
    // Check URL params first
    // Check for either trxref or reference in URL params
    const paymentRef = searchParams.get("trxref");

    if (paymentRef) {
      verifyPayment(paymentRef);
      router.replace("/wallet");
    } else {
      // Check localStorage if no URL param
      const storedPaymentRef = localStorage.getItem("paymentRef");
      if (storedPaymentRef) {
        verifyPayment(storedPaymentRef);
        localStorage.removeItem("paymentRef");
      }
    }
  }, [searchParams, verifyPayment]);
};
