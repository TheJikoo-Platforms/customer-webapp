import { IFoodItem } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface foodItemOverlayState {
  showFoodItemOverlay: boolean;
  currentFoodItem: IFoodItem | null;
}

const initialState: foodItemOverlayState = {
  showFoodItemOverlay: false,
  currentFoodItem: null,
};

const foodItemOverlaySlice = createSlice({
  name: "foodItemOverlay",
  initialState,
  reducers: {
    setShowFoodItemOverlay(state, action: PayloadAction<boolean>) {
      state.showFoodItemOverlay = action.payload;
    },
    setAddedToCart(state, action: PayloadAction<boolean>) {
      console.log("hrer");
      if (state.currentFoodItem) {
        state.currentFoodItem = {
          ...state.currentFoodItem,
          addedToCart: action.payload,
        };
      }
    },
    setCurrentFoodItem(state, action: PayloadAction<IFoodItem | null>) {
      state.currentFoodItem = action.payload;
    },
  },
});

export const { setShowFoodItemOverlay, setCurrentFoodItem, setAddedToCart } =
  foodItemOverlaySlice.actions;

export default foodItemOverlaySlice.reducer;
