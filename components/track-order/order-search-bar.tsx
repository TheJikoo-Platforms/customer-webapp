import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const OrderSearchBar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-2.5 sm:gap-4 md:gap-10 md:w-3/5">
        <Input placeholder="Order Number" />
        <Button>Paste</Button>
      </div>
    </div>
  );
};
