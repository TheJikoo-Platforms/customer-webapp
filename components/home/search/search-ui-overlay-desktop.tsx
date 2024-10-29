"use client";
import { useState } from "react";
import { RecentSearch } from "./recent-search";
import { setShowSearchOverlay } from "@/redux-store/slices/backdrop/search";
import { useTransitionRouter } from "next-view-transitions";
import BorderedDiv from "@/components/auth/bordered-div";
import { IoClose, IoSearch } from "react-icons/io5";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { useAppDispatch } from "@/redux-store/hooks";

export const SearchUIDesktopOverlay = () => {
  const [formValue, setFormValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleCloseSearch = () => {
    dispatch(setShowSearchOverlay(false));
  };
  const router = useTransitionRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/?query=${formValue}`);
    setTimeout(() => {
      handleCloseSearch();
    }, 1000);
  };

  const handleClear = () => {
    setFormValue("");
  };
  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-b-[#EBEBEB] pb-3 pt-5 p-4 sm600:hidden sticky top-0 bg-white z-[50]">
        <p className="text-2xl font-medium tracking-[-0.48px]">Search</p>
      </div>

      <div className="p-4 sm600:p-6 flex flex-col gap-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-3 relative -mt-2 sm600:mt-0"
        >
          <BorderedDiv className="border-grey-300 p-4  gap-2 w-full flex items-center border rounded-lg relative">
            <IoSearch className="text-gray-400 text-lg" />

            <UnstyledInput
              type="text"
              placeholder="Search for dishes or restuarants"
              className="bg-transparent placeholder:text-grey-400 w-full text-sm outline-none font-normal"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            />
            {formValue && (
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center text-grey-500 full"
              >
                <p className="text-sm">Clear</p>
                <IoClose className="text-xl" />
              </button>
            )}
          </BorderedDiv>
        </form>

        <RecentSearch />
      </div>
    </div>
  );
};
