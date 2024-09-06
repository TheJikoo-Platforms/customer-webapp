import { SearchItem } from "@/components/explore/search-item";
import { PageTitle } from "@/components/page-title";
import { Settings2 } from "lucide-react";

export default function RestaurantDetailsPage() {
  return (
    <div className="px-3 py-6 pt-3">
      <PageTitle title="Pizzas">
        <button>
          <Settings2 />
        </button>
      </PageTitle>
      <div className="mb-6">
        <h1 className="text-[#1e1e1e] font-medium">
          Showing results for “Pizzas”
        </h1>
      </div>
      <div className="space-y-3 ">
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>
    </div>
  );
}
