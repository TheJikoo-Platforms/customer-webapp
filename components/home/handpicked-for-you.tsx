import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FoodItem } from "@/components/food-item";
import { createFilledArray } from "@/lib/utils";

export const HandpickedForYou = () => {
  return (
    <section className="px-5 lg:px-[36px] pt-2">
      <h2 className="font-bold text-xl mb-3 tracking-[-0.4px]">
        Handpicked for you
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-12">
        {createFilledArray("", 5).map((_, index) => (
          <li key={index}>
            <FoodItem index={index + 1} key={index} />
          </li>
        ))}
      </ul>

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
