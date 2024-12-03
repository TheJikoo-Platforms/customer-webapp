import { IProductItem } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  product: IProductItem;
  quantity: number;
}

interface FoodItemState {
  cartItems: ICartItem[];
}

// Helper functions for localStorage
const STORAGE_KEY = "cartItems";

const getStoredCart = (): ICartItem[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveCartToStorage = (items: ICartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

const initialState: FoodItemState = {
  cartItems: getStoredCart(),
};

const foodItemSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ product: IProductItem; quantity: number }>
    ) {
      const { product, quantity } = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === product._id
      );

      if (existingCartItem) {
        existingCartItem.quantity = quantity;
      } else {
        state.cartItems.push({ product, quantity });
      }
      saveCartToStorage(state.cartItems);
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === action.payload
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        saveCartToStorage(state.cartItems);
      }
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === action.payload
      );
      if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.product._id !== action.payload
        );
      }
      saveCartToStorage(state.cartItems);
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.product._id !== action.payload
      );
      saveCartToStorage(state.cartItems);
    },

    clearCart(state) {
      state.cartItems = [];
      saveCartToStorage([]);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = foodItemSlice.actions;

export default foodItemSlice.reducer;
