import { AddressProps } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressStateProps {
  addressList: AddressProps[];
  currentAddress: AddressProps | null;
}

// Helper functions for localStorage
const STORAGE_KEY = "savedAddresses";
const CURRENT_ADDRESS_KEY = "currentAddress";

const getStoredAddresses = (): {
  addressList: AddressProps[];
  currentAddress: AddressProps | null;
} => {
  if (typeof window === "undefined")
    return { addressList: [], currentAddress: null };

  const storedAddresses = localStorage.getItem(STORAGE_KEY);
  const storedCurrentAddress = localStorage.getItem(CURRENT_ADDRESS_KEY);

  return {
    addressList: storedAddresses ? JSON.parse(storedAddresses) : [],
    currentAddress: storedCurrentAddress
      ? JSON.parse(storedCurrentAddress)
      : null,
  };
};

const saveToStorage = (
  addresses: AddressProps[],
  currentAddress: AddressProps | null
) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses));
  localStorage.setItem(CURRENT_ADDRESS_KEY, JSON.stringify(currentAddress));
};

const initialState: AddressStateProps = getStoredAddresses();

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<AddressProps>) => {
      const exists = state.addressList.some(
        (addr) =>
          addr.address === action.payload.address &&
          addr.area === action.payload.area
      );
      if (!exists) {
        state.addressList.push(action.payload);
        saveToStorage(state.addressList, state.currentAddress);
      }
    },

    removeAddress: (state, action: PayloadAction<string>) => {
      state.addressList = state.addressList.filter(
        (addr) => addr.area !== action.payload
      );
      // Reset currentAddress if it was the removed address
      if (state.currentAddress?.area === action.payload) {
        state.currentAddress = null;
      }
      saveToStorage(state.addressList, state.currentAddress);
    },

    setCurrentAddress: (state, action: PayloadAction<AddressProps>) => {
      const selectedAddress = action.payload;
      if (selectedAddress) {
        state.currentAddress = selectedAddress;
        saveToStorage(state.addressList, state.currentAddress);
      }
    },

    clearAddresses: (state) => {
      state.addressList = [];
      state.currentAddress = null;
      saveToStorage([], null);
    },
  },
});

export const { addAddress, removeAddress, setCurrentAddress, clearAddresses } =
  addressSlice.actions;

export default addressSlice.reducer;
