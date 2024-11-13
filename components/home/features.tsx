import Image from "next/image";
import React from "react";

const FEATURES = [
  {
    image: "/home/package.svg",
    bold: "Send A",
    text: "Package",
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
    <div className="grid grid-cols-3 gap-6 px-6 pb-2">
      {FEATURES.map((item) => (
        <div
          className="text-black-charcoal bg-[#F4F4F4] rounded-xl p-4"
          key={item.text}
        >
          <Image
            width={100}
            height={100}
            quality={100}
            alt={item.text}
            src={item.image}
            className="w-8 h-8 mx-auto"
          />
          <p className="font-extrabold text-sm tracking-[-0.4px] text-center">
            {item.bold}
            <span className="block font-medium text-xs">{item.text}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
