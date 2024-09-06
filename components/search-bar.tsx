import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Camera, Search } from "lucide-react";
import { Input } from "./ui/input";
import { MdImageSearch } from "react-icons/md";
import { ImageSearchIcon } from "./ui/icons/image-search-icon";

const CATEGORIES = [
  "Breakfast",
  "Bole & Grills",
  "Beans & Porridge",
  "Native",
  "Pasta & Noodles",
  "Rice Recipes",
  "Soups & Swallow",
  "Fries",
  "Shawarma",
  "Pizza",
  "Dessert & Pastries",
  "Specials",
  "Drinks",
];

export const SearchBar = () => {
  return (
    <div className="flex items-center w-full bg-secondary-foreground rounded-dm md:py-2 xl:py-3">
      <Select>
        <SelectTrigger className="w-[150px] md:w-[230px] tracking-tight border-none font-bold max-sm400:text-[10px] text-[12px] md:text-lg xl:text-[22px] px-4 sm:px-3 md:px-5">
          <SelectValue placeholder="All Categories" />
          {/* All Categories */}
        </SelectTrigger>
        <SelectContent className="bg-secondary-foreground">
          <SelectGroup>
            {/* <SelectLabel>Categories</SelectLabel> */}
            {CATEGORIES.map((el) => (
              <SelectItem key={el} value={el}>
                {el}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="h-5 w-0.5 md:h-7 xl:h-11 bg-black dark:bg-white" />
      <div className="flex items-center grow">
        <div className="pl-4 pr-1 md:px-4 ">
          <Search color="#A6A6A6" className="size-3 md:size-4 lg:size-[18px]" />
        </div>
        <div className="grow flex items-center">
          <Input
            className="border-none md:px-2 "
            placeholder="What are you craving?"
          />
          <button className="pr-4">
            <ImageSearchIcon
              // color="#A6A6A6"
              className="size-4 md:size-5 lg:size-[18px]"
            />
          </button>
        </div>
        {/* <IconInput Icon={Camera} className="border-none" /> */}
      </div>
    </div>
  );
};
