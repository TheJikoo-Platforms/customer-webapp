"use client";
import { useEffect, useState } from "react";
import { useSearchProducts } from "../hooks/use-products";
import SearchForm from "./search-form";
import { RecentSearch } from "./recent-search";
import Spinner from "@/components/ui/spinner";
import { AvailableProducts } from "./available-products";
import { useSearchParams } from "next/navigation";

export const SearchUI = () => {
  const [query, setQuery] = useState<string>("");
  const [formValue, setFormValue] = useState<string>("");
  const { data, isLoading, error } = useSearchProducts(query);

  const searchParams = useSearchParams();

  useEffect(() => {
    const queried = searchParams.get("query");
    console.log(isLoading, queried);
    if (queried) {
      setQuery(queried);
    }
  }, [searchParams]);

  return (
    <div className="bg-white min-h-screen md:min-h-[initial] pb-[125px] md:pb-10 md:rounded-lg">
      <div className="border-b border-b-[#EBEBEB] pb-3 pt-5 p-4 sm600:hidden sticky top-0 bg-white z-[50]">
        <p className="text-2xl font-medium tracking-[-0.48px]">Search</p>
      </div>

      <div className="p-4 sm600:p-6 flex flex-col gap-6">
        <SearchForm
          isLoading={isLoading}
          setFormValue={setFormValue}
          formValue={formValue}
        />

        {!query && !data && <RecentSearch />}

        {query &&
          (isLoading ? (
            <LoadingState />
          ) : (
            data?.data?.data && (
              <AvailableProducts products={data.data.data} query={query} />
            )
          ))}
      </div>
    </div>
  );
};

const LoadingState = () => (
  <div className="text-center text-grey-600 my-10 ">
    <Spinner color="text-jikoo-brand-green" />
    <h2 className="">Loading...</h2>
  </div>
);
