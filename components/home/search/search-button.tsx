"use client";
import { useTransitionRouter } from "next-view-transitions";
import { IoSearch } from "react-icons/io5";

export const SearchButton = () => {
  const router = useTransitionRouter();
  return (
    <div className="max-lg:hidden">
      <button
        onClick={() => router.push("/search")}
        className="lg:rounded-xl lg:bg-white p-4 mb-4 flex flex-col gap-6 w-full "
      >
        <div className="border border-grey-300 p-4 rounded-full flex items-center gap-2 w-full">
          <IoSearch className="text-gray-400 text-lg" />
          <p className="bg-transparent text-grey-400 text-sm outline-none">
            Search for restaurants or foods
          </p>
        </div>
      </button>
    </div>
  );
};
