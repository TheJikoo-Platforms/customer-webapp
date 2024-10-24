"use client";
import { getUser } from "@/api/requests";
import { useToast } from "@/components/ui/use-toast";
import { setIsAuthenticated } from "@/redux-store/slices/authslice";
import { setUserData } from "@/redux-store/slices/user-slice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Check if user is authenticated
  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  }, [dispatch]);

  // Fetch user data if authenticated
  const { data, error, isLoading } = useQuery(["user"], getUser, {
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
    onError: (error: any) => {
      const errorMessage = !error?.response
        ? "Network error: Please check your internet connection."
        : error.response?.data?.message || "An unexpected error occurred.";

      toast({
        title: errorMessage,
        variant: "error",
        icon: (
          <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
            <MdCancel className="text-state-error-500" />
          </div>
        ),
      });
    },
    onSuccess: (data) => {
      // Handle successful fetching, such as saving the user data to state or context
      // console.log(data.data);
      dispatch(setUserData(data.data));
    },
  });
};

export default useAuthCheck;
