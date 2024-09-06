import { WishlistIcon } from "@/components/ui/icons/wishlist-icon";

export const WishlistButton = () => {
  return (
    <button className="text-primary size-5 md:size-6 rounded bg-secondary-foreground absolute right-2 top-2 grid place-content-center">
      <WishlistIcon className="size-3 sm:size-4" />
    </button>
  );
};
