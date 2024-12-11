import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TopUpState {
  showTopUpModal: boolean;
  showAmountModal: boolean;
  selectedOption: "naira" | "crypto" | null;
}

const initialState: TopUpState = {
  showTopUpModal: false,
  showAmountModal: false,
  selectedOption: null,
};

const topUpSlice = createSlice({
  name: "topUp",
  initialState,
  reducers: {
    setShowTopUpModal: (state, action: PayloadAction<boolean>) => {
      state.showTopUpModal = action.payload;
      if (!action.payload) {
        state.selectedOption = null;
      }
    },
    setShowAmountModal: (state, action: PayloadAction<boolean>) => {
      state.showAmountModal = action.payload;
    },
    setSelectedOption: (
      state,
      action: PayloadAction<"naira" | "crypto" | null>
    ) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setShowTopUpModal, setShowAmountModal, setSelectedOption } =
  topUpSlice.actions;

export default topUpSlice.reducer;
