import React from "react";
import { IoSearch } from "react-icons/io5";
import { CategoryList } from "../explore/explore";
import { Text } from "../ui/text";
import { LuClock3 } from "react-icons/lu";

const RECENTSEARCHES = ["Amala", "Jollof rice", "Rice"];

const SearchUI = () => {
  return (
    <div className="lg:rounded-xl lg:bg-white p-4 mb-4 flex flex-col gap-6">
      <div className="border border-grey-300  p-4 rounded-full flex items-center gap-2">
        <IoSearch className="text-gray-400 text-lg" />
        <input
          type="search"
          name="search"
          placeholder="Search for dishes or restuarants"
          className="bg-transparent placeholder:text-grey-400 w-full text-sm outline-none"
        />
      </div>

      {/* <div className="">
        <Text className="text-xl mb-3 tracking-[-0.4px]">Recent search</Text>
        <div className="flex gap-4">
          {RECENTSEARCHES.map((item, key) => (
            <button
              type="button"
              key={key}
              className="text-grey-500 border border-grey-300 bg-white py-1 pl-3 pr-2 flex items-center gap-2 text-sm rounded-md"
            >
              <LuClock3 className="text-grey-600" /> {item}
            </button>
          ))}
        </div>
      </div>

      <CategoryList className="grid grid-cols-8" /> */}
    </div>
  );
};

export default SearchUI;
