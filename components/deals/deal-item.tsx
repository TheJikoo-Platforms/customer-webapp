import Image from "next/image";
import dealsImage from "@/public/deals/deal-rice.png";
import { IFoodItem } from "../types";
import { useAppDispatch } from "@/redux-store/hooks";
import {
  setCurrentFoodItem,
  setShowFoodItemOverlay,
} from "@/redux-store/slices/backdrop/food-items";

export const DealItem = ({ data }: { data: IFoodItem }) => {
  const dispatch = useAppDispatch();
  const handleShowOverlay = () => {
    dispatch(setShowFoodItemOverlay(true));
    dispatch(setCurrentFoodItem(data));
  };
  return (
    <div onClick={handleShowOverlay} className="w-full cursor-pointer">
      <div
        className="w-full h-[220px] p-3 flex items-end rounded-xl bg-no-repeat "
        style={{
          backgroundImage: `url(${data.imageUrl}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-2">
          <div className="items-center gap-1.5 flex">
            <Image
              className="size-6 rounded-full"
              src={data.storeLogo}
              width={1000}
              quality={100}
              height={1000}
              alt="Vendor Logo"
            />
            <p className="text-center text-white text-xs">{data.store}</p>
          </div>
          <div className="space-y-1.5">
            <p className=" text-white text-xs leading-[14.50px]">{data.name}</p>
            <div className="flex gap-2 items-center">
              <p className="text-white text-sm font-bold">
                {data.originalPrice}
              </p>
              <p className="line-through text-grey-400 text-xs">
                {data.discountPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
