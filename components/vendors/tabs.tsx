"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import React, { useState } from "react";
import FoodItemContainer from "../food-items/food-items-container";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Main");
  const tabList = ["Main", "Protein", "Swallow", "Fish", "Dessert"];
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const foodItems = useAppSelector(
    (state: RootState) => state.foodItemData.foodItems
  );
  return (
    <div className="mt-1">
      <div className="flex justify-around border-b border-b-grey-200 overflow-x-auto scrollbar-none max-w-full">
        {tabList.map((tab) => (
          <button
            key={tab}
            className={`text-sm p-4 font-medium relative after:absolute after:bottom-[-0.5px] after:left-0 after:h-[1px] after:transition-all after:content-[''] after:duration-300 ${
              activeTab === tab
                ? "text-jikoo-brand-green after:bg-jikoo-brand-green after:w-full"
                : "text-grey-700 after:bg-grey-200 after:w-0"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <p className="py-4 font-bold text-sm">{activeTab}</p>

      <FoodItemContainer foodItems={foodItems} />
    </div>
  );
};

export default TabComponent;
