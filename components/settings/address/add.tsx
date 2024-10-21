import BorderedDiv from "@/components/auth/bordered-div";
import InnerHeader from "@/components/inner-page-header-mobile";
import LocationItem from "@/components/location/location-item";
import UseCurrentLocationButton from "@/components/location/use-current-location";
import { AddressProps } from "@/components/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeftIcon, LocationSearchIcon } from "@/components/ui/icons";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { useToast } from "@/components/ui/use-toast";
import { getFieldClassName } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

export const AddAddress = React.memo(
  ({
    handleCurrentScreen,
  }: {
    handleCurrentScreen: (screen: string) => void;
  }) => {
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
      <>
        <InnerHeader
          className="md:hidden"
          onClick={() => handleCurrentScreen("saved")}
          text="Add address"
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          <button
            onClick={() => handleCurrentScreen("saved")}
            type="button"
            className="flex items-center gap-2 pt-1 pb-5"
          >
            <ArrowLeftIcon />
            <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block">
              Add address
            </h3>
          </button>

          <Form {...locationForm}>
            <form
              onSubmit={locationForm.handleSubmit(handleSubmit)}
              className="space-y-3"
            >
              <FormField
                control={locationForm.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2 mt-6 md:my-0  ${getFieldClassName(
                          locationForm.formState,
                          errors,
                          "location"
                        )}`}
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
      </>
    );
  }
);
