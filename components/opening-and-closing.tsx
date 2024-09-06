"use client";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const OpenAndClose = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div className="md:w-48 w-24 max-sm:text-[9px] text-sm xl:text-base text-black/60 dark:text-white/60 flex items-center gap-1 md:gap-3 xl:gap-4">
      <Clock className="size-3 md:size-5" />
      {isOpen ? "Open From 6am" : "Closes By 10pm"}
    </div>
  );
};
