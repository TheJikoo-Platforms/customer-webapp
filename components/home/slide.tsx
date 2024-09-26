import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Slide = ({
  data,
}: {
  data: {
    title: React.JSX.Element;
    smallBody: React.JSX.Element;
    imageUrl: string;
    city: string;
  }[];
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 5000); // Change slide every 5 seconds

    const resetTransitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 5500); // Reset transition state 500ms after slide change

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(resetTransitionTimer);
    };
  }, [currentSlide, data.length, isTransitioning]);

  return (
    <div className="pl-5 lg:pl-[36px] py-3">
      <div className="flex sm:gap-10 items-center relative ">
        {/* Left side */}
        <div className="flex-1 lg:py-3">
          {/* Location */}
          <motion.h2 className="text-primary font-medium text-xs sm:text-text-lg flex items-center gap-1 sm:gap-2 lg:gap-3 mb-2.5 sm:max-lg:mb-4">
            <FaLocationDot className=" w-[7px] sm:w-2.5 xl:w-[16px]" />
            Port Harcourt
          </motion.h2>
          {/* Slide Text */}
          <motion.div
            key={data[currentSlide].imageUrl}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.9 }}
            onAnimationComplete={() => setIsTransitioning(false)}
          >
            <h1 className="font-bold max-sm400:text-[22px]/[24px] text-[28px]/[32px] sm:text-3xl xl:text-[42px]/[50px] leading-none tracking-[-1.82px] my-2.5">
              {data[currentSlide].title}
            </h1>
            <p className="text-[10px]/[13px] dark:text-[#7E7E86] sm:text-sm xl:text-[15.22px]/[19.82px] tracking-[0.05px] sm:max-lg:w-4/5 xl:max-xl:w-3/5">
              {data[currentSlide].smallBody}
            </p>
          </motion.div>
          <div className="mt-4">
            <Button
              size={"sm"}
              className="bg-black uppercase sm:py-2.5 sm:rounded-md text-[10px] sm:text-xs"
              asChild
            >
              <Link href={"/store"}>Order now</Link>
            </Button>
          </div>
        </div>
        {/* Right side*/}
        <div className="max-w-[45%]">
          <motion.div
            key={data[currentSlide].imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-h-[215px] w-full sm500:flex sm500:justify-end"
          >
            <Image
              alt="vendor"
              width={600}
              height={600}
              className="w-auto min-w-[170px] object-contain h-[215px]"
              src={data[currentSlide].imageUrl}
            />
          </motion.div>
        </div>
        <div className="absolute flex gap-2.5 bottom-2 right-10">
          {data.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 border-4 border-white outline outline-[#F0F0F0] rounded-full bg-[#A6A6A6] ${
                i === currentSlide ? "outline-jikoo-brand-green/50 " : ""
              } transition-all`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
