"use client";
import { useEffect, useState } from "react";
import { SearchFilters, useSearchProducts } from "../hooks/use-products";
import SearchForm from "./search-form";
import { RecentSearch } from "./recent-search";
import { AvailableProducts } from "./available-products";
import { useSearchParams } from "next/navigation";
import { LoadingSearch } from "./loading-search";
import { CategorySection } from "./catergory-section";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useMinimumLoading } from "@/hooks/use-minimum-loading";
import { setShowFilterOverlay } from "@/redux-store/slices/backdrop/search-filter-slice";
import { addSearch } from "@/redux-store/slices/recent-search-slice";

const filterOptions = [
  { id: "price", label: "Price" },
  { id: "rating", label: "Rating" },
  // { id: "category", label: "Category" },
  { id: "cookingTime", label: "Cooking Time" },
];

export const SearchUI = () => {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [formValue, setFormValue] = useState<string>("");
  const [showSearchBar, setShowSearchBar] = useState(true);
  const { activeFilters } = useAppSelector((state: RootState) => state.filter);
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  const transformedFilters = activeFilters.reduce((acc, filter) => {
    if (
      filter.type === "price" &&
      filter.range?.min != null &&
      filter.range?.max != null
    ) {
      acc.minPrice = filter.range.min.toString();
      acc.maxPrice = filter.range.max.toString();
    }
    if (
      filter.type === "rating" &&
      filter.range?.min != null &&
      filter.range?.max != null
    ) {
      acc.minRating = filter.range.min.toString();
      acc.maxRating = filter.range.max.toString();
    }
    if (
      filter.type === "cookingTime" &&
      filter.range?.min != null &&
      filter.range?.max != null
    ) {
      acc.minCookingTime = filter.range.min.toString();
      acc.maxCookingTime = filter.range.max.toString();
    }
    return acc;
  }, {} as SearchFilters);

  const {
    data,
    isLoading: queryLoading,
    error,
  } = useSearchProducts(query, transformedFilters);
  const isLoading = useMinimumLoading(queryLoading);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (data?.data?.data && query && !isLoading && mounted) {
      dispatch(addSearch(query));
    }
  }, [data, query, isLoading, mounted]);

  useEffect(() => {
    setCategory(searchParams.get("category") || "");
    setQuery(searchParams.get("query") || "");
  }, [searchParams, activeFilters]);

  const dispatch = useAppDispatch();
  const handleFilterClick = () => {
    dispatch(setShowFilterOverlay(true));
    setCategory("");
  };

  const isFilterActive = (type: string) => {
    return activeFilters.some((filter) => filter.type === type);
  };

  // If you need to log the current filters

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white min-h-screen lg:min-h-[300px] pb-[125px] lg:pb-10 md:rounded-lg">
      <div className="p-4 pt-5 sm600:p-6 flex flex-col gap-6">
        {/* Search Form */}
        {(showSearchBar || !category) && (
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
              <>
                {/* Filter Options */}
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={handleFilterClick}
                      className={clsx([
                        "px-3 py-1.5 rounded-full border text-xs whitespace-nowrap flex items-center gap-1",
                        {
                          "border-[#E4E7EC] bg-[#F4F4F4]": !isFilterActive(
                            filter.id
                          ),
                          "border-jikoo-brand-green bg-[#E7F6EC] text-jikoo-brand-green":
                            isFilterActive(filter.id),
                        },
                      ])}
                    >
                      {filter.label} <ChevronDown className="w-4 h-4" />
                    </button>
                  ))}
                </div>

                <AvailableProducts products={data.data.data} query={query} />
              </>
            )
          ))}

        {category && !query && <CategorySection category={category} />}
      </div>
    </div>
  );
};
