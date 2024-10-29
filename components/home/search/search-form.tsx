"use client";
import BorderedDiv from "@/components/auth/bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { useTransitionRouter } from "next-view-transitions";
import { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

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
  const router = useTransitionRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", formValue);
    router.push(`/search/?query=${formValue}`);
  };

  const handleClear = () => {
    setFormValue("");
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
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        {formValue && (
          <button
            type="button"
            onClick={handleClear}
            disabled={isLoading}
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
