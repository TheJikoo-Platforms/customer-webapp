import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";

export const CouponModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className=" text-black/60 dark:text-white underline px-0 py-0 h-auto">
          Apply discount
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[330px] z-[100] sm:max-w-md bg-white rounded-dm">
        <DialogHeader className="font-medium md:font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl sm:text-center">
          Apply Discount
        </DialogHeader>
        <form action="" className="flex mt-2 sm:mt-4 gap-4 sm:gap-10">
          <Input className="grow " placeholder="Discount Code" required />
          <Button>APPLY</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
