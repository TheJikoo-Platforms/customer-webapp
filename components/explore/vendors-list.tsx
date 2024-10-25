import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { HorizontalScroll } from "../horizontal-scroll";
import { Text } from "../ui/text";
import { ExploreItem } from "./explore-item";

export const VendorsContainer = ({ data }: { data: any[] }) => {
  return (
    <div className="mt-6 border-b border-b-grey-300 pb-7 pl-5 lg:pl-6">
      <div className="flex justify-between items-center mb-5 pr-5 lg:pr-6">
        <Text className="text-xl tracking-[-0.4px]">Near You</Text>
        <Link
          href={"/near-you"}
          className="flex gap-1 items-center text-sm text-primary"
        >
          See More <ChevronRight size={18} className="text-primary " />
        </Link>
      </div>
      <HorizontalScroll className="gap-6 flex">
        {data.map((el, key) => (
          <ExploreItem href="vendors" data={el} key={key} />
        ))}
      </HorizontalScroll>
    </div>
  );
};
