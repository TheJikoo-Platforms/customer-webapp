import Image from "next/image";

export const OrderItemHome = () => {
  return (
    <div className="flex p-4">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <Image
              src="/vendors/dominos.png"
              height={55}
              width={55}
              alt=""
              className="w-[27.5px] h-[27.5px]"
            />

            <p className="text-[#1E1E1E] text-sm">Dominos Pizza</p>
          </div>

          <p className="text-jikoo-brand-green font-bold text-sm">₦ 3,500</p>
        </div>

        <p className="truncate text-gray-500 text-sm">
          Chicken Girl (1) • Beef (2) • Plantain (4) Fish (2) • Pepsi (2)
        </p>

        <div className="flex items-center justify-between text-grey-900 text-sm font-medium">
          <p className="">Expected time of arrival</p>
          <p className="">9:23AM</p>
        </div>
      </div>
    </div>
  );
};
