"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export const ScrollWrapper = ({
  className,
  children,
  asChild,
}: {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
    }) => {
     const [hasScrolled, setHasScrolled] = useState(false);
     const Comp = asChild ? Slot : "div";

     useEffect(() => {
       const handleScroll = () => setHasScrolled(window.scrollY > 0);
       window.addEventListener("scroll", handleScroll);
       return () => window.removeEventListener("scroll", handleScroll);
     }, []);
  return (
    <Comp
      className={cn(
        `${hasScrolled ? "shadow-lg transition duration-300 ease-in-out" : ""}`,
        className
      )}
      children={children}
    />
  );
};

ScrollWrapper.displaceName = "ScrollWrapper";