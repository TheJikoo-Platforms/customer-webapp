import React from "react";
import { ChildrenProps } from "../wrappers";
import { backdropVariants } from "@/variants";
import { motion } from "framer-motion";

export const Backdrop = ({ children }: ChildrenProps) => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-[#3E383866] backdrop-blur-[2px] w-full h-full z-50"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
