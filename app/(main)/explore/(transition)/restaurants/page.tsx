import {  Settings2 } from "lucide-react";
import { ExploreItem } from "@/components/explore/explore-item";
import { Text } from "@/components/ui/text";
import { SearchInput } from "@/components/ui/search-input";
import { HorizontalScroll } from "@/components/horizontal-scroll";

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

export default function RestaurantsPage() {
  return (
    <div className="py-6 pl-6">
      <div className="flex items-center gap-3 pr-6">
       <SearchInput/>
        <button>
          <Settings2 />
        </button>
      </div>
      <div className="mt-3">
        <Text className="text-base mb-5">Near You</Text>
        <HorizontalScroll className="gap-3.5 flex ">
          {RESTAURANTLIST.map((el) => (
            <ExploreItem data={el} key={el.name} />
          ))}
        </HorizontalScroll>
      </div>
      <div className="mt-3">
        <Text className="text-base mb-5">Your Favourites</Text>
        <HorizontalScroll className="gap-3.5 flex ">
          {RESTAURANTLIST.map((el) => (
            <ExploreItem data={el} key={el.name} />
          ))}
        </HorizontalScroll>
      </div>
      <div className="mt-3">
        <Text className="text-base mb-5">All vendors</Text>
        <HorizontalScroll className="gap-3.5 flex ">
          {RESTAURANTLIST.map((el) => (
            <ExploreItem data={el} key={el.name} />
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}
