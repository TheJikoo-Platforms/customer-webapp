"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Slide data for the carousel
const slides = [
  {
    id: 1,
    mainText: (
      <>
        <span className="text-jikoo-brand-green">Share</span> the Love of Good
        Food
      </>
    ),
    subText: "Win 3 free deliveries",
    link: "",
    linkText: "Refer Now ",
    imageUrl: "/home/slide-one.svg",
  },
  {
    id: 2,
    mainText: (
      <>
        Crave, Order, Enjoy
        <span className="text-jikoo-brand-green"> All in One Place.</span>
      </>
    ),
    subText: "",
    link: "",
    linkText: "Get Started ",
    imageUrl: "/home/slide-two.svg",
  },
];

// Animation variants for slide transitions
const variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300, // Adjusted to be more subtle
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300, // Matches initial values
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
};

interface SliderCardProps {
  className?: string;
  innerClassName?: string;
  textContainerStyle?: string;
  headingStyle?: string;
  textStyle?: string;
  imageStyle?: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  className,
  innerClassName,
  textContainerStyle = "max-w-[171px]",
  headingStyle = "text-xl",
  textStyle = "text-sm",
  imageStyle = "w-[132px]",
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn("flex flex-col px-6 md:px-0", className)}>
      <div className={cn("relative overflow-hidden", innerClassName)}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slides[currentSlide].id}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 bg-[#E5F5EB] rounded-[13px] p-4"
          >
            <div className="w-full flex justify-between h-full">
              <div
                className={cn(
                  " flex flex-col justify-between h-full",
                  textContainerStyle
                )}
              >
                <div>
                  <p
                    className={cn(
                      "tracking-[-1px] leading-6 font-extrabold",
                      headingStyle
                    )}
                  >
                    {slides[currentSlide].mainText}
                  </p>
                  <p className={cn("text-jikoo-brand-green mt-1", textStyle)}>
                    {slides[currentSlide].subText}
                  </p>
                </div>
                <p className="text-sm font-medium text-[#1E1E1E] tracking-[-0.4px]">
                  {slides[currentSlide].linkText}{" "}
                  <span className="text-jikoo-brand-green">{">"}</span>
                </p>
              </div>

              <div className="overflow-hidden self-end">
                {slides[currentSlide].imageUrl && (
                  <Image
                    alt="Slide image"
                    width={1000}
                    height={1000}
                    quality={100}
                    className={cn("h-auto rounded-md", imageStyle)}
                    src={slides[currentSlide].imageUrl}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-1 self-center my-1.5">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-[7px] cursor-pointer ${
              i === currentSlide ? "w-[16px]  bg-[#242E25]" : "w-1 bg-[#D9D9D9]"
            } transition-all`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCard;
