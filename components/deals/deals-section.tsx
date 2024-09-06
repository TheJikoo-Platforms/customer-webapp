import { DealItem } from "@/components/deals/deal-item";
import { Text } from "@/components/ui/text";
import { ChevronRight } from "lucide-react";
import Link from 'next/link'
import { HorizontalScroll } from "../horizontal-scroll";

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

export const DealsSection = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-5 pr-6">
        <Text className="text-base ">Deals</Text>
        <Link href={"/explore/restaurants"} className="flex gap-1 items-center">
          See More <ChevronRight size={18} className="text-primary " />{" "}
        </Link>
      </div>
      <HorizontalScroll className="gap-3.5 flex">
        {CATEGORYLIST.map((el) => (
          <DealItem data={el} key={el.name} />
        ))}
      </HorizontalScroll>
    </div>
  );
};
