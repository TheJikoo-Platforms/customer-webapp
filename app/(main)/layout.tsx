"use client";
import { AuthNotificationContainter } from "@/components/fixed-notifications/authentication";
import { CartNotificationContainter } from "@/components/fixed-notifications/cart";
import { BottomNav } from "@/components/mobile-nav";
import useAuthCheck from "@/hooks/use-auth";
import React from "react";
interface OuterLayoutProps {
  children: React.ReactNode;
}

export default function OuterLayout({ children }: OuterLayoutProps) {
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
