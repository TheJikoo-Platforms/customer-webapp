"use client";
import { useRouter } from "next/router";
import { FaArrowUp } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl"; // You can use any icon library

export const BackToTop = () => {
  //   const router = useRouter();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className="w-full text-white font-bold text-[10px] sm:text-sm md:text-base py-2 sm:py-3 bg-[rgba(39,47,43,0.4)] dark:bg-[rgba(16,19,17,0.4)] flex justify-center gap-1 md:flex-col items-center"
      onClick={scrollToTop}
    >
      <span className="md:order-2">BACK TO TOP</span>
      <SlArrowUp className="md:order-1" />
    </button>
  );
};
