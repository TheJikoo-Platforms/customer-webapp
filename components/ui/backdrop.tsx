"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackdropProps {
  children: React.ReactNode;
  className?: string;
  variants: any;
}

export const Backdrop = ({ children, variants, className }: BackdropProps) => {
  useEffect(() => {
    // Prevent body from scrolling when the backdrop is visible
    document.body.classList.add("overflow-hidden");

    return () => {
      // Restore body scroll when the backdrop is hidden
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "fixed inset-0 bg-[#3E383866] backdrop-blur-[2px] z-[200] w-full h-full",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
