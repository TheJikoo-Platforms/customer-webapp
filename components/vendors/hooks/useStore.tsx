"use client";
import { useQuery } from "@tanstack/react-query";
import { getSingleStore } from "@/api/requests";

export const useStore = (storeId: string | null) => {
  return useQuery({
    queryKey: ["store", storeId],
    queryFn: () => {
      if (!storeId) throw new Error("Store ID is required");
      return getSingleStore(storeId);
    },
    enabled: !!storeId,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};
