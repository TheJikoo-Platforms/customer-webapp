import Link from "next/link";

export const GetStarted = () => (
  <Link
    href={"/login"}
    type="button"
    className="text-sm font-bold text-center text-jikoo-brand-green border-[1.5px] border-jikoo-brand-green w-full p-2 rounded-md"
  >
    Get started
  </Link>
);
