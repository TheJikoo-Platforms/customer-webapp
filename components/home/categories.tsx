"use client";

import { CategoryContainer } from "../explore/category-list";
import { useCategories, useSingleCategory } from "./hooks/use-categories";

export function CategoriesList() {
  const { data, isError, isLoading } = useCategories(1, 30);
  return (
    <>
      {data?.data?.categories && (
        <CategoryContainer data={data?.data?.categories} className="py-2" />
      )}
    </>
  );
}
