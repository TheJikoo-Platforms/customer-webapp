import { Star } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import Image from "next/image";

import PNG from "@/public/cart/1.png";

export const ReviewModal = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[330px] z-[100] sm:max-w-3xl bg-white rounded-dm">
        <DialogHeader className="font-medium md:font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl mb-1 sm:mb-2 md:mb-3 lg:mb-5 sm:text-center">Write a Review</DialogHeader>
        <div>
          <div className="space-y-5 md:space-y-7 lg:space-y-8 xl:space-y-10">
            <div className="grid grid-cols-[78px,auto] md:grid-cols-[166px,auto] gap-5 md:gap-7">
              <div className="rounded md:rounded-dm overflow-hidden">
                <Image
                  alt="review image"
                  className="m:w-full max-sm:h-full aspect-[11.5,10] object-cover"
                  width={166}
                  height={144}
                  src={PNG}
                />
              </div>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 ">
                <h3 className="font-bold text-sm md:text-base lg:text-xl tracking-tight">
                  Jollof Rice
                </h3>
                <div className=" flex gap-2 sm:gap-8 items-center">
                  <div>
                    <div className="flex gap-0.5 sm:gap-2">
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Input />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[78px,auto] md:grid-cols-[166px,auto] gap-5 md:gap-7">
              <div className="rounded md:rounded-dm overflow-hidden">
                <Image
                  alt="review image"
                  className="m:w-full max-sm:h-full aspect-[11.5,10] object-cover"
                  width={166}
                  height={144}
                  src={PNG}
                />
              </div>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 ">
                <h3 className="font-bold text-sm md:text-base lg:text-xl tracking-tight">
                  Jollof Rice
                </h3>
                <div className=" flex gap-2 sm:gap-8 items-center">
                  <div>
                    <div className="flex gap-0.5 sm:gap-2">
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                      <Star className="text-[#F28705] size-2.5 sm:size-4" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Input />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 md:gap-7 lg:gap-10 mt-6 md:mt-8 lg:mt-10 xl:mt-12">
            <Button>SUBMIT REVIEW</Button>
            <Button variant={"outline"}>CANCEL</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
