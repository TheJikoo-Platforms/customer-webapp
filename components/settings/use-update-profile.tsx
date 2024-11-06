import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { updateUserProfile } from "@/api/requests";

export const useUpdateUserProfile = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient(); // Access query client for invalidation
  return useMutation(
    async (values: {
      firstname?: string;
      lastname?: string;
      email?: string;
      dob?: string;
      imageFile?: File | undefined | null;
    }) => {
      return updateUserProfile(values);
    },
    {
      retry: 3,
      onSuccess: () => {
        // Invalidate the "user" query to refresh data across components
        queryClient.invalidateQueries(["user"]);

        toast({
          title: "Profile updated successfully!",
          icon: (
            <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
              <FaCircleCheck className="text-state-success-600" />
            </div>
          ),
        });
      },
      onError: (error: any) => {
        console.error("Error during update:", error);
        const errorMessage = !error?.response
          ? "Network error: Please check your internet connection."
          : error.response?.data?.errors ||
            error.response?.data?.message ||
            "An unexpected error occurred.";

        toast({
          title: "Update failed",
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
