import { AddressProps } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressStateProps {
  addressList: AddressProps[];
  currentAddress: AddressProps | null;
}

interface AddressState {
  addressState: AddressStateProps;
}

const initialState: AddressState = {
  addressState: {
    addressList: [
      { address: "10 Shekoni Close, Ifako", area: "Gbagada, Lagos" },
      { address: "4 Adewumi Str.", area: "Ikeja GRA, Lagos" },
      { address: "5 Olawumi Str.", area: "Abuja GRA, Lagos" },
      { address: "1 Adejuwumi Str.", area: "Lokoja GRA, Lagos" },
    ],
    currentAddress: null,
  },
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    removeAddress: (state, action: PayloadAction<string>) => {
      state.addressState.addressList = state.addressState.addressList.filter(
        (addr) => addr.area !== action.payload
      );
    },
    setCurrentAddress: (state, action: PayloadAction<number>) => {
      const selectedAddress = state.addressState.addressList[action.payload];
      if (selectedAddress) {
        state.addressState.currentAddress = selectedAddress;
      }
    },
  },
});

export const { removeAddress, setCurrentAddress } = addressSlice.actions;

export default addressSlice.reducer;
