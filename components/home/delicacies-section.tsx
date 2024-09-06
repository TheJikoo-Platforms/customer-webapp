import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { WhiteCard } from "@/components/white-card";
import { FoodItem } from "@/components/food-item";
import { HomeTitle } from "./home-title";
import { ProductSlider } from "./product-slider";
export const DelicaciesSection = () => {
  return (
      <section>
        <h2 className="font-bold text-xl mb-3">Handpicked for you</h2>
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-7  gap-y-6 md:gap-y-7">
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
            <li>
              <FoodItem />
            </li>
          </ul>
          {/* <ProductSlider /> */}
          <div className="mt-6 md:mt-12 flex justify-center">
            <Link
              href={""}
              className="text-sm flex items-center gap-1"
            >
              See More
              <ChevronDown  size={16} className="text-primary " />
            </Link>
          </div>
        </div>
      </section>
  );
};
