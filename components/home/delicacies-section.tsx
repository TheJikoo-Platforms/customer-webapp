import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { WhiteCard } from "@/components/white-card";
import { FoodItemDesktop, FoodItemMobile } from "@/components/food-item";
import { HomeTitle } from "./home-title";
import { ProductSlider } from "./product-slider";
import { createFilledArray } from "@/lib/utils";

export const DelicaciesSection = () => {
  return (
    <section className="px-5 lg:px-[36px] pt-2">
      <h2 className="font-bold text-xl mb-3 tracking-[-0.4px]">
        Handpicked for you
      </h2>
      <div className="hidden lg:block">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-6 md:gap-y-7">
          {createFilledArray("", 12).map((_, index) => (
            <li>
              <FoodItemDesktop index={index + 2} key={index} />
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden">
        <ul className="grid grid-cols-1 gap-y-4">
          {createFilledArray("", 5).map((_, index) => (
            <li>
              <FoodItemMobile index={index + 1} key={index} />
            </li>
          ))}
        </ul>
      </div>
      {/* <ProductSlider /> */}
      <div className="mt-6 max-lg:mb-8 md:mt-12 flex justify-center">
        <Link href={""} className="text-sm flex items-center gap-1">
          See More
          <ChevronDown size={16} className="text-primary " />
        </Link>
      </div>
    </section>
  );
};
