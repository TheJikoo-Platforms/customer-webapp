"use client";
import { useEffect, useState } from "react";
import { useSearchProducts } from "../hooks/use-products";
import SearchForm from "./search-form";
import { RecentSearch } from "./recent-search";
import { AvailableProducts } from "./available-products";
import { useSearchParams } from "next/navigation";
import { LoadingSearch } from "./loading -search";
import { CategorySection } from "./catergory-section";

export const SearchUI = () => {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [formValue, setFormValue] = useState<string>("");
  const { data, isLoading, error } = useSearchProducts(query);
  const searchParams = useSearchParams();
  useEffect(() => {
    const searchQueries = {
      category: searchParams.get("category"),
      query: searchParams.get("query"),
    };

    if (searchQueries.category) setCategory(searchQueries.category);
    if (searchQueries.query) setQuery(searchQueries.query);
  }, [searchParams]);

  return (
    <div className="bg-white min-h-screen lg:min-h-[300px] pb-[125px] lg:pb-10 md:rounded-lg">
      {/* <div className="border-b border-b-[#EBEBEB] pb-3 pt-5 p-4 lg:hidden sticky top-0 bg-white z-[50]">
        <p className="text-2xl font-medium tracking-[-0.48px]">Search</p>
      </div> */}

      <div className="p-4 pt-5 sm600:p-6 flex flex-col gap-6">
        {!category && (
          <SearchForm
            isLoading={isLoading}
            setFormValue={setFormValue}
            formValue={formValue}
          />
        )}

        {!category && !query && !data && <RecentSearch />}

        {!category &&
          query &&
          (isLoading ? (
            <LoadingSearch query={query} />
          ) : (
            data?.data?.data && (
              <AvailableProducts products={data.data.data} query={query} />
            )
          ))}

        {category && !query && <CategorySection category={category} />}
      </div>
    </div>
  );
};
