import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center py-4 h-auto whitespace-nowrap tracking-widest rounded-[9.74px] text-[10px] sm:text-sm  font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "text-xs rounded-md bg-primary text-white hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-[1.22px] border-[#E7F6EC] bg-background text-primary  ",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline py-0",
        underlined:
          "text-primary underline-offset-4 underline py-0 tracking-normal",

        new: "",
        newOutline:
          "text-xs rounded-md py-4 h-auto border-[3px] md:border-[4px] border-primary bg-background text-primary",
        rounded:
          "py-2 bg-[#5fc381] rounded-[100px] border border-[#e7f6ec] text-center text-white text-xs font-bold leading-[17.40px] ",
        clear: "",
      },

      size: {
        default: "h-auto px-4",
        sm: "h-7 rounded px-2 py-1.5 text-[10px]",
        lg: "h-11 rounded-dm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
