import Link from "next/link";
import Image from "next/image";
import { WhiteCard } from "@/components/white-card";
import { Button } from "@/components/ui/button";
import { HomeTitle } from "./home-title";

export const VendorSection = () => {
  return (
    <WhiteCard>
      <section>
        <div className="grid grid-cols-[58%,auto] md:grid-cols-[55%,1fr] sm:gap-10 justify-between">
          <div>
            <div className="space-y-2 sm:max-lg:space-y-6">
              <h2 className="text-primary font-semibold text-xs  sm:text-base lg:text-xl">
                Team . Customer . Community
              </h2>
              <HomeTitle className="font-bold text-lg sm:text-5xl lg:text-6xl">
                We Work With The Best Vendors
              </HomeTitle>
              <p className="text-xs sm:text-lg lg:text-2xl">
                We have gone far and wide scouting for the best of the best just
                to meet your needs.
              </p>
            </div>
            <div className="mt-6 sm:mt-20">
              <Button className="max-sm:py-1.5 text-xs max-sm:font-normal rounded-md md:text-xl max-sm:tracking-widest max-lg:px-2 lg:px-8 max-sm:h-auto">
                <Link target="_blank" href={"https://vendors.jikoo.ng"}>
                  Become a vendor
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-x-2 grid-cols-2 sm:grid-cols-3">
            <div className="rounded-full overflow-hidden size-[50px] md:size-[136px] lg:size-[146px]">
              <Image
                alt="vendor"
                width={100}
                height={100}
                className="w-full"
                src={"/home/kili.png"}
                quality={100}
              />
            </div>
            <div className="rounded-full overflow-hidden size-[50px] md:size-[136px] lg:size-[146px]">
              <Image
                alt="vendor"
                width={100}
                height={100}
                className="w-full"
                src={"/home/domi.png"}
                quality={100}
              />
            </div>
            <div className="rounded-full overflow-hidden size-[50px] md:size-[136px] lg:size-[146px]">
              <Image
                alt="vendor"
                width={100}
                height={100}
                className="w-full"
                src={"/home/chick.png"}
                quality={100}
              />
            </div>
            <div className="rounded-full overflow-hidden size-[50px] md:size-[136px] lg:size-[146px]">
              <Image
                alt="vendor"
                width={100}
                height={100}
                className="w-full"
                src={"/home/pizza.png"}
                quality={100}
              />
            </div>
            <div className="rounded-full overflow-hidden size-[50px] md:size-[136px] lg:size-[146px]">
              <Image
                alt="vendor"
                width={100}
                height={100}
                className="w-full"
                src={"/home/hardy.png"}
                quality={100}
              />
            </div>
            <div className="rounded-full overflow-hidden size-[50px] md:size-[136px] lg:size-[146px]">
              <Image
                alt="vendor"
                width={100}
                height={100}
                className="w-full"
                src={"/home/market.png"}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-12 flex justify-end">
          <Link href={"/vendors"} className="text-xs sm:text-xl lg:text-2xl">
            See All Our Vendors {">"}
            {/* <ChevronRight /> */}
          </Link>
        </div>
      </section>
    </WhiteCard>
  );
};
