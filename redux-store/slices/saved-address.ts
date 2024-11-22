import { AddressProps } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressStateProps {
  addressList: AddressProps[]; // Array to store multiple addresses
  currentAddress: AddressProps | null; // Stores the current selected address
}

const initialState: AddressStateProps = {
  addressList: [], // Initialize with an empty array
  currentAddress: null, // Initialize with null
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    // Add a new address to the list, ensuring it is unique
    addAddress: (state, action: PayloadAction<AddressProps>) => {
      const exists = state.addressList.some(
        (addr) =>
          addr.address === action.payload.address &&
          addr.area === action.payload.area
      );
      if (!exists) {
        state.addressList.push(action.payload);
      }
    },
    // Remove an address from the list by matching the area
    removeAddress: (state, action: PayloadAction<string>) => {
      state.addressList = state.addressList.filter(
        (addr) => addr.area !== action.payload
      );
      // Reset currentAddress if it was the removed address
      if (state.currentAddress?.area === action.payload) {
        state.currentAddress = null;
      }
    },
    // Set the current address by index
    setCurrentAddress: (state, action: PayloadAction<AddressProps>) => {
      const selectedAddress = action.payload;
      if (selectedAddress) {
        state.currentAddress = selectedAddress;
      }
    },
    // Clear all addresses
    clearAddresses: (state) => {
      state.addressList = [];
      state.currentAddress = null;
    },
  },
});

export const { addAddress, removeAddress, setCurrentAddress, clearAddresses } =
  addressSlice.actions;

export default addressSlice.reducer;
