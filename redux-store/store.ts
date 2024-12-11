import { combineReducers, configureStore } from "@reduxjs/toolkit";

import locationReducer from "./slices/backdrop/location";
import notificationsReducer from "./slices/backdrop/notifications";
import foodItemOverlayReducer from "./slices/backdrop/food-items";
import foodItemDataReducer from "./slices/backdrop/cart-items";
import cartOverlayReducer from "./slices/backdrop/cart";
import authSliceReducer from "./slices/authslice";
import savedAddressReducer from "./slices/saved-address";
import settingsOverlayReducer from "./slices/settings-slice";
import userReducer from "./slices/user-slice";
import recentSearchReducer from "./slices/recent-search-slice";
import wishlistReducer from "./slices/wishlist-items";
import filterReducer from "./slices/backdrop/search-filter-slice";
import topUpReducer from "./slices/top-up-slice";
import walletReducer from "./slices/wallet-slice";
// Combine reducers
const rootReducer = combineReducers({
  location: locationReducer,
  notifications: notificationsReducer,
  foodItemOverlay: foodItemOverlayReducer,
  foodItemData: foodItemDataReducer,
  cart: cartOverlayReducer,
  auth: authSliceReducer,
  savedAddress: savedAddressReducer,
  settingsOverlay: settingsOverlayReducer,
  user: userReducer,
  recentSearch: recentSearchReducer,
  wishlist: wishlistReducer,
  filter: filterReducer,
  topUp: topUpReducer,
  wallet: walletReducer,
});

// Create the store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
