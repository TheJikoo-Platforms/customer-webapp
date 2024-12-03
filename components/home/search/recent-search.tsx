"use client";
import { IoClose } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { Text } from "../../ui/text";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { useCategories } from "../hooks/use-categories";
import { ExploreItem } from "@/components/explore/explore-item";
import { ICategory, IStore } from "@/components/types";
import Link from "next/link";
import Image from "next/image";
import { useStores } from "../hooks/use-stores";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { ChevronRight } from "lucide-react";
import { Divider } from "../divider";
import SliderCard from "../slider-card";

export const RecentSearch = () => {
  const searches = useAppSelector(
    (state: RootState) => state.recentSearch.searches
  );
  const { data } = useCategories(1, 20);
  const { data: vendors } = useStores();
  console.log(data, vendors);
  return (
    <div className="">
      <div className="flex items-center justify-between ">
        <Text className="text-sm md:text-base mb-3">Recent search</Text>
        <button type="button" className="text-sm underline-offset-2 underline">
          Clear
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {searches.length > 0 ? (
          searches?.map((item, key) => (
            <button
              type="button"
              key={key}
              className="text-grey-500  py-2 bg-white pr-2 flex items-center gap-2 text-sm rounded-md"
            >
              <span className="flex items-center gap-2 flex-1">
                <LuClock3 className="text-grey-600" />
                {item}
              </span>

              <IoClose className="text-grey-400 ml-3 text-xl" />
            </button>
          ))
        ) : (
          <p className="text-sm text-grey-400">No recent search</p>
        )}
      </div>
      <div className="w-full h-1 bg-grey-100 my-8"></div>
      <div className="mt-4">
        {data?.data?.categories && (
          <>
            <p className="text-sm md:text-lg xl:text-xl text-[#989898] tracking-[-0.4px] block font-semibold mb-4">
              What Are You Craving?
            </p>

            <HorizontalScroll className="gap-3 md:gap-[50px] flex items-center">
              {data?.data?.categories?.map((el: ICategory) => (
                <ExploreItem
                  href={`/search/products?category=${el.name}`}
                  data={el}
                  key={el?._id}
                />
              ))}
            </HorizontalScroll>
          </>
        )}
      </div>
      <div className="w-full h-1 bg-grey-100 my-8"></div>

      <Link href="/deals">
        <HorizontalScroll className="">
          <div className="bg-[#BAA393] rounded-xl h-[129px] md:h-[135px] flex justify-between items-end min-w-[330px]">
            <div className="flex flex-col gap-2 justify-between text-[#734B31] tracking-[-0.4px] p-4 lg:p-6 h-full">
              <h3 className="text-[22px] sm400:text-[24px] md:text-[28px] font-bold tracking-[-1.2px] leading-[25px]">
                Tasty Deal Of The Day
              </h3>
              <span className="tracking-[-0.2px] text-sm">
                {"View deals >"}
              </span>
            </div>
            <Image
              src={"/deals.png"}
              alt="deal"
              width={1000}
              height={1000}
              className="h-[60%] md:h-full max-w-[55%] w-auto object-cover rounded-br-xl"
            />
          </div>
        </HorizontalScroll>
      </Link>

      <div className="w-full h-1 bg-grey-100 my-8"></div>
      <>
        <div className="flex item-center mb-3 gap-3">
          <div className="flex gap-3 w-full">
            <p className="text-sm md:text-lg xl:text-xl text-[#989898] tracking-[-0.4px] block font-semibold mb-4">
              Restaurants
            </p>
          </div>
          <Link
            href="/near-you"
            className="text-xs sm400:text-sm text-jikoo-brand-green tracking-[-0.4px] flex items-center text-nowrap"
          >
            See More <ChevronRight className="w-[14px] h-[14px]" />
          </Link>
        </div>
        <HorizontalScroll className="justify-between gap-5 flex items-center pl-2">
          {vendors?.data?.slice(0, 6)?.map((el: IStore) => (
            <ExploreItem
              href={`/vendors/q?vendor=${el._id}`}
              data={el}
              key={el?._id}
            />
          ))}
        </HorizontalScroll>
      </>
      <Divider className="my-6" />

      <SliderCard
        textContainerStyle="md:max-w-[300px]"
        headingStyle="text-[20px] md:text-[28px]"
        textStyle="text-xs md:text-[16px]"
        imageStyle="w-[180px]"
        className="w-full max-w-[initial] px-0"
        innerClassName="w-full h-[150px] md:h-[190px]"
      />
    </div>
  );
};
