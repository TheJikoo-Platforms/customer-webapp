import React from "react";
import { FoodItem } from "./food-item";
import { IProductItem } from "../types";

interface IFoodItemContainerProps {
  foodItems: IProductItem[];
  isLessDetailed?: boolean;
}

const FoodItemContainer = ({
  foodItems,
  isLessDetailed,
}: IFoodItemContainerProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
      {foodItems?.map((foodItem, index) => (
        <li key={index}>
          <FoodItem data={foodItem} isLessDetailed={isLessDetailed} />
        </li>
      ))}
    </ul>
  );
};

export default FoodItemContainer;
