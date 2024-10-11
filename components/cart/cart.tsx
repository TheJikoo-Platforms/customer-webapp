"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GetStarted } from "../orders/orderss";
import { Button } from "../ui/button";
import { ArrowLeftIcon, DeleteIcon, PencilEditIcon } from "../ui/icons";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import {
  setCurrentFoodItem,
  setShowFoodItemOverlay,
} from "@/redux-store/slices/backdrop/food-items";
import { IFoodItem } from "../types";
import {
  setShowCartOverlay,
  setShowCartOverlayMobile,
} from "@/redux-store/slices/backdrop/cart";
import Backdrop from "../ui/backdrop";
import { fadeIn } from "@/variants";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";

export default function Cart() {
  const dispatch = useAppDispatch();
  const foodItems = useAppSelector(
    (state: RootState) => state.foodItemData.foodItems
  );
  const handleCartOverlay = () => {
    dispatch(setShowCartOverlay({ showOverlay: true, activeItem: "message" }));
  };
  const handleOverlayMobile = () => {
    dispatch(setShowCartOverlayMobile(false));
  };

  const cartItems = foodItems.filter((item) => item.addedToCart);

  return (
    <>
      <h3 className="text-xl font-bold tracking-[-0.4px] border-b border-b-grey-200 pb-4 hidden lg:block">
        My Cart
      </h3>

      {/* Mobile top bar */}
      <div className="flex items-center justify-center p-6 gap-6 bg-white sticky top-0 w-full z-50 pb-3 border-b border-b-grey-300 lg:hidden">
        <button
          className="absolute left-6"
          onClick={handleOverlayMobile}
          type="button"
        >
          <ArrowLeftIcon />
        </button>
        <p className="text-lg font-medium tracking-[-0.48px] text-grey-900">
          Cart
        </p>
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

      <div className="px-6 lg:px-0">
        <div className="flex flex-col gap-4 mt-8">
          {cartItems.map((item, key) => (
            <CartItem data={item} key={key} />
          ))}
        </div>

        {/* Form Trigger */}
        <div className="mt-6">
          <p className="text-grey-900 font-bold">Add a message</p>

          <button
            type="button"
            className="text-grey-400 text-xs sm400:text-sm lg:text-xs xl:text-sm text-left font-normal mt-3 flex w-full rounded-sm border border-[#d0d4dd] p-4"
            onClick={handleCartOverlay}
          >
            Type an important message for the vendor
          </button>

          <div className="mt-5 flex justify-between items-center">
            <p className="text-grey-500">Subtotal:</p>
            <p className="text-grey-800 font-bold">₦4,000</p>
          </div>

          <Button
            type="button"
            className="w-full text-base mt-10 b-grey-300 font-dm-sans"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}

interface Item {
  name: string;
  price: string;
}

interface Option {
  name: string;
  isOptional: boolean;
  items: Item[];
}

const CartItem = ({ data }: { data: IFoodItem }) => {
  const dispatch = useAppDispatch();
  const handleShowOverlay = () => {
    dispatch(setShowFoodItemOverlay(true));
    dispatch(setCurrentFoodItem(data));
  };
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col gap-2 border-b border-b-grey-100 pb-4">
      <div className="flex gap-3 items-center">
        <Image
          src={data.imageUrl}
          height={100}
          width={128}
          alt="Product Image"
          className="w-[120px] h-[99px] object-cover rounded-xl"
        />

        <div className="flex flex-col gap-1 max-w-[calc(100%-140px)]">
          <p className="text-sm font-semibold tracking-[-0.35px] text-[#1E1E1E] truncate">
            {data?.name}
          </p>
          {data?.options?.length ? (
            <p className="font-normal text-xs/[17.4px] text-grey-500 pr-1.5">
              <span className="font-bold">Options: </span>
              {extractNamesAsText(data?.options)}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex justify-between gap-2 items-center">
        <div className="flex gap-3">
          <button
            className="py-1.5 px-3 flex items-center gap-1 rounded-full border border-grey-300 text-sm font-medium"
            type="button"
            onClick={handleShowOverlay}
          >
            <PencilEditIcon />
            Edit
          </button>
          <button
            className="py-1.5 px-3 flex items-center gap-1 rounded-full border border-grey-300 text-sm font-medium max-w-8 max-h-8 justify-center"
            type="button"
          >
            <DeleteIcon />
          </button>
        </div>

        <div className="bg-grey-50 border border-grey-100 h-[36px] items-center flex justify-between p-2 w-full max-w-[98px] rounded-full text-sm">
          <button type="button" onClick={decrementQuantity}>
            <FaMinus className="text-grey-500" />
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={incrementQuantity}>
            <FaPlus className="text-grey-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

const extractNamesAsText = (options: Option[]): string => {
  return options
    .flatMap((option) => {
      const optionName = option.name;
      const itemNames = option.items.map((item) => item.name);
      return [optionName, ...itemNames];
    })
    .join(", ");
};

export const CartBackdrops = () => {
  const activeItem = useAppSelector(
    (state: RootState) => state.cart.activeItem
  );
  return (
    <Backdrop variants={fadeIn}>
      <div className="h-full w-full flex items-center justify-center">
        {activeItem === "message" && <MessageForm />}
      </div>
    </Backdrop>
  );
};

const messageSchema = z.object({
  message: z
    .string()
    .trim()
    .max(25, "Message must be 25 words or less")
    .refine((val) => val.split(/\s+/).length <= 25, {
      message: "Message must be 25 words or less",
    }),
});
const MessageForm = () => {
  const dispatch = useAppDispatch();
  const handleCloseOverlay = () => {
    dispatch(setShowCartOverlay({ activeItem: "", showOverlay: false }));
  };
  const form = useForm({
    resolver: zodResolver(messageSchema),
    mode: "onChange",
    defaultValues: { message: "" },
  });

  const handleSubmit = async (values: z.infer<typeof messageSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(values);
  };

  const message = form.watch("message");

  return (
    <div className=" bg-white w-full sm500:max-w-[420px] px-6 py-4 flex flex-col rounded-t-2xl sm500:rounded-2xl self-end sm500:self-center flex-1 pb-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full max-w-lg space-y-4"
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-medium tracking-[-0.4px]">
              Message for the vendor
            </h2>
            <button
              onClick={handleCloseOverlay}
              type="button"
              className="text-sm text-gray-600"
            >
              Cancel
            </button>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full h-24 px-4 py-2 border rounded-sm resize-none focus-within:border focus-within:border-state-success-200 transition-all"
                    placeholder="Add a message for the vendor"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Word count */}
          {message.split(/\s+/).length < 25 && (
            <p className="text-sm text-right text-gray-500">
              {25 - message.split(" ").length + " words remaining"}
            </p>
          )}

          <Button
            type="submit"
            className="w-full text-white py-4 rounded-lg font-bold"
          >
            Add message
          </Button>
        </form>
      </Form>
    </div>
  );
};
