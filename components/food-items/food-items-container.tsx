import React from "react";
import { FoodItem } from "./food-item";
import { IProductItem } from "../types";

const FoodItemContainer = ({ foodItems }: { foodItems: IProductItem[] }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
      {foodItems?.map((foodItem, index) => (
        <li key={index}>
          <FoodItem data={foodItem} />
        </li>
      ))}
    </ul>
  );
};

export default FoodItemContainer;
