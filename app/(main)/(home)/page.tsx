import { Header } from "@/components/header";
import Backdrops from "@/components/backdrops";
import { OrdersHome } from "@/components/orders/orders";
import { CartFlow } from "@/components/cart/mobile-overlay";
import { Explore } from "@/components/explore/explore";
import Carousel from "@/components/home/carousel";
import { Guarantee } from "@/components/home/guarantee";
import { HandpickedForYou } from "@/components/home/handpicked";
import { ProductRecommendations } from "@/components/home/product-recommendation";
import { PromoBanner } from "@/components/home/promo-banner";
import { SearchButton } from "@/components/home/search";
import { WhiteCard } from "@/components/white-card";
import { NormalWrapper } from "@/components/wrappers";
import { EnterLocation } from "@/components/location/enter-location-button";
import { CategoriesList } from "@/components/home/categories";
import { VendorsList } from "@/components/home/vendors";

export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <>
      <Backdrops />
      <div className="min-h-dvh">
        <Header />
        <div className="mt-[68px] md:mt-[72px]">
          <PromoBanner />
        </div>
        <NormalWrapper>
          <div className="lg:grid lg:grid-cols-[calc(68%-24px),32%] lg:gap-6 lg:mt-6 lg:mb-0 items-start">
            <main className="flex flex-col flex-1 sticky top-[80px]">
              <EnterLocation className="flex lg:hidden py-6 px-[18px]" />
              <SearchButton />
              <div className="space-y-5 sm:space-y-8 lg:space-y-9 min-w-0 lg:rounded-xl bg-white lg:py-3">
                <Carousel />
                <Guarantee />
                <ProductRecommendations />
                <CategoriesList />
                <VendorsList />
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
        <div className="mt-6">{/* <Footer /> */}</div>
      </div>
    </>
  );
}
