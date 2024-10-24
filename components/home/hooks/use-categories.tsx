"use client";
import { getSingleCategory, searchCategories } from "@/api/requests";
import { getAllCategories } from "@/api/requests";
import { useQuery } from "@tanstack/react-query";

export const useCategories = (page: number = 1, limit: number = 30) => {
  return useQuery({
    queryKey: ["categories", page, limit], // Unique key for caching the query
    queryFn: () => getAllCategories(page, limit), // The function to fetch categories
  });
};

export const useSingleCategory = (categoryId: string | null) => {
  return useQuery(
    ["singleCategory", categoryId],
    () => {
      if (!categoryId) return Promise.reject("No category ID provided");
      return getSingleCategory(categoryId); // Call the API with the category ID
    },
    {
      enabled: !!categoryId, // Fetch data only if categoryId is valid (non-null or undefined)
    }
  );
};

export const useSearchCategories = (searchTerm: string) => {
  return useQuery(
    ["searchCategories", searchTerm],
    () => {
      if (!searchTerm) return Promise.reject("No search term provided");
      return searchCategories(searchTerm); // Call the API with the search term
    },
    {
      enabled: !!searchTerm, // Fetch data only if searchTerm is valid (non-null or undefined)
      onError: (error) => {
        console.error("Error searching categories:", error);
      },
    }
  );
};
