import { getAllProducts, searchProducts } from "@/api/requests";
import { useQuery } from "@tanstack/react-query";

// Custom hook to fetch products
export const useProducts = (page: number, limit: number) => {
  return useQuery(
    ["products", page, limit], // Query key with page and limit
    () => getAllProducts(page, limit), // Fetch function
    {
      keepPreviousData: true, // Keep previous data while new data is being fetched
      retry: 3, // Add retry limit
      onError: (error: any) => {
        console.error("Error fetching products:", error);
      },
    }
  );
};

// Search for products
export interface SearchFilters {
  limit?: number;
  minPrice?: string | null;
  maxPrice?: string | null;
  minRating?: string | null;
  maxRating?: string | null;
  minCookingTime?: string | null;
  maxCookingTime?: string | null;
}

export const useSearchProducts = (
  query: string,
  filters: SearchFilters = {}
) => {
  const {
    limit = 10,
    minPrice,
    maxPrice,
    minRating,
    maxRating,
    minCookingTime,
    maxCookingTime,
  } = filters;

  return useQuery(
    ["searchProducts", query, filters],
    () =>
      searchProducts(
        query,
        limit,
        minPrice ? Number(minPrice) : undefined,
        maxPrice ? Number(maxPrice) : undefined,
        minRating ? Number(minRating) : undefined,
        maxRating ? Number(maxRating) : undefined,
        minCookingTime ? Number(minCookingTime) : undefined,
        maxCookingTime ? Number(maxCookingTime) : undefined
      ),
    {
      enabled: !!query,
      retry: 3,
      onError: (error: any) => {
        console.error("Error during product search:", error);
      },
    }
  );
};
