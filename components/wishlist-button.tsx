import { WishlistIcon } from "@/components/ui/icons/wishlist-icon";
import { cn } from "@/lib/utils";

export const WishlistButton = ({ className }: { className: string }) => {
  return (
    <button
      className={cn(
        "text-primary size-5 md:size-6 rounded bg-secondary-foreground grid place-content-center",
        className
      )}
    >
      <WishlistIcon className="size-3 sm:size-4" />
    </button>
  );
};
