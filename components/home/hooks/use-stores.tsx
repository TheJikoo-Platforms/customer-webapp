"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllStores } from "@/api/requests";

export const useStores = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ["stores", page, limit],
    queryFn: () => getAllStores(page, limit),
  });
};
