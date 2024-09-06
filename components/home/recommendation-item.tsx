import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const RecommendationItem = ({ data }: { data: any }) => {
  return (
    <div
      className={`rounded-[4px] md:rounded-[4.9px]  flex overflow-hidden max-sm:w-[160px] relative ${data.mobile && 'max-sm:hidden'}`}
      style={{ backgroundColor: data.bg, color: data.color }}
      // hidden={data.mobile}
    >
      <div className="space-y-6  py-4 px-2 md:px-2.5">
        <h2 className="font-bold leading-none tracking-[-8%] sm:text-sm md:text-[19.65px]/[19px] max-sm:min-w-[80px]">
          {data.title}
        </h2>
        <div>
          <Link
            href={data.href}
            className="text-[10px] sm:text-[12.28px]/4 flex gap-2 items-center tracking-[-0.5%]"
          >
            {data.linkLabel} {'>'}
          </Link>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        quality={80}
        // unoptimized
        alt=""
        src={data.imageUrl}
        className={` sm:h-full pt-2 lg:pt-4 absolute bottom-2 right-0 w-auto max-w-28 translate-x-4 h-[95%] `}
      />
    </div>
  );
};
