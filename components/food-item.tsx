"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WishlistIcon } from "@/components/ui/icons/wishlist-icon";
import { LuDot } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { PiCookingPot } from "react-icons/pi";
import { PiBicycleThin } from "react-icons/pi";
import { Heart, Star } from "lucide-react";
import { WishlistButton } from "./wishlist-button";
import { AddedToCartIcon, AddToCartIcon } from "./ui/icons";
import { useState } from "react";

export const FoodItem = ({ index }: { index: number }) => {
  const [IsAdded, setIsAdded] = useState(false);
  return (
    <div className="grid grid-cols-[33%,67%]">
      {/* Left */}
      <div className="relative">
        <Image
          alt=""
          src={`/handpicked/${index}.png`}
          width={200}
          height={200}
          className="w-full min-w-[100px] object-cover rounded-md rounded-br-[32px] h-full max-h-[120px]"
          quality={100}
        />
        <WishlistButton className="absolute top-[8px] left-[5px]" />
        {/* Exclusive */}
        <div className="bg-[#4A1AAD] text-xs text-white pl-[11px] pr-[15px] pt-[1px] pb-[2px] absolute bottom-3 left-0 text-nowrap rounded-r-full">
          Exclusive ✨
        </div>
      </div>

      {/* Right */}
      <div className="ml-3">
        <p className="w-full truncate overflow-hidden whitespace-nowrap text-sm font-semibold">
          Chicken Pasta and salad indomie and small chops
        </p>

        <div className="mt-1.5 flex items-center">
          {/* Logo */}
          <Image
            src="/vendors/dominos.png"
            alt="Resturant Logo"
            className="w-3 h-3 rounded-full object-cover"
            width={55}
            height={55}
            unoptimized
          />

          <p className="ml-1 flex text-xs items-center text-grey-500">
            Chicken Republic <LuDot className="mx-1 text-[#667185]" />
            <span className="mr-1">{234} sold</span>
          </p>
        </div>

        <div className="mt-1.5 flex items-center text-grey-500 text-xs">
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

        <div className="mt-2 flex justify-between">
          <div className="flex flex-col font-inter">
            <p className="text-jikoo-brand-green font-bold text-lg">₦32,500</p>
            <p className="line-through text-xs text-grey-400">₦34,500</p>
          </div>

          <button
            onClick={() => setIsAdded(true)}
            className={`${
              IsAdded
                ? "bg-jikoo-brand-green"
                : "border border-jikoo-brand-green"
            } rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200`}
          >
            {IsAdded ? <AddedToCartIcon /> : <AddToCartIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

// export const FoodItemDesktop = ({ index }: { index: number }) => {
//   const [dimensions, setDimensions] = useState<Dimensions | null>(null);

//   useEffect(() => {
//     const loadImageDimensions = async () => {
//       try {
//         const { width, height } = await getImageDimensions(
//           `/handpicked/${index}.png`
//         );
//         setDimensions({ width, height });
//       } catch (error) {
//         console.error("Error loading image dimensions:", error);
//       }
//     };

//     loadImageDimensions();
//   }, [index]);
//   return (
//     <div>
//       <div className="relative rounded-dm overflow-hidden">
//         {dimensions && (
//           <Image
//             alt=""
//             src={`/handpicked/${index}.png`}
//             width={dimensions.width}
//             height={dimensions.height}
//             className="w-full h-auto max-h-[122px] object-cover rounded-[5px]"
//             quality={100}
//           />
//         )}
//         <WishlistButton className="absolute right-2 top-2" />
//         {/* <div
//           // style={{
//           //   background:
//           //     "linear-gradient( to bottom, rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.484), rgba(0, 0, 0, 0.655), rgba(0, 0, 0, 0.847) )",
//           // }}
//           className="absolute bottom-0 inset-x-0 p-2"
//         >
//           <div className="flex text-white gap-2 items-center text-[10px] md:text-sm">
//             <Image
//               alt=""
//               width={20}
//               height={20}
//               className="size-3.5 md:size-[17px]"
//               src={"/home/domi.png"}
//               quality={100}
//             />
//             Dominos Pizzaria
//           </div>
//         </div> */}
//       </div>
//       <div className="pt-2 sm:pt-2.5">
//         <div className="flex justify-between text-[9px] gap-2 sm:text-[17.052px]/[14.27px] mb-1 ">
//           <h2 className="tracking-[-0.365px]">Chicken Pasta</h2>
//           <p className="text-[#777777] text-[14.616px]">12 ratings</p>
//         </div>
//         <div className="flex justify-between gap-2 items-center mb-2.5 sm:mb-4">
//           <h3 className="text-[17.053px] font-bold tracking-[-0.767px]">
//             ₦ 3,500
//           </h3>
//           <div className="flex text-[#F28705] gap-0.5">
//             <Star className="size-2.5 sm:size-3" />
//             <Star className="size-2.5 sm:size-3" />
//             <Star className="size-2.5 sm:size-3" />
//             <Star className="size-2.5 sm:size-3" />
//             <Star className="size-2.5 sm:size-3" />
//           </div>
//         </div>
//         <div>
//           <Button
//             variant={"outline"}
//             className="w-full capitalize py-2.5 text-[14.616px] rounded-[10px] tracking-[-0.01px]"
//           >
//             + Add to Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { getImageDimensions } from "@/lib/utils";
// import { useEffect, useState } from "react";

// type Dimensions = { width: number; height: number };
