import { cn } from "@/lib/utils";

export const HomeTitle = ({ children, className, title }: { children: React.ReactNode, className?: string, title?:string }) => {
  return <>
   {title && <div className="flex items-center gap-2 sm:gap-4 lg:gap-[18px] mb-2 sm:mb-2.5 lg:mb-3">
      <div className="w-7  sm:w-9 h-1 lg:w-11 lg:h-[5px] bg-primary" />
      <h3 className="text-xs sm:text-lg lg:text-xl font-medium">
        {title}
      </h3>
    </div>}
    <h2
      className={cn(
        "font-bold text-[26px] sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter",
        className
      )}
    >
      {children}
    </h2>
  </>;

}