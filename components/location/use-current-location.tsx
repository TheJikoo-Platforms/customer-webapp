import { CiLocationArrow1 } from "react-icons/ci";

export default function UseCurrentLocationButton() {
  return (
    <button
      className="text-jikoo-brand-green text-sm flex gap-2.5 mt-4 py-3 border-b border-b-grey-100 items-center w-full"
      type="button"
    >
      <CiLocationArrow1 className="text-xl" />
      Use my current location
    </button>
  );
}
