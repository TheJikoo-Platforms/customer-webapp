"use client";
import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import Backdrop from "../ui/backdrop";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { IoLocationOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
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
import { SlLocationPin } from "react-icons/sl";
import { UnstyledInput } from "../ui/unstyled-input";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import {
  ArrowLeftIcon,
  LocationArrowUp,
  LocationSearchIcon,
} from "../ui/icons";
import { CiLocationArrow1 } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  handleLocationOverlay,
  setCurrentLocationPage,
  setShowLocationOverlay,
} from "@/redux-store/slices/backdrop/location";
import { RootState } from "@/redux-store/store";
import { CancellableNotification } from "../fixed-notification";
import { slideUp } from "@/variants";

interface LocationProps {
  handlePageChange: (page: string) => void;
  handleCloseBackdrop: () => void;
}

export const LocationOverlay = () => {
  const currentLocationPage = useAppSelector(
    (state: RootState) => state.locationOverlay.currentLocationPage
  );
  const dispatch = useAppDispatch();
  const handleOverlay = () => {
    dispatch(handleLocationOverlay());
  };
  const handlePageChange = (page: string) => {
    dispatch(setCurrentLocationPage(page));
  };

  const [isOnScreen, setIsOnScreen] = useState(true);
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const handleCloseBackdrop = () => {
    setIsOnScreen(false);
    dispatch(setShowLocationOverlay(false));
  };
  useOnClickOutside(clickOutsideRef, handleCloseBackdrop);
  return (
    <AnimatePresence>
      {isOnScreen && (
        <Backdrop variants={slideUp}>
          <div className="h-full flex w-full justify-center items-center ">
            {currentLocationPage === "prompt" && (
              <LocationPrompt
                handleCloseBackdrop={handleCloseBackdrop}
                handlePageChange={handlePageChange}
                ref={clickOutsideRef}
              />
            )}
            {currentLocationPage === "address" && (
              <AddressForm
                ref={clickOutsideRef}
                handleCloseBackdrop={handleCloseBackdrop}
                handlePageChange={handlePageChange}
              />
            )}
          </div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export const EnterLocation = ({ className }: { className: string }) => {
  const [isShowingPrompt, setIsShowingPrompt] = useState(true);
  const handlePrompt = () => {
    setIsShowingPrompt(false);
  };
  const dispatch = useAppDispatch();
  const handleOverlay = () => {
    dispatch(handleLocationOverlay());
  };
  return (
    <div
      className={cn("bg-white pl-3 pr-4 py-2 max-h-[36px] relative", className)}
    >
      <div
        className="max-w-[242px] flex items-center gap-2 cursor-pointer"
        onClick={handleOverlay}
      >
        <IoLocationOutline className="text-jikoo-brand-green" />
        <p className="text-sm text-black">Enter your location</p>
        <IoIosArrowDown className="text-grey-500" />
      </div>
      {isShowingPrompt && (
        <CancellableNotification
          text="Enter your delivery address here"
          handlePrompt={handlePrompt}
        />
      )}
    </div>
  );
};

const LocationPrompt = React.forwardRef<HTMLDivElement, LocationProps>(
  ({ handleCloseBackdrop, handlePageChange }, ref) => {
    return (
      <div
        className="bg-white p-6 flex flex-col max-md:self-end w-full rounded-t-3xl md:rounded-2xl pb-10 text-center max-w-[450px]"
        ref={ref}
      >
        <h2 className="text-black text-xl font-bold tracking-[-0.4px]">
          Turn on your location
        </h2>

        <p className="text-sm leading-[20.3px] text-black pt-3">
          Allow location permission to location or enter a delivery address.
        </p>

        <button
          type="button"
          className="w-full inline-flex"
          onClick={() => handlePageChange("address")}
        >
          <BorderedDiv className={`items-center gap-2 my-6`}>
            <SlLocationPin className="text-grey-500" />
            <p className="text-sm text-grey-400">Enter your location</p>
          </BorderedDiv>
        </button>

        <Button
          type="button"
          className={`bg-primary w-full rounded-md font-bold`}
        >
          Allow current location
        </Button>

        <Button
          variant={"outline"}
          className="text-gray-700 w-full tracking-normal mt-3 font-bold border-grey-300"
          type="button"
          onClick={handleCloseBackdrop}
        >
          Close
        </Button>
      </div>
    );
  }
);

const ADDRESSLIST = [
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

const AddressForm = React.forwardRef<HTMLDivElement, LocationProps>(
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

            <button
              className="text-jikoo-brand-green text-sm flex gap-2.5 mt-4 py-3 border-b border-b-grey-100 items-center w-full"
              type="button"
            >
              <CiLocationArrow1 className="text-xl" />
              Use my current location
            </button>

            {ADDRESSLIST.map((item, key) => (
              <button
                type="button"
                key={key}
                className="flex gap-3 pt-1 pb-3.5 border-b border-b-grey-100 w-full"
              >
                <LocationArrowUp />
                <div className="flex flex-col text-sm gap-0.5 text-left">
                  <p className="text-black">{item.address}</p>
                  <p className="text-[#8080808C]">{item.area}</p>
                </div>
              </button>
            ))}
          </form>
        </Form>
      </div>
    );
  }
);
