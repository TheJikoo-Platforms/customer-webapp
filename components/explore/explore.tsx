import Link from "next/link";
import { Search, Settings2, ChevronRight } from "lucide-react";
import { ProductRecommendations } from "@/components/home/product-recommendation";
import { ExploreItem } from "@/components/explore/explore-item";
import { Text } from "@/components/ui/text";
import { SearchInput } from "@/components/ui/search-input";
import { DealsSection } from "@/components/deals/deals-section";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { cn } from "@/lib/utils";
import { FilterButton } from "../filter-button";


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

const RESTAURANTLIST = [
  { name: "Kinimajaro", imageUrl: "/vendors/Kinimajaro.png" },
  { name: "Dominos Pizza", imageUrl: "/vendors/dominos.png" },
  { name: "Chicken Republic", imageUrl: "/vendors/chickenRepubilc.png" },
  { name: "Pizza Jungle", imageUrl: "/vendors/pizzaJungle.png" },
  { name: "Hardy Foodie", imageUrl: "/vendors/hardyFoods.png" },
  { name: "Kinimajaro", imageUrl: "/vendors/Kinimajaro.png" },
  { name: "Dominos Pizza", imageUrl: "/vendors/dominos.png" },
  { name: "Chicken Republic", imageUrl: "/vendors/chickenRepubilc.png" },
  { name: "Pizza Jungle", imageUrl: "/vendors/pizzaJungle.png" },
  { name: "Hardy Foodie", imageUrl: "/vendors/hardyFoods.png" },
  // { name: "Market Square", imageUrl: "/vendors/marketSquare.png" },
];


export const Explore = ({className}:{className?:string}) => {
  return (
    <div className={cn("py-6 pl-6 max-w-[576px]", className)}>
      <div className="flex items-center gap-3 max-sm:pr-6">
        <SearchInput />
        <FilterButton action={{ filter: 'explore'}}/>
      </div>
      <div className="mt-3">
        <Text className="text-base mb-5">Categories</Text>
        <HorizontalScroll className="gap-3.5 flex max-lg:-translate-x-6 max-lg:px-6">
          {CATEGORYLIST.map((el) => (
            <ExploreItem
              href="/explore/restaurants/id"
              data={el}
              key={el.name}
            />
          ))}
        </HorizontalScroll>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-5 pr-6">
          <Text className="text-base ">Near You</Text>
          <Link
            href={"/explore/restaurants"}
            className="flex gap-1 items-center"
          >
            See More <ChevronRight size={18} className="text-primary " />{" "}
          </Link>
        </div>
        <HorizontalScroll className="gap-3.5 flex max-lg:-translate-x-6 max-lg:px-6">
          {RESTAURANTLIST.map((el) => (
            <ExploreItem href="/explore/vendors/dd" data={el} key={el.name} />
          ))}
        </HorizontalScroll>
      </div>
      <div className="mt-6 max-lg:[&_.horizontal-scroll]:-translate-x-6 max-lg:[&_.horizontal-scroll]:px-6 lg:hidden">
        <ProductRecommendations />
      </div>
      <div className="mt-6 max-lg:[&_.horizontal-scroll]:-translate-x-6 max-lg:[&_.horizontal-scroll]:px-6">
        <DealsSection />
      </div>
    </div>
  );
};
