"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { cn } from "@/lib/utils";

interface AuthImageSectionProps {
  className?: string;
}

const AuthImageSection = ({ className }: AuthImageSectionProps) => {
  return (
    <div
      className={cn(
        "hidden md:block w-1/2 lg:max-w-[45%] max-h-[100dvh] p-4 lg:p-6",
        className
      )}
    >
      <div className="h-[calc(100dvh-32px)] lg:h-[calc(100dvh-48px)]">
        <Image
          className="w-full rounded-[30px] object-cover h-full"
          src="/auth/auth-left-image.png"
          width={700}
          height={810}
          alt="jikoo onboarding image"
        />
        <div className="absolute bottom-0 p-12 text-white max-w-[580px]">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8 font-dm-sans font-semibold text-4xl lg:text-6xl -tracking-[0.02em]"
          >
            Deal With Your Food Cravings
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm lg:text-lg max-w-[380px] font-light pt-2 lg:pt-6 font-dm-sans leading-[21.6px]"
          >
            Enjoy the true taste of 9ja delicacies when you order from Jikoo’s
            top tested vendors.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AuthImageSection;
