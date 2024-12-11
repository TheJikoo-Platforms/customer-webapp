"use client";
import { useTransitionRouter } from "next-view-transitions";
import { IoSearch } from "react-icons/io5";

export const SearchButton = () => {
  const router = useTransitionRouter();
  return (
    <div className="max-md:hidden">
      <button
        onClick={() => router.push("wallet/transactions")}
        className="md:rounded-xl md:bg-white p-3 my-5 flex flex-col gap-6 w-full "
      >
        <div className="border border-grey-300 p-3 rounded-full flex items-center gap-2 w-full">
          <IoSearch className="text-grey-400 text-lg" />
          <p className="bg-transparent text-grey-400 text-sm outline-none">
            Search for transactions
          </p>
        </div>
      </button>
    </div>
  );
};
