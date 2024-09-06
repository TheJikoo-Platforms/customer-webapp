import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WishlistIcon } from "@/components/ui/icons/wishlist-icon";

import { Heart, Star } from "lucide-react";
import { WishlistButton } from "./wishlist-button";

export const FoodItem = () => {
  return (
    <div>
      <div className="relative rounded-dm overflow-hidden">
        <Image
          alt=""
          src={"/store/1.png"}
          width={200}
          height={200}
          className="w-full h-auto object-cover rounded-dm"
          quality={100}
        />
        <WishlistButton />
        <div
          style={{
            background:
              "linear-gradient( to bottom, rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.484), rgba(0, 0, 0, 0.655), rgba(0, 0, 0, 0.847) )",
          }}
          className="absolute bottom-0 inset-x-0 p-2"
        >
          <div className="flex text-white gap-2 items-center text-[10px] md:text-sm">
            <Image
              alt=""
              width={20}
              height={20}
              className="size-3.5 md:size-[17px]"
              src={"/home/domi.png"}
              quality={100}
            />
            Dominos Pizzaria
          </div>
        </div>
      </div>
      <div className="pt-2 sm:pt-2.5">
        <div className="flex justify-between text-[9px] sm:text-[10.92px]/[14.27px] mb-1 ">
          <h2 className="font-medium">Chicken Pasta</h2>
          <p className="text-[#777777] ">12 ratings</p>
        </div>
        <div className="flex justify-between items-center mb-2.5 sm:mb-4">
          <h3 className="text-xs sm:text-[13.4px]/[17.44px] font-bold tracking-[-4.5%]">₦ 3,500</h3>
          <div className="flex text-[#F28705] gap-0.5">
            <Star className="size-2.5 sm:size-3" />
            <Star className="size-2.5 sm:size-3" />
            <Star className="size-2.5 sm:size-3" />
            <Star className="size-2.5 sm:size-3" />
            <Star className="size-2.5 sm:size-3" />
          </div>
        </div>
        <div>
          <Button variant={"outline"} className="w-full capitalize py-2 text-xs/[17.4px]">
            + Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
