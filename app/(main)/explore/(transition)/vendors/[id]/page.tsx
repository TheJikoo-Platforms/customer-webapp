import Link from "next/link";
import Image from "next/image";
import { Settings2, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { SearchInput } from "@/components/ui/search-input";
import { DealsSection } from "@/components/deals/deals-section";
import { ExploreItem } from "@/components/explore/explore-item";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { CopyIcon } from "@/components/ui/icons";
import { FaXTwitter, FaInstagram, FaGoogle } from "react-icons/fa6";
import { BackButton } from "@/components/back-button";
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


export default function VendorsDetailsPage() {
  return (
    <div className="pb-6 max-w-[585px]">
      <Image
        className="w-full h-[135px]"
        src="/pot.png"
        unoptimized
        height={1000}
        width={1000}
        alt="Vendor_Cover_Picture"
      />
      <div className="px-4">
        <div className="flex justify-between items-end ">
          <div className="w-24 h-24 rounded-full shadow border-4 border-white  -mt-12">
            <Image
              alt=""
              src={"/chickenRepubilc.png"}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-full"
              unoptimized
            />
          </div>
            <BackButton className="mt-6" back />
        </div>
        <div className="mt-6">
          <Text>Chicken Republic</Text>
          <p className="text-[#475466] text-/[20.3px] mt-1">
            Asian fusion • Chinese • Malavsian • Comfort Food • Rice & Curry •
            Noodles • Chicken • Vegetarian friendly • Allergy friendly
          </p>
          <div className={"flex items-center gap-3 mt-1.5 " + kumbh.className}>
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
          <div className="flex gap-3 items-center mt-4">
            <Button className="gap-2 py-2 px-4 rounded-md">
              <CopyIcon /> Share
            </Button>
            <div className="flex gap-4 text-gray-400">
              <button>
                <FaXTwitter size={20} />
              </button>
              <button>
                <FaInstagram size={20} />
              </button>
              <button>
                <FaGoogle size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3  mt-6 mb-4 px-2">
          <SearchInput />
          <button>
            <Settings2 />
          </button>
        </div>
        <div>
          {" "}
          <HorizontalScroll className="gap-3.5 flex  ">
            {CATEGORYLIST.map((el) => (
              <ExploreItem
                href="/explore/vendors/dd/cat"
                data={el}
                key={el.name}
              />
            ))}
          </HorizontalScroll>
        </div>
        <div className="mt-6">
          <DealsSection />
        </div>
      </div>
    </div>
  );
}
