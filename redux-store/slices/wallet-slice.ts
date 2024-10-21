import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SwalletState {
  showWalletOverlay: boolean;
  activeScreen: string;
}

const initialState: SwalletState = {
  showWalletOverlay: false,
  activeScreen: "",
};

const walletSlice = createSlice({
  name: "swallet",
  initialState,
  reducers: {
    setShowWalletOverlay: (
      state,
      action: PayloadAction<{
        showWalletOverlay: boolean;
        activeScreen: string;
      }>
    ) => {
      state.showWalletOverlay = action.payload.showWalletOverlay;
      state.activeScreen = action.payload.activeScreen;
    },
  },
});

export const { setShowWalletOverlay } = walletSlice.actions;

export default walletSlice.reducer;
