'use client'
import { motion } from "framer-motion";

export const Transition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
