import { ChevronDown } from "lucide-react";

import { FoodItem } from "@/components/food-item";
import { Button } from "@/components/ui/button";

export const StoreList = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-5 sm:gap-x-16 lg:gap-x-20 gap-y-6 md:gap-y-10">
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
      <div className="flex justify-center mt-20">
        <Button className="w-2/3 ">
          SHOW MORE <ChevronDown className="w-6 h-3" />{" "}
        </Button>
      </div>
    </div>
  );
};
