import { configureStore } from "@reduxjs/toolkit";
import locationOverlay from "./slices/backdrop/location";
import notificationsOverlay from "./slices/backdrop/notifications";
import searchOverlay from "./slices/backdrop/search";
import foodItemOverlay from "./slices/backdrop/food-items";
import foodItemData from "./slices/backdrop/food-items-data";

export const store = configureStore({
  reducer: {
    locationOverlay: locationOverlay,
    notificationOverlay: notificationsOverlay,
    searchOverlay: searchOverlay,
    foodItemOverlay: foodItemOverlay,
    foodItemData: foodItemData,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
