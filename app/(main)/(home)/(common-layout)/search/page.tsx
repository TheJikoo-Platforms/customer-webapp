import { SearchButton } from "@/components/home/search/search-button";
import { SearchUI } from "@/components/home/search/search-ui-mobile";
import { SearchUIDesktop } from "@/components/home/search/search-ui-desktop";

export default async function SearchPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
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
