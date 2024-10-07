import Image from "next/image";
import { HorizontalScroll } from "../horizontal-scroll";
const LIST = [
  {
    imageUrl: "/home/fast-delivery.svg",
    title: "Fast Delivery",
    body: "On all orders",
  },
  { imageUrl: "/home/bulk.svg", title: "Bulk Orders", body: "For your events" },
  {
    imageUrl: "/home/cashback.svg",
    title: "Refunds",
    body: "On failed orders",
  },
  { imageUrl: "/home/yummy.svg", title: "Tasty Food", body: "100% assured" },
];

export const Guarantee = () => {
  return (
    <div className="px-5 py-3 lg:px-[36px] lg:py-6">
      <HorizontalScroll className="flex justify-between gap-6 max-sm600:hidden">
        {LIST.map((el, key) => (
          <li className="flex gap-3 items-center sm:gap-6 lg:gap-5" key={key}>
            <div className="size-[42px] bg-primary/15 rounded-full grid place-content-center">
              <Image
                alt={el.title}
                src={el.imageUrl}
                width={26.25}
                height={26.25}
                className=""
              />
            </div>
            <div>
              <h3 className="text-[#8D8D8D] text-sm/[18.23px] tracking-[-0.42px]  font-bold text-nowrap">
                {el.title}
              </h3>
              <p className="text-[#A6A6A6] text-xs text-nowrap tracking-[-0.24px]">
                {el.body}
              </p>
            </div>
          </li>
        ))}
      </HorizontalScroll>
      <div className="flex justify-between sm600:hidden">
        <div className="space-y-4">
          {LIST.slice(0, 2).map((el, key) => (
            <div
              className="flex gap-3 items-center sm:gap-6 lg:gap-5"
              key={key}
            >
              <div className="size-[42px] bg-primary/15 rounded-full grid place-content-center">
                <Image
                  alt={el.title}
                  src={el.imageUrl}
                  width={26.25}
                  height={26.25}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-[#8D8D8D] text-sm/[18.23px] tracking-[-0.42px]  font-bold">
                  {el.title}
                </h3>
                <p className="text-[#A6A6A6] text-xs tracking-[-0.24px]">
                  {el.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {LIST.slice(2).map((el) => (
            <div
              className="flex gap-3 items-center sm:gap-6 lg:gap-5"
              key={el.title}
            >
              <div className="size-[42px] bg-primary/15 rounded-full grid place-content-center">
                <Image
                  alt={el.title}
                  src={el.imageUrl}
                  width={26.25}
                  height={26.25}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-[#8D8D8D] text-sm/[18.23px]  font-bold">
                  {el.title}
                </h3>
                <p className="text-[#A6A6A6] text-xs">{el.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
