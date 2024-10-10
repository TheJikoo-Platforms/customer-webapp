import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFoodItem } from "@/components/types";
import { FOODITEMS } from "@/lib/data";

// Import the FOODITEMS array

interface FoodItemState {
  foodItems: IFoodItem[];
}

const initialState: FoodItemState = {
  foodItems: FOODITEMS, // Initialize with the default FOODITEMS array
};

const foodItemSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    updateAddedToCart(
      state,
      action: PayloadAction<{ itemName: string; addedToCart: boolean }>
    ) {
      // Find the food item by name and update its addedToCart status
      const { itemName, addedToCart } = action.payload;
      const foodItem = state.foodItems.find((item) => item.name === itemName);
      if (foodItem) {
        foodItem.addedToCart = addedToCart;
      }
    },
  },
});

export const { updateAddedToCart } = foodItemSlice.actions;
export default foodItemSlice.reducer;
