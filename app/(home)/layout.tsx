import { Header } from "@/components/header";
import { BottomNav } from "@/components/mobile-nav";
import {
  AuthNotification,
  CartNotification,
} from "@/components/fixed-notification";
import Backdrops from "@/components/backdrops";
import { PromoBanner } from "@/components/home/promo-banner";
import { NormalWrapper } from "@/components/wrappers";
import { WhiteCard } from "@/components/white-card";
import Cart from "@/components/cart/cart";
import Orders from "@/components/orders/orderss";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Backdrops />
      <div className="min-h-dvh">
        <Header />
        <div className="hidden md:block mt-[68px] xl:mt-[72px]">
          <PromoBanner />
        </div>
        <NormalWrapper>
          <div className="lg:grid lg:grid-cols-[calc(68%-24px),32%] lg:gap-6 lg:mt-6 lg:mb-0 items-start">
            <main className="flex flex-col flex-1">{children}</main>
            <div className="max-lg:hidden space-y-6 sticky top-[80px]">
              <WhiteCard className="p-4">
                <Orders />
              </WhiteCard>
              <WhiteCard className="rounded-2xl p-6 px-5">
                <Cart />
              </WhiteCard>
            </div>
          </div>
        </NormalWrapper>
        <div className="mt-6">{/* <Footer /> */}</div>
        {/* <AuthNotification /> */}
        <div className="lg:hidden">
          <CartNotification />
          <BottomNav />
        </div>
      </div>
    </>
  );
}
