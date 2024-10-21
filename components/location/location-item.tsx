import { AddressProps } from "../types";
import { LocationArrowUp } from "../ui/icons";

export default function LocationItem({ item }: { item: AddressProps }) {
  return (
    <button
      type="button"
      className="flex gap-3 pt-1 pb-3.5 border-b border-b-grey-100 w-full"
    >
      <LocationArrowUp />
      <div className="flex flex-col text-sm gap-0.5 text-left">
        <p className="text-black">{item.address}</p>
        <p className="text-[#8080808C]">{item.area}</p>
      </div>
    </button>
  );
}
