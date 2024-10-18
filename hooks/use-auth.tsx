"use client";
import { setIsAuthenticated } from "@/redux-store/slices/authslice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      dispatch(setIsAuthenticated(true));
    } else {
      console.log(token);
      dispatch(setIsAuthenticated(false));
    }
  }, [dispatch]);
};

export default useAuthCheck;
