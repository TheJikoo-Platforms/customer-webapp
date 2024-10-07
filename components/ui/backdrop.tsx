import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackdropProps {
  children: React.ReactNode;
  className?: string;
  variants: any;
}

export const Backdrop = ({ children, variants, className }: BackdropProps) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "fixed inset-0 bg-[#3E383866] backdrop-blur-[2px] z-50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
