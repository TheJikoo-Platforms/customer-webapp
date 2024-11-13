"use client";
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

const SliderCard: React.FC = () => {
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
    <div className="flex flex-col">
      <div className="relative w-[358px] h-[164px] overflow-hidden">
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
              <div className="max-w-[171px] flex flex-col justify-between h-full">
                <div>
                  <p className="text-xl tracking-[-1px] leading-6 font-extrabold ">
                    {slides[currentSlide].mainText}
                  </p>
                  <p className="text-sm text-jikoo-brand-green mt-1">
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
                    className="w-[132px] h-auto rounded-md"
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

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// // Slide data for the carousel
// const slides = [
//   {
//     id: 1,
//     mainText: (
//       <>
//         <span className="text-jikoo-brand-green">Share</span> the Love of Good
//         Food
//       </>
//     ),
//     subText: "Win 3 free deliveries",
//     linkText: "Refer Now ",
//     imageUrl: "/home/slide-one.svg",
//   },
//   {
//     id: 2,
//     mainText: (
//       <>
//         Crave, Order, Enjoy
//         <span className="text-jikoo-brand-green"> All in One Place.</span>
//       </>
//     ),
//     subText: "",
//     linkText: "Get Started ",
//     imageUrl: "/home/slide-two.svg",
//   },
//   {
//     id: 3,
//     mainText: (
//       <>
//         Enjoy, Order, Enjoy
//         <span className="text-jikoo-brand-green"> Go in One Place.</span>
//       </>
//     ),
//     subText: "",
//     linkText: "Get Started ",
//     imageUrl: "/home/slide-three.svg",
//   },
// ];

// const SliderCard: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         const nextSlide = prev + direction;

//         // Check if we're at the start or end of the slides to reverse direction
//         if (nextSlide >= slides.length || nextSlide < 0) {
//           setDirection((prevDirection) => -prevDirection); // Reverse direction
//           return prev; // Stay on the current slide briefly before moving in the other direction
//         }

//         return nextSlide;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [direction]);

//   return (
//     <div className="relative w-[358px] h-[164px] overflow-hidden">
//       <motion.div
//         className="flex gap-4"
//         animate={{ x: -currentSlide * 368 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="min-w-[358px] bg-[#E5F5EB] rounded-[13px] p-4 flex flex-col justify-between"
//           >
//             <div className="flex justify-between h-full">
//               <div className="max-w-[171px] flex flex-col justify-between">
//                 <div>
//                   <p className="text-xl tracking-[-1px] leading-6 font-extrabold">
//                     {slide.mainText}
//                   </p>
//                   <p className="text-sm text-jikoo-brand-green mt-1">
//                     {slide.subText}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-[#1E1E1E] tracking-[-0.4px]">
//                   {slide.linkText}{" "}
//                   <span className="text-jikoo-brand-green">{">"}</span>
//                 </p>
//               </div>
//               <div className="overflow-hidden self-end">
//                 {slide.imageUrl && (
//                   <Image
//                     alt="Slide image"
//                     width={1000}
//                     height={1000}
//                     quality={100}
//                     className="w-[132px] h-auto rounded-md"
//                     src={slide.imageUrl}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default SliderCard;
