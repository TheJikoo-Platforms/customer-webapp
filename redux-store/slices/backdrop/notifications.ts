import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationsOverlayState {
  showNotificationsOverlay: boolean;
}

const initialState: NotificationsOverlayState = {
  showNotificationsOverlay: false,
};

const notificationsOverlaySlice = createSlice({
  name: "notificationsOverlay",
  initialState,
  reducers: {
    setShowNotificationsOverlay(state, action: PayloadAction<boolean>) {
      state.showNotificationsOverlay = action.payload;
    },
  },
});

export const { setShowNotificationsOverlay } =
  notificationsOverlaySlice.actions;

export default notificationsOverlaySlice.reducer;
