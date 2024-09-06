import Link from "next/link";
import { Search, Settings2, ChevronRight } from "lucide-react";
import { ProductRecommendations } from "@/components/home/product-recommendation";
import { ExploreItem } from "@/components/explore/explore-item";
import { Input } from "@/components/ui/input";

const CATEGORYLIST = [
  { name: "Breakfast", imageUrl: "/categories/pancake.jpg" },
  { name: "Bole & Grills", imageUrl: "/categories/bole.jpg" },
  {
    name: "Beans & Porridge",
    imageUrl: "/categories/beans.jpg",
  },
  { name: "Native", imageUrl: "/categories/native.jpg" },
  {
    name: "Pasta & Noodles",
    imageUrl: "/categories/pasta.jpg",
  },
  { name: "Rice Recipes", imageUrl: "/categories/jollof.jpg" },
  {
    name: "Soups & Swallow",
    imageUrl: "/categories/egusi.jpg",
  },
  { name: "Fries", imageUrl: "/categories/fries.jpg" },
  { name: "Sharwama", imageUrl: "/categories/sharwama.jpg" },
  { name: "Pizza", imageUrl: "/categories/pizza.jpg" },
  {
    name: "Dessert & Pastries",
    imageUrl: "/categories/dessert.jpg",
  },
  { name: "Specials", imageUrl: "/categories/sushi.jpg" },
  { name: "Drinks", imageUrl: "/categories/drinks.jpg" },
];

const RESTAURANTLIST = [
  { name: "McDonald's", imageUrl: "https://example.com/mcdonalds.jpg" },
  { name: "Pizza Hut", imageUrl: "https://example.com/pizzahut.jpg" },
  { name: "KFC", imageUrl: "https://example.com/kfc.jpg" },
  { name: "Burger King", imageUrl: "https://example.com/burgerking.jpg" },
  { name: "Subway", imageUrl: "https://example.com/subway.jpg" },
  { name: "Domino's Pizza", imageUrl: "https://example.com/dominos.jpg" },
  { name: "Starbucks", imageUrl: "https://example.com/starbucks.jpg" },
  { name: "Taco Bell", imageUrl: "https://example.com/tacobell.jpg" },
  { name: "Chipotle", imageUrl: "https://example.com/chipotle.jpg" },
  { name: "Wendy's", imageUrl: "https://example.com/wendys.jpg" },
];

export default function Vendors() {
  return (
    <div className="py-6 pl-6">
      <div className="flex items-center gap-3 pr-6">
        <div className="flex items-center gap-2 px-3 py-2 flex-1 border border-gray-300 rounded-full ">
          <Search size={20} color={"#98A2B3"} />
          <Input
            placeholder="Search for dishes"
            className="font-dmsans-regular grow text-sm bg-transparent border-none py-0 h-auto"
          />
        </div>
        <button>
          <Settings2 />
        </button>
      </div>
      <div className="mt-3">
        <p className="text-base mb-5">Categories</p>
        <div className="gap-3.5 flex overflow-x-auto scrollbar-none ">
          {CATEGORYLIST.map((el) => (
            <ExploreItem data={el} key={el.name} />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-base mb-5">Categories</p>
        <div className="gap-3.5 flex overflow-x-auto scrollbar-none ">
          {CATEGORYLIST.map((el) => (
            <ExploreItem data={el} key={el.name} />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-base mb-5">Categories</p>
        <div className="gap-3.5 flex overflow-x-auto scrollbar-none ">
          {CATEGORYLIST.map((el) => (
            <ExploreItem data={el} key={el.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
