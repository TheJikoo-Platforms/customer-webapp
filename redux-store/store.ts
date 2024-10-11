import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import locationReducer from "./slices/backdrop/location";
import notificationsReducer from "./slices/backdrop/notifications";
import searchReducer from "./slices/backdrop/search";
import foodItemOverlayReducer from "./slices/backdrop/food-items";
import foodItemDataReducer from "./slices/backdrop/food-items-data";
import cartOverlayReducer from "./slices/backdrop/cart";

const isClient = typeof window !== "undefined";
// Define the persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["foodItemData"], // Persist only the reducers you want
};

// Combine reducers (if you're persisting multiple reducers, you need to combine them first)
const rootReducer = combineReducers({
  location: locationReducer,
  notifications: notificationsReducer,
  search: searchReducer,
  foodItemOverlay: foodItemOverlayReducer,
  foodItemData: foodItemDataReducer, // Specify the ones to persist
  cart: cartOverlayReducer,
});

// Create a persisted version of the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store using the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Create the persistor for the store
export const persistor = isClient ? persistStore(store) : undefined;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
