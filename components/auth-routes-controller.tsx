"use client";
import { useEffect, useState } from "react";
import { ChildrenProps } from "./wrappers";
import { useTransitionRouter } from "next-view-transitions";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { setIsAuthenticated } from "@/redux-store/slices/authslice";

export default async function AuthController({ children }: ChildrenProps) {
  const router = useTransitionRouter();
  const [isChecking, setIsChecking] = useState(true);
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      dispatch(setIsAuthenticated(true));
    } else {
      // If no token, redirect to the login page
      dispatch(setIsAuthenticated(true));
      router.push("/login");
    }

    setIsChecking(false); // Finish the checking state
  }, [router]);

  // Wait until the authentication status is determined
  if (isChecking || typeof window === "undefined") {
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    return null; // Render nothing while checking authentication
  }

  // If authenticated, render the children
  if (isAuthenticated) {
    return <>{children}</>;
  }

  return null; // If not authenticated, don't render anything (or redirect to login as done in useEffect)
}
