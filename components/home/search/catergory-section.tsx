import { useMemo } from "react";
import { BackButton } from "@/components/back-button";
import { Divider } from "../divider";
import { useCategories } from "../hooks/use-categories";
import { ICategory } from "@/components/types";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import FoodItemContainer from "@/components/food-items/food-items-container";
import { useProducts, useSearchProducts } from "../hooks/use-products";
import InnerHeader from "@/components/inner-page-header-mobile";
import { useTransitionRouter } from "next-view-transitions";

interface CategorySectionProps {
  category: string;
}

export const CategorySection = ({ category }: CategorySectionProps) => {
  const { data } = useCategories(1, 20);
  const {
    data: categoriesData,
    isLoading,
    error,
  } = useSearchProducts(category);

  const sortedCategories = useMemo(() => {
    if (!data?.data?.categories) return [];

    return [...data.data.categories].sort((a, b) => {
      // Move selected category to the front
      if (a.name === category) return -1;
      if (b.name === category) return 1;
      return 0;
    });
  }, [data?.data?.categories, category]);
  const router = useTransitionRouter();

  return (
    <div className="overflow-hidden">
      <InnerHeader text="Categories" className="-mx-4 sm600:-mx-6" />
      <div className="hidden lg:block">
        <div className="flex items-center gap-2">
          <BackButton
            onClick={() => router.replace("/search/products?query=")}
          />
          <span className="text-[#1E1E1E] font-bold tracking-[-0.4px]">
            Categories
          </span>
        </div>
        <Divider className="my-4" />
      </div>
      <div
        className="gap-3 sm:gap-8 md:gap-[50px]  overflow-x-auto scrollbar-none flex items-centr h-full pb-3 lg:pb-12 mb-8 px-6 -mx-6"
        style={{
          boxShadow: "0 8px 8px 0 #00993314",
        }}
      >
        {sortedCategories.map((el: ICategory) => (
          <Link
            href={`/search/products?category=${el.name}`}
            key={el.name}
            className={clsx([
              "relative items-center gap-2.5 flex flex-col shrink-0 max-w-[60px] after:content-[''] after:absolute after:-bottom-3 after:h-1 after:w-full after:rounded-full transition-all ",
              {
                "after:bg-jikoo-brand-green": el?.name === category,
                "after:bg-white": el?.name !== category,
              },
            ])}
          >
            <div>
              <Image
                src={el?.image || el?.photo || ""}
                alt={el?.name || ""}
                className="w-[55px] h-[55px] rounded-full object-cover"
                width={55}
                height={55}
                unoptimized
              />
            </div>
            <p
              className={clsx([
                "text-[12px] leading-[14px] tracking-[-0.4px] line-clamp-2 text-center capitalize",
                {
                  "text-black-charcoal font-semibold": el?.name === category,
                  "text-grey-500 font-normal": el?.name !== category,
                },
              ])}
            >
              {el?.name}
            </p>
          </Link>
        ))}
      </div>

      <FoodItemContainer
        isLessDetailed
        foodItems={categoriesData?.data?.data}
      />
    </div>
  );
};
