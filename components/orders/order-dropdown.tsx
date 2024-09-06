import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const OrderDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full bg-primary text-white size-[30px] md:size-12 grid place-content-center">
          <Plus className="size-2.5 md:size-5 lg:size-8" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[158px] bg-white dark:bg-secondary-foreground  dark:border-white/25">
        <DropdownMenuItem asChild className="flex justify-between">
          <Link href={"/orders/bulk-order"}>
            Bulk Order <Image alt='bulk' quality={100} src={"/home/inventory.png"} width={22} height={22} priority />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="flex justify-between">
          <Link href={"/orders/future-order"}>
            Future Order{" "}
            <Image alt='future' quality={100} src={"/home/time2.png"} width={17} height={16} priority />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
