"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CopyToClipboard } from "@/components/clipboard/copy-to-clipboard";
import { Star, Copy } from "lucide-react";
import { WishlistIcon } from "@/components/ui/icons/wishlist-icon";

import { useSearchParams } from "next/navigation";
import { CartModulate } from "../cart/cart-modulate";
import { CustomTab } from "../custom-tab";
import { updateURLParameters } from "@/lib/utils";
import { BackButton } from "../back-button";
import { MotionWrapper } from "../motion-wrapper";
import { Text } from "../ui/text";
import { useState } from "react";

export const ProductDetails = () => {
  const searchParams = useSearchParams();
  const validTabs = ["details", "reviews"];
  const urlTab = searchParams.get("tab") ?? "details";
  const tab = validTabs.includes(urlTab) ? urlTab : "details";
  const changeTab = (tab: string) => {
    updateURLParameters({ tab });
  };
   const [quantity, setQuantity] = useState(1);

   const decreaseQuantity = () => {
     if (quantity > 1) {
       setQuantity(quantity - 1);
     }
   };

   const increaseQuantity = () => {
     setQuantity(quantity + 1);
   };
  return (
    <MotionWrapper className="px-3 py-6">
      <BackButton back />
      <div className="flex flex-row mt-3">
        <CustomTab
          label={"Details"}
          active={tab === "details"}
          onClick={() => changeTab("new")}
        />
        <CustomTab
          label={"Reviews"}
          active={tab === "reviews"}
          amount={2}
          onClick={() => changeTab("onGoing")}
        />
      </div>
      <>
        {tab === "details" && (
          <div>
            <Text size={"large"} weight={"medium"} className="">
              Pizza Livara
            </Text>
            <p className="text-sm/5 text-[#475467] mt-2.5">
              Mixed with vegetables with avocado and cilantro, served with lemon
              herb
            </p>
            <div className="flex justify-between items-center mb-2.5 sm:mb-4">
              <h3 className="text-xs sm:text-[13.4px]/[17.44px] font-bold tracking-[-4.5%]">
                ₦ 3,500
              </h3>
              <div className="flex text-[#F28705] gap-0.5">
                <Star className="size-2.5 sm:size-3" />
                <Star className="size-2.5 sm:size-3" />
                <Star className="size-2.5 sm:size-3" />
                <Star className="size-2.5 sm:size-3" />
                <Star className="size-2.5 sm:size-3" />
              </div>
            </div>
            <div className="space-x-4">
              <Text size={"large"} weight={"medium"} className="">
                Quantity
              </Text>
              <div className="flex items-center rounded-full text-primary">
                <button
                  onClick={decreaseQuantity}
                  className="flex items-center justify-center"
                >
                  -
                </button>
                <span className="mx-4 text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                + Add to Cart
              </button>
            </div>
          </div>
        )}
      </>
    </MotionWrapper>
  );
};
