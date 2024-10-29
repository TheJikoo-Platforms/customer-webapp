"use client";
import { IoClose } from "react-icons/io5";
import { CategoryList } from "../../explore/explore";
import { LuClock3 } from "react-icons/lu";
import { Text } from "../../ui/text";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { useCategories } from "../hooks/use-categories";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { ExploreItem } from "@/components/explore/explore-item";
import { ICategory } from "@/components/types";

export const RecentSearch = () => {
  const searches = useAppSelector(
    (state: RootState) => state.recentSearch.searches
  );
  const { data } = useCategories(1, 30);
  console.log(data);
  return (
    <div className="">
      <div className="flex items-center justify-between ">
        <Text className="text-base mb-3">Recent search</Text>
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
      <div className="mt-4">
        {data?.data?.categories && (
          <>
            <Text className="text-base mb-3 tracking-[-0.4px]">Categories</Text>
            <div className="gap-6 flex flex-wrap">
              {data?.data?.categories?.map((el: ICategory) => (
                <ExploreItem data={el} key={el.index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
