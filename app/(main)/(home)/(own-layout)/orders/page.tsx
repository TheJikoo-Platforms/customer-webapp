import OrderContainer from "@/components/orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
  description: "Orders",
};

export default function OrdersPage() {
  return (
    <>
      <OrderContainer />
    </>
  );
}
