import { BackButton } from "@/components/back-button";
import { OnGoingOrderItem } from "@/components/order/ongoing-order-item";
import {Timeline} from "@/components/track-order/timeline";
import { CopyIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/text";
import { Ellipsis } from "lucide-react";

export default function TrackOrderPage() {
  return (
    <div className="p-6">
      <BackButton back />
      <div className="my-3 flex items-center justify-between">
        <div className="flex gap-2.5">
          <Text>Order ID: 73782</Text>
          <CopyIcon className="size-6 text-black" />
        </div>
        <div>
          <Ellipsis/>
        </div>
      </div>
      <div>
        <OnGoingOrderItem />
      </div>
      <div className="mt-3 p-3">
        <Timeline />
      </div>
    </div>
  );
}
