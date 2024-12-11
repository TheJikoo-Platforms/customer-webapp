import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterRange<T> {
  min: T | null;
  max: T | null;
}

interface Filter {
  id: string;
  type: "price" | "rating" | "cookingTime";
  range: FilterRange<number | string>;
}

interface SearchFilterState {
  showFilterOverlay: boolean;
  activeFilters: Filter[];
  priceRange: FilterRange<number>;
  ratingRange: FilterRange<string>;
  cookingTimeRange: FilterRange<number>;
}

const initialState: SearchFilterState = {
  showFilterOverlay: false,
  activeFilters: [],
  priceRange: { min: null, max: null },
  ratingRange: { min: null, max: null },
  cookingTimeRange: { min: null, max: null },
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setShowFilterOverlay(state, action: PayloadAction<boolean>) {
      state.showFilterOverlay = action.payload;
    },
    addFilter(state, action: PayloadAction<Filter>) {
      const existingFilterIndex = state.activeFilters.findIndex(
        (filter) => filter.id === action.payload.id
      );

      if (existingFilterIndex === -1) {
        state.activeFilters.push(action.payload);
      } else {
        state.activeFilters[existingFilterIndex] = action.payload;
      }

      // Update corresponding range
      switch (action.payload.type) {
        case "price":
          state.priceRange = action.payload.range as FilterRange<number>;
          break;
        case "rating":
          state.ratingRange = action.payload.range as FilterRange<string>;
          break;
        case "cookingTime":
          state.cookingTimeRange = action.payload.range as FilterRange<number>;
          break;
      }
    },
    removeFilter(state, action: PayloadAction<string>) {
      const filterToRemove = state.activeFilters.find(
        (filter) => filter.id === action.payload
      );

      if (filterToRemove) {
        state.activeFilters = state.activeFilters.filter(
          (filter) => filter.id !== action.payload
        );

        // Reset corresponding range
        switch (filterToRemove.type) {
          case "price":
            state.priceRange = initialState.priceRange;
            break;
          case "rating":
            state.ratingRange = initialState.ratingRange;
            break;
          case "cookingTime":
            state.cookingTimeRange = initialState.cookingTimeRange;
            break;
        }
      }
    },
    resetFilters(state) {
      state.activeFilters = [];
      state.priceRange = initialState.priceRange;
      state.ratingRange = initialState.ratingRange;
      state.cookingTimeRange = initialState.cookingTimeRange;
    },
  },
});

export const { setShowFilterOverlay, addFilter, removeFilter, resetFilters } =
  searchFilterSlice.actions;

export default searchFilterSlice.reducer;
