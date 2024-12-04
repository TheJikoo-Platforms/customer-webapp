import { RootState } from "@/redux-store/store";
import {
  setShowFilterOverlay,
  setPriceRange,
  setSelectedRating,
  setSelectedDeliveryTime,
  resetFilters,
} from "@/redux-store/slices/backdrop/search-filter-slice";
import Backdrop from "@/components/ui/backdrop";
import { slideUp } from "@/variants";
import { CheckIcon, XIcon } from "lucide-react";
import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import clsx from "clsx";
import { Divider } from "../divider";

const priceRanges = [
  { label: "Less than ₦5,000", min: 0, max: 5000 },
  { label: "₦5000 - ₦10000", min: 5000, max: 10000 },
  { label: "₦10000 - ₦50000", min: 10000, max: 50000 },
  { label: "Above ₦50000", min: 50000, max: Infinity },
];

const ratings = ["5", "4 - 5", "3 - 4", "2 - 3", "0 - 2"];
const deliveryTimes = [
  { label: "Within 30mins", value: 30 },
  { label: "Within 40mins", value: 40 },
  { label: "Within 50mins", value: 50 },
  { label: "Within 60mins", value: 60 },
  { label: "More than 60mins", value: 70 },
];

const FilterOverlay = () => {
  const dispatch = useAppDispatch();
  const { priceRange, selectedRating, selectedDeliveryTime } = useAppSelector(
    (state: RootState) => state.filter
  );
  const filterRef = useRef<HTMLDivElement>(null);
  const closeOverlay = () => {
    dispatch(setShowFilterOverlay(false));
  };
  useOnClickOutside(filterRef, closeOverlay);

  return (
    <Backdrop variants={slideUp}>
      <div className="h-full flex w-full justify-center items-center overscroll-contain">
        <div
          ref={filterRef}
          className="bg-white rounded-xl md:p-6 w-full max-w-[700px] mx-auto h-full md:h-[initial]"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Filter Result</h2>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => dispatch(resetFilters())}
                className="text-jikoo-brand-green font-bold"
              >
                Reset
              </button>
              <button onClick={() => dispatch(setShowFilterOverlay(false))}>
                <XIcon className="text-sm" />
              </button>
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <h3 className="text-base font-bold">Price</h3>
            <p className="mb-3 text-sm">Select one</p>
            <div className="space-y-5">
              {priceRanges.map((range) => (
                <label
                  key={range.label}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="relative">
                    <button
                      type="button"
                      className={clsx([
                        "w-5 h-5 border-2 border-jikoo-brand-green rounded flex items-center justify-center transition-all",
                        {
                          "bg-jikoo-brand-green":
                            priceRange.min === range.min &&
                            priceRange.max === range.max,
                          "bg-transparent": !(
                            priceRange.min === range.min &&
                            priceRange.max === range.max
                          ),
                        },
                      ])}
                      onClick={() =>
                        dispatch(
                          setPriceRange({ min: range.min, max: range.max })
                        )
                      }
                      aria-label={`Select ${range.label}`}
                    >
                      {priceRange.min === range.min &&
                        priceRange.max === range.max && (
                          <CheckIcon className="text-white text-sm" />
                        )}
                    </button>
                  </div>
                  <span className="text-sm text-[#667185] tracking-[0.2px]">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Divider className="my-3 border-[#E2E8F0]" />
          {/* Rating Section */}
          <div className="mb-6">
            <h3 className="text-base font-bold">Rating</h3>
            <p className="mb-3 text-sm">Select one</p>
            <div className="flex gap-4">
              {ratings.map((rating) => (
                <button
                  key={rating}
                  onClick={() => dispatch(setSelectedRating(rating))}
                  className={clsx([
                    "flex items-center gap-1 px-3 py-1.5 rounded-full transition-all text-xs border",
                    {
                      "bg-[#E7F6EC] text-jikoo-brand-green border-jikoo-brand-green":
                        selectedRating === rating,
                      "bg-[#F4F4F4] text-[#667185] border-[#E4E7EC]":
                        selectedRating !== rating,
                    },
                  ])}
                >
                  <StarIcon /> {rating}
                </button>
              ))}
            </div>
          </div>
          <Divider className="my-3 border-[#E2E8F0]" />
          {/* Delivery Time Section */}
          <div className="mb-6">
            <h3 className="text-base font-bold">Delivery Time</h3>
            <p className="mb-3 text-sm">Select one</p>
            <div className="flex flex-wrap gap-2 max-w-[350px]">
              {deliveryTimes.map((time) => (
                <button
                  key={time.value}
                  onClick={() => dispatch(setSelectedDeliveryTime(time.value))}
                  className={clsx([
                    "flex items-center gap-1 px-3 py-1.5 rounded-full transition-all text-xs border",
                    {
                      "bg-[#E7F6EC] text-jikoo-brand-green border-jikoo-brand-green":
                        selectedDeliveryTime === time.value,
                      "bg-[#F4F4F4] text-[#667185] border-[#E4E7EC]":
                        selectedDeliveryTime !== time.value,
                    },
                  ])}
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>
          <Divider className="my-3 border-[#E2E8F0]" />
          {/* Apply Filter Button */}
          <button
            onClick={() => dispatch(setShowFilterOverlay(false))}
            className="w-full bg-jikoo-brand-green text-white py-3 rounded-lg font-bold"
          >
            Apply filter
          </button>
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
