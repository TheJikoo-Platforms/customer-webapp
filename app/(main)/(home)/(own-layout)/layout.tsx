import Backdrops from "@/components/backdrops";
import {
  AuthNotificationContainter,
  CartNotification,
} from "@/components/fixed-notification";
import { Header } from "@/components/header";
import { PromoBanner } from "@/components/home/promo-banner";
import { BottomNav } from "@/components/mobile-nav";
import { NormalWrapper } from "@/components/wrappers";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Backdrops />
      <div className="min-h-dvh lg:pb-[100px]">
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="hidden lg:block mt-[68px] xl:mt-[72px]">
          <PromoBanner />
        </div>
        <NormalWrapper>
          <main className="">{children}</main>
        </NormalWrapper>
        <AuthNotificationContainter />
        <div className="lg:hidden">
          <CartNotification />
          <BottomNav />
        </div>
      </div>
    </>
  );
}
