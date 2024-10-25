import { SearchButton } from "@/components/home/search/search-button";
import { SearchUI } from "@/components/home/search/search-ui";
import { SearchUIDesktop } from "@/components/home/search/search-ui-desktop";

export default function SearchPage() {
  return (
    <main>
      <div className="flex-col space-y-4 hidden md:block">
        <SearchButton />
        <SearchUIDesktop />
      </div>

      <div className="md:hidden">
        <SearchUI />
      </div>
    </main>
  );
}
