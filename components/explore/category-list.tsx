"use client";

import { cn } from "@/lib/utils";
import { HorizontalScroll } from "../horizontal-scroll";
import { Text } from "../ui/text";
import { ExploreItem } from "./explore-item";
import { ICategoriesData } from "../types";
import { Divider } from "../home/divider";

export const CategoryContainer = ({
  className,
  data,
}: {
  className?: string;
  data: ICategoriesData[];
}) => {
  return (
    <div className="px-6">
      <div className="flex gap-3 items-center mb-3">
        <Text className="text-xl tracking-[-0.4px] text-black-charcoal hidden md:block">
          Categories
        </Text>
        <p className="text-sm text-[#989898] tracking-[-0.4px] block md:hidden flex-1 text-nowrap font-semibold">
          What Are You Craving?
        </p>
        <Divider className="bg-[#eee]" />
      </div>
      <HorizontalScroll
        className={cn("gap-3 md:gap-[50px] flex items-center", className)}
      >
        {data?.map((el, key) => (
          <ExploreItem href="" data={el} key={key} />
        ))}
      </HorizontalScroll>
    </div>
  );
};
