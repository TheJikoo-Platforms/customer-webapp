import { CartMessageDrawer } from "@/components/cart/cart-message-drawer";
import { Orders } from "@/components/orders/orders";


export default function OrdersPage() {
  
  return (
    <>
      <div className="p-6 flex-1">
       <Orders/>
      </div>
      <CartMessageDrawer/>
    </>
  );
}
