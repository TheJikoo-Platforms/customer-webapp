'use client'
import Image from "next/image";
import Link from "next/link";
import { LoadingIcon } from "@/components/ui/icons/loading-icon";
import { updateURLParameters } from "@/lib/utils";

export const AutoSuggest = () => {
  return (
    <div
      onClick={() => updateURLParameters({ modal: 'suggest'})}
      className="rounded-[4px] md:rounded-dm flex   text-[#5C4F44] bg-[#EDD3BA] relative "
      aria-roledescription="button"
    >
      <div className=" md:p-4 md:pr-0 xl:pb-7">
        <h2 className="font-bold sm:text-lg md:text-2xl/7 xl:text-[40px]/[38.68px] tracking-tighter">
          <span className="flex items-center gap-3 xl:gap-4 ">
            Auto
            <LoadingIcon className="size-6 xl:size-[30px]" fill={"#5C4F44"} />
          </span>
          <span> Suggest</span>
        </h2>
        <p className="text-sm xl:text-base mt-2 pr-20">
          Instantly Get Food Recommendations
        </p>
      </div>
      <Image
        alt=""
        src={"/home/auto.png"}
        width={300}
        height={300}
        className="size-[170px] xl:size-[197px] absolute -right-14 -bottom-4 z-10 "
      />
    </div>
  );
};

