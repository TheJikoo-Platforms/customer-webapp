import Image from "next/image";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { CopyToClipboard } from "../clipboard/copy-to-clipboard";
// import

export const OrderItem = () => {
  return (
    <div className="px-4 py-5 border-b border-dashed border-black/25 dark:border-white/25">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <div>
            <Image
              alt="order image"
              src={"/orders/1.png"}
              width={1000}
              height={1000}
              className="w-[58px] h-[50px] sm:w-[140px] sm:h-[100px] md:h-[150px] md:w-[200px]"
              quality={100}
            />
          </div>
          <div className="space-y-[3.5px]">
            <h2 className="font-medium text-[7px] text-primary sm:text-sm ">
              Standard Order
            </h2>
            <p className="text-[13px] font-bold sm:text-lg md:text-xl">
              2 Fufu and Okra Soup
            </p>
            <p className="text-[10px] sm:text-sm md:text-base text-black/80 dark:text-white/60">
              Side: Fufu (2)
            </p>
            {/* <CopyToClipboard
              item={{
                id: "#1E340L7",
                time: new Date(Date.now()),
                type: "item",
              }} */}
            className="text-jikoo-orange text-xs md:text-base flex gap-1
            max-md:hidden"
            {/* >
              <Copy className="size-5 " />
              #1E340L7 */}
            {/* </CopyToClipboard> */}
          </div>
        </div>
        <p className="font-bold text-xs sm:text-base md:text-xl lg:text-2xl">
          ₦ 250
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          {/* <CopyToClipboard
            item={{ id: "#1E340L7", time: new Date(Date.now()), type: "item" }}
            className="text-jikoo-orange text-xs flex gap-1 md:hidden"
          >
            <Copy className="size-3 " />
            #1E340L7 */}
          {/* </CopyToClipboard> */}
        </div>
        <div className="flex gap-7">
          <Button className="py-2 font-bold max-md:hidden lg:text-base">
            VIEW PRODUCT
          </Button>
          <Button className="py-2 font-bold lg:text-base">Buy Again</Button>
        </div>
      </div>
    </div>
  );
};
