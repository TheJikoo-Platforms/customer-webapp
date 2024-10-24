"use client";
import { DealItem } from "./deal-item";
import { useProducts } from "../home/hooks/use-products";
import { IProductItem } from "../types";

export const DealsSection = () => {
  const { data, isLoading, isError, error } = useProducts(1, 5);
  return (
    <div className="grid grid-cols-2 sm600:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.data.products.map((item: IProductItem, index: number) => (
        <DealItem data={item} key={index} />
      ))}
    </div>
  );
};
