import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

export const SideItem = () => {
  return (
    <div className="sm:w-[220px]">
      <div className="relative max-sm:h-24 ">
        <Image
          alt=""
          src={"/store/1.png"}
          width={200}
          height={200}
          className="w-full h-full object-cover object-center rounded md:rounded-dm"
        />
      </div>
      <div className="py-2 sm:pt-3">
        <div className="flex justify-between text-[9px] sm:text-base mb-1 ">
          <h2 className="">Chicken Pasta</h2>
          <h3 className="text-xs sm:text-lg lg:text-xl font-bold">₦ 3,500</h3>
        </div>
        <div>
          <Button
            variant={"outline"}
            className="w-full sm:border-[4px] sm:py-6 sm:rounded-[10px] sm:text-lg lg:text-xl capitalize"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
