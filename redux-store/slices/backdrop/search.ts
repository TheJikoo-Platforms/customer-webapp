import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchOverlayState {
  showsearchOverlay: boolean;
}

const initialState: SearchOverlayState = {
  showsearchOverlay: false,
};

const searchOverlaySlice = createSlice({
  name: "searchOverlay",
  initialState,
  reducers: {
    setShowSearchOverlay(state, action: PayloadAction<boolean>) {
      state.showsearchOverlay = action.payload;
    },
  },
});

export const { setShowSearchOverlay } = searchOverlaySlice.actions;

export default searchOverlaySlice.reducer;
