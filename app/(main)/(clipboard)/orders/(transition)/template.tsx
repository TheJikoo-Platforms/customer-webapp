import { Transition } from "@/components/transition";
import React from "react";

export default function OrdersTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Transition>{children}</Transition>;
}
