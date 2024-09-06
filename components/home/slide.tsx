import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { WhiteCard } from "@/components/white-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Slide = ({ data }: { data: any[] }) => {
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
    <div className="relative">
      <>
        <div className="flex  sm:gap-10 justify-between">
          <div className="py-4 w-[70%] ms:w-[65%]">
            <motion.h2
              className="text-primary font-medium text-xs sm:text-text-lg flex items-center gap-1 sm:gap-2 lg:gap-3 mb-2.5 sm:max-lg:mb-4"
            >
              <FaLocationDot className=" w-[7px] sm:w-2.5 xl:w-[16px]" />
              Port Harcourt
            </motion.h2>
            <motion.div
              key={data[currentSlide].imageUrl}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.9 }}
              onAnimationComplete={() => setIsTransitioning(false)}
              className="space-y-2.5 sm:max-lg:space-y-4 max-w-[500px]"
            >
              <h1 className="font-bold max-sm400:text-2xl/[28px] text-[28px]/[32px] sm:text-3xl xl:text-[42px]/[50px]  leading-none tracking-[-6.5%] sm:max-lg:w-1/2 lg:max-xl:w-2/3 ">
                {data[currentSlide].title}
              </h1>
              <p className="text-[10px]/[13px] dark:text-[#7E7E86] sm:text-sm xl:text-[15.22px]/[19.82px] tracking-[0.5%] sm:max-lg:w-4/5 lg:max-xl:w-3/5">
                {data[currentSlide].smallBody}
              </p>
            </motion.div>
            <div className="mt-5 md:mt-8 xl:mt-11">
              <Button size={"sm"} className="bg-black uppercase sm:py-2.5 sm:rounded-md" asChild>
                <Link href={"/store"}>Order now</Link>
              </Button>
            </div>
          </div>
          <motion.div
            key={data[currentSlide].imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-48 md:h-[200px] xl:h-[230px]"
          >
            <Image
              alt="vendor"
              width={600}
              height={600}
              className=" h-4/6 max-sm400:top-5 sm400:h-5/6 md:h-full w-auto absolute right-0 top-0 max-h-[244px] "
              src={data[currentSlide].imageUrl}
              // priority
            />
          </motion.div>
        </div>
      </>
      <div className="absolute bottom-6 right-7 md:right-8 z-10 flex gap-1 md:gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentSlide ? "dot-active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};
