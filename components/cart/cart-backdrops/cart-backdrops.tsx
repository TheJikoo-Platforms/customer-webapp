import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import Backdrop from "../../ui/backdrop";
import { fadeIn } from "@/variants";
import { MessageForm } from "./messsage-form";
import { RemoveFromCart } from "./remove-from-cart";

export const CartBackdrops = () => {
  const activeItem = useAppSelector(
    (state: RootState) => state.cart.activeItem
  );
  return (
    <Backdrop variants={fadeIn}>
      <div className="h-full w-full flex items-center justify-center">
        {activeItem === "message" && <MessageForm />}
        {activeItem === "removeItem" && <RemoveFromCart />}
      </div>
    </Backdrop>
  );
};
