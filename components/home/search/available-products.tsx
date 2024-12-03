"use client";
import React from "react";
import { IProductItem } from "../../types";
import FoodItemContainer from "@/components/food-items/food-items-container";

interface IAvailableProducts {
  products: IProductItem[];
  query: string;
}

export const AvailableProducts = ({ products, query }: IAvailableProducts) => {
  const hasResults = products?.length > 0;

  return (
    <div>
      <p className="uppercase text-xs font-semibold tracking-[1px] text-white bg-[#036B26] px-6 py-2 mb-6">
        {hasResults
          ? `Showing results for "${query}"`
          : `No results available for "${query}"`}
      </p>

      {/* Food items display */}
      {hasResults && <FoodItemContainer foodItems={products} />}
    </div>
  );
};
