"use client";
import { Drawer, DrawerContent, DrawerOverlay } from "@/components/ui/drawer";
import { removeQueryParams, updateURLParameters } from "@/lib/utils";
import { useValidSearchParam } from "@/hooks/use-valid-searchParams";
import { DrawerCard } from "../drawer-card";
import { useState } from "react";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";

const PERIODS: ("today" | "week" | "month" | "year")[] = [
  "today",
  "week",
  "month",
  "year",
];

export const NotificationFilterDrawer = () => {
  const searchParams = useSearchParams();
  const sort = useValidSearchParam({
    name: "period",
    validArr: PERIODS,
  });
  const [period, setPeriod] = useState<"today" | "week" | "month" | "year">(
    (searchParams.get("period") as "today") ?? "today"
  );
  const filter = useValidSearchParam({
    name: "filter",
    validArr: ["notification"],
  });
  const open = !!filter;

  return (
    <Drawer open={open} onClose={() => removeQueryParams(["filter"])} modal>
      <DrawerOverlay onClick={() => removeQueryParams(["filter"])} />
      <DrawerContent
        className="bg-white dark:bg-secondary-foreground z-[100] "
        aria-modal
      >
        <DrawerCard
          title="Filter by"
          cancel
          cancelAction={() => removeQueryParams(["filter"])}
        >
          <div>
            <h2 className="font-medium mb-3">Period</h2>
            <div>
              {PERIODS.map((el) => (
                <Button
                  className={`rounded-full font-normal text-sm capitalize py-2 `}
                  onClick={() => setPeriod(el)}
                  variant={period === el ? 'default': 'clear'}
                >
                  {el}
                </Button>
              ))}
            </div>
            <Button
              className="rounded-full w-full mt-8"
              onClick={() => {
                updateURLParameters({ period });
                removeQueryParams(["filter"]);
              }}
            >
              Apply
            </Button>
          </div>
        </DrawerCard>
      </DrawerContent>
    </Drawer>
  );
};
