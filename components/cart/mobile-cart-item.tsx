import Image from "next/image";
import { CartModulate } from "./cart-modulate";
import { Copy } from 'lucide-react'
import { CopyToClipboard } from "@/components/clipboard/copy-to-clipboard";

export const MobileCartItem = () => {
  return (
    <div className="pt-6 pb-5 border-b">
      <div className="flex justify-between items-end">
        <div className="flex">
          <div>
            <Image
              src={"/cart/1.png"}
              alt=""
              width={100}
              height={140}
              className="rounded-dm w-[58px] h-[50px] object-cover"
            />
          </div>
          <div className="ml-2 sm:ml-3  min-w-0 space-y-1 sm:space-y-2">
            <h3 className="text-primary text-[7px] sm:text-[10px] font-medium">
              Standard Order
            </h3>
            <p className="text-[13px] sm:text-lg md:text-xl lg:text-2xl font-bold">
              2 Fufu and Okra Soup
            </p>
            <p className="text-[10px] sm:text-sm md:text-base lg:text-lg  text-black/80 dark:text-[#8A8A8B]">
              Sides: Fufu (2)
            </p>
          </div>
        </div>
        <CartModulate />
      </div>
      <div className="flex justify-between mt-5 sm:mt-7">
        <CopyToClipboard
          className="flex gap-1 text-xs items-center"
          item={{ id: "WUB889", time: new Date(Date.now()), type: "order" }}
        >
          <Copy className="size-3.5 text-black dark:text-white" />
          WUB889
        </CopyToClipboard>
        <h3 className="text-[10px] sm:text-sm font-semibold">₦ 3,500</h3>
      </div>
    </div>
  );
};
