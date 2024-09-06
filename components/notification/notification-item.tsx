import Image from 'next/image'

export const NotificationItem = () => {
  return (
    <div className=" items-start gap-3 flex">
      <div className="pb-1 flex flex-col items-center gap-1 self-stretch">
        <div className="w-8 h-8 relative rounded-full bg-[#E0E0E0] border border-gray-100">
          <Image
            alt=""
            src="/avatar.png"
            className="block shrink-0 rounded-full"
            width={32}
            height={32}
            quality={100}
          />
          <div className="w-2 h-2 bottom-0 right-0 absolute bg-[#cfd4dc] rounded border border-white" />
        </div>
        <div className="w-0.5 grow bg-[#e4e7ec] rounded-sm" />
      </div>
      <div className="grow pb-8">
        <div className="items-center gap-2 flex">
          <p className="text-[#344053] text-sm/5 font-medium">
            You just placed an Order
          </p>
          <p className="text-[#475466] text-xs leading-[18px]">2 mins ago</p>
        </div>
        <p className="text-[#475466] text-sm/5">
          Your order has been received. Delivery on its way. Stay Tune
        </p>
      </div>
      <div className="w-2.5 h-2.5 relative shrink-0">
        <div className="w-2 h-2 left-[1px] top-[1px] absolute bg-[#17b169] rounded-full" />
      </div>
    </div>
  );
};
