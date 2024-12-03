import Image from "next/image";
import Link from "next/link";

export const ExploreItem = ({
  data,
  href = "",
}: {
  data: { name: string; image?: string; photo?: string };
  href?: string;
}) => {
  return (
    <Link
      href={href}
      className="items-center gap-2.5 flex flex-col shrink-0 max-w-[60px]"
    >
      <div>
        <Image
          src={data?.image || data?.photo || ""}
          alt={data?.name || ""}
          className="w-[55px] h-[55px] rounded-full object-cover"
          width={55}
          height={55}
          unoptimized
        />
      </div>
      <p className="text-xs md:text-[14px] font-medium leading-[16px] tracking-[-0.4px] line-clamp-2 text-center capitalize text-black-charcoal">
        {data?.name}
      </p>
    </Link>
  );
};
