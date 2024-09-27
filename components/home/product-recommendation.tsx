import Link from "next/link";
import { RecommendationItem } from "./recommendation-item";
import { LoadingIcon } from "@/components/ui/icons/loading-icon";
import { HorizontalScroll } from "../horizontal-scroll";
import { cn } from "@/lib/utils";

const PRODUCTRECOMMENDATIONSLIST = [
  {
    title: (
      <>
        <span className="flex items-center gap-1 ">
          Auto
          <LoadingIcon className="size-[12px]" fill={"#5C4F44"} />
        </span>
        <span> Suggest</span>
      </>
    ),
    imageUrl: "/home/auto.png",
    href: "",
    linkLabel: "Suggest",
    bg: "#EDD3BA",
    color: "#5C4F44",
    auto: true,
  },
  {
    title: (
      <>
        Best <span className="block">Sellers</span>
      </>
    ),
    imageUrl: "/home/best.png",
    href: "",
    linkLabel: "View",
    bg: "#F8BD9F",
    color: "#73402A",
  },
  {
    title: (
      <>
        Deal Of <span className="block">The Day</span>{" "}
      </>
    ),
    imageUrl: "/home/deal.png",
    href: "",
    linkLabel: "Try Now",
    bg: "#BAA393",
    color: "#734B31",
  },
  {
    title: (
      <>
        Future <span className="block">Orders</span>
      </>
    ),
    imageUrl: "/home/future.png",
    href: "",
    full: true,
    linkLabel: "Order Now",
    bg: "rgba(252, 116, 0, 0.7)",
    color: "#4E3017",
  },
];

export const ProductRecommendations = ({
  className = "md:grid md:grid-cols-2",
}: {
  className?: string;
}) => {
  return (
    <HorizontalScroll
      className={cn(
        "flex flex-nowrap gap-2 md:gap-3 max-lg:-translate-x-6 max-lg:px-6 w-full",
        className
      )}
    >
      {PRODUCTRECOMMENDATIONSLIST.map((el, index) => (
        <div key={index} className="flex-shrink-0">
          <RecommendationItem data={el} />
        </div>
      ))}
    </HorizontalScroll>
  );
};
