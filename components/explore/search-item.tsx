import { WishlistButton } from "../wishlist-button";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
export const SearchItem = () => {
  return (
    <div className=" pb-3 bg-[#e7f6ec] rounded-xl space-y-2.5">
      <div className="relative">
        <Image
          alt=""
          width={1000}
          height={160}
          className="w-full h-[156px] rounded-t-xl"
          src="/pizza.png"
          unoptimized
        />
        <WishlistButton />
      </div>
      <div className="px-3 space-y-3">
        <div className="justify-between items-center flex text-[#1e1e1e]">
          <h3 className=" text-sm font-bold">Pizza Livaroca</h3>
          <h3 className="text-[11px]">From NGN 3,500</h3>
        </div>
        <div className="justify-between items-start flex">
          <div className=" pl-1.5 pr-3 py-1.5 bg-white/60 rounded-[100px] justify-start items-center gap-1.5 flex">
            <Image
              width={30}
              height={30}
              alt=""
              className="size-[27.50px] rounded-full"
              src="/vendors/dominos.png"
              unoptimized
            />
            <div className="text-center text-[#1e1e1e] text-[10px] font-normal tracking-tight">
              Dominos Pizza
            </div>
          </div>
          <Button variant={"rounded"}>+ Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};
