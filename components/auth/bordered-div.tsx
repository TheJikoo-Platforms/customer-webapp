import React from "react";
import { cn } from "@/lib/utils";

export interface BorderDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const BorderedDiv = React.forwardRef<HTMLDivElement, BorderDivProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex w-full font-medium rounded-sm border border-[#d0d4dd] dark:border-white/60 p-4 focus-within:border focus-within:border-state-success-200 transition-all",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BorderedDiv.displayName = "BorderedDiv";

export default BorderedDiv;
