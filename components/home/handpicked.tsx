"use client";
import { ChevronDown } from "lucide-react";
import FoodItemContainer from "../food-items/food-items-container";
import { useProducts } from "./hooks/use-products";

export const HandpickedForYou = () => {
  const { data, isLoading, isError, error } = useProducts(1, 8);
  return (
    <section className="px-5 lg:px-[36px] pt-2 pb-[125px] lg:pb-0">
      <h2 className="font-bold text-xl mb-3 tracking-[-0.4px]">
        Handpicked for you
      </h2>
      <FoodItemContainer foodItems={data?.data.products} />
      <div className="mt-6 md:mt-12 flex justify-center pb-5">
        {/* <Link href={"/"} className="text-sm flex items-center gap-1"> */}
        <p className="text-sm flex items-center gap-1">
          See More
          <ChevronDown size={16} className="text-primary " />
        </p>
      </div>
    </section>
  );
};
