"use client";
import { useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "./motion-wrapper";
import { ArrowLeftIcon } from "./ui/icons";

export const BackButton = ({
  children,
  back,
  onClick,
  className,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  back?: boolean;
  className?: string;
}) => {
  const router = useTransitionRouter();
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    router.back();
  };
  if (back) {
    return (
      <button
        onClick={handleClick}
        className={cn(
          // "flex gap-1.5 items-center text-sm text-gray-600 cursor-pointer rounded",
          className
        )}
      >
        <ArrowLeftIcon /> Back
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        // "cursor-pointer p-1.5 rounded border border-[#E4E7EC]",
        className
      )}
    >
      <ArrowLeftIcon />
    </button>
  );
};
