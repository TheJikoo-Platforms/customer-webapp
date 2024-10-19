"use client";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "./ui/icons";
import { useTransitionRouter } from "next-view-transitions";

export default function InnerHeader({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
}) {
  const router = useTransitionRouter();
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    router.back();
  };
  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-center p-5 lg:p-6 gap-6 bg-white fixed top-0 w-full z-50 pb-3 border-b border-b-border-b-[#EBEBEB]">
        <button className="absolute left-6" onClick={handleClick} type="button">
          <ArrowLeftIcon />
        </button>
        <p className="text-lg font-medium tracking-[-0.48px] text-grey-900 text-center">
          {text}
        </p>
      </div>

      <div className="invisible pt-[61px]"></div>
    </div>
  );
}

export function InnerHeaderMain({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <div className="p-5 lg:p-6 gap-6 bg-white fixed top-0 w-full z-50 pb-3 border-b border-b-[#EBEBEB]">
        <p className="text-2xl font-medium tracking-[-0.48px] text[#121212] text-left">
          {text}
        </p>
      </div>

      <div className="invisible pt-[61px]"></div>
    </div>
  );
}
