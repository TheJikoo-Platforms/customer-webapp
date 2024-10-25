"use client";
import { useState } from "react";
import { useSearchProducts } from "../hooks/use-products";
import SearchForm from "./search-form";
import { RecentSearch } from "./recent-search";
import Spinner from "@/components/ui/spinner";
import { AvailableProducts } from "./available-products";

export const SearchUI = () => {
  const [query, setQuery] = useState<string>("Amala");
  const { data, isLoading, error } = useSearchProducts(query);
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-white">
      <div className="border-b border-b-[#EBEBEB] pb-3 pt-5 p-4 sm600:hidden sticky top-0 bg-white z-[50]">
        <p className="text-2xl font-medium tracking-[-0.48px]">Search</p>
      </div>

      <div className="p-4 sm600:p-6 flex flex-col gap-6">
        <SearchForm
          isSubmitting={isSearching}
          setIsSubmitting={setIsSearching}
          query={query}
          setQuery={setQuery}
        />

        {!isSearching && <RecentSearch />}
        {isLoading && <LoadingState />}
      </div>
      {isSubmitted && (
        <AvailableProducts products={data?.data?.data} query={query} />
      )}
    </div>
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
