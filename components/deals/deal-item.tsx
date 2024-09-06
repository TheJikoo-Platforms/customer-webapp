import Image from "next/image";
import { Button } from "@/components/ui/button";
import dealsImage from "@/public/deals/deal-rice.png";
import { CartCheckIcon, EyeIcon, HeartIcon } from "../ui/icons";

export const DealItem = ({ data }: { data: any }) => {
  return (
    <div className="w-[152px] shrink-0 h-[232px] pb-px bg-white rounded-xl border border-[#eff1f4] flex-col gap-1 flex">
      <div
        className="w-full h-[201px] rounded-t-xl p-3 flex-col justify-between items-start flex"
        style={{
          backgroundImage: `url(${dealsImage.src}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="items-center gap-1.5 flex">
          <Image
            className="size-[27.50px] rounded-full"
            src="/vendors/dominos.png"
            width={27.5}
            height={27.5}
            alt="Vendor_Logo"
          />
          <p className="text-center text-white text-[10px] tracking-tight">
            Dominos Pizza
          </p>
        </div>
        <div className="space-y-1.5">
          <p className=" text-white text-[10px] leading-[14.50px]">
            Chicken Girl (1) • Beef (2) • Plantain (4) Fish (2) • Pepsi (2){" "}
          </p>
          <Button className="px-4 py-2 ">N3,600</Button>
        </div>
      </div>
      <div className=" px-1.5 pb-1.5 justify-between items-start flex text-[#475267] text-sm ">
        <div className="items-center gap-1 flex">
          <EyeIcon className="w-[14.67px] h-4 relative" />
          <div className="leading-tight">2k</div>
        </div>
        <div className="items-center gap-1 flex">
          <CartCheckIcon className="w-[14.67px] h-4 relative" />
          <div className="leading-tight">245</div>
        </div>
        <div className="items-center gap-1 flex">
          <HeartIcon className="w-[14.67px] h-4 relative" />
          <div className="leading-tight">30</div>
        </div>
      </div>
    </div>
  );
};
