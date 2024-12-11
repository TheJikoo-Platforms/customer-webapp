import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { MdCancel } from "react-icons/md";
import { getWalletBalance } from "@/api/requests";
import {
  setCurrency,
  setWalletBalance,
} from "@/redux-store/slices/wallet-slice";
import { useAppDispatch } from "@/redux-store/hooks";

export const useWalletBalance = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ["walletBalance"],
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
    retry: 1,
    queryFn: getWalletBalance,
    onError: (error: any) => {
      console.error("Error fetching wallet balance:", error);
      const errorMessage = !error?.response
        ? "Network error: Please check your internet connection."
        : error.response?.data?.errors ||
          error.response?.data?.message ||
          "An unexpected error occurred.";

      toast({
        title: "Failed to fetch balance",
        description: errorMessage,
        variant: "error",
        icon: (
          <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
            <MdCancel className="text-state-error-500" />
          </div>
        ),
      });
    },
    onSuccess: (data) => {
      dispatch(setCurrency(data.data.currency));
      dispatch(setWalletBalance(data.data.balance));
    },
  });
};
