"use client";
import React from "react";
import { NotificationsOverlay } from "@/components/notification/notifications";
import { SearchOverlay } from "@/components/home/search";
import { FoodItemOverlay } from "@/components/food-items/overlay";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import CartOverLayMobile from "./cart/mobile-overlay";
import { CartBackdrops } from "./cart/cart";
import { CheckoutBackdrops } from "./cart/checkout";
import { LocationOverlay } from "./location/overlay";
import SettingsOverlay from "./settings/overlay/overlay";
import WalletOverlay from "./wallet/overlay/overlay";

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
  const showCheckoutOverlay = useAppSelector(
    (state: RootState) => state.cart.showCheckoutOverlay
  );
  const showFoodItemOverlay = useAppSelector(
    (state: RootState) => state.foodItemOverlay.showFoodItemOverlay
  );
  const showSettingsOverlay = useAppSelector(
    (state: RootState) => state.settingsOverlay.showSettingsOverlay
  );
  const showWalletOverlay = useAppSelector(
    (state: RootState) => state.walletOverlay.showWalletOverlay
  );

  return (
    <>
      {showLocationOverlay && <LocationOverlay />}
      {showNotificationOverlay && <NotificationsOverlay />}
      {showSearchOverlay && <SearchOverlay />}
      {showCartOverlayMobile && <CartOverLayMobile />}
      {showCartOverlay && <CartBackdrops />}
      {showCheckoutOverlay && <CheckoutBackdrops />}
      {showFoodItemOverlay && <FoodItemOverlay />}
      {showSettingsOverlay && <SettingsOverlay />}
      {showWalletOverlay && <WalletOverlay />}
    </>
  );
}
