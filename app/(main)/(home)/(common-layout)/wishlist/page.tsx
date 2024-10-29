import InnerHeader from "@/components/inner-page-header-mobile";
import { WishlistContainer } from "@/components/wishlist/wishlist-container";

export default async function WishlistPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <div className="bg-white min-h-screen lg:bg-transparent">
      <div className="bg-white py-3 px-6 mt-[57px] md:mt-0 lg:mb-4 lg:rounded-xl items-center gap-2 hidden lg:flex">
        <span className="text-lg text-[#1E1E1E] font-bold tracking-[-0.4px]">
          Wishlist
        </span>
      </div>

      <InnerHeader text="Wishlist" className="block lg:hidden" />

      <div className="bg-white lg:rounded-xl p-5 pb-[125px] lg:pb-6">
        <WishlistContainer />
      </div>
    </div>
  );
}
