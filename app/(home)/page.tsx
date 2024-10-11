import Cart from "@/components/cart/cart";
import { Explore } from "@/components/explore/explore";
import { Footer } from "@/components/footer";
import Carousel from "@/components/home/carousel";
import { Guarantee } from "@/components/home/guarantee";
import { HandpickedForYou } from "@/components/home/handpicked";
import { EnterLocation } from "@/components/home/location";
import { ProductRecommendations } from "@/components/home/product-recommendation";
import { PromoBanner } from "@/components/home/promo-banner";
import { SearchButton } from "@/components/home/search";
import { VendorsSection } from "@/components/home/vendors-section";
import Orders from "@/components/orders/orderss";
import { WhiteCard } from "@/components/white-card";
import { NormalWrapper } from "@/components/wrappers";

export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <>
      <div className="block md:hidden mt-[68px]">
        <PromoBanner />
      </div>
      <EnterLocation className="flex lg:hidden py-6 px-[18px]" />
      <div className="">
        <div className="max-lg:hidden">
          <SearchButton />
        </div>
        <div className="space-y-5 sm:space-y-8 lg:space-y-9 min-w-0 lg:rounded-xl bg-white lg:py-3">
          <Carousel />
          <Guarantee />
          <ProductRecommendations />
          <div className="lg:px-6">
            <Explore className="p-0 py-0 pl-0" />
          </div>
          <HandpickedForYou />
        </div>
      </div>
    </>
  );
}

{
  /* <AutoSuggest /> */
}
{
  /* <div className="px-6 container lg:max-w-full sm:hidden">
            <VendorsSection />
          </div> */
}
{
  /* <VendorSection /> */
}
{
  /* <BlogSection /> */
}
{
  /* <NewsSection /> */
}
{
  /* <div className="px-5 py-3 lg:px-[36px] lg:py-6 container hidden lg:block lg:p-3 max-sm:pb-12">
            
          </div> */
}
