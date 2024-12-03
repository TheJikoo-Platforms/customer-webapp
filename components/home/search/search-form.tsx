"use client";
import BorderedDiv from "@/components/auth/bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { useAppDispatch } from "@/redux-store/hooks";
import { setShowFilterOverlay } from "@/redux-store/slices/backdrop/search-filter-slice";
import { useTransitionRouter } from "next-view-transitions";
import { useState, useRef } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface SearchFormProps {
  formValue: string;
  setFormValue: (query: string) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  formValue,
  setFormValue,
  isLoading,
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useTransitionRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTyping(false);
    setIsFocused(false);
    inputRef.current?.blur();
    router.push(`/search/products?query=${formValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
    setIsTyping(true);
  };

  const handleClear = () => {
    setFormValue("");
    setIsTyping(false);
  };

  const dispatch = useAppDispatch();
  const handleShowFilter = () => {
    dispatch(setShowFilterOverlay(true));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 relative -mt-2 sm600:mt-0"
    >
      <BorderedDiv className="border-grey-300 p-4 gap-2 w-full flex items-center border rounded-sm lg:rounded-full relative group">
        <IoSearch className="text-gray-400 text-lg" />

        <UnstyledInput
          ref={inputRef}
          type="text"
          placeholder="Search for dishes or restuarants"
          className="bg-transparent placeholder:text-grey-400 w-full text-sm outline-none font-normal"
          value={formValue}
          onChange={handleChange}
          onBlur={() => {
            setIsTyping(false);
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsTyping(true);
            setIsFocused(true);
          }}
        />

        <AnimatePresence mode="wait">
          {formValue && isTyping ? (
            <motion.button
              key="clear"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              type="button"
              onClick={handleClear}
              disabled={isLoading}
              className="flex items-center text-grey-500 full"
            >
              <p className="text-sm">Clear</p>
              <IoClose className="text-xl" />
            </motion.button>
          ) : !isTyping && !isFocused ? (
            <motion.button
              key="filter"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              type="button"
              className="text-sm group-focus-within:border-state-success-200 flex h-full pl-4 border-l border-l-grey-[#D0D5DD] text-black-charcoal absolute right-6 items-center gap-2"
              onClick={handleShowFilter}
            >
              <FilterIcon />
              <span className="hidden sm:block">Filter</span>
            </motion.button>
          ) : null}
        </AnimatePresence>
      </BorderedDiv>
    </form>
  );
};

export default SearchForm;

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.40078 0.666016C1.89075 0.666016 0.666626 1.89014 0.666626 3.40017C0.666626 3.96114 0.839178 4.50854 1.16087 4.9681L6.19868 12.165C6.39478 12.4451 6.49996 12.7788 6.49996 13.1207V14.9634C6.49996 16.6714 8.29743 17.7823 9.82513 17.0185C10.8516 16.5052 11.5 15.4561 11.5 14.3085V13.1207C11.5 12.7788 11.6051 12.4451 11.8012 12.165L16.839 4.9681C17.1607 4.50854 17.3333 3.96114 17.3333 3.40017C17.3333 1.89014 16.1092 0.666016 14.5991 0.666016H3.40078ZM9.83329 14.3085C9.83329 14.8248 9.54158 15.2968 9.07978 15.5277C8.66024 15.7375 8.16663 15.4324 8.16663 14.9634V13.1207C8.16663 12.4368 7.95626 11.7695 7.56407 11.2092L2.52626 4.01233C2.40066 3.8329 2.33329 3.61919 2.33329 3.40017C2.33329 2.81061 2.81122 2.33268 3.40078 2.33268H14.5991C15.1887 2.33268 15.6666 2.81061 15.6666 3.40017C15.6666 3.61919 15.5993 3.8329 15.4737 4.01233L10.4359 11.2092C10.0437 11.7695 9.83329 12.4368 9.83329 13.1207V14.3085Z"
      fill="#667185"
    />
  </svg>
);
