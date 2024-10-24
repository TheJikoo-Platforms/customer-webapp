"use client";
import { AuthNotificationContainter } from "@/components/fixed-notifications/authentication";
import { CartNotificationContainter } from "@/components/fixed-notifications/cart";
import { BottomNav } from "@/components/mobile-nav";
import useAuthCheck from "@/hooks/use-auth";
import React from "react";
export default function OuterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthCheck();

  return (
    <React.Fragment>
      {children}
      <AuthNotificationContainter />
      <div className="lg:hidden">
        <CartNotificationContainter />
        <BottomNav />
      </div>
    </React.Fragment>
  );
}
