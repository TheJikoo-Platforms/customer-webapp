'use client'

import { updateURLParameters } from "@/lib/utils";
import { Settings2 } from "lucide-react";

export const FilterButton = ({ action }: { action: Record<string, string> }) => {
  return (
    <button onClick={() => updateURLParameters(action)}>
      <Settings2 />
    </button>
  );
};