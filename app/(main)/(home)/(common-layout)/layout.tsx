import { Header } from "@/components/header";
import Backdrops from "@/components/backdrops";
import { PromoBanner } from "@/components/home/promo-banner";
import { NormalWrapper } from "@/components/wrappers";
import { WhiteCard } from "@/components/white-card";
import { OrdersHome } from "@/components/orders/orders";
import { CartFlow } from "@/components/cart/mobile-overlay";
import AuthController from "@/components/auth-routes-controller";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Backdrops />
      <div className="min-h-dvh">
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="hidden lg:block mt-[68px] xl:mt-[72px]">
          <PromoBanner />
        </div>
        <NormalWrapper>
          <div className="lg:grid lg:grid-cols-[calc(68%-24px),32%] lg:gap-6 lg:mt-6 lg:mb-0 items-start">
            <main className="flex flex-col flex-1">{children}</main>
            <div className="max-lg:hidden space-y-4">
              <WhiteCard className="p-4">
                <OrdersHome />
              </WhiteCard>
              <WhiteCard className="rounded-2xl p-6 px-5">
                <CartFlow />
              </WhiteCard>
            </div>
          </div>
        </NormalWrapper>
        <div className="mt-6">{/* <Footer /> */}</div>
      </div>
    </>
  );
}
