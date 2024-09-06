"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const STATUS = ["active", "settled"];

export const OrdersTabButton = () => {
      const params = useSearchParams();
      const status = params.get("status") ?? "active";
    return (
      <div className="rounded-[4px] bg-[#F0F0F0] p-[3px] flex relative dark:bg-primary-foreground">
        {STATUS.map((el) => (
          <Link
            href={`?${new URLSearchParams({
              status: el,
            })}`}
            className={`px-4 py-2 text-[10px] sm:text-base flex overflow-hidden  ${
              status === el ? "text-primary" : ""
            }`}
          >
            <span className="z-[2] capitalize">{el}</span>
            {status === el && (
              <motion.span
                className={`absolute top-[3px] rounded-[4px]  ${
                  status === "active" ? "left-[3px]" : "right-[3px]"
                } bg-white dark:bg-secondary-foreground w-[63px] h-[30px] md:w-[80px] md:h-[42px] `}
                layoutId="ssdfaansder"
              />
            )}
          </Link>
        ))}
      </div>
    );
};
