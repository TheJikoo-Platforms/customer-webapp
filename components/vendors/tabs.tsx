"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import React, { useRef, useState } from "react";
import FoodItemContainer from "../food-items/food-items-container";

const TabComponent = () => {
  const tabList = ["Main", "Protein", "Swallow", "Fish", "Dessert"];
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const foodItems = useAppSelector(
    (state: RootState) => state.foodItemData.foodItems
  );
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const handleTabClick = (tab: string, index: number) => {
    setActiveTab(tab);

    const section = sectionRefs.current[index];
    if (section) {
      const offset = 200; // Adjust this value to control how much to the top
      const scrollPosition = section.offsetTop - offset;

      // Smooth scroll to the desired position with the offset
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Tab Navigation */}
      <div className="pt-1 sticky top-[56px] lg:top-[68px] bg-white z-30 py-3 scrollbar-none w-full overflow-x-auto">
        <div className="flex border-b border-b-grey-200 px-4 lg:px-8 w-fit">
          {tabList.map((tab, index) => (
            <button
              key={tab}
              className={`text-sm p-4 font-medium relative after:absolute after:bottom-[-0.5px] after:left-0 after:h-[1px] after:transition-all after:content-[''] after:duration-300 ${
                activeTab === tab
                  ? "text-jikoo-brand-green after:bg-jikoo-brand-green after:w-full"
                  : "text-grey-700 after:bg-grey-200 after:w-0"
              }`}
              onClick={() => handleTabClick(tab, index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 lg:px-8">
        {tabList.map((tab, index) => (
          <div
            className=""
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)} // Attach the ref to each section
          >
            <p className="py-4 font-bold text-sm">{tab}</p>
            {/* Assuming FoodItemContainer is a component that lists food items */}
            <FoodItemContainer foodItems={foodItems} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
