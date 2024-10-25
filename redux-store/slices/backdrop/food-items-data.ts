import { IProductItem } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Separate interface for cart items to manage quantity
export interface ICartItem {
  product: IProductItem;
  quantity: number;
}

interface FoodItemState {
  cartItems: ICartItem[]; // Cart items with quantity
}

const initialState: FoodItemState = {
  cartItems: [], // Initialize with an empty array
};

const foodItemSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProductItem>) {
      const product = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === product._id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1; // Increment quantity if product exists in the cart
      } else {
        state.cartItems.push({ product, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Increase quantity of the product
    increaseQuantity(state, action: PayloadAction<string>) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === action.payload
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1; // Increase quantity
      }
    },

    // Decrease quantity but prevent it from going below 1
    decreaseQuantity(state, action: PayloadAction<string>) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === action.payload
      );
      if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1; // Decrease quantity
      }
    },

    // Remove item from cart
    removeFromCart(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.product._id !== action.payload
      );
    },

    // Clear the entire cart
    clearCart(state) {
      state.cartItems = []; // Reset cart to empty
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
