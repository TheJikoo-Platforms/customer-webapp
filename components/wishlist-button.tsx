import { WishlistIcon } from "@/components/ui/icons/wishlist-icon";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { IProductItem } from "./types";
import { RootState } from "@/redux-store/store";
import { addOrRemoveFromWishList } from "@/redux-store/slices/wishlist-items";
import { WishListIconFilled } from "./ui/icons";

export const WishlistButton = ({
  className,
  product,
}: {
  className: string;
  product: IProductItem;
}) => {
  const dispatch = useAppDispatch();
  const wishListItems = useAppSelector(
    (state: RootState) => state.wishlist.wishListItems
  );

  const isInWishlist = wishListItems.some((item) => item._id === product._id);

  const handleToggleWishlist = () => {
    dispatch(addOrRemoveFromWishList(product));
  };

  return (
    <button
      className={cn(
        "text-primary size-5 rounded bg-secondary-foreground grid place-content-center",
        className
      )}
      onClick={(event) => {
        event.stopPropagation();
        handleToggleWishlist();
      }}
    >
      {!isInWishlist ? (
        <WishlistIcon className="size-3" />
      ) : (
        <WishListIconFilled className="size-3" />
      )}
    </button>
  );
};
