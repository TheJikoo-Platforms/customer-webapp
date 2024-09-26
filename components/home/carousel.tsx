"use client";
import React from "react";
import { Slide } from "./slide";

const SLIDELIST = [
  {
    title: (
      <>
        Deal With Your <br /> Food Cravings,
      </>
    ),
    smallBody: (
      <>
        Enjoy the true taste of 9ja delicacies when you order from Jikoo’s top
        tested vendors.
      </>
    ),
    imageUrl: "/slide/1.png",
    city: "Port Harcourt",
  },
  {
    title: (
      <>
        Cheap Delivery,
        <br /> Always On Time
      </>
    ),
    smallBody: (
      <>
        Utilize our normal and premium delivery options when placing orders on
        Jikoo.
      </>
    ),
    imageUrl: "/slide/2.png",
    city: "Lagos",
  },
  {
    title: (
      <>
        Order In Bulk <br /> Conveniently
      </>
    ),
    smallBody: (
      <>
        Seamlessly place bulk orders for your occasions and events with Jikoo.
      </>
    ),
    imageUrl: "/slide/3.png",
    city: "Abuja",
  },
  {
    title: (
      <>
        Advertise <br /> With Us
      </>
    ),
    smallBody: (
      <>
        Get access to more traffic by promoting your product or service on
        Jikoo.
      </>
    ),
    imageUrl: "/slide/4.png",
    city: "Delta",
  },
  {
    title: (
      <>
        Pay Less, <br /> Order More
      </>
    ),
    smallBody: (
      <>
        Enjoy good deals and discounts on our delicacies when ordering on Jikoo.
      </>
    ),
    imageUrl: "/slide/5.png",
    city: "Akwa Ibom",
  },
];

export default function Carousel() {
  return (
    <>
      <div className="w-full">
        <Slide data={SLIDELIST} />
      </div>
    </>
  );
}
