import { SearchButton } from "@/components/home/search/search-button";
import { SearchUI } from "@/components/home/search/search-ui-mobile";
import { SearchUIDesktop } from "@/components/home/search/search-ui-desktop";

export default async function SearchPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  return (
    <main>
      <SearchUI />
    </main>
  );
}
