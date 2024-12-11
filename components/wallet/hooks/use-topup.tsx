import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { topUpWallet, verifyPayment } from "@/api/requests";

export const useTopUpWallet = () => {
  const { toast } = useToast();

  return useMutation(
    async (data: { amount: number; callBack: string }) => {
      return topUpWallet(data.amount, data.callBack);
    },
    {
      onSuccess: (data) => {
        toast({
          title: "Initialization successfully!",
          icon: (
            <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
              <FaCircleCheck className="text-state-success-600" />
            </div>
          ),
        });
      },
      onError: (error: any) => {
        console.error("Error initializing transaction:", error);
        const errorMessage = !error?.response
          ? "Network error: Please check your internet connection."
          : error.response?.data?.errors ||
            error.response?.data?.message ||
            "An unexpected error occurred.";

        toast({
          title: "Initialization  failed",
          description: errorMessage,
          variant: "error",
          icon: (
            <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
              <MdCancel className="text-state-error-500" />
            </div>
          ),
        });
      },
    }
  );
};

export const useVerifyPayment = () => {
  const { toast } = useToast();

  return useMutation(
    async (reference: string) => {
      return verifyPayment(reference);
    },
    {
      onSuccess: (data) => {
        toast({
          title: "Wallet top-up successful!",
          description: `Your wallet has been topped up with ${data.amount}.`,
          icon: (
            <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
              <FaCircleCheck className="text-state-success-600" />
            </div>
          ),
        });
      },
      onError: (error: any) => {
        console.error("Error during payment verification:", error);
        const errorMessage = !error?.response
          ? "Network error: Please check your internet connection."
          : error.response?.data?.errors ||
            error.response?.data?.message ||
            "An unexpected error occurred.";

        toast({
          title: "Verification failed",
          description: errorMessage,
          variant: "error",
          icon: (
            <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
              <MdCancel className="text-state-error-500" />
            </div>
          ),
        });
      },
    }
  );
};
