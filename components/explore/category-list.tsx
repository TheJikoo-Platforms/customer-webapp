"use client";

import { cn } from "@/lib/utils";
import { HorizontalScroll } from "../horizontal-scroll";
import { Text } from "../ui/text";
import { ExploreItem } from "./explore-item";
import { ICategoriesData } from "../types";

export const CategoryContainer = ({
  className,
  data,
}: {
  className?: string;
  data: ICategoriesData[];
}) => {
  return (
    <div className="pl-5 lg:pl-6">
      <Text className="text-xl mb-3 tracking-[-0.4px]">Categories</Text>
      <HorizontalScroll className={cn("gap-6 flex", className)}>
        {data?.map((el, key) => (
          <ExploreItem href="" data={el} key={key} />
        ))}
      </HorizontalScroll>
    </div>
  );
};
