import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsOverlayState {
  showSettingsOverlay: boolean;
  activeScreen: string;
}

const initialState: SettingsOverlayState = {
  showSettingsOverlay: false,
  activeScreen: "",
};

const settingsOverlaySlice = createSlice({
  name: "settingsOverlay",
  initialState,
  reducers: {
    setShowSettingsOverlay: (
      state,
      action: PayloadAction<{
        showSettingsOverlay: boolean;
        activeScreen: string;
      }>
    ) => {
      state.showSettingsOverlay = action.payload.showSettingsOverlay;
      state.activeScreen = action.payload.activeScreen;
    },
  },
});

export const { setShowSettingsOverlay } = settingsOverlaySlice.actions;

export default settingsOverlaySlice.reducer;
