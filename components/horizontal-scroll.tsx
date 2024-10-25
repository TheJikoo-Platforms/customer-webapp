import { cn } from "@/lib/utils";

export const HorizontalScroll = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "lg:w-full overflow-x-auto scrollbar-none horizontal-scroll ",
        className
      )}
    >
      {children}
    </div>
  );
};
