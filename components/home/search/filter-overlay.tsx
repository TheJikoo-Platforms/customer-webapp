import { RootState } from "@/redux-store/store";
import {
  setShowFilterOverlay,
  resetFilters,
  addFilter,
  removeFilter,
} from "@/redux-store/slices/backdrop/search-filter-slice";
import Backdrop from "@/components/ui/backdrop";
import { slideUp } from "@/variants";
import { CheckIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import clsx from "clsx";
import { Divider } from "../divider";

const priceRanges = [
  { label: "Less than ₦5,000", min: 0, max: 5000 },
  { label: "₦5000 - ₦10000", min: 5000, max: 10000 },
  { label: "₦10000 - ₦50000", min: 10000, max: 50000 },
  { label: "Above ₦50000", min: 50000, max: 100000000000000 },
];

const ratings = [
  { label: "5", min: 5, max: 5 },
  { label: "4 - 5", min: 4, max: 5 },
  { label: "3 - 4", min: 3, max: 4 },
  { label: "2 - 3", min: 2, max: 3 },
  { label: "0 - 2", min: 0, max: 2 },
];

const cookingTimes = [
  { label: "Within 30 mins", min: 0, max: 30 },
  { label: "Within 31 - 45 mins", min: 31, max: 45 },
  { label: "Within 46 - 60 mins", min: 46, max: 60 },
  { label: "Within 61 - 90 mins", min: 61, max: 90 },
  { label: "Above 90 mins", min: 91, max: 100000000000000 },
];

const FilterOverlay = () => {
  const dispatch = useAppDispatch();
  const { activeFilters } = useAppSelector((state: RootState) => state.filter);
  const [tempFilters, setTempFilters] = useState(activeFilters);
  const filterRef = useRef<HTMLDivElement>(null);
  const closeOverlay = () => {
    dispatch(setShowFilterOverlay(false));
  };
  useOnClickOutside(filterRef, closeOverlay);

  const handleFilterToggle = (
    id: string,
    type: "price" | "rating" | "cookingTime",
    range: { min: number | string; max: number | string }
  ) => {
    const isActive = tempFilters.some((filter) => filter.id === id);

    if (isActive) {
      // Update temp filters instead of dispatching
      setTempFilters(tempFilters.filter((filter) => filter.id !== id));
    } else {
      // Remove existing filter of same type and add new one
      const filteredTemp = tempFilters.filter((filter) => filter.type !== type);
      setTempFilters([...filteredTemp, { id, type, range }]);
    }
  };

  const handleApplyFilters = () => {
    // First reset all filters
    dispatch(resetFilters());
    // Then apply temp filters
    tempFilters.forEach((filter) => {
      dispatch(addFilter(filter));
    });
    dispatch(setShowFilterOverlay(false));
  };

  return (
    <Backdrop variants={slideUp}>
      <div className="h-full flex w-full justify-center items-end md:items-center overscroll-contain">
        <div
          ref={filterRef}
          className="bg-white md:rounded-xl w-full max-w-[700px] mx-auto h-full max-h-[100vh] md:max-h-[88vh] overflow-y-auto scrollbar-none overscroll-none "
        >
          <div className="flex justify-between items-center sticky top-0 bg-white p-6 z-10">
            <button
              className="block md:hidden"
              onClick={() => dispatch(setShowFilterOverlay(false))}
            >
              <XIcon className="text-sm" />
            </button>
            <h2 className="text-lg font-bold">Filter Result</h2>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => {
                  setTempFilters([]);
                  dispatch(resetFilters());
                }}
                className="text-jikoo-brand-green font-bold"
              >
                Reset
              </button>
              <button
                className="hidden md:block"
                onClick={() => dispatch(setShowFilterOverlay(false))}
              >
                <XIcon className="text-sm" />
              </button>
            </div>
          </div>

          <div className="px-6">
            {/* Price Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold">Price</h3>
              <p className="mb-3 text-base">Select one</p>
              <div className="space-y-5">
                {priceRanges.map((range) => (
                  <div
                    key={range.label}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() =>
                      handleFilterToggle(
                        `price-${range.min}-${range.max}`,
                        "price",
                        { min: range.min, max: range.max }
                      )
                    }
                  >
                    <div className="relative">
                      <div
                        className={clsx([
                          "w-5 h-5 border-2 border-jikoo-brand-green rounded flex items-center justify-center transition-all",
                          {
                            "bg-jikoo-brand-green": tempFilters.some(
                              (filter) =>
                                filter.id === `price-${range.min}-${range.max}`
                            ),
                            "bg-transparent": !tempFilters.some(
                              (filter) =>
                                filter.id === `price-${range.min}-${range.max}`
                            ),
                          },
                        ])}
                      >
                        {tempFilters.some(
                          (filter) =>
                            filter.id === `price-${range.min}-${range.max}`
                        ) && <CheckIcon className="text-white text-sm" />}
                      </div>
                    </div>
                    <span className="text-sm text-[#667185] tracking-[0.2px]">
                      {range.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Divider className="my-3 border-[#E2E8F0]" />
            {/* Rating Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold">Rating</h3>
              <p className="mb-3 text-base">Select one</p>
              <div className="flex gap-4 flex-wrap">
                {ratings.map((rating) => (
                  <button
                    key={rating.label}
                    onClick={() =>
                      handleFilterToggle(`rating-${rating.label}`, "rating", {
                        min: rating.min,
                        max: rating.max,
                      })
                    }
                    className={clsx([
                      "flex items-center gap-1 px-3 py-1.5 rounded-full transition-all text-xs border text-nowrap",
                      {
                        "bg-[#E7F6EC] text-jikoo-brand-green border-jikoo-brand-green":
                          tempFilters.some(
                            (filter) => filter.id === `rating-${rating.label}`
                          ),
                        "bg-[#F4F4F4] text-[#667185] border-[#E4E7EC]":
                          !tempFilters.some(
                            (filter) => filter.id === `rating-${rating.label}`
                          ),
                      },
                    ])}
                  >
                    <StarIcon /> {rating.label}
                  </button>
                ))}
              </div>
            </div>
            <Divider className="my-3 border-[#E2E8F0]" />
            {/* Cooking Time Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold">Cooking Time</h3>
              <p className="mb-3 text-base">Select one</p>
              <div className="flex flex-wrap gap-2 max-w-[400px]">
                {cookingTimes.map((time) => (
                  <button
                    key={time.label}
                    onClick={() =>
                      handleFilterToggle(
                        `cookingTime-${time.label}`,
                        "cookingTime",
                        { min: time.min, max: time.max }
                      )
                    }
                    className={clsx([
                      "flex items-center gap-1 px-3 py-1.5 rounded-full transition-all text-xs border",
                      {
                        "bg-[#E7F6EC] text-jikoo-brand-green border-jikoo-brand-green":
                          tempFilters.some(
                            (filter) =>
                              filter.id === `cookingTime-${time.label}`
                          ),
                        "bg-[#F4F4F4] text-[#667185] border-[#E4E7EC]":
                          !tempFilters.some(
                            (filter) =>
                              filter.id === `deliveryTime-${time.label}`
                          ),
                      },
                    ])}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="sticky bottom-0 bg-white mt-3 -mx-6 px-6 pb-6">
              <Divider className="my-3 border-[#E2E8F0]" />
              {/* Apply Filter Button */}
              <button
                onClick={handleApplyFilters}
                className="w-full bg-jikoo-brand-green text-white py-3 rounded-lg font-bold"
              >
                Apply filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default FilterOverlay;

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
  >
    <path
      d="M5.84612 0.800051C6.37784 -0.0453297 7.62249 -0.0453295 8.15421 0.800051L9.44012 2.84455C9.6272 3.14199 9.9244 3.35544 10.2684 3.43941L12.6327 4.01658C13.6104 4.25523 13.995 5.42539 13.346 6.18652L11.7764 8.02726C11.548 8.29506 11.4345 8.64043 11.46 8.98976L11.6353 11.391C11.7078 12.3838 10.7009 13.107 9.76804 12.7321L7.51205 11.8252C7.18384 11.6933 6.81648 11.6933 6.48828 11.8252L4.23228 12.7321C3.29945 13.1071 2.2925 12.3838 2.365 11.391L2.54034 8.98976C2.56585 8.64043 2.45233 8.29506 2.22398 8.02726L0.654358 6.18652C0.00533464 5.42539 0.389955 4.25523 1.3676 4.01658L3.73195 3.43941C4.07593 3.35544 4.37313 3.14199 4.5602 2.84455L5.84612 0.800051Z"
      fill="#FFC107"
    />
  </svg>
);
