"use client";

import { OrderMessageDrawer } from "@/components/orders/order-message-drawer";
import { PageBase } from "@/components/page-base";
import { Button } from "@/components/ui/button";
import {
  BicycleIcon,
  CartCheckIcon,
  MailIcon,
  MapIcon,
  PencilEditIcon,
  PhoneIcon,
  TicketIcon,
} from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { updateURLParameters } from "@/lib/utils";

export default function CheckoutPage() {
  return (
    <>
      <PageBase title="">
        <Text>Checkout</Text>

        <div></div>
        <div className=" p-6 bg-[#e7f6ec] rounded-lg flex-col space-y-[18px] mt-3">
          <div className="flex justify-between items-center ">
            <h2 className=" text-[#101828] text-lg font-bold leading-snug">
              Delivery Information
            </h2>
            <div className=" gap-1.5 inline-flex">
              <PencilEditIcon className="size-[15px] text-[#344054] relative" />
              <div className="text-center text-primary text-sm font-semibold font-['Kumbh Sans'] leading-tight">
                Edit
              </div>
            </div>
          </div>
          <div className="self-stretch h-[90px] flex-col gap-1.5 flex">
            <div className="self-stretch h-[27px] text-[#344054] text-sm font-bold leading-tight">
              Alexandra McPherson
            </div>
            <div className="gap-1.5 items-center flex">
              <MapIcon className="size-[15px] text-[#344054] relative" />
              <div className="text-[#667185] text-[10.50px] leading-none">
                20386 Donovans Rd, Georgetown, Delaware(DE)
              </div>
            </div>
            <div className="gap-1.5 items-center flex">
              <PhoneIcon className="size-[15px] text-[#344054] relative" />
              <div className="text-[#667185] text-[10.50px] leading-none">
                +1 23455246337
              </div>
            </div>
            <div className="gap-1.5 items-center flex">
              <MailIcon className="size-[15px] text-[#344054] relative" />
              <div className="text-[#667185] text-[10.50px] leading-none">
                alexandramcpherson@email.com
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 space-y-3 pb-3 border-b border-gray-200">
          <h2 className="font-medium">Add a message</h2>
          <Input
            placeholder="Any important message for the delivery agent"
            readOnly
            onClick={() => updateURLParameters({ message: "order" })}
          />
        </div>

        <div className="mt-6">
          <h2 className="font-medium">Summary</h2>
          <div className="text-[#475267] text-sm space-y-3 mt-3">
            <div className="justify-between items-start flex ">
              <div className="justify-center items-center gap-2.5 flex">
                <CartCheckIcon className="w-[14.67px] h-4 relative" />
                <div className=" leading-tight">Sub Total</div>
              </div>
              <h4 className="text-sm font-medium leading-tight">₦549.00</h4>
            </div>
            <div className="justify-between items-start flex ">
              <div className="justify-center items-center gap-2.5 flex">
                <TicketIcon className="w-[14.67px] h-4 relative" />
                <div className=" leading-tight">Tax (10%)</div>
              </div>
              <h4 className="text-sm font-medium leading-tight">₦54.00</h4>
            </div>
            <div className="justify-between items-start flex ">
              <div className="justify-center items-center gap-2.5 flex">
                <BicycleIcon className="w-[14.67px] h-4 relative" />
                <div className=" leading-tight">Delivery</div>
              </div>
              <h4 className="text-sm font-medium leading-tight">₦2k</h4>
            </div>
          </div>
          <div className="justify-between  flex text-[#101828] my-6">
            <div className=" font-medium ">Total</div>
            <div className="  text-lg font-bold leading-relaxed">₦Two Six</div>
          </div>
        </div>
        <div>
          <div className="relative mb-8">
            <Input placeholder="Apply Coupon" />
            <Button
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black h-auto rounded px-2 py-1.5 text-[10px]"
              size={"sm"}
            >
              Apply
            </Button>
          </div>
          <Button className="w-full text-base font-medium">Proceed</Button>
        </div>
      </PageBase>
      <OrderMessageDrawer />
    </>
  );
}
