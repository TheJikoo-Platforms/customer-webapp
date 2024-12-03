"use client";
import { VendorsContainer } from "../explore/vendors-list";
import { useStores } from "./hooks/use-stores";

export function VendorsList() {
  const { data, isLoading, error } = useStores();
  console.log(data);
  return <VendorsContainer data={data?.data} />;
}
