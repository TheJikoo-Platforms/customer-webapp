"use client";
import { useState } from "react";
import { useSearchProducts } from "../hooks/use-products";
import { AvailableProducts } from "./available-products";

export const SearchUIDesktop = () => {
  const [query, setQuery] = useState<string>("Amala");
  const { data, isLoading, error } = useSearchProducts(query);

  return (
    <div className="bg-white md:p-6 md:rounded-xl">
      <AvailableProducts products={data?.data?.data} query={query} />
    </div>
  );
};
