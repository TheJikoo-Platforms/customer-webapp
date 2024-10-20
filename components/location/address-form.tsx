"use client";
import React, { useRef, useState } from "react";
import { useToast } from "../ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import BorderedDiv from "../auth/bordered-div";
import { UnstyledInput } from "../ui/unstyled-input";
import {
  ArrowLeftIcon,
  LocationArrowUp,
  LocationSearchIcon,
} from "../ui/icons";
import { LocationProps } from "./overlay";
import UseCurrentLocationButton from "./use-current-location";
import LocationItem from "./location-item";
import { AddressProps } from "../types";

const ADDRESSLIST: AddressProps[] = [
  { address: "10 Shekoni Close, Ifako", area: "Gbagada, Lagos" },
  { address: "4 Adewumi Str,", area: "Ikeja GRA, Lagos" },
  { address: "4 Adewumi Str,", area: "Ikeja GRA, Lagos" },
  { address: "4 Adewumi Str,", area: "Ikeja GRA, Lagos" },
];

const locationSchema = z.object({
  location: z
    .string()
    .min(3, { message: "Location must be more than 3 characters" })
    .max(50, { message: "Location must be less than 20 characters" })
    .regex(/^[A-Za-z]+$/, {
      message: "Location must only contain alphabets",
    }),
  city: z.string(),
});

export const AddressForm = React.forwardRef<HTMLDivElement, LocationProps>(
  ({ handleCloseBackdrop, handlePageChange }, ref) => {
    const { toast } = useToast();
    const locationForm = useForm<z.infer<typeof locationSchema>>({
      resolver: zodResolver(locationSchema),
      mode: "onTouched",
      defaultValues: {
        location: "",
        city: "",
      },
    });
    const handleSubmit = async (values: z.infer<typeof locationSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // toast({
      //   title: "OTP Sent",
      //   icon: (
      //     <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
      //       <FaCircleCheck className="text-state-success-600" />
      //     </div>
      //   ),
      // });
      console.log("Location submitted: ", values);
    };

    const handleUseLocation = () => {
      console.log("Click");
    };

    const errors = locationForm.formState.errors;
    return (
      <div
        className="bg-white py-6 flex flex-col w-full pb-10 text-center max-w-[450px] max-md:h-full md:rounded-2xl"
        ref={ref}
      >
        <div className="flex pb-4 md:hidden items-center justify-center relative border-b border-b-grey-100">
          <button
            onClick={handleCloseBackdrop}
            className={"cursor-pointer absolute left-6"}
          >
            <ArrowLeftIcon />
          </button>
          <p className="text-lg font-medium text-[#121212]">Address</p>
        </div>

        <Form {...locationForm}>
          <form
            onSubmit={locationForm.handleSubmit(handleSubmit)}
            className="space-y-3 px-6"
          >
            <FormField
              control={locationForm.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 mt-6 md:my-0  ${
                        locationForm.formState.touchedFields.location &&
                        !errors.location
                          ? "bg-grey-75"
                          : ""
                      }`}
                    >
                      <LocationSearchIcon />

                      <UnstyledInput
                        type="text"
                        placeholder="Enter your location"
                        className="placeholder:text-grey-400 font-normal focus:border-jikoo-brand-green"
                        {...field}
                      />
                    </BorderedDiv>
                  </FormControl>
                  <FormMessage className="text-left text-xs" />
                </FormItem>
              )}
            />

            <UseCurrentLocationButton />

            {ADDRESSLIST.map((item, key) => (
              <LocationItem key={key} item={item} />
            ))}
          </form>
        </Form>
      </div>
    );
  }
);
