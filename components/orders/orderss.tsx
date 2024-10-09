import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

interface OrdersProps {
  a?: string;
}

const Orders: React.FC<OrdersProps> = ({ a }) => {
  return (
    <div className="">
      <h3 className="text-lg font-bold flex gap-2 items-center">
        Ongoing orders
        <span className="rounded-full font-normal px-3 py-0.5 h-fit bg-jikoo-brand-green text-white text-xs flex justify-center items-center font-inter">
          0
        </span>
      </h3>

      {/* <div className="flex flex-col items-center mt-[22px] mb-2.5">
        <Image
          alt="Empty State"
          src="/empty-state.png"
          width={80}
          height={80}
        />
        <p className="text-grey-500 text-sm mb-8">
          Login or sign up to see your on-going orders
        </p>
        <GetStarted />
      </div> */}

      <OrderItem />
    </div>
  );
};

export default Orders;

export const GetStarted = () => (
  <Link
    href={"/login"}
    type="button"
    className="text-sm font-bold text-center text-jikoo-brand-green border-[1.5px] border-jikoo-brand-green w-full p-2 rounded-md"
  >
    Get started
  </Link>
);

const OrderItem = ({ withoutArrow = false }: { withoutArrow?: boolean }) => {
  return (
    <div className="flex p-4">
      <div className="flex flex-col gap-3 w-full">
        {/* <p className="px-3 py-0.5 bg-secondary-400 font-inter text-xs text-white font-medium rounded-full w-fit">
          Ongoing
        </p> */}

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
      {withoutArrow && <RiArrowRightSLine />}
    </div>
  );
};
