import Image from "next/image";
import { Star } from "lucide-react";

export const VendoreDetails = () => {
  return (
    <div>
      <h1 className="font-medium text-sm sm:text-base md:text-xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 ">
        About This Vendor
      </h1>
      <div className="flex items-center gap-1 sm:gap-2 md:gap-2.5">
        <Image alt="vendors Logo" src={"/venlogo.png"} width={32} height={32} />
        <p className="text-[9px] sm:text-base md:text-xl lg:text-2xl text-black">
          Hardy Foodie
        </p>
      </div>
      <div className="flex gap-2 md:gap-3 mt-2 sm:mt-3 md:mt-4">
        <div className="flex gap-1 sm:gap-2">
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
        </div>
        <p className="font-bold text-[10px] sm:text-sm md:text-lg">
          5 out of 5
        </p>
      </div>
      <div className="space-y-1 sm:space-y-2 md:space-y-3">
        <div className="text-[10px] sm:text-xs md:text-base lg:text-lg flex gap-2 md:gap-3 lg:gap-4">
          <h3>Full name: </h3>
          <h4 className="font-medium">Market Square</h4>
        </div>
        <div className="text-[10px] sm:text-xs md:text-base lg:text-lg flex gap-2 md:gap-3 lg:gap-4">
          <h3>Establishment Date: </h3>
          <h4 className="font-medium">24/7/2019</h4>
        </div>
        <div className="text-[10px] sm:text-xs md:text-base lg:text-lg flex gap-2 md:gap-3 lg:gap-4">
          <h3>Location: </h3>
          <h4 className="font-medium">Port Harcourt</h4>
        </div>
      </div>
    </div>
  );
};
