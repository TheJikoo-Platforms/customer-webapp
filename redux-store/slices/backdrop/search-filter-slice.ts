import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchFilterState {
  showFilterOverlay: boolean;
  priceRange: {
    min: number;
    max: number;
  };
  selectedRating: string | null;
  selectedDeliveryTime: number | null; // in minutes
}

const initialState: SearchFilterState = {
  showFilterOverlay: false,
  priceRange: {
    min: 0,
    max: 10000,
  },
  selectedRating: null,
  selectedDeliveryTime: null,
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setShowFilterOverlay(state, action: PayloadAction<boolean>) {
      state.showFilterOverlay = action.payload;
    },
    setPriceRange(state, action: PayloadAction<{ min: number; max: number }>) {
      state.priceRange = action.payload;
    },
    setSelectedRating(state, action: PayloadAction<string | null>) {
      state.selectedRating = action.payload;
    },
    setSelectedDeliveryTime(state, action: PayloadAction<number | null>) {
      state.selectedDeliveryTime = action.payload;
    },
    resetFilters(state) {
      state.priceRange = initialState.priceRange;
      state.selectedRating = initialState.selectedRating;
      state.selectedDeliveryTime = initialState.selectedDeliveryTime;
    },
  },
});

export const {
  setShowFilterOverlay,
  setPriceRange,
  setSelectedRating,
  setSelectedDeliveryTime,
  resetFilters,
} = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
