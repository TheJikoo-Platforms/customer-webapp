"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";


export function ToggleTheme() {
  return null;
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname()
  // After mounting, we have access to the theme

  // const handleThemeMetaChange = () => {

  //   // Select all meta tags
  //    const metas = document.querySelectorAll("meta");
  //   if (metas) {
  //      // loops through meta node list
  //      metas.forEach((el) => {
  //        // find the theme meta
  //        if (el.name === "theme-color") {
  //          if (theme === "dark") {
  //            el.content = "#272f2b";
  //          } else {
  //            el.content = "#f0f0f0";
  //          }
  //        }
  //      });
  //    }
  // }
  // React.useEffect(() => {
  //   setMounted(true)
  //  handleThemeMetaChange()
    
    
  // }, []);

  // React.useEffect(() => {
  //   handleThemeMetaChange()
  // },[theme, pathname])

  if (!mounted) return null;

  const toggleTheme = () => {
    // Get the current page
    const page = document.querySelector("html")!;
    // Ensure the button exists
    const btn = document.getElementById("theme-toggle-btn");
    if (!btn) {
      console.error("Button not found");
      return;
    }

    // Get the position of the button for circle start point
    const btnPosition = btn.getBoundingClientRect();
    const circleSize = Math.max(window.innerWidth, window.innerHeight);

    // Create a circle div
    const circle = document.createElement("div");
    circle.classList.add("circle");
    console.log(circle);

    // Position our circle
    circle.style.width = circle.style.height = `${circleSize * 2}px`;
    circle.style.left = `${btnPosition.left - circleSize}px`;
    circle.style.top = `${btnPosition.top - circleSize}px`;

    // Append circle to the page
    document.body.appendChild(circle);

    // Add animation class
    circle.classList.add("animate");

    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      // Remove the circle after the animation
      circle.remove();
    }, 500); // This should match the animation duration
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-none md:border-none"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");

      }}
      // onClick={toggleTheme}
      id="theme-toggle-btn"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
