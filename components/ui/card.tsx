import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export const Card = ({
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
      className={cn("rounded-[10px] overflow-hidden shadow-lg", className)}
      children={children}
    />
  );
};

Card.displaceName = "Card";
