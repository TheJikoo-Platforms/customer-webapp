import { getAllProducts, searchProducts } from "@/api/requests";
import { useQuery } from "@tanstack/react-query";

// Custom hook to fetch products
export const useProducts = (page: number, limit: number) => {
  return useQuery(
    ["products", page, limit], // Query key with page and limit
    () => getAllProducts(page, limit), // Fetch function
    {
      keepPreviousData: true, // Keep previous data while new data is being fetched
    }
  );
};

// Search for products
export interface SearchFilters {
  limit?: number;
  minPrice?: number | null;
  maxPrice?: number | null;
  minRating?: string | null;
  maxRating?: string | null;
  minDeliveryTime?: number | null;
  maxDeliveryTime?: number | null;
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
    minDeliveryTime,
    maxDeliveryTime,
  } = filters;

  return useQuery(
    ["searchProducts", query, filters], // Include filters in the query key
    () =>
      searchProducts(
        query,
        limit,
        minPrice || undefined,
        maxPrice || undefined,
        minRating ? Number(minRating) : undefined,
        maxRating ? Number(maxRating) : undefined
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
