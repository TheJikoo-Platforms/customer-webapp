import Link from "next/link";
import { Search, Settings2, ChevronRight } from "lucide-react";
import { ProductRecommendations } from "@/components/home/product-recommendation";
import { ExploreItem } from "@/components/explore/explore-item";
import { Text } from "@/components/ui/text";
import { SearchInput } from "@/components/ui/search-input";
import { DealsSection } from "@/components/deals/deals-section";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { cn } from "@/lib/utils";

const CATEGORYLIST = [
  { name: "Pastries", image: "/categories/1.png" },
  { name: "Pizzas", image: "/categories/2.png" },
  {
    name: "Breakfast",
    image: "/categories/3.png",
  },
  { name: "Soups", image: "/categories/4.png" },
  {
    name: "Rice",
    image: "/categories/5.png",
  },
  { name: "Protein", image: "/categories/6.png" },
  {
    name: "Chicken",
    image: "/categories/7.png",
  },
  { name: "Hotdog", image: "/categories/8.png" },
  { name: "Dessert", image: "/categories/9.png" },
  { name: "Drinks", image: "/categories/10.png" },
  { name: "Pastries.", image: "/categories/1.png" },
  { name: "Pizzas.", image: "/categories/2.png" },
  {
    name: "Breakfast.",
    image: "/categories/3.png",
  },
  { name: "Soups.", image: "/categories/4.png" },
  {
    name: "Rice.",
    image: "/categories/5.png",
  },
  { name: "Protein.", image: "/categories/6.png" },
  {
    name: "Chicken.",
    image: "/categories/7.png",
  },
];

const RESTAURANTLIST = [
  { name: "Kinimajaro.", image: "/vendors/Kinimajaro.png" },
  { name: "Dominos Pizza", image: "/vendors/dominos.png" },
  { name: "Chicken Republic", image: "/vendors/chicken-repubilc.png" },
  { name: "Pizza Jungle", image: "/vendors/pizzaJungle.png" },
  { name: "Hardy Foodie", image: "/vendors/hardy-foods.png" },
  { name: "Kinimajaro", image: "/vendors/Kinimajaro.png" },
  { name: "Pizza Dominos ", image: "/vendors/dominos.png" },
  { name: "Republic Chicken ", image: "/vendors/chicken-repubilc.png" },
  { name: "Jungle Pizza ", image: "/vendors/pizzaJungle.png" },
  { name: "Foodie Hardy", image: "/vendors/hardy-foods.png" },
  // { name: "Market Square", image: "/vendors/marketSquare.png" },
];

export const Explore = ({ className }: { className?: string }) => {
  return (
    <div className="lg:px-6">
      <div className={cn("py-6", className)}>
        <CategoryList className="py-6 border-y border-y-grey-300" />
        <RestaurantList />
      </div>
    </div>
  );
};

export const CategoryList = ({
  className,
  headingSize,
}: {
  className?: string;
  headingSize?: string;
}) => {
  return (
    <div className="px-5 lg:px-0 overflow-x-hidden">
      <Text className={cn("text-xl mb-3 tracking-[-0.4px]", headingSize)}>
        Categories
      </Text>
      <HorizontalScroll
        className={cn(
          "gap-6 flex max-lg:-translate-x-6 max-lg:px-6",
          className
        )}
      >
        {CATEGORYLIST.map((el, key) => (
          <ExploreItem href="/vendors" data={el} key={key} />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export const RestaurantList = () => {
  return (
    <div className="mt-6 px-5 lg:px-0 border-b border-b-grey-300 pb-7 overflow-x-hidden">
      <div className="flex justify-between items-center mb-5">
        <Text className="text-xl tracking-[-0.4px]">Near You</Text>
        <Link
          href={"/near-you"}
          className="flex gap-1 items-center text-sm text-primary"
        >
          See More <ChevronRight size={18} className="text-primary " />
        </Link>
      </div>
      <HorizontalScroll className="gap-6 flex max-lg:-translate-x-6 max-lg:px-6">
        {RESTAURANTLIST.map((el, key) => (
          <ExploreItem href="vendors" data={el} key={key} />
        ))}
      </HorizontalScroll>
    </div>
  );
};
