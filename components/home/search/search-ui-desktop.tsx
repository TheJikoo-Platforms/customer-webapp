"use client";
import { useEffect, useState } from "react";
import { useSearchProducts } from "../hooks/use-products";
import { AvailableProducts } from "./available-products";
import { useSearchParams } from "next/navigation";

export const SearchUIDesktop = () => {
  const [query, setQuery] = useState<string>("");
  const { data } = useSearchProducts(query);
  const searchParams = useSearchParams();
  useEffect(() => {
    const queried = searchParams.get("query");
    console.log(queried);
    if (queried) {
      console.log(data);
      setQuery(queried);
    }
  }, [searchParams]);

  return (
    <div className="bg-white md:p-6 md:rounded-xl">
      <AvailableProducts products={data?.data?.data} query={query} />
    </div>
  );
};
