import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps {
  text: string;
  className?: string;
}

const AuthHeading = ({ text, className }: ButtonProps) => {
  return (
    <h2
      className={cn(
        "text-center text-lg font-medium font-sf-pro leading-[22px] my-14",
        className
      )}
    >
      {text}
    </h2>
  );
};

export default AuthHeading;
