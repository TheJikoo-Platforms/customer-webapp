"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";
import { Slide } from "./slide";
import { motion } from "framer-motion";

import "swiper/swiper-bundle.css";

// Install Swiper modules
// Swiper.use([Pagination]);

const SLIDELIST = [
  {
    title: "Deal With Your Food Cravings",
    body: "Enjoy the true taste of 9ja delicacies when you order from Jikoo’s top tested vendors.",
    smallBody: (
      <>
        Enjoy the true taste of 9ja delicacies when <br /> you order from
        Jikoo’s top tested vendors.
      </>
    ),
    imageUrl: "/slide/1.png",
    city: "Port Harcourt",
  },
  {
    title: "Cheap Delivery, Always On Time",
    body: (
      <>
        Utilize our normal and premium delivery{" "}
        <span className="max-sm:block">
          {" "}
          options when placing orders on Jikoo..
        </span>{" "}
      </>
    ),
    smallBody: (
      <>
        Utilize our normal and premium delivery
        <br /> options when placing orders on Jikoo.
      </>
    ),
    imageUrl: "/slide/2.png",
    city: "Lagos",
  },
  {
    title: "Order In Bulk Conveniently",
    body: (
      <>
        Seamlessly place bulk orders for your{" "}
        <span className="block"> occasions and events with Jikoo.</span>
      </>
    ),
    smallBody: (
      <>
        Seamlessly place bulk orders for your <br /> occasions and events with
        Jikoo.
      </>
    ),
    imageUrl: "/slide/3.png",
    city: "Abuja",
  },
  {
    title: (
      <>
        Advertise <span className="block"> With Us </span>
      </>
    ),
    body: "Get access to more traffic by promoting your product or service on Jikoo.",
    smallBody: (
      <>
        Get access to more traffic by promoting <br /> your product or service
        on Jikoo.
      </>
    ),
    imageUrl: "/slide/4.png",
    city: "Delta",
  },
  {
    title: (
      <>
        Pay Less, <span className="block">Order More</span>{" "}
      </>
    ),
    body: "Enjoy good deals and discounts on our delicacies when ordering on Jikoo.",
    smallBody: (
      <>
        Enjoy good deals and discounts on <br /> our delicacies when ordering on
        Jikoo.
      </>
    ),
    imageUrl: "/slide/5.png",
    city: "Akwa Ibom",
  },
];

export default function Carousel() {
  const paginationRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <div className=" w-full">
        <Slide data={SLIDELIST} />
        <div className="absolute bottom-4 right-4 md:right-8 flex gap-2 swiper-pagination z-10 ">
          <button
            ref={paginationRef}
            className="bullet flex gap-1 md:gap-2"
          ></button>
        </div>
      </div>
    </>
  );
}
