import Image from "next/image";
import Link from "next/link";

const LIST = [
  { imageUrl: "/home/hot-deal.png", title: "Deals", url: "/deals" },
  { imageUrl: "/home/location.png", title: "Order Tracker", url: "/track-order" },
  { imageUrl: "/home/inventory.png", title: "Bulk Order", url: "/orders/bulk-order" },
  { imageUrl: "/home/megaphone.png", title: "Advertise With Us", url: "/advert" },
  { imageUrl: "/home/time2.png", title: "Group Orders", url: "/orders/group-orders" },
  { imageUrl: "/home/share.png", title: "Tell A Friend", url: "/share" },
];

export const SideBar = () => {
  return (
    <div className=" rounded-[10px] bg-secondary-foreground py-2 xl:py-3 px-6">
      <ul className="space-y-3 xl:space-y-4">
        {LIST.map((el) => (
          <li key={el.title}>
            <Link href={el.url} className="text-[#777777] text-lg xl:text-xl font-medium flex gap-6 items-center">
              <Image
                alt={el.title.toLowerCase()}
                src={el.imageUrl}
                width={30}
                height={30}
                quality={100}
                priority
              />{" "}
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
