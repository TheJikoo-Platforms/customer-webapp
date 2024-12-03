// recentSearchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecentSearchState {
  searches: string[];
}

// Helper functions for localStorage
const STORAGE_KEY = "recentSearches";

const getStoredSearches = (): string[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveSearchesToStorage = (searches: string[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
};

const initialState: RecentSearchState = {
  searches: getStoredSearches(),
};

const recentSearchSlice = createSlice({
  name: "recentSearch",
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      const newSearches = [
        action.payload,
        ...state.searches.filter((item) => item !== action.payload),
      ].slice(0, 5);

      state.searches = newSearches;
      saveSearchesToStorage(newSearches);
    },
    clearSearches: (state) => {
      state.searches = [];
      saveSearchesToStorage([]);
    },
    removeSearch: (state, action: PayloadAction<string>) => {
      const newSearches = state.searches.filter(
        (search) => search !== action.payload
      );

      state.searches = newSearches;
      saveSearchesToStorage(newSearches);
    },
  },
});

export const { addSearch, clearSearches, removeSearch } =
  recentSearchSlice.actions;
export default recentSearchSlice.reducer;
