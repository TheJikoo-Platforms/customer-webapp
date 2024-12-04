import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export const HorizontalScroll = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties | undefined;
}) => {
  return (
    <div
      style={style}
      className={cn(
        "lg:w-full overflow-x-auto scrollbar-none horizontal-scroll ",
        className
      )}
    >
      {children}
    </div>
  );
};
