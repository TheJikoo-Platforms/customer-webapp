"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Minus } from "lucide-react";
import { useValidSearchParam } from "@/hooks/use-valid-searchParams";

export const CartItem = ({ item }: { item: any }) => {
  const remove = useValidSearchParam({
    name: "remove",
    validArr: ["cart"],
  });
  return (
    <div className="flex items-center gap-2.5">
      {remove && (
        <button className="size-[35px] rounded-full bg-[#FFECE5] text-jikoo-error grid place-content-center">
          <Minus />
        </button>
      )}
      <motion.div
        className="p-3 flex-1 rounded-md border border-gray-200 dark:border-gray-600 bg-[#E7F6EC] dark:bg-secondary-foreground flex flex-row gap-3"
        initial={{ width: "calc(100% - 0px)" }} // No button
        animate={{
          width: remove ? "calc(100% - 40px)" : "calc(100% - 0px)", // Adjust the width if button is shown
        }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={"/food/1.png"}
          alt="Pizza"
          className="rounded-[4px]"
          width={126}
          height={100}
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="font-medium line-clamp-1">Pizza Livaroca</p>
            <div className="w-6 h-6 bg-[#f4652f] rounded-full grid place-items-center text-white text-[13px] font-medium leading-[18.85px] shrink-0">
              <div>
                <span className="text-[10px] leading-[14.50px]">X</span>3
              </div>
            </div>
          </div>
          <p className="text-[#475467] text-sm line-clamp-2 mt-2.5">
            Mixed with vegetables with avocado and cilantro, served with lemon
            herb
          </p>
          <p className="mt-2.5 text-[11px]/[14.32px] font-bold">N3,500</p>
        </div>
      </motion.div>
    </div>
  );
};
