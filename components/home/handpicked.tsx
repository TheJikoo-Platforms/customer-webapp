"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FoodItem } from "@/components/food-items/food-item";
import { createFilledArray } from "@/lib/utils";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import FoodItemContainer from "../food-items/food-items-container";

export const HandpickedForYou = () => {
  const foodItems = useAppSelector(
    (state: RootState) => state.foodItemData.foodItems
  );
  return (
    <section className="px-5 lg:px-[36px] pt-2">
      <h2 className="font-bold text-xl mb-3 tracking-[-0.4px]">
        Handpicked for you
      </h2>
      <FoodItemContainer foodItems={foodItems} />
      {/* <ProductSlider /> */}
      <div className="mt-6 md:mt-12 flex justify-center pb-5">
        <Link href={"/"} className="text-sm flex items-center gap-1">
          See More
          <ChevronDown size={16} className="text-primary " />
        </Link>
      </div>
    </section>
  );
};
