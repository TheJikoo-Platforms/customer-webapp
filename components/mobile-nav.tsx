"use client";
import { NAVLIST } from "@/lib/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BottomNav = () => {
  const pathname = usePathname();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;
      // If window height is smaller than document height, the keyboard is likely visible
      setIsKeyboardVisible(windowHeight < documentHeight);
    };

    const handleFocus = () => {
      handleResize(); // Check when an input is focused
    };

    const handleBlur = () => {
      setTimeout(() => handleResize(), 300); // Check after input loses focus
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("focusin", handleFocus);
    window.addEventListener("focusout", handleBlur);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("focusin", handleFocus);
      window.removeEventListener("focusout", handleBlur);
    };
  }, []);

  useEffect(() => {
    // console.log(isKeyboardVisible)
  }, [isKeyboardVisible]);

  const activePath = pathname.slice(1).split("/").at(0);

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 w-full bg-white dark:bg-primary-foreground  z-10 "
        style={{
          transform: isKeyboardVisible ? "translateY(50px)" : "translateY(0)",
          boxShadow: "0px -10px 18px -2px #10192812",
        }}
      >
        <ul className="flex w-full text-[9px]/[11.72px]">
          {NAVLIST.map((el) => (
            <li key={el.label} className="w-full ">
              <Link
                href={el.path}
                className={`flex flex-col  justify-center items-center py-3 relative ${
                  activePath === el.label.toLowerCase()
                    ? "text-primary"
                    : "text-[#383E3B] dark:text-white"
                }`}
              >
                {activePath === el.label.toLowerCase() && (
                  <motion.span
                    layoutId="sd"
                    className="absolute bg-primary top-0 left-0 w-full h-[2px] "
                  />
                )}
                <div className="mb-1.5">{<el.icon />}</div>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style>{`
      @supports (-webkit-touch-callout: none) {
  /* CSS specific to iOS devices */ 
  }
  nav{
  padding-bottom: env(safe-area-inset-bottom)
  }
      
      `}</style>
    </>
  );
};
