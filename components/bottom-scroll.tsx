'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.div
      className="fixed bottom-0 w-full bg-blue-500 p-4"
      initial={{ y: "100%" }}
      animate={{ y: isVisible ? "0%" : "100%" }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      {/* Your navigation items */}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </motion.div>
  );
}
