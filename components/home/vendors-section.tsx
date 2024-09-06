import { ChevronRight } from "lucide-react";
import { ExploreItem } from "@/components/explore/explore-item";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { HorizontalScroll } from "@/components/horizontal-scroll";

export const VENDORSLIST = [
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


export const VendorsSection = () => {
    return (
      <div className="py-6">
        <Text>Explore</Text>
        <HorizontalScroll className="gap-3.5 flex overflow-x-auto scrollbar-none mt-3 max-lg:-translate-x-6 max-lg:px-6 ">
          {VENDORSLIST.map((el) => (
            <ExploreItem data={el} key={el.name} />
          ))}
        </HorizontalScroll>
        <div className="mt-5 flex justify-center">
          <Link
            href={"/explore/restaurants"}
            className="flex gap-1 items-center text-sm"
          >
            See All Our Vendors{" "}
            <ChevronRight size={16} className="text-primary " />
          </Link>
        </div>
      </div>
    );
}