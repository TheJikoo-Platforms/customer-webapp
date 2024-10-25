"use client";
import BorderedDiv from "@/components/auth/bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

interface SearchFormProps {
  query: string;
  setQuery: (query: string) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  query,
  setQuery,
  isSubmitting,
  setIsSubmitting,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();
    // Perform the search with the query
    console.log("Searching for:", query);
    // You can also add the query to your recent searches here
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 relative -mt-2 sm600:mt-0"
    >
      <BorderedDiv className="border-grey-300 p-4  gap-2 w-full flex items-center border rounded-lg relative">
        <IoSearch className="text-gray-400 text-lg" />

        <UnstyledInput
          type="text"
          placeholder="Search for dishes or restuarants"
          className="bg-transparent placeholder:text-grey-400 w-full text-sm outline-none font-normal"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            disabled={isSubmitting}
            className="flex items-center text-grey-500 full"
          >
            <p className="text-sm">Clear</p>
            <IoClose className="text-xl" />
          </button>
        )}
      </BorderedDiv>
    </form>
  );
};

export default SearchForm;
