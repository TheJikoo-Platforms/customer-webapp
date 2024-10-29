import { IProductItem } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodItemState {
  wishListItems: IProductItem[];
}

const initialState: FoodItemState = {
  wishListItems: [],
};

const foodItemSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    addOrRemoveFromWishList(state, action: PayloadAction<IProductItem>) {
      const product = action.payload;
      const existingIndex = state.wishListItems.findIndex(
        (wishListItem) => wishListItem._id === product._id
      );

      if (existingIndex >= 0) {
        // Remove if already in wishlist
        state.wishListItems.splice(existingIndex, 1);
      } else {
        // Add if not in wishlist
        state.wishListItems.push(product);
      }
    },
    clearWishList(state) {
      state.wishListItems = [];
    },
  },
});

export const { addOrRemoveFromWishList, clearWishList } = foodItemSlice.actions;
export default foodItemSlice.reducer;
