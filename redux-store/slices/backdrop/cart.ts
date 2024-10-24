import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartOverlayState {
  showCartOverlayMobile: boolean;
  showCartOverlay: boolean;
  showCheckoutOverlay: boolean;
  activeItem: string;
  flowState: string;
}

const initialState: CartOverlayState = {
  showCartOverlayMobile: false,
  showCartOverlay: false,
  showCheckoutOverlay: false,
  activeItem: "",
  flowState: "cart",
};

const cartOverlaySlice = createSlice({
  name: "cartOverlay",
  initialState,
  reducers: {
    setShowCartOverlayMobile(state, action: PayloadAction<boolean>) {
      state.showCartOverlayMobile = action.payload;
    },
    setFlowState(state, action: PayloadAction<string>) {
      state.flowState = action.payload;
    },
    setShowCartOverlay(
      state,
      action: PayloadAction<{ showOverlay: boolean; activeItem: string }>
    ) {
      state.showCartOverlay = action.payload.showOverlay;
      state.activeItem = action.payload.activeItem;
    },
    setShowCheckoutOverlay(
      state,
      action: PayloadAction<{
        showCheckoutOverlay: boolean;
        activeItem: string;
      }>
    ) {
      state.showCheckoutOverlay = action.payload.showCheckoutOverlay;
      state.activeItem = action.payload.activeItem;
    },
  },
});

export const {
  setShowCartOverlayMobile,
  setShowCartOverlay,
  setShowCheckoutOverlay,
  setFlowState,
} = cartOverlaySlice.actions;

export default cartOverlaySlice.reducer;