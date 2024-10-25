"use client";
import { IoClose } from "react-icons/io5";
import { CategoryList } from "../../explore/explore";
import { LuClock3 } from "react-icons/lu";
import { Text } from "../../ui/text";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";

export const RecentSearch = () => {
  const searches = useAppSelector(
    (state: RootState) => state.recentSearch.searches
  );
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
      <div className="-translate-x-6 lg:translate-x-0 mt-4">
        <CategoryList
          headingSize="text-base tracking-normal py-4 border-t border-t-grey-100"
          className="flex flex-wrap px-0 py-4 border-b border-b-grey-100"
        />
      </div>
    </div>
  );
};
