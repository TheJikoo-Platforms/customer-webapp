import Image from "next/image";
import React from "react";
import { GetStarted } from "../orders/orderss";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CARTITEMS = [
  {
    imageUrl: "/cart/1.png",
    title: "Pizza Livaroca",
    description:
      "Mixed with vegetables with avocado and cilantro, served with lemonher",
    price: "₦ 3,500",
    numberOfItems: "3",
  },
  {
    imageUrl: "/cart/2.png",

    description:
      "Mixed with vegetables with avocado and cilantro, served with lemonher",
    title: "Pepsi",
    price: "₦ 3,500",
    numberOfItems: "2",
  },
  {
    imageUrl: "/cart/3.png",
    description:
      "Mixed with vegetables with avocado and cilantro, served with lemonher",
    title: "Coconut Rice",
    price: "₦ 3,500",
    numberOfItems: "3",
  },
];

const Cart = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold flex gap-2 items-center">
          My Cart
          <span className="rounded-full font-normal w-[26px] h-[26px] bg-jikoo-brand-green text-white text-xs flex justify-center items-center font-inter">
            3
          </span>
        </h3>

        <p className="text-sm text-grey-600">Remove</p>
      </div>
      {/* Empty State - Unauthenticated */}
      {/* <div className="flex flex-col items-center mt-[22px] mb-2.5">
        <Image
          alt="Empty State"
          src="/empty-state.png"
          width={80}
          height={80}
        />
        <p className="text-grey-500 text-sm mb-8">
          Login or sign up to see your cart
        </p>
        <GetStarted />
      </div> */}

      <div className="flex flex-col gap-3 mt-4">
        {CARTITEMS.map((item, key) => (
          <CartItem
            numberOfItems={item.numberOfItems}
            imageUrl={item.imageUrl}
            description={item.description}
            price={item.price}
            title={item.title}
            key={key}
          />
        ))}
      </div>

      <div className="mt-6">
        <p className="text-grey-900 font-bold">Add a message</p>

        <Input
          className="placeholder:text-grey-400 font-normal mt-3"
          placeholder="Type an important message for the vendor"
        />

        <div className="mt-5 flex justify-between items-center">
          <p className="text-grey-500">Subtotal:</p>
          <p className="text-grey-800 font-bold">₦4,000</p>
        </div>

        <Button type="button" className="w-full text-base mt-10">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;

interface CartItemProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  numberOfItems: string;
}

const CartItem = ({
  imageUrl,
  title,
  description,
  price,
  numberOfItems,
}: CartItemProps) => {
  return (
    <div className="flex gap-3 p-3 bg-state-success-50 rounded-[6px] border border-grey-200">
      <Image
        src={imageUrl}
        height={100}
        width={128}
        alt="Product Image"
        className="w-[128px] object-cover rounded"
      />

      <div className="w-full flex flex-col gap-2.5 overflow-x-hidden">
        <div className="flex justify-between">
          <p className="font-bold text-grey-900">{title}</p>
          <p className="rounded-full w-6 h-6 bg-primary-400 text-white text-[13px] font-medium flex items-center justify-center">
            <span className="text-[10px] font-normal">X</span>
            {numberOfItems}
          </p>
        </div>

        <p className="line-clamp-2 text-sm text-grey-600 leading-[20.3px] pr-0.5">
          {description}
        </p>

        <p className="text-[11px] font-bold tracking-[-0.49px] text-[#1E1E1E]">
          {price}
        </p>
      </div>
    </div>
  );
};
