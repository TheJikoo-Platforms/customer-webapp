import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationOverlayState {
  showLocationOverlay: boolean;
  currentLocationPage: string;
}

const initialState: LocationOverlayState = {
  showLocationOverlay: true,
  currentLocationPage: "prompt",
};

const locationOverlaySlice = createSlice({
  name: "locationOverlay",
  initialState,
  reducers: {
    setShowLocationOverlay(state, action: PayloadAction<boolean>) {
      state.showLocationOverlay = action.payload;
    },
    setCurrentLocationPage(state, action: PayloadAction<string>) {
      state.currentLocationPage = action.payload;
    },
    handleLocationOverlay(state) {
      state.showLocationOverlay = true;
      state.currentLocationPage = "address";
    },
  },
});

export const {
  setShowLocationOverlay,
  setCurrentLocationPage,
  handleLocationOverlay,
} = locationOverlaySlice.actions;

export default locationOverlaySlice.reducer;
