import { SearchUI } from "@/components/home/search/search-ui";

export default async function SearchPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  return (
    <main>
      <SearchUI />
    </main>
  );
}
