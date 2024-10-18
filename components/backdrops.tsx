"use client";
import React from "react";
import { NotificationsOverlay } from "@/components/notification/notifications";
import { SearchOverlay } from "@/components/home/search";
import { FoodItemOverlay } from "@/components/food-items/overlay";
import { LocationOverlay } from "@/components/home/location";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import CartOverLayMobile from "./cart/mobile-overlay";
import { CartBackdrops } from "./cart/cart";
import { CheckoutBackdrops } from "./cart/checkout";

export default function Backdrops() {
  const showLocationOverlay = useAppSelector(
    (state: RootState) => state.location.showLocationOverlay
  );
  const showNotificationOverlay = useAppSelector(
    (state: RootState) => state.notifications.showNotificationsOverlay
  );
  const showSearchOverlay = useAppSelector(
    (state: RootState) => state.search.showsearchOverlay
  );
  const showCartOverlayMobile = useAppSelector(
    (state: RootState) => state.cart.showCartOverlayMobile
  );
  const showCartOverlay = useAppSelector(
    (state: RootState) => state.cart.showCartOverlay
  );
  const showFoodItemOverlay = useAppSelector(
    (state: RootState) => state.foodItemOverlay.showFoodItemOverlay
  );
  return (
    <>
      {showLocationOverlay && <LocationOverlay />}
      {showNotificationOverlay && <NotificationsOverlay />}
      {showSearchOverlay && <SearchOverlay />}
      {showCartOverlayMobile && <CartOverLayMobile />}
      {showCartOverlay && <CartBackdrops />}
      {showCartOverlay && <CheckoutBackdrops />}
      {showFoodItemOverlay && <FoodItemOverlay />}
    </>
  );
}
