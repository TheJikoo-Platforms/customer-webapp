import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WishlistIcon } from "@/components/ui/icons/wishlist-icon";

export const WishlistItem = () => {
  return (
    <div className="grid grid-cols-[152px,auto] sm:grid-cols-[250px,auto] md:grid-cols-[330px,auto] lg:grid-cols-[368px,auto] gap-4 py-5 sm:py-7 md:py-8 lg:py-10">
      <div className="relative rounded md:rounded-dm overflow-hidden">
        <Image
          alt=""
          src={"/store/1.png"}
          width={200}
          height={200}
          className="sm:w-full max-sm:h-full aspect-[15,10] object-cover "
        />
        <button className="text-primary size-5 md:size-[38px] rounded bg-white absolute right-2 top-2 grid place-content-center">
          <WishlistIcon className="size-2.5 sm:size-[18px] fill-primary" />
        </button>
      </div>
      <div>
        <div className="space-y-2 sm:space-y-3 md:space-y-4 ">
          <h3 className="font-medium md:text-xl lg:text-[26px] tracking-widest">
            Jollof Rice
          </h3>
          <div className=" flex gap-2 sm:gap-8 items-center">
            <div>
              <div className="flex gap-0.5 sm:gap-2">
                <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
                <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
                <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
                <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
                <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
              </div>
            </div>
            <p className="text-primary text-[9px] sm:text-lg md:text-2xl tracking-tighter">
              (47 verified ratings)
            </p>
          </div>
          <h2 className="font-bold sm:text-lg md:text-2xl lg:text-3xl tracking-tight">
            ₦ 2,500
          </h2>
        </div>
        <Button
          variant={"outline"}
          className="w-full md:max-w-[330px] mt-2.5 sm:mt-4 md:mt-5 lg:mt-7"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
