"use client";

import { CartItem } from "@/components/cart/cart-item";

import { CustomTab } from "@/components/custom-tab";
// import { OnGoingOrderItem } from "@/components/order/ongoing-order-item";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { removeQueryParams, updateURLParameters } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useValidSearchParam } from "@/hooks/use-valid-searchParams";

const CartItems: {}[] = [{}, {}, {}, {}, {}];

export const Orders = () => {
  const tab = useValidSearchParam({
    name: "tab",
    validArr: ["cart", "orders"],
    // defau: "cart",
  });
  const remove = useValidSearchParam({
    name: "remove",
    validArr: ["cart"],
  });

  const router = useRouter();
  const onPress = () => {
    router.push("/orders/checkout");
  };
  return (
    <>
      <div className="flex-1 relative flex flex-col">
        <div>
          <div className="flex flex-row items-center">
            {tab === "cart" && (
              <>
                <div className="flex flex-row items-center gap-3">
                  <Text className="font-bold">My Cart</Text>
                  <div className="bg-primary w-6 h-6 flex justify-center items-center rounded-full text-white text-sm">
                    3
                  </div>
                </div>
                {!remove && (
                  <button
                    className="text-sm ml-auto text-[#475367] p-2.5 tracking-[-9.5%]"
                    onClick={() => updateURLParameters({ remove: "cart" })}
                  >
                    Remove
                  </button>
                )}
                {remove && (
                  <button
                    className="text-sm ml-auto text-[#475367] p-2.5 tracking-[-9.5%]"
                    onClick={() => removeQueryParams(["remove"])}
                  >
                    Cancel
                  </button>
                )}
              </>
            )}
            {tab === "orders" && (
              <>
                <div className="flex flex-row items-center gap-3">
                  <Text className="font-bold">My Orders</Text>
                </div>
                <button className="text-sm ml-auto text-[#475367] p-2.5 tracking-[-9.5%]">
                  History
                </button>
              </>
            )}
          </div>
          <div className="flex flex-row mt-3">
            <CustomTab
              label={"New Order"}
              active={tab === "cart"}
              onClick={() => updateURLParameters({ tab: "cart" })}
            />
            <CustomTab
              label={"On going"}
              active={tab === "orders"}
              amount={2}
              onClick={() => updateURLParameters({ tab: "orders" })}
            />
          </div>
        </div>
        {tab === "cart" && (
          <>
            <div className="flex-1 max-sm:pb-24 ">
              <div className="pt-3 max-sm:pb-5 overflow-y-auto max-h-[55dvh] sm:max-h-[463px]  space-y-3 scrollbar-none ">
                {CartItems.map((el: any) => (
                  <CartItem key={Math.random()} item={el} />
                ))}
                <div className="mt-3 space-y-3 py-3 border-b border-gray-200">
                  <Text className="text-base" size={"medium"}>
                    Add a message
                  </Text>
                  <Input
                    placeholder="Any important message for the delivery agent"
                    readOnly
                    onClick={() => updateURLParameters({ message: "cart" })}
                  />
                </div>
              </div>
            </div>
            <div className="max-sm:fixed bottom-[86px] left-0 right-0 p-4 bg-white ">
              <div className="flex flex-row justify-between mb-4">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-black font-semibold">₦9300</span>
              </div>
              <Button
                onClick={onPress}
                // variant={'new'}
                className="w-full text-base font-medium"
              >
                Checkout
              </Button>
            </div>
          </>
        )}

        {tab === "orders" && (
          <>
            <div
              className="overflow-y-scroll max-h-[68dvh] sm:max-h-[463px]  space-y-3 scrollbar-none"
              style={{ gap: 12, paddingTop: 12 }}
            >
              {/* <OnGoingOrderItem />
              <OnGoingOrderItem />
              <OnGoingOrderItem />
              <OnGoingOrderItem /> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};
