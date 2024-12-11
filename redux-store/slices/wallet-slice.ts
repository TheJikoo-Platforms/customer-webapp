import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  balance: number | null;
  currency: string;
}

const initialState: WalletState = {
  balance: 0,
  currency: "NGN",
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    resetWallet: (state) => {
      state.balance = 0;
      state.currency = "NGN";
    },
  },
});

export const { setWalletBalance, setCurrency, resetWallet } =
  walletSlice.actions;

// Selectors
export const selectBalance = (state: { wallet: WalletState }) =>
  state.wallet.balance;

export const selectCurrency = (state: { wallet: WalletState }) =>
  state.wallet.currency;

export default walletSlice.reducer;
