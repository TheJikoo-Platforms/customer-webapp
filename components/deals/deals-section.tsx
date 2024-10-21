"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { DealItem } from "./deal-item";

export const DealsSection = () => {
  const foodItems = useAppSelector(
    (state: RootState) => state.foodItemData.foodItems
  );
  return (
    <div className="grid grid-cols-2 sm600:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {foodItems.map((item, index) => (
        <DealItem data={item} key={index} />
      ))}
    </div>
  );
};
