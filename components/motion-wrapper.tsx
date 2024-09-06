"use client";

import React, { FC, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionWrapperProps extends MotionProps {
  children?: ReactNode;
  className?: string;
}

export const MotionWrapper: FC<MotionWrapperProps> = ({
  children,
  ...props
}) => {
  return <motion.div {...props}>{children}</motion.div>;
};

// export default MotionWrapper;
