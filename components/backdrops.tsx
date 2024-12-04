"use client";
import React from "react";
import { NotificationsOverlay } from "@/components/notification/notifications";
import { FoodItemOverlay } from "@/components/food-items/overlay";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import CartOverLayMobile from "./cart/mobile-overlay";
import { CheckoutBackdrops } from "./cart/checkout";
import { LocationOverlay } from "./location/overlay";
import SettingsOverlay from "./settings/overlay/overlay";
import WalletOverlay from "./wallet/overlay/overlay";
import { CartBackdrops } from "./cart/cart-backdrops/cart-backdrops";
import FilterOverlay from "./home/search/filter-overlay";

export default function Backdrops() {
  const showLocationOverlay = useAppSelector(
    (state: RootState) => state.location.showLocationOverlay
  );
  const showNotificationOverlay = useAppSelector(
    (state: RootState) => state.notifications.showNotificationsOverlay
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
  const showProductItemOverlay = useAppSelector(
    (state: RootState) => state.foodItemOverlay.showProductItemOverlay
  );
  const showSettingsOverlay = useAppSelector(
    (state: RootState) => state.settingsOverlay.showSettingsOverlay
  );
  const showWalletOverlay = useAppSelector(
    (state: RootState) => state.walletOverlay.showWalletOverlay
  );
  const { currentAddress } = useAppSelector(
    (state: RootState) => state.savedAddress
  );
  const { showFilterOverlay } = useAppSelector(
    (state: RootState) => state.filter
  );
  return (
    <>
      {showLocationOverlay && !currentAddress && <LocationOverlay />}
      {showNotificationOverlay && <NotificationsOverlay />}
      {showCartOverlayMobile && <CartOverLayMobile />}
      {showCartOverlay && <CartBackdrops />}
      {showCheckoutOverlay && <CheckoutBackdrops />}
      {showProductItemOverlay && <FoodItemOverlay />}
      {showSettingsOverlay && <SettingsOverlay />}
      {showWalletOverlay && <WalletOverlay />}
      {showFilterOverlay && <FilterOverlay />}
    </>
  );
}
