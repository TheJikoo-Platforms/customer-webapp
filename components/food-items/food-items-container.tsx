import React from "react";
import { IFoodItem } from "../types";
import { FoodItem } from "./food-item";

const FoodItemContainer = ({ foodItems }: { foodItems: IFoodItem[] }) => {
  return (
    <ul className="grid grid-cols-1 sm700:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
      {foodItems.map((foodItem, index) => (
        <li key={index}>
          <FoodItem data={foodItem} />
        </li>
      ))}
    </ul>
  );
};

export default FoodItemContainer;
