import Cart from "@/components/cart/cartt";
import { Explore } from "@/components/explore/explore";
import { Footer } from "@/components/footer";
import { AutoSuggest } from "@/components/home/auto-suggest";
import Carousel from "@/components/home/carousel";
import { DelicaciesSection } from "@/components/home/delicacies-section";
import { Guarantee } from "@/components/home/guarantee";
import { ProductRecommendations } from "@/components/home/product-recommendation";
import { VendorsSection } from "@/components/home/vendors-section";
import { Notifications } from "@/components/notification/notifications";
import Orders from "@/components/orders/orderss";
import { Text } from "@/components/ui/text";
import { WhiteCard } from "@/components/white-card";
import { Settings2 } from "lucide-react";

export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <div className="lg:grid lg:grid-cols-[calc(66%-24px),34%] lg:gap-6 max-lg:bg-white dark:bg-primary-foreground lg:mt-6 lg:mb-0 items-start">
      <div className="space-y-5 sm:space-y-8 lg:space-y-9 min-w-0 lg:rounded-xl lg:bg-white lg:py-3">
        <Carousel />
        <Guarantee />
        <div className="px-5 py-3 lg:px-[36px] lg:py-6 container hidden lg:block lg:p-3 max-sm:pb-12">
          <ProductRecommendations className="md:grid md:grid-cols-4" />
        </div>
        <div className="px-5 lg:px-[36px]">
          <Explore className="p-0 py-0 pl-0" />
        </div>
        <DelicaciesSection />
      </div>

      <div className="max-lg:hidden space-y-6 sticky top-[80px]">
        <WhiteCard className="p-4">
          <Orders />
        </WhiteCard>
        <WhiteCard className="">
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
