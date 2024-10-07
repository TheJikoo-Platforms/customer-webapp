"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FoodItem } from "../food-item";

export const ProductSlider = () => {
  return (
    <Carousel
      opts={{
        dragFree: true,
      }}
      className="w-full max-md:hidden"
    >
      <CarouselContent className="gap-5">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="relative lg:w-64 basis-[none]">
            <FoodItem index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
