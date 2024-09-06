import { Search } from "lucide-react";
import { Input } from "./input";

export const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 flex-1 border border-gray-300 rounded-full ">
      <Search size={20} color={"#98A2B3"} />
      <Input
        placeholder="Search for dishes"
        className="font-dmsans-regular grow text-sm bg-transparent border-none py-0 h-auto"
      />
    </div>
  );
};
