"use client";
import { SlArrowUp } from "react-icons/sl";

export const BackToTop = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className="w-full text-white font-bold text-[10px] sm:text-sm md:text-base py-2 bg-[rgba(39,47,43,0.4)] dark:bg-[rgba(16,19,17,0.4)] flex justify-center gap-1 items-center"
      onClick={scrollToTop}
    >
      <span className="font-bold tracking-wider text-[10px]">BACK TO TOP</span>
      <SlArrowUp className="text-[8px]" />
    </button>
  );
};
