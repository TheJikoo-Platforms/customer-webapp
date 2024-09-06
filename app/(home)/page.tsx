import { Explore } from "@/components/explore/explore";
import { Footer } from "@/components/footer";
import { AutoSuggest } from "@/components/home/auto-suggest";
import Carousel from "@/components/home/carousel";
import { DelicaciesSection } from "@/components/home/delicacies-section";
import { Guarantee } from "@/components/home/guarantee";

import { ProductRecommendations } from "@/components/home/product-recommendation";
import { VendorsSection } from "@/components/home/vendors-section";
import { Notifications } from "@/components/notification/notifications";
import { Orders } from "@/components/orders/orders";
import { PageTitle } from "@/components/page-title";
import { Text } from "@/components/ui/text";
import { WhiteCard } from "@/components/white-card";
import { Settings2 } from "lucide-react";

// import { SearchBar } from "@/components/search-bar";

export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <>
      <div className="container px-6 lg:grid lg:grid-cols-[1fr,576px,1fr] lg:gap-6 max-lg:bg-white dark:bg-primary-foreground  lg:mt-6">
        <div className="max-lg:hidden shrink-0 min-w-0 space-y-6 ">
          <WhiteCard>
            <ProductRecommendations />
          </WhiteCard>
          <WhiteCard className="rounded-none">
            <Explore className="p-0 py-0 pl-0" />
          </WhiteCard>
        </div>
        <div className="space-y-5 sm:space-y-8 lg:space-y-9 min-w-0 lg:rounded-xl lg:bg-white lg:p-3 max-sm:pb-12">
          <Carousel />
          <Guarantee />
          {/* <Carousel /> */}
          <div className="lg:hidden">
            <ProductRecommendations />
          </div>
          <div className="lg:max-w-full sm:hidden">
            <VendorsSection />
          </div>
          <DelicaciesSection />
          {/* <VendorSection /> */}
          {/* <BlogSection /> */}
          {/* <NewsSection /> */}
        </div>
        <div className="max-lg:hidden shrink-0 space-y-6 ">
          <WhiteCard className="min-h-[390px]">
            <Orders />
          </WhiteCard>
          <WhiteCard className="min-h-[390px]">
            <div className="flex items-center justify-between mb-6">
              <Text>Notifications</Text>
              <button>
                <Settings2 />
              </button>
            </div>
            <Notifications />
          </WhiteCard>
        </div>
      </div>
      <AutoSuggest />
      <div className="sm:hidden">
        <Footer />
      </div>
    </>
  );
}
