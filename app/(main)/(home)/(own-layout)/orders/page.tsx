import OrderContainer from "@/components/orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
  description: "Orders",
};

export default async function OrdersPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <>
      <OrderContainer />
    </>
  );
}
