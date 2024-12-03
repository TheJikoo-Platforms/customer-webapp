import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { HorizontalScroll } from "../horizontal-scroll";
import { Text } from "../ui/text";
import { ExploreItem } from "./explore-item";
import { Divider } from "../home/divider";
import { IStore } from "../types";

export const VendorsContainer = ({ data }: { data: IStore[] }) => {
  return (
    <div className="pt-2 px-6">
      <div className="flex item-center mb-3 gap-3">
        <div className="flex items-center gap-3 w-full">
          <Text className="text-xl text-black-charcoal tracking-[-0.4px]">
            Restaurants
          </Text>
          <Divider className="bg-[#eee] flex-1" />
        </div>
        <Link
          href="/near-you"
          className="text-sm text-jikoo-brand-green tracking-[-0.4px] flex items-center text-nowrap"
        >
          See More <ChevronRight className="w-[14px] h-[14px]" />
        </Link>
      </div>
      <HorizontalScroll className="justify-between flex items-center pl-2">
        {data?.slice(0, 6)?.map((el: IStore) => (
          <ExploreItem
            href={`vendors/q?vendor=${el._id}`}
            data={el}
            key={el?._id}
          />
        ))}
      </HorizontalScroll>
    </div>
  );
};
