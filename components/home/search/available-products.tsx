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
      {/* Mobile view */}
      <p className="text-[#1E1E1E] md:hidden mb-5">
        {hasResults
          ? `${products.length} results for “${query}”`
          : `No results available for ${query}`}
      </p>

      {/* Desktop view */}
      <div className="hidden md:block">
        <p className="text-sm">
          {hasResults
            ? query
              ? `Results showing for ${query}`
              : `Search for an item`
            : `No results available for ${query}`}
        </p>
        {hasResults && (
          <p className="text-xl tracking-[-0.4px] font-bold mt-3 capitalize mb-6 pb-6 border-b border-b-grey-100">
            {query}
          </p>
        )}
      </div>

      {/* Food items display */}
      {hasResults && <FoodItemContainer foodItems={products} />}
    </div>
  );
};
