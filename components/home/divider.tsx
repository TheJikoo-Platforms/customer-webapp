import { cn } from "@/lib/utils";

export const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("w-full h-px bg-grey-300", className)}></div>;
};
