"use client";
import Spinner from "@/components/ui/spinner";
import { useTransitionRouter } from "next-view-transitions";
import { useEffect } from "react";

export const AccountCreated = () => {
  const router = useTransitionRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-80px)] md:h-[calc(100dvh-200px)]">
      <div className="text-center text-grey-900">
        <Spinner />
        <h2 className="text-lg font-bold">Account set up completed</h2>
        <p className="text-[10.5px] ">Getting you the best deal</p>
      </div>
    </div>
  );
};
