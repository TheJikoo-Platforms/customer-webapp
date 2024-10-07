"use client";
import React, { useRef, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { CategoryList } from "../explore/explore";
import { Text } from "../ui/text";
import { LuClock3 } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import Backdrop from "../ui/backdrop";
import { slideUp } from "@/variants";
import { setShowSearchOverlay } from "@/redux-store/slices/backdrop/search";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import BorderedDiv from "../auth/bordered-div";
import { UnstyledInput } from "../ui/unstyled-input";
import Spinner from "../ui/spinner";
import { createFilledArray } from "@/lib/utils";
import { FoodItem } from "../food-item";
import { useMediaQuery } from "react-responsive";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const RECENTSEARCHES = ["Amala", "Jollof rice", "Rice"];

export const SearchOverlay = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return <>{isMobile ? <SearchUIMobile /> : <SearchUIDesktop />}</>;
};

const SearchUIDesktop = () => {
  const dispatch = useAppDispatch();
  const showSearchOverlay = useAppSelector(
    (state: RootState) => state.searchOverlay.showsearchOverlay
  );
  const mainRef = useRef<HTMLDivElement>(null);
  const handleCloseSearch = () => {
    dispatch(setShowSearchOverlay(false));
  };
  useOnClickOutside(mainRef, handleCloseSearch);
  return (
    <AnimatePresence>
      {showSearchOverlay && (
        <Backdrop variants={slideUp}>
          <div className="w-full min-h-screen flex items-center justify-center">
            <div
              ref={mainRef}
              className="sm600:rounded-xl bg-white mb-4 flex flex-col gap-6 sm600:w-[599px] lg:w-[800px] h-[calc(100vh-68px)] sm600:max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-none"
            >
              <SearchUI />
            </div>
          </div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

const SearchUIMobile = () => {
  const showSearchOverlay = useAppSelector(
    (state: RootState) => state.searchOverlay.showsearchOverlay
  );
  return (
    <AnimatePresence>
      {showSearchOverlay && (
        <motion.div
          key="search-overlay-mobile"
          variants={slideUp}
          initial={{
            opacity: 0,
            y: "50%",
          }}
          animate={{ opacity: 100, y: "0", transition: { type: "tween" } }}
          exit={{ opacity: 0, y: "100%" }}
          className="bg-white flex pb-20 flex-col gap-6 h-screen overflow-y-auto scrollbar-none fixed inset-0 z-50"
        >
          <SearchUI />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SearchUI = () => {
  const searchForm = useForm({
    defaultValues: {
      query: "",
    },
  });
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async () => {
    setIsSearching(true);
    setIsSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsSubmitted(true);
  };

  const handleClear = () => {
    searchForm.reset();
    setIsSearching(false);
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="border-b border-b-[#EBEBEB] pb-3 pt-5 p-4 sm600:hidden sticky top-0 bg-white z-30">
        <p className="text-2xl font-medium tracking-[-0.48px]">Search</p>
      </div>

      <div className="p-4 sm600:p-6 flex flex-col gap-6">
        <Form {...searchForm}>
          <form
            onSubmit={searchForm.handleSubmit(handleSubmit)}
            className="space-y-3 relative -mt-2 sm600:mt-0"
          >
            <FormField
              control={searchForm.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv className="border-grey-300 p-4  gap-2 w-full flex items-center border rounded-lg relative">
                      <IoSearch className="text-gray-400 text-lg" />

                      <UnstyledInput
                        type="text"
                        placeholder="Search for dishes or restuarants"
                        className="bg-transparent placeholder:text-grey-400 w-full text-sm outline-none font-normal"
                        {...field}
                      />
                      {field.value && (
                        <button
                          type="button"
                          onClick={handleClear}
                          disabled={searchForm.formState.isSubmitting}
                          className="flex items-center text-grey-500 full"
                        >
                          <p className="text-sm">Clear</p>
                          <IoClose className="text-xl" />
                        </button>
                      )}
                    </BorderedDiv>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        {/* When The User has in current search input */}
        {!isSearching && (
          <div className="">
            <div className="flex items-center justify-between ">
              <Text className="text-base mb-3">Recent search</Text>
              <button
                type="button"
                className="text-sm underline-offset-2 underline"
              >
                Clear
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {RECENTSEARCHES.map((item, key) => (
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
              ))}
            </div>
            <div className="-translate-x-6 lg:translate-x-0">
              <CategoryList
                headingSize="text-base tracking-normal py-4 border-t border-t-grey-100"
                className="flex flex-wrap px-0 py-4 border-b border-b-grey-100"
              />
            </div>
          </div>
        )}

        {searchForm.formState.isSubmitting && <LoadingState />}

        {/* Products */}
        {isSubmitted && (
          <>
            <p className="text-[#1E1E1E]">75 results for “Amala”</p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-12">
              {createFilledArray("", 10).map((_, index) => (
                <li key={index}>
                  <FoodItem index={index + 1} key={index} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export const SearchButton = () => {
  const dispatch = useAppDispatch();
  const handleOverlay = () => {
    dispatch(setShowSearchOverlay(true));
  };
  return (
    <button
      onClick={handleOverlay}
      className="lg:rounded-xl lg:bg-white p-4 mb-4 flex flex-col gap-6 w-full"
    >
      <div className="border border-grey-300 p-4 rounded-full flex items-center gap-2 w-full">
        <IoSearch className="text-gray-400 text-lg" />
        <p className="bg-transparent text-grey-400 text-sm outline-none">
          Search for restaurants or foods
        </p>
      </div>
    </button>
  );
};

const LoadingState = () => {
  return (
    <div className="text-center text-grey-600 my-10 ">
      <Spinner color="text-jikoo-brand-green" />
      <h2 className="">Loading...</h2>
    </div>
  );
};
