import Image from 'next/image';
import Link from 'next/link'

export const ExploreItem = ({
  data,
  href = "",
}: {
  data: { name: string; imageUrl: string };
  href?: string;
}) => {
  return (
    <Link
      href={href}
      key={data.name}
      className="items-center gap-2.5 flex flex-col shrink-0"
    >
      <div>
        <Image
          src={data.imageUrl}
          alt="Category_image"
          className="w-[55px] h-[55px] rounded-full "
          width={55}
          height={55}
          unoptimized
        />
      </div>
      <p className="font-dmsans-regular text-[10px] w-[55px] line-clamp-2 text-center">
        {data.name}
      </p>
    </Link>
  );
};