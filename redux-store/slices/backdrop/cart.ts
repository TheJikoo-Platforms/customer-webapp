import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartOverlayState {
  showCartOverlayMobile: boolean;
  showCartOverlay: boolean;
  activeItem: string;
}

const initialState: cartOverlayState = {
  showCartOverlayMobile: false,
  showCartOverlay: false,
  activeItem: "",
};

const cartOverlaySlice = createSlice({
  name: "cartOverlay",
  initialState,
  reducers: {
    setShowCartOverlayMobile(state, action: PayloadAction<boolean>) {
      state.showCartOverlayMobile = action.payload;
    },
    setShowCartOverlay(
      state,
      action: PayloadAction<{ showOverlay: boolean; activeItem: string }>
    ) {
      state.showCartOverlay = action.payload.showOverlay;
      state.activeItem = action.payload.activeItem;
    },
  },
});

export const { setShowCartOverlayMobile, setShowCartOverlay } =
  cartOverlaySlice.actions;

export default cartOverlaySlice.reducer;
