import Image from "next/image";
import { Star } from "lucide-react";

export const ReviewItem = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-2.5">
          <Image
            alt="vendors Logo"
            src={"/venlogo.png"}
            width={32}
            height={32}
          />
          <p className="text-[9px] sm:text-base md:text-xl lg:text-2xl text-black">
            Hardy Foodie
          </p>
        </div>
        <div className="flex gap-1 sm:gap-2">
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
          <Star className="text-[#F28705] fill-[#F28705] size-2.5 sm:size-4" />
        </div>
        <p className="font-bold  text-xs sm:text-xs md:text-base lg:text-xl">
          If you are unsure of what to eat u can never go wrong with this
          jollof, would recommend !{" "}
        </p>
      </div>
      <h4 className="text-black/50 text-[9px] sm:text-xs md:text-base lg:text-lg mt-2">
        Reviewed in Port Harcourt on April 21, 2023
      </h4>
    </div>
  );
};
