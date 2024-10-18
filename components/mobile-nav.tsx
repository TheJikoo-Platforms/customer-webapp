"use client";
import { NAVLIST } from "@/lib/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { setShowSearchOverlay } from "@/redux-store/slices/backdrop/search";
import { setShowCartOverlayMobile } from "@/redux-store/slices/backdrop/cart";

export const BottomNav = () => {
  const showSearchOverlay = useAppSelector(
    (state: RootState) => state.search.showsearchOverlay
  );
  const dispatch = useAppDispatch();
  const handleOverlay = () => {
    dispatch(setShowSearchOverlay(true));
    dispatch(setShowCartOverlayMobile(false));
  };
  const handleLinkClick = () => {
    dispatch(setShowSearchOverlay(false));
  };
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

  const activePath = showSearchOverlay
    ? "search"
    : pathname.slice(1).split("/").at(0);

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 w-full bg-white dark:bg-primary-foreground z-[150]"
        style={{
          transform: isKeyboardVisible ? "translateY(50px)" : "translateY(0)",
          boxShadow: "0px -10px 18px -2px #10192812",
        }}
      >
        <ul className="flex w-full text-[9px]/[11.72px]">
          {NAVLIST.map((el) =>
            el.label === "search" ? (
              <li key={el.label} className="w-full">
                <button
                  onClick={handleOverlay}
                  className={`flex flex-col justify-center items-center py-3 w-full relative ${
                    showSearchOverlay ? "text-primary" : "text-black"
                  }`}
                >
                  {showSearchOverlay && (
                    <motion.span
                      layoutId="sd"
                      className="absolute bg-primary top-0 left-0 w-full h-[2px] "
                    />
                  )}
                  <div className="mb-1.5 relative">{<el.icon />}</div>
                  {el.name}
                </button>
              </li>
            ) : (
              <li key={el.label} className="w-full" onClick={handleLinkClick}>
                <Link
                  href={el.path}
                  className={`flex flex-col  justify-center items-center py-3 relative ${
                    activePath === el.label.toLowerCase()
                      ? "text-primary"
                      : "text-black"
                  }`}
                >
                  {activePath === el.label.toLowerCase() && (
                    <motion.span
                      layoutId="sd"
                      className="absolute bg-primary top-0 left-0 w-full h-[2px] "
                    />
                  )}
                  <div className="mb-1.5 relative">
                    {<el.icon />}
                    {el.label === "orders" && (
                      <p className="absolute -right-1 top-0 bg-[#BA110B] text-[8px] font-bold text-white rounded-full w-3.5 h-3.5 flex justify-center items-center">
                        2
                      </p>
                    )}
                  </div>
                  {el.name}
                </Link>
              </li>
            )
          )}
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
