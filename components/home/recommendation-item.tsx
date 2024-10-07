import Image from "next/image";
import Link from "next/link";
import { RecommendationListProps } from "./product-recommendation";

export const RecommendationItem = ({
  data,
}: {
  data: RecommendationListProps;
}) => {
  // Use Link if not coming soon, otherwise use div
  return data.isComingSoon ? (
    <ItemComponent data={data} />
  ) : (
    <Link href={data.href}>
      <ItemComponent data={data} />
    </Link>
  );
};

const ItemComponent = ({ data }: { data: RecommendationListProps }) => {
  return (
    <div
      className={`rounded-[4px] md:rounded-[4.9px] flex overflow-hidden w-[175px] relative flex-shrink-0 `}
      style={{ backgroundColor: data.bg, color: data.color }}
    >
      <div className="space-y-6 pt-5 pb-2.5 px-2 md:px-2.5">
        <h2 className="font-bold leading-none tracking-[-1.572px] text-[19.65px]/[19px] max-sm:min-w-[80px]">
          {data.title}
        </h2>
        <div>
          <p className="text-[10px] sm:text-[12.28px]/4 flex gap-2 items-center tracking-[-0.061px]">
            {data.linkLabel} {!data.isComingSoon && ">"}
          </p>
        </div>
      </div>
      <Image
        width={500}
        height={500}
        quality={80}
        alt=""
        src={data.imageUrl}
        className={`h-full absolute bottom-0 -right-2 w-auto max-w-28 object-cover`}
      />
    </div>
  );
};
