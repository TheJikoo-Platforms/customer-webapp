import Link from "next/link";
import Image from "next/image";
import { Settings2, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { SearchInput } from "@/components/ui/search-input";
import { ExploreItem } from "@/components/explore/explore-item";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { DM_Sans } from "next/font/google";
import { BackButton } from "@/components/back-button";
import { VendorProductItem } from "@/components/vendors/vendor-product-item";
import { MotionWrapper } from "@/components/motion-wrapper";
import { kumbh } from "@/lib/fonts";

const CATEGORYLIST = [
  { name: "Breakfast", imageUrl: "/categories/pancake.png" },
  { name: "Bole & Grills", imageUrl: "/categories/bole.png" },
  {
    name: "Beans & Porridge",
    imageUrl: "/categories/beans.png",
  },
  { name: "Native", imageUrl: "/categories/native.png" },
  {
    name: "Pasta & Noodles",
    imageUrl: "/categories/pasta.png",
  },
  { name: "Rice Recipes", imageUrl: "/categories/jollof.png" },
  {
    name: "Soups & Swallow",
    imageUrl: "/categories/egusi.png",
  },
  { name: "Fries", imageUrl: "/categories/fries.png" },
  { name: "Sharwama", imageUrl: "/categories/sharwama.png" },
  { name: "Pizza", imageUrl: "/categories/pizza.png" },
  {
    name: "Dessert & Pastries",
    imageUrl: "/categories/dessert.png",
  },
  { name: "Specials", imageUrl: "/categories/sushi.png" },
  { name: "Drinks", imageUrl: "/categories/drinks.png" },
];


export default function VendorsProducts() {
  return (
    <div className="py-6 max-w-[585px]">
      <div className="px-4">
        <div className="flex gap-6">
          <div className="size-[72px] rounded-full shadow border-2 border-white shrink-0">
            <Image
              alt=""
              src={"/chickenRepubilc.png"}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-full"
              unoptimized
            />
          </div>
          <div className="space-y-1">
            <Text>Chicken Republic</Text>
            <p className="text-[#475466] leading-tight text-sm line-clamp-1">
              Asian fusion • Chinese • Malavsian • Comfort Food • Rice & Curry •
              Noodles • Chicken • Vegetarian friendly • Allergy friendly
            </p>
            <div className={"flex items-center gap-3 " + kumbh.className}>
              <div className="text-[#40b869] text-xs leading-[14.40px]">
                Open till 8pm
              </div>
              <div className="items-center gap-0.5 flex text-[#1d2639] text-sm">
                <div className="justify-start items-center gap-0.5 flex">
                  <Star className="size-4 text-[#F56630] fill-[#F56630]" />
                </div>
                <p className="leading-tight">
                  <span className="font-semibold">4.6 </span>
                  (91)
                </p>
              </div>
            </div>
          </div>
        </div>
        <BackButton className="mt-6" back /> 
      
        <div className="flex items-center gap-3 px-2 mt-6 mb-4">
          <SearchInput />
          <button>
            <Settings2 />
          </button>
        </div>
        <div>
          {" "}
          <HorizontalScroll className="gap-3.5 flex  ">
            {CATEGORYLIST.map((el) => (
              <ExploreItem data={el} key={el.name} />
            ))}
          </HorizontalScroll>
        </div>
        <div className="mt-6 space-y-3">
          <VendorProductItem href="/explore/vendors/id/cat/food" />
          <VendorProductItem href="/explore/vendors/id/cat/food" />
          <VendorProductItem href="/explore/vendors/id/cat/food" />
          <VendorProductItem href="/explore/vendors/id/cat/food" />
          <VendorProductItem href="/explore/vendors/id/cat/food" />
        </div>
      </div>
    </div>
  );
}
