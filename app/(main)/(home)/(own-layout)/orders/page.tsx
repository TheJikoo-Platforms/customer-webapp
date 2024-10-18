import Backdrops from "@/components/backdrops";
import {
  AuthNotificationContainter,
  CartNotification,
} from "@/components/fixed-notification";
import { Header } from "@/components/header";
import { PromoBanner } from "@/components/home/promo-banner";
import InnerHeader from "@/components/inner-page-header-mobile";
import { BottomNav } from "@/components/mobile-nav";
import OrderContainer from "@/components/orders";
import { NormalWrapper } from "@/components/wrappers";

export default function OrdersPage() {
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
          <OrderContainer />
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
