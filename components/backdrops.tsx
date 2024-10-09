"use client";
import React from "react";
import { NotificationsOverlay } from "@/components/notification/notifications";
import { SearchOverlay } from "@/components/home/search";
import { FoodItemOverlay } from "@/components/food-items/overlay";
import { LocationOverlay } from "@/components/home/location";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";

export default function Backdrops() {
  const showLocationOverlay = useAppSelector(
    (state: RootState) => state.locationOverlay.showLocationOverlay
  );
  const showNotificationOverlay = useAppSelector(
    (state: RootState) => state.notificationOverlay.showNotificationsOverlay
  );
  const showSearchOverlay = useAppSelector(
    (state: RootState) => state.searchOverlay.showsearchOverlay
  );
  const showFoodItemOverlay = useAppSelector(
    (state: RootState) => state.foodItemOverlay.showFoodItemOverlay
  );

  return (
    <>
      {showLocationOverlay && <LocationOverlay />}
      {showNotificationOverlay && <NotificationsOverlay />}
      {showSearchOverlay && <SearchOverlay />}
      {showFoodItemOverlay && <FoodItemOverlay />}
    </>
  );
}
