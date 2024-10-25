import React, { useState } from "react";
import InnerHeader from "../inner-page-header-mobile";
import { ArrowLeftIcon } from "../ui/icons";
import { ChevronDown, ChevronUp } from "lucide-react";

export const TransactionDetails = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const items = [
      { name: "Chicken Girl", quantity: 1, price: 3500 },
      { name: "Chicken Girl", quantity: 1, price: 3500 },
      { name: "Chicken Girl", quantity: 1, price: 3500 },
    ];

    const fees = [
      { name: "Delivery fee", price: 3500 },
      { name: "Service fee", price: 350 },
      { name: "Discount", price: 0 },
    ];

    const confirmationCode = "638-628";
    const paymentType = "Cash on delivery";

    // Calculate total price by summing all prices
    const totalAmount = items.reduce((total, item) => total + item.price, 0);
    const [IsShowingDetails, setIsShowingDetails] = useState(false);

    return (
      <>
        <InnerHeader
          className="md:hidden"
          onClick={() => handleActiveScreen("home")}
          text="Transaction details"
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block mb-6">
            Transaction details
          </h3>

          <div className="flex justify-between items-center">
            <h2 className="font-bold text-black">Order ID: 73782</h2>
            <span className="text-white bg-state-success-400 py-0 px-2 rounded-full text-xs">
              Completed
            </span>
          </div>

          {/* Confirmation Code */}
          <div className="mt-3 border border-grey-200 rounded-xl p-4">
            <h3 className="text-sm font-bold text-black">Confirmation code</h3>
            <p className="text-lg font-bold text-grey-500 border-t border-t-grey-200 pt-3 mt-3">
              {confirmationCode}
            </p>
          </div>

          {/* Order Details */}
          <div className="mt-3 border border-grey-200 rounded-xl p-4">
            <div
              onClick={() => setIsShowingDetails((prev) => !prev)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-sm font-bold">Order details</h3>
              {IsShowingDetails ? (
                <ChevronUp className="text-lg" />
              ) : (
                <ChevronDown className="text-lg" />
              )}
            </div>
            {IsShowingDetails && (
              <>
                <ul className="space-y-3 text-sm border-t border-t-grey-200 pt-3 mt-3">
                  {items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-grey-500 ">
                        {item.quantity
                          ? `${item.name} (${item.quantity})`
                          : item.name}
                      </span>
                      <span className="text-black">
                        ₦ {item.price.toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 text-sm border-t border-t-grey-200 pt-3 mt-3">
                  {fees.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-black">{item.name}</span>
                      <span className="text-black">
                        ₦ {item.price.toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-between items-center font-bold">
                  <span className="text-black">Total</span>
                  <span className="text-jikoo-brand-green">
                    ₦ {totalAmount.toLocaleString()}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Payment Type */}
          <div className="mt-3 border border-grey-200 rounded-xl p-4 text-sm">
            <h3 className="font-bold ">Payment type</h3>
            <p className="font-bold text-grey-500 border-t border-t-grey-200 pt-3 mt-3">
              {paymentType}
            </p>
          </div>
        </div>
      </>
    );
  }
);
