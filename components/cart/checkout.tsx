"use client";
import React, { useState } from "react";
import { ArrowLeftIcon, BicycleIcon, CartCheckIcon } from "../ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  setFlowState,
  setShowCartOverlay,
} from "@/redux-store/slices/backdrop/cart";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import {
  emailSchema,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  phoneSchema,
} from "../ui/form";
import BorderedDiv from "../auth/bordered-div";
import { UnstyledInput } from "../ui/unstyled-input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RootState } from "@/redux-store/store";
import Backdrop from "../ui/backdrop";
import { fadeIn, slideUp } from "@/variants";
import { CiMail } from "react-icons/ci";
import { NGFlag } from "../auth/ui/icons";
import { handleLocationOverlay } from "@/redux-store/slices/backdrop/location";

export default function Checkout() {
  const dispatch = useAppDispatch();
  const handleFlowState = () => {
    dispatch(setFlowState("cart"));
  };
  // const [formValues, setformValues] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleFormOverlay = (item: string) => {
    dispatch(setShowCartOverlay({ showOverlay: true, activeItem: item }));
  };
  const handleLocationModal = () => {
    dispatch(handleLocationOverlay());
  };
  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-center lg:justify-start p-6 lg:pr-5 lg:p-0 gap-4 bg-white sticky lg:static top-0 z-50 w-full pb-3 border-b border-b-grey-300 lg:border-b-grey-100 lg:pb-4">
        <button onClick={handleFlowState} type="button">
          <span className="block lg:hidden ml-1 absolute left-6">
            <ArrowLeftIcon />
          </span>
          <span className="hidden lg:block">
            <ArrowIconDesktop />
          </span>
        </button>
        <p className="text-lg lg:text-xl font-medium lg:font-bold tracking-[-0.48px] text-grey-900">
          Checkout
        </p>
      </div>

      <div className="px-5 lg:px-0 py-4">
        <Heading text="Delivery details" />
        <div className="pl-1 mt-6 flex gap-4 flex-col">
          <button
            onClick={handleLocationModal}
            className="w-full text-sm border-b border-b-gray-100 pb-4 flex justify-between items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-jikoo-brand-green text-xl">
                <IoLocationOutline />
              </span>
              <p className="">10 Shekoni Close, Ifako</p>
            </div>
            <FaChevronRight className="text-grey-400" />
          </button>
          <button
            onClick={() => handleFormOverlay("phone")}
            className="w-full text-sm border-b border-b-gray-100 pb-4 flex justify-between items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-jikoo-brand-green text-xl">
                <BsTelephone />
              </span>
              <p className="">+234 804 574 2934</p>
            </div>
            <FaChevronRight className="text-grey-400" />
          </button>
          <button
            onClick={() => handleFormOverlay("mail")}
            className="w-full text-sm border-b border-b-gray-100 pb-4 flex justify-between items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-jikoo-brand-green text-xl">
                <FiMail />
              </span>
              <p className="">matthew@mail.com</p>
            </div>
            <FaChevronRight className="text-grey-400" />
          </button>
        </div>

        <div className="border-b border-b-gray-100 pb-6 mt-6">
          <Heading text="Message for delivery agent" />
          <button
            type="button"
            className="text-grey-400 text-xs sm400:text-sm lg:text-xs xl:text-sm text-left font-normal mt-3 flex w-full rounded-sm border border-[#d0d4dd] p-4"
            onClick={() => handleFormOverlay("riderMessage")}
          >
            Type an important message for the vendor
          </button>
        </div>

        <div className="border-b border-b-gray-100 pb-4 mt-6">
          <Heading text="Summary" />

          <div className="flex items-center justify-between text-grey-600 text-sm mt-4">
            <div className="flex items-center gap-2.5">
              <CartCheckIcon className="" /> <p className="">Sub Total</p>
            </div>
            <p className="text-medium">₦549.00</p>
          </div>

          <div className="flex items-center justify-between text-grey-600 text-sm mt-4">
            <div className="flex items-center gap-2.5">
              <BicycleIcon className="" />
              <p className="">Delivery</p>
            </div>
            <p className="text-medium">₦0.00</p>
          </div>

          <div className="flex items-center text-grey-900 font-bold mt-2.5 justify-between">
            <p className="">Total</p>
            <p className="text-lg">$250.32</p>
          </div>

          <ApplyCoupon />
        </div>

        <div className="pt-4">
          <Heading text="Pay With" />
          <PaymentMethods />
        </div>

        <Button
          type="button"
          // disabled={coupon.formState.isSubmitting}
          className={`bg-primary w-full rounded-md mt-8 font-semibold ${
            isSubmitting && "opacity-65 transition-all"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Proceed"}
        </Button>
      </div>
    </>
  );
}

export const CheckoutBackdrops = () => {
  const activeItem = useAppSelector(
    (state: RootState) => state.cart.activeItem
  );
  return (
    <Backdrop variants={slideUp}>
      <div className="h-full w-full flex items-center justify-center">
        {activeItem === "riderMessage" && <MessageForm />}
        {activeItem === "mail" && <EmailForm />}
        {activeItem === "phone" && <PhoneForm />}
      </div>
    </Backdrop>
  );
};

const Heading = ({ text }: { text: string }) => (
  <h2 className="text-sm font-bold">{text}</h2>
);

const ApplyCoupon = React.memo(() => {
  const coupon = useForm({
    defaultValues: {
      coupon: "",
    },
  });

  const handleCouponSubmit = async (data: { coupon: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Coupon submitted: ", data.coupon);
  };

  return (
    <Form {...coupon}>
      <form
        onSubmit={coupon.handleSubmit(handleCouponSubmit)}
        className="flex mt-[18px] gap-4"
      >
        <FormField
          control={coupon.control}
          name="coupon"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <BorderedDiv
                  className={`items-center gap-2 w-full flex-1 ${
                    false ? "bg-grey-75" : ""
                  }`}
                >
                  <UnstyledInput
                    type="text"
                    placeholder="Apply coupon"
                    className="placeholder:text-grey-400 font-normal w-full"
                    {...field}
                  />
                </BorderedDiv>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={coupon.formState.isSubmitting}
          className={`bg-primary w-full max-w-24 rounded-md font-semibold ${
            coupon.formState.isSubmitting && "opacity-65 transition-all"
          }`}
        >
          {coupon.formState.isSubmitting ? "Checking..." : "Apply"}
        </Button>
      </form>
    </Form>
  );
});

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = React.useState("wallet");

  return (
    <div className="space-y-5 mt-6">
      <PaymentOption
        label="Wallet (Balance NGN 10,890)"
        value="wallet"
        selectedValue={selectedMethod}
        onChange={setSelectedMethod}
      />
      <PaymentOption
        label="Card Payment"
        value="card"
        selectedValue={selectedMethod}
        onChange={setSelectedMethod}
      />
      <PaymentOption
        label="Bank Transfer"
        value="bank"
        selectedValue={selectedMethod}
        onChange={setSelectedMethod}
      />
    </div>
  );
};

type PaymentOptionProps = {
  label: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
};

const PaymentOption: React.FC<PaymentOptionProps> = ({
  label,
  value,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2 border-b border-b-gray-100 pb-4">
      <input
        type="radio"
        id={value}
        name="payment-method"
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className="hidden text-grey-900 placeholder:text-grey-900 text-sm"
      />
      <label
        htmlFor={value}
        className="w-5 h-5 border border-jikoo-brand-green rounded-full flex justify-center items-center cursor-pointer"
      >
        {selectedValue === value && (
          <div className="w-2.5 h-2.5 bg-jikoo-brand-green  rounded-full"></div>
        )}
      </label>
      <span className="text-gray-900 text-sm">{label}</span>
    </div>
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
    <div className=" bg-white w-full sm500:max-w-[420px] px-6 py-6 flex flex-col rounded-t-2xl sm500:rounded-2xl self-end sm500:self-center flex-1 pb-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full max-w-lg space-y-4"
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-medium tracking-[-0.4px]">
              Message for the rider
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
                  <textarea
                    {...field}
                    className="w-full h-[135px] px-4 py-4 bg-transparent focus:outline-none border rounded-sm resize-none focus-within:border focus-within:border-state-success-200 transition-all"
                    placeholder="Type an important message for the rider"
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

const EmailForm = () => {
  const dispatch = useAppDispatch();
  const handleCloseOverlay = () => {
    dispatch(setShowCartOverlay({ activeItem: "", showOverlay: false }));
  };
  const form = useForm({
    resolver: zodResolver(emailSchema),
    mode: "onChange",
    defaultValues: { mail: "" },
  });

  const handleSubmit = async (values: z.infer<typeof emailSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(values);
  };

  const errors = form.formState.errors;
  return (
    <div className=" bg-white w-full sm500:max-w-[420px] px-6 py-6 flex flex-col rounded-t-2xl sm500:rounded-2xl self-end sm500:self-center flex-1 pb-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full max-w-lg space-y-4"
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-medium tracking-[-0.4px]">
              Edit email address
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
            name="mail"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${
                      form.formState.touchedFields.mail && !errors.mail
                        ? "bg-grey-75"
                        : ""
                    }`}
                  >
                    <CiMail className="text-2xl text-grey-400" />
                    <UnstyledInput
                      type="text"
                      placeholder="Email address"
                      className="placeholder:text-grey-400 text-grey-900 font-normal"
                      {...field}
                    />
                  </BorderedDiv>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-grey-600 text-sm my-4">
            This email address will be used for just this delivery. To change
            your registered email address, go to Settings.
          </p>

          <Button
            type="submit"
            className="w-full text-white py-4 rounded-lg font-bold"
          >
            Use Email
          </Button>
        </form>
      </Form>
    </div>
  );
};

const PhoneForm = () => {
  const dispatch = useAppDispatch();
  const handleCloseOverlay = () => {
    dispatch(setShowCartOverlay({ activeItem: "", showOverlay: false }));
  };
  const form = useForm({
    resolver: zodResolver(phoneSchema),
    mode: "onChange",
    defaultValues: { phoneNumber: "" },
  });

  const handleSubmit = async (values: z.infer<typeof phoneSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(values);
  };

  const errors = form.formState.errors;
  return (
    <div className=" bg-white w-full sm500:max-w-[420px] px-6 py-6 flex flex-col rounded-t-2xl sm500:rounded-2xl self-end sm500:self-center flex-1 pb-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full max-w-lg space-y-4"
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-medium tracking-[-0.4px]">
              Edit phone number
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${
                      form.formState.touchedFields.phoneNumber &&
                      !errors.phoneNumber
                        ? "bg-grey-75"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <NGFlag />
                      <span className="font-normal dark:text-white text-sm text-grey-400">
                        +234
                      </span>
                    </div>

                    <UnstyledInput
                      type="number"
                      placeholder=""
                      className="placeholder:text-grey-400 font-normal"
                      {...field}
                    />
                  </BorderedDiv>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-grey-600 text-sm my-4">
            This phone number will be used for just this delivery. To change
            your registered phone number, go to Settings.
          </p>

          <Button
            type="submit"
            className="w-full text-white py-4 rounded-lg font-bold"
          >
            Use number
          </Button>
        </form>
      </Form>
    </div>
  );
};

const ArrowIconDesktop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <rect x="0.5" y="1" width="23" height="23" rx="3.5" fill="white" />
    <rect x="0.5" y="1" width="23" height="23" rx="3.5" stroke="#E4E7EC" />
    <path
      d="M7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1464L9.14645 10.1464C9.34171 9.95118 9.65829 9.95118 9.85355 10.1464C10.0488 10.3417 10.0488 10.6583 9.85355 10.8536L8.70711 12L16.5 12C16.7761 12 17 12.2239 17 12.5C17 12.7761 16.7761 13 16.5 13L8.70711 13L9.85355 14.1464C10.0488 14.3417 10.0488 14.6583 9.85355 14.8536C9.65829 15.0488 9.34171 15.0488 9.14645 14.8536L7.14645 12.8536Z"
      fill="black"
    />
  </svg>
);
