"use client";
import React from "react";
import { IProductItem } from "../../types";
import FoodItemContainer from "@/components/food-items/food-items-container";

interface IAvailableProducts {
  products: IProductItem[];
  query: string;
}

export const AvailableProducts = ({ products, query }: IAvailableProducts) => {
  return (
    <div className="">
      <p className="text-[#1E1E1E] md:hidden">
        {products?.length} results for “{query}”
      </p>

      <div className="hidden md:block">
        <p className="text-sm">Results showing for Amala</p>
        <p className="text-xl tracking-[-0.4px] font-bold mt-3">{query}</p>
      </div>
      {products && <FoodItemContainer foodItems={products} />}
    </div>
  );
};
