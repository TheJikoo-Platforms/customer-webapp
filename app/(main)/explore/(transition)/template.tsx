import { Transition } from "@/components/transition";
import React from "react";

export default function ExploreTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Transition>{children}</Transition>;
}
