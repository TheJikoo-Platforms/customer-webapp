import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export const WhiteCard = ({
  className,
  children,
  asChild,
}: {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(
        "rounded-[10px] overflow-hidden bg-white dark:bg-secondary-foreground p-3",
        className
      )}
      children={children}
    />
  );
};

WhiteCard.displaceName = "WhiteCard";
