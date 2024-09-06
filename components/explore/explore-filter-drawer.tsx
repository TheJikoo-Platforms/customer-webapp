"use client";
import { useState, useCallback } from "react";
import { Drawer, DrawerContent, DrawerOverlay } from "@/components/ui/drawer";
import { removeQueryParams, updateURLParameters } from "@/lib/utils";
import { useValidSearchParam } from "@/hooks/use-valid-searchParams";
import { DrawerCard } from "../drawer-card";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import Slider from "@mui/material/Slider";

const RATINGS = ["4.5", "4.0", "3.5", "2.5"];

const valuetext = (value: number) => `$${value}`;

export const ExploreFilterDrawer = () => {
  const searchParams = useSearchParams();

  const rating = useValidSearchParam({
    name: "rating",
    validArr: RATINGS,
  });

  const [selectedRating, setSelectedRating] = useState(
    (rating as (typeof RATINGS)[number]) ?? "4.5"
  );

  const filter = useValidSearchParam({
    name: "filter",
    validArr: ["explore"],
  });

  const [value, setValue] = useState<number[]>([
    Math.max(500, Number(searchParams.get("minPrice")) || 500),
    Math.min(20000, Number(searchParams.get("maxPrice")) || 20000),
  ]);

  const [vendor, setVendor] = useState(!!searchParams.get("vendor"));

  const handlePriceChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    },
    []
  );

  const applyFilters = () => {
    updateURLParameters({
      rating: selectedRating,
      minPrice: value[0].toString(),
      maxPrice: value[1].toString(),
      vendor: vendor ? "open" : "",
    });
    removeQueryParams(["filter"]);
  };

  const open = !!filter;

  return (
    <Drawer open={open} onClose={() => removeQueryParams(["filter"])} modal>
      <DrawerOverlay onClick={() => removeQueryParams(["filter"])} />
      <DrawerContent
        className="bg-white dark:bg-secondary-foreground z-[100]"
        aria-modal
      >
        <DrawerCard
          title="Filter by"
          cancel
          cancelAction={() => removeQueryParams(["filter"])}
        >
          <div className="space-y-4">
            <div>
              <h2 className="font-medium mb-3">Vendors</h2>
              <div className="flex justify-between">
                <p className="text-[#475467] text-sm">Open only</p>
                <Checkbox
                  onCheckedChange={(val)=>setVendor(val as boolean)}
                  checked={vendor}
                  className="rounded-none border-[0.5px] border-[#475467]"
                />
              </div>
            </div>

            <div>
              <h2 className="font-medium mb-3">Rating</h2>
              <div className="space-x-3">
                {RATINGS.map((rating) => (
                  <button
                    key={rating}
                    className={`rounded font-normal text-sm capitalize p-2.5 ${
                      rating !== selectedRating
                        ? "bg-[#E7F6EC] text-[#475467]"
                        : "bg-primary text-white"
                    }`}
                    onClick={() => setSelectedRating(rating)}
                  >
                    {rating}+
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-medium mb-3">Price</h2>
              <div className="px-3">
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  min={500}
                  max={20000}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  step={500}
                  marks={[
                    {
                      value: 500,
                      label: <div className="pl-4 font-medium">₦500</div>,
                    },
                    {
                      value: 20000,
                      label: <div className="pr-7 font-medium">₦20000</div>,
                    },
                  ]}
                  sx={{
                    color: "#009933",
                      height: 4,
                    margin: 0,
                    "& .MuiSlider-thumb": {
                      width: 16,
                      height: 16,
                      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                      "&:hover, &.Mui-focusVisible": {
                        boxShadow: `0px 0px 0px 8px ${
                          "dark" === "dark"
                            ? "rgb(255 255 255 / 16%)"
                            : "rgb(0 0 0 / 16%)"
                        }`,
                      },
                      "&.Mui-active": {
                        width: 20,
                        height: 20,
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.28,
                    },
                    "& .MuiSlider-markLabel": {
                      top: "-5px",
                      fontFamily: "inherit",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#475467",
                    },
                  }}
                />
              </div>
            </div>

            <Button className="rounded-full w-full mt-6" onClick={applyFilters}>
              Apply
            </Button>
          </div>
        </DrawerCard>
      </DrawerContent>
    </Drawer>
  );
};
