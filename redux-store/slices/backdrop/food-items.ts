import { IProductItem } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodItemOverlayState {
  showProductItemOverlay: boolean;
  currentProductItem: IProductItem | null;
}

const initialState: FoodItemOverlayState = {
  showProductItemOverlay: false,
  currentProductItem: null,
};

const foodItemOverlaySlice = createSlice({
  name: "foodItemOverlay",
  initialState,
  reducers: {
    setShowProductItemOverlay(state, action: PayloadAction<boolean>) {
      state.showProductItemOverlay = action.payload;
    },

    setCurrentProductItem(state, action: PayloadAction<IProductItem | null>) {
      state.currentProductItem = action.payload;
    },
  },
});

export const { setShowProductItemOverlay, setCurrentProductItem } =
  foodItemOverlaySlice.actions;

export default foodItemOverlaySlice.reducer;
