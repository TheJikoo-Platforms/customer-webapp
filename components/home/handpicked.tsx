"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import FoodItemContainer from "../food-items/food-items-container";
import { useProducts } from "./hooks/use-products";
import { Divider } from "./divider";
import { IProductItem } from "../types";

export const HandpickedForYou = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [isEnd, setIsEnd] = useState(false);

  const { data, isLoading, error } = useProducts(page, 10);

  useEffect(() => {
    if (data?.data.products) {
      if (data.data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.data.products]);
      } else {
        setIsEnd(true);
      }
    }
  }, [data]);

  const handleLoadMore = () => {
    if (!isEnd && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className="px-6 pt-2">
      <h2 className="font-bold text-xl mb-4 tracking-[-0.4px] hidden md:block">
        Handpicked for you
      </h2>
      <div className="flex gap-3 items-center mb-3 md:hidden">
        <p className="text-sm text-[#989898] tracking-[-0.4px] flex-1 text-nowrap font-semibold">
          Handpicked for you
        </p>
        <Divider className="bg-[#eee]" />
      </div>
      {products.length > 0 && <FoodItemContainer foodItems={products} />}
      <div className="mt-6 md:mt-12 flex justify-center pb-5">
        {!isEnd ? (
          <button
            className="text-sm flex items-center gap-1 text-primary"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            See More
            <ChevronDown size={16} />
          </button>
        ) : (
          <p className="text-sm text-gray-500">No more items to load</p>
        )}
      </div>
    </section>
  );
};
