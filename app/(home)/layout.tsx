"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PromoBanner } from "@/components/home/promo-banner";
import { EnterLocation } from "@/components/home/location";
import { BottomNav } from "@/components/mobile-nav";
import { NormalWrapper } from "@/components/wrappers";
import {
  AuthNotification,
  CartNotification,
} from "@/components/fixed-notification";
import Backdrops from "@/components/backdrops";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-[68px] xl:mt-[72px]">
        <PromoBanner />
      </div>
      <EnterLocation className="flex lg:hidden py-6 px-[18px]" />
      <NormalWrapper>
        <main className="flex flex-col flex-1 mb-16 lg:mb-6">{children}</main>
      </NormalWrapper>
      {/* <Footer /> */}
      <div className="sm:hidden">
        <AuthNotification />
        {/* <CartNotification /> */}
        <BottomNav />
      </div>
      <Backdrops />
    </>
  );
}
