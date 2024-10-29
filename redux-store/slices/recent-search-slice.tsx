// recentSearchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecentSearchState {
  searches: string[];
}

const initialState: RecentSearchState = {
  searches: [],
};

const recentSearchSlice = createSlice({
  name: "recentSearch",
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      // Add the new search term and limit to the last 5 searches
      state.searches = [
        action.payload,
        ...state.searches.filter((item) => item !== action.payload),
      ].slice(0, 5);
    },
    clearSearches: (state) => {
      state.searches = [];
    },
    removeSearch: (state, action: PayloadAction<string>) => {
      state.searches = state.searches.filter(
        (search) => search !== action.payload
      );
    },
  },
});

export const { addSearch, clearSearches, removeSearch } =
  recentSearchSlice.actions;
export default recentSearchSlice.reducer;
