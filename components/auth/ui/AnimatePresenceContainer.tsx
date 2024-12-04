"use client";

import { AnimatePresence, motion } from "framer-motion";

const AnimatePresenceContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "easeInOut",
        stiffness: 50,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div variants={variants} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatePresenceContainer;
