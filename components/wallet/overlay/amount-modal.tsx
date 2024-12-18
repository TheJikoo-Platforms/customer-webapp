import { X } from "lucide-react";
import { useAppDispatch } from "@/redux-store/hooks";
import { setShowAmountModal } from "@/redux-store/slices/top-up-slice";
import clsx from "clsx";
import { useState } from "react";
import { NairaIcon } from "@/components/ui/icons";
import { useTopUpWallet } from "@/components/wallet/hooks/use-topup";
import { Backdrop } from "@/components/ui/backdrop";
import { slideUp } from "@/variants";

export const AmountModal = () => {
  const dispatch = useAppDispatch();
  const [inputAmount, setInputAmount] = useState("");

  // Get current URL for callback
  const callbackUrl =
    typeof window !== "undefined" ? `${window.location.origin}/wallet` : "";

  const { mutate: initializeTopUp, isLoading } = useTopUpWallet();

  const handleClose = () => {
    dispatch(setShowAmountModal(false));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const formattedValue = Number(value).toLocaleString();
    setInputAmount(formattedValue === "0" ? "" : formattedValue);
  };

  const handleContinue = () => {
    if (inputAmount) {
      const numericAmount = Number(inputAmount.replace(/,/g, ""));

      initializeTopUp(
        {
          amount: numericAmount,
          callBack: callbackUrl,
        },
        {
          onSuccess: (data: any) => {
            if (data.data.data) {
              handleClose();
              localStorage.setItem("paymentRef", data.data.data.reference);
              window.location.href = data.data.data.url;
            }
          },
        }
      );
    }
  };

  return (
    <Backdrop variants={slideUp}>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="mx-auto max-w-md rounded-lg bg-white p-6 w-full">
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-bold tracking-[-0.4px]">Enter Amount</p>
            <button onClick={handleClose}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <NairaIcon className="w-4 h-4 fill-[#333]" />
              </div>
              <input
                type="text"
                value={inputAmount}
                onChange={handleAmountChange}
                placeholder="0.00"
                className="w-full pl-12 pr-4 bg-transparent py-3 border rounded-md text-lg font-medium focus:outline-none focus:border-jikoo-brand-green"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-grey-500 font-medium">Quick amounts</p>
              <div className="grid grid-cols-3 gap-2">
                {[5000, 10000, 20000, 50000, 100000].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setInputAmount(amount.toLocaleString())}
                    className={clsx("py-2 px-4 rounded-lg border text-sm", {
                      "border-jikoo-brand-green bg-[#E7F6EC] text-jikoo-brand-green":
                        inputAmount === amount.toLocaleString(),
                      "border-gray-200":
                        inputAmount !== amount.toLocaleString(),
                    })}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleContinue}
              disabled={!inputAmount || isLoading}
              className={clsx("w-full py-3 rounded-lg transition-all", {
                "bg-jikoo-brand-green text-white": inputAmount && !isLoading,
                "bg-grey-100 text-grey-400": !inputAmount || isLoading,
              })}
            >
              {isLoading ? "Processing..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};
