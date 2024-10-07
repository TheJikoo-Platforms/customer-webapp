import Cart from "@/components/cart/cartt";
import { Explore } from "@/components/explore/explore";
import { Footer } from "@/components/footer";
import Carousel from "@/components/home/carousel";
import { Guarantee } from "@/components/home/guarantee";
import { HandpickedForYou } from "@/components/home/handpicked-for-you";
import { ProductRecommendations } from "@/components/home/product-recommendation";
import { SearchButton } from "@/components/home/search";

import { VendorsSection } from "@/components/home/vendors-section";
import Orders from "@/components/orders/orderss";
import { WhiteCard } from "@/components/white-card";

export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <div className="lg:grid lg:grid-cols-[calc(68%-24px),32%] lg:gap-6 lg:mt-6 lg:mb-0 items-start">
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

      <div className="max-lg:hidden space-y-6 sticky top-[80px]">
        <WhiteCard className="p-4">
          <Orders />
        </WhiteCard>
        <WhiteCard className="rounded-none">
          <Cart />
        </WhiteCard>
      </div>
    </div>
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
