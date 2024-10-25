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

export const useSearchProducts = (searchTerm: string) => {
  return useQuery(
    ["searchProducts", searchTerm], // Unique query key, searchTerm acts as a variable key
    () => searchProducts(searchTerm), // Function to fetch products based on search term
    {
      enabled: !!searchTerm, // Only run the query if searchTerm is not empty
      onError: (error: any) => {
        console.error("Error during product search:", error);
        // You can show a toast or handle errors here
      },
    }
  );
};
