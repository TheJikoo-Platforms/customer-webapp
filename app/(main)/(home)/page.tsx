import { Header } from "@/components/header";
import Backdrops from "@/components/backdrops";
import { OrdersHome } from "@/components/orders/orders";
import { CartFlow } from "@/components/cart/mobile-overlay";
import { HandpickedForYou } from "@/components/home/handpicked";
import { PromoBanner } from "@/components/home/promo-banner";
import { WhiteCard } from "@/components/white-card";
import { NormalWrapper } from "@/components/wrappers";
import { EnterLocation } from "@/components/location/enter-location-button";
import { CategoriesList } from "@/components/home/categories";
import { VendorsList } from "@/components/home/vendors";
import { SearchButton } from "@/components/home/search/search-button";
import WalletAndSlider from "@/components/home/wallet-and-sliders";
import Features from "@/components/home/features";
import { Divider } from "@/components/home/divider";
import { Footer } from "@/components/footer";

export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <>
      <Backdrops />
      <div className="min-h-[calc(100dvh-380px)]">
        <Header />
        <div className="mt-[68px] md:mt-[72px]">
          <PromoBanner />
        </div>
        <NormalWrapper>
          <div className="lg:grid lg:grid-cols-[calc(68%-24px),32%] lg:gap-6 lg:mt-4 lg:mb-0 items-start">
            <main className="flex flex-col flex-1 sticky md:top-[80px]">
              <SearchButton />
              <div className="space-y-4 lg:rounded-xl bg-white md:py-3">
                <WalletAndSlider />
                <Features />

                <CategoriesList />
                <div className="hidden md:block">
                  <VendorsList />
                </div>
                <div className="hidden md:block px-6">
                  <Divider />
                </div>
                <HandpickedForYou />
              </div>
            </main>
            <div className="max-lg:hidden space-y-4 sticky top-[80px]">
              <WhiteCard className="p-4">
                <OrdersHome />
              </WhiteCard>
              <WhiteCard className="rounded-2xl p-6 px-5">
                <CartFlow />
              </WhiteCard>
            </div>
          </div>
        </NormalWrapper>
      </div>
      <Footer />
    </>
  );
}
