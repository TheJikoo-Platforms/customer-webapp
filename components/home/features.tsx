import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const FEATURES = [
  {
    image: "/home/package.svg",
    bold: "Send",
    text: "A Package",
  },
  {
    image: "/home/suggestion.svg",
    bold: "AI Food",
    text: "Suggestions",
  },
  {
    image: "/home/order.svg",
    bold: "Order",
    text: "Tracker",
  },
];

const Features = () => {
  return (
    <div className="flex gap-2.5 md:gap-6 mx-6 pb-2 scrollbar-none overflow-auto">
      {FEATURES.map((item) => (
        <div
          className="text-black-charcoal bg-[#F4F4F4] rounded-xl p-4 min-w-[110px] w-full"
          key={item.text}
        >
          <div className="w-[33px] md:w-[41px] h-[33px] md:h-[41px] bg-jikoo-brand-green rounded-full flex items-center justify-center">
            <Image
              width={100}
              height={100}
              quality={100}
              alt={item.text}
              src={item.image}
              className="w-4 md:w-6 h-4 md:h-6"
            />
          </div>
          <p className="font-extrabold text-xs md:text-sm tracking-[-0.4px] mt-1">
            {item.bold}
          </p>
          <div className="flex justify-between -mt-0.5">
            <span className="block font-medium text-xs md:text-sm">
              {item.text}
            </span>
            <ChevronRight className="w-3 h-auto text-jikoo-brand-green" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
