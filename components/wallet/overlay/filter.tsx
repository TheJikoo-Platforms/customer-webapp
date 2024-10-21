"use client";
import { Button } from "@/components/ui/button";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowWalletOverlay } from "@/redux-store/slices/wallet-slice";
import { useRef, useState } from "react";

type FilterKey = "deposit" | "cancelled"; // Define valid keys for the filters object

export const Filter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleCloseBackdrop = () => {
    dispatch(
      setShowWalletOverlay({ showWalletOverlay: false, activeScreen: "" })
    );
  };
  useOnClickOutside(ref, handleCloseBackdrop);
  const [filters, setFilters] = useState({
    deposit: false,
    cancelled: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleFilterChange = (filterName: FilterKey) => {
    if (filters) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterName]: !prevFilters[filterName],
      }));
    }
  };
  const clearFilters = () => {
    setFilters({
      deposit: false,
      cancelled: false,
    });
  };
  const applyFilters = () => {
    setIsSubmitting(true);
    console.log("Filters applied:", filters);
    setTimeout(() => {
      setIsSubmitting(false);
      handleCloseBackdrop();
    }, 1000);
  };
  return (
    <div
      ref={ref}
      className="bg-white p-6 flex flex-col self-end sm500:self-center w-full rounded-t-3xl sm500:rounded-2xl pb-10 text-center max-w-[550px] sm500:max-w-[450px]"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-grey-900">Filter by:</h3>
        <button onClick={clearFilters} className="text-black text-sm underline">
          Clear
        </button>
      </div>

      <div className="space-y-8">
        <FilterItem
          label="Deposit"
          checked={filters.deposit}
          onChange={() => handleFilterChange("deposit")}
        />
        <FilterItem
          label="Cancelled"
          checked={filters.cancelled}
          onChange={() => handleFilterChange("cancelled")}
        />
      </div>

      {/* Apply Filter Button */}
      <Button
        type="button"
        onClick={applyFilters}
        className={`w-full mt-6 py-4 transition-all ${
          isSubmitting && "opacity-65"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding Filters.." : "Filter"}
      </Button>
    </div>
  );
};

const FilterItem = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <div className="text-black">
    <label
      htmlFor={label}
      className="text-sm flex justify-between items-center"
    >
      {label}
      <span>{checked ? <CheckMark /> : <UnChecked />}</span>
    </label>
    <input
      id={label}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="hidden"
    />
  </div>
);

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <rect width="20" height="20" rx="4" fill="#009933" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.3167 5.90446C15.5076 6.0794 15.5205 6.37591 15.3455 6.56675L8.47054 14.0667C8.38415 14.161 8.26301 14.2159 8.13518 14.2186C8.00736 14.2214 7.88395 14.1719 7.79354 14.0815L4.66854 10.9565C4.48549 10.7734 4.48549 10.4766 4.66854 10.2935C4.8516 10.1105 5.1484 10.1105 5.33146 10.2935L8.11028 13.0724L14.6545 5.93326C14.8294 5.74242 15.1259 5.72953 15.3167 5.90446Z"
      fill="white"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const UnChecked = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <rect
      x="0.75"
      y="0.75"
      width="18.5"
      height="18.5"
      rx="3.25"
      fill="white"
      stroke="#D0D5DD"
      stroke-width="1.5"
    />
  </svg>
);
