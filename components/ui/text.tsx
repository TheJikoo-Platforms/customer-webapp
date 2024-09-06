import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const textVariants = cva("text-xl/6 font-bold", {
  variants: {
    intent: {
      primary: "text-black",
      secondary: "text-gray-600",
      danger: "text-red-600",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      xl: 'text-xl/6'
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semiBold: 'font-semibold',
      bold: "font-bold",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "xl",
    weight: "bold",
  },
  
});

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const Text = ({
  children,
  className,
  intent,
  size,
  weight,
  asChild = false,
}: TextProps) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp className={cn(textVariants({ intent, size, weight }), className)}>
      {children}
    </Comp>
  );
};
