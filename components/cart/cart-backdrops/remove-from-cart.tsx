import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowCartOverlay } from "@/redux-store/slices/backdrop/cart";
import { removeFromCart } from "@/redux-store/slices/backdrop/food-items-data";
import { RootState } from "@/redux-store/store";
import { IoClose } from "react-icons/io5";

export const RemoveFromCart = () => {
  const currentItem = useAppSelector(
    (state: RootState) => state.foodItemOverlay.currentProductItem
  );
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(setShowCartOverlay({ showOverlay: false, activeItem: "" }));
  };
  const handleRemove = () => {
    if (currentItem) {
      dispatch(removeFromCart(currentItem._id));
      handleCloseModal();
    }
  };
  return (
    <div className="bg-white rounded-2xl py-6 px-4 max-w-[342px] lg:max-w-[420px] lg:px-6 w-full">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold tracking-[-0.4px]">
          Remove from cart
        </h2>
        <button onClick={handleCloseModal} className="text-black text-2xl">
          <IoClose />
        </button>
      </div>

      <p className="text-sm mt-8 mb-4">
        Are you sure you want to remove this item from cart?
      </p>

      <div className="flex flex-col gap-8">
        <Button
          onClick={handleRemove}
          className="text-white px-6 py-3.5 rounded-md"
        >
          Remove from cart
        </Button>
      </div>
    </div>
  );
};
