import { Dot } from "lucide-react";
import {
  ArrowLeftIcon,
  BicycleIcon,
  ClipboardIcon,
  PhoneIcon,
  RatingStar,
} from "../ui/icons";
import { OrderSummary } from "./order-summary";
import { TimelineItem } from "./timeline-item";
import Image from "next/image";
import { IDummyOrders } from ".";

const orderItems = [
  { name: "Chicken Girl", price: 3500, quantity: 5 },
  { name: "Chicken Girl", price: 3500, quantity: 5 },
  { name: "Chicken Girl", price: 3500, quantity: 5 },
  { name: "Chicken Girl", price: 3500, quantity: 5 },
  { name: "Chicken Girl", price: 3500, quantity: 5 },
  { name: "Chicken Girl", price: 3500, quantity: 5 },
];

export default function OrderDetails({
  data,
  activeOrder,
}: {
  data: IDummyOrders[];
  activeOrder: number;
}) {
  return (
    <main className="flex flex-col flex-1 md:pt-0 bg-white md:rounded-xl">
      <div className="pb-36 lg:pb-0">
        <div className="px-5 sm600:px-6 py-4 lg:p-6">
          <p
            className={`px-3 py-0.5 ${
              data[activeOrder].state === "Ongoing"
                ? " bg-secondary-400"
                : "bg-state-success-600"
            } text-xs text-white font-medium rounded-full w-fit`}
          >
            {data[activeOrder].state}
          </p>

          <div className="flex items-center gap-2.5 mt-[18px]">
            <p className="text-sm font-medium">Order ID: 73782</p>
            <ClipboardIcon />
          </div>

          <div className="flex items-center text-sm text-grey-500 border-b border-b-grey-100 py-4">
            <p>Chicken republic</p>
            <Dot />
            <p>12th Jun., 2024</p>
            <Dot />
            <p>4:56PM</p>
          </div>

          <div className="flex justify-between items-center border-b border-b-grey-100 py-4">
            <div className="flex items-center gap-2.5">
              <Image
                src={data[activeOrder].storeLogo}
                height={55}
                width={55}
                alt=""
                className="w-6 h-6"
              />

              <p className="text-grey-600 text-sm">{data[activeOrder].store}</p>
            </div>

            <button
              type="button"
              className="flex items-center justify-center border border-grey-500 text-grey-500 w-8 h-8 rounded-full"
            >
              <PhoneIcon className="max-h-4 max-w-4" />
            </button>
          </div>

          <div
            className={`flex justify-between items-center ${
              data[activeOrder].state === "Completed" &&
              "border-b-grey-100 border-b"
            } py-4`}
          >
            <div className="flex items-center gap-2.5">
              <BicycleIcon className="w-6 h-6 text-grey-600" />
              <p className="text-sm text-grey-600">
                {data[activeOrder].state === "Ongoing"
                  ? "Looking for rider..."
                  : "Adekunle"}
              </p>
            </div>

            {data[activeOrder].state === "Completed" && (
              <button
                type="button"
                className="flex items-center justify-center border border-grey-500 text-grey-500 w-8 h-8 rounded-full"
              >
                <PhoneIcon className="max-h-4 max-w-4" />
              </button>
            )}
          </div>

          {data[activeOrder].state === "Completed" && (
            <div className="flex justify-between items-center border-b border-b-grey-100 py-4">
              <div className="flex items-center gap-2.5">
                <RatingStar />
                <p className="text-sm">Rate your order</p>
              </div>

              <button
                type="button"
                className="flex items-center justify-center border border-grey-300 px-3 py-2 rounded-full text-sm"
              >
                Rate
              </button>
            </div>
          )}

          {data[activeOrder].state === "Ongoing" && (
            <div className="border border-grey-200 p-4 flex flex-col gap-2 rounded-md mt-2">
              <div className="flex items-center gap-2">
                <p className="text-grey-500 text-sm font-medium">
                  Confirmation code
                </p>
                <WarningIcon />
              </div>

              <p className="text-2xl font-bold tracking-[-0.48px]">638-628</p>

              <p className="text-xs">
                Give this to rider upon successful delivery
              </p>
            </div>
          )}

          <div className="border-b border-b-grey-100 pb-6">
            <p className="text-sm font-bold py-6">Order timeline</p>
            <div className="space-y-12">
              <TimelineItem
                time="8:00am"
                status="Order Received"
                isActive={false}
                isCompleted={true}
              />
              <TimelineItem
                time="8:10am"
                status="Food packaged"
                isActive={false}
                isCompleted={true}
              />
              <TimelineItem
                time="8:10am"
                status="Order Picked up"
                isActive={false}
                isCompleted={true}
              />
              <TimelineItem
                time="8:1000am"
                status="Delivery en-route"
                description="Obayemi John has received your order"
                icon="/avatar.png"
                isActive={true}
                isCompleted={false}
              />
              <TimelineItem
                time="8:10am"
                status="Delivered"
                description="23, Adeshina Street, Ikota"
                isActive={false}
                isCompleted={true}
                last={true}
              />
            </div>
          </div>

          <OrderSummary
            fullAddress="16 Oladejo Adigun Road, Jericho, Ibadan 200284, Oyo, Nigeria"
            address="16 Oladejo Adigun Road"
            paymentType="Cash on delivery"
            orderItems={orderItems}
            deliveryFee={3500}
            serviceFee={350}
            total={34500}
          />
        </div>
      </div>
    </main>
  );
}

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10.0013 4.99999C10.4615 4.99999 10.8346 5.37309 10.8346 5.83332V11.6667C10.8346 12.1269 10.4615 12.5 10.0013 12.5C9.54106 12.5 9.16797 12.1269 9.16797 11.6667V5.83332C9.16797 5.37309 9.54106 4.99999 10.0013 4.99999Z"
      fill="#009933"
    />
    <path
      d="M8.95964 13.9583C8.95964 14.5336 9.42601 15 10.0013 15C10.5766 15 11.043 14.5336 11.043 13.9583C11.043 13.383 10.5766 12.9167 10.0013 12.9167C9.42601 12.9167 8.95964 13.383 8.95964 13.9583Z"
      fill="#009933"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.66797 9.99999C1.66797 5.39762 5.39893 1.66666 10.0013 1.66666C14.6037 1.66666 18.3346 5.39762 18.3346 9.99999C18.3346 14.6024 14.6037 18.3333 10.0013 18.3333C5.39893 18.3333 1.66797 14.6024 1.66797 9.99999ZM10.0013 3.33332C6.3194 3.33332 3.33464 6.31809 3.33464 9.99999C3.33464 13.6819 6.3194 16.6667 10.0013 16.6667C13.6832 16.6667 16.668 13.6819 16.668 9.99999C16.668 6.31809 13.6832 3.33332 10.0013 3.33332Z"
      fill="#009933"
    />
  </svg>
);
