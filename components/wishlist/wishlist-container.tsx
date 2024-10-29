"use client";

import { useAppSelector } from "@/redux-store/hooks";
import FoodItemContainer from "../food-items/food-items-container";
import { RootState } from "@/redux-store/store";

export const WishlistContainer = () => {
  const wishListItems = useAppSelector(
    (state: RootState) => state.wishlist.wishListItems
  );
  return (
    <>
      {wishListItems.length > 0 ? (
        <FoodItemContainer foodItems={wishListItems} />
      ) : (
        <p className="text-sm font-medium">Nothing to show here</p>
      )}
    </>
  );
};
