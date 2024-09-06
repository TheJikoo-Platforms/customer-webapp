import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {Button} from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Separator} from '@/components/ui/separator'
import {DeliveryServiceItem} from '@/components/cart/delivery-service-item'

export const DeliveryOption = ({ next }: { next: () => void }) => {
  return (
    <div>
      <h1 className="text-[11px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        Which service would you like to pay with?
      </h1>
      <ToggleGroup type="single" className="flex-col">
        <ToggleGroupItem
          value="a"
          className="block w-full h-auto data-[state=on]:bg-primary/20 [&_.dot]:data-[state=on]:dot-active data-[state=on]:border-primary data-[state=on]:border rounded sm:rounded-sm md:rounded-md lg:rounded-dm "
        >
          <DeliveryServiceItem />
        </ToggleGroupItem>
        <Separator />
        <ToggleGroupItem
          value="b"
          className="block w-full h-auto data-[state=on]:bg-primary/20 [&_.dot]:data-[state=on]:dot-active data-[state=on]:border-primary data-[state=on]:border rounded sm:rounded-sm md:rounded-md lg:rounded-dm "
        >
          <DeliveryServiceItem />
        </ToggleGroupItem>
        <Separator />
      </ToggleGroup>
      <div className="flex items-center gap-5 sm:gap-10 md:gap-16 lg:gap-28 mt-5 md:mt-7 lg:mt-10">
        <label
          htmlFor=""
          className="font-medium text-sm sm:text-lg md:text-xl lg:text-2xl"
        >
          Address
        </label>
        <Select>
          <SelectTrigger className="max-w-[706px] ">
            <SelectValue placeholder="Select an address" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="apple">Address 1</SelectItem>
              <SelectItem value="banana">Address 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-[30px] sm:mt-8 md:mt-12 lg:mt-14 flex justify-center ">
        <Button className="w-4/5 md:w-full mx-auto" onClick={next}>
          Continue
        </Button>
      </div>
    </div>
  );
};
