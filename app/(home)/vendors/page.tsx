import { BackButton } from "@/components/back-button";
import { Button } from "@/components/ui/button";
import { ShareIcon, VerifiedIcon } from "@/components/ui/icons";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { PiBicycleThin, PiCookingPot } from "react-icons/pi";
import { TiStarFullOutline } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { FaGoogle, FaTwitter } from "react-icons/fa6";
import TabComponent from "@/components/vendors/tabs";
export default async function VendorsPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <div className="min-h-dvh">
      <div className="bg-white py-3 px-6 mt-[57px] md:mt-0 lg:mb-4 lg:rounded-xl">
        <BackButton back />
      </div>

      <div className="bg-white lg:px-8 lg:pt-6 rounded-t-xl">
        <div className="relative">
          <Image
            src="/vendors/vendor-banner.png"
            alt="Vendors Banner"
            height={1000}
            width={1000}
            quality={100}
            className="w-full h-[135px] max-h-[135px] lg:rounded-t-xl object-cover"
          />

          <div className="absolute -bottom-12 left-4">
            <Image
              src="/vendors/chicken-repubilc.png"
              alt="Vendors Display Logo"
              height={1000}
              width={1000}
              quality={100}
              className="w-[100px] h-[100px] rounded-full bordr-2 bordr-white"
            />
            <span className="bottom-3 right-1 absolute">
              <VerifiedIcon />
            </span>
          </div>
        </div>

        <div className="mt-16 px-4">
          <h2 className="text-xl font-bold tracking-[-0.4px]">
            Chicken Republic
          </h2>
          <p className="text-grey-600 text-sm mt-1">
            Asian fusion • Chinese • Malavsian • Comfort Food • Rice & Curry •
            Noodles • Chicken • Vegetarian friendly • Allergy friendly
          </p>

          <div className="text-sm flex items-center mb-4 mt-1 gap-3">
            <p className="text-jikoo-brand-green font-medium">Open till 8pm</p>

            <div className="flex items-center text-grey-500 text-xs">
              <p className="flex gap-1 items-center">
                <TiStarFullOutline /> <span>4.5</span>
              </p>
              <LuDot className="mx-0.5 text-[#667185]" />
              <p className="flex gap-1 items-center">
                <PiCookingPot /> <span>20-30min</span>
              </p>
              <LuDot className="mx-0.5 text-[#667185]" />
              <p className="flex gap-1 items-center">
                <PiBicycleThin /> <span>₦3,500</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              className="px-3 py-2 flex items-center gap-1.5"
            >
              <ShareIcon />
              <p className="text-sm font-bold">Share</p>
            </Button>

            <div className="flex text-grey-400 text-xl gap-4">
              <FaTwitter />
              <BsInstagram />
              <FaGoogle />
            </div>
          </div>
        </div>
      </div>
      <TabComponent />
    </div>
  );
}
