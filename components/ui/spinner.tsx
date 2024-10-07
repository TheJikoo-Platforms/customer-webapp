import { cn } from "@/lib/utils";
import React from "react";

const Spinner = ({ color = "text-[#379E66]" }: { color?: string }) => {
  return (
    <div className={cn("lds-ring inline-block relative w-20 h-20", color)}>
      <div className="lds-ring-child"></div>
      <div className="lds-ring-child"></div>
      <div className="lds-ring-child"></div>
      <div className="lds-ring-child"></div>
    </div>
  );
};

export default Spinner;
