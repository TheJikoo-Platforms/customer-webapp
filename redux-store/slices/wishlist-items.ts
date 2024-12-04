import { IProductItem } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodItemState {
  wishListItems: IProductItem[];
}

// Helper functions for localStorage
const STORAGE_KEY = "wishlistItems";

const getStoredWishlist = (): IProductItem[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveWishlistToStorage = (items: IProductItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

const initialState: FoodItemState = {
  wishListItems: getStoredWishlist(),
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

      // Save to localStorage after every change
      saveWishlistToStorage(state.wishListItems);
    },
    clearWishList(state) {
      state.wishListItems = [];
      saveWishlistToStorage([]);
    },
  },
});

export const { addOrRemoveFromWishList, clearWishList } = foodItemSlice.actions;
export default foodItemSlice.reducer;
