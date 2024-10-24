"use client";

import { CategoryContainer } from "../explore/category-list";
import { useCategories, useSingleCategory } from "./hooks/use-categories";

export function CategoriesList() {
  const { data, error, isLoading } = useCategories(1, 30);

  console.log(data);
  return (
    <CategoryContainer
      data={data?.data?.categories}
      className="py-6 border-y border-y-grey-300"
    />
  );
}

// Single Category
// const { data, error, isLoading } = useSingleCategory(
//     "66f4ba0d6931bee129617aea"
//   );

// Search for Category
// const { data, error, isLoading } = useSearchCategories("b");
