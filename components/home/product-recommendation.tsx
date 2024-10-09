import Link from "next/link";
import { RecommendationItem } from "./recommendation-item";
import { LoadingIcon } from "@/components/ui/icons/loading-icon";
import { HorizontalScroll } from "../horizontal-scroll";
import { cn } from "@/lib/utils";

export interface RecommendationListProps {
  title: JSX.Element;
  imageUrl: string;
  href: string;
  linkLabel: string;
  bg: string;
  color: string;
  isComingSoon: boolean;
}

const PRODUCTRECOMMENDATIONSLIST: RecommendationListProps[] = [
  {
    title: (
      <>
        Deal Of <span className="block">The Day</span>
      </>
    ),
    imageUrl: "/home/deal.png",
    href: "/deals",
    linkLabel: "View deals",
    bg: "#BAA393",
    color: "#734B31",
    isComingSoon: false,
  },
  {
    title: (
      <>
        Future <span className="block">Orders</span>
      </>
    ),
    imageUrl: "/home/future.png",
    href: "",
    linkLabel: "Coming soon",
    bg: "rgba(252, 116, 0, 0.7)",
    color: "#4E3017",
    isComingSoon: true,
  },
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
    linkLabel: "Coming soon",
    bg: "#EDD3BA",
    color: "#5C4F44",
    isComingSoon: true,
  },
  {
    title: (
      <>
        Best <span className="block">Sellers</span>
      </>
    ),
    imageUrl: "/home/best.png",
    href: "",
    linkLabel: "Coming soon",
    bg: "#F8BD9F",
    color: "#73402A",
    isComingSoon: true,
  },
];

export const ProductRecommendations = () => {
  return (
    <div className="px-5 lg:px-6 overflow-x-hidden">
      <HorizontalScroll className={cn("flex gap-4")}>
        {PRODUCTRECOMMENDATIONSLIST.map((el, index) => (
          <RecommendationItem data={el} key={index} />
        ))}
      </HorizontalScroll>
    </div>
  );
};
