"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoSignOut } from "react-icons/go";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CiCalendar, CiMail, CiUser } from "react-icons/ci";
import { FaChevronDown, FaChevronUp, FaCircleCheck } from "react-icons/fa6";
import { Calendar } from "@/components/ui/new-calendar";
import { format } from "date-fns";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { Button } from "@/components/ui/button";
import { getFieldClassName } from "@/lib/utils";
import { registerUser } from "@/api/requests";
import { useMutation } from "@tanstack/react-query";
import { MdCancel } from "react-icons/md";
import BorderedDiv from "../auth/bordered-div";
import { NGFlag } from "../auth/ui/icons";
import InnerHeader from "../inner-page-header-mobile";
import UploadImage from "./upload-image";
import { RiDeleteBinLine } from "react-icons/ri";
import { useTransitionRouter } from "next-view-transitions";
import { ProfileForm } from "./profile-form";

export const Profile = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const router = useTransitionRouter();
    const [isUpdating, setIsUpdating] = useState(false);
    const handleGoBack = () => {
      if (isUpdating) {
        setIsUpdating(false);
      } else {
        handleActiveScreen("home");
      }
    };

    return (
      <>
        <InnerHeader
          className="md:hidden"
          onClick={handleGoBack}
          text={isUpdating ? "Update profile" : "Profile"}
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          {!isUpdating ? (
            <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block pt-1 pb-[36px]">
              Profile
            </h3>
          ) : (
            <button
              onClick={() => setIsUpdating(false)}
              type="button"
              className="flex items-center gap-2 pt-1 pb-[36px]"
            >
              <ArrowLeftIcon />
              <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block">
                Update profile
              </h3>
            </button>
          )}

          {isUpdating ? (
            <UploadImage />
          ) : (
            <Image
              src="/avatar.png"
              height={100}
              width={100}
              alt="User Picture"
              className="w-16 h-16 rounded-full object-cover mx-auto mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(<path-to-image>)",
                backgroundColor: "#D4AFBD",
                backgroundPosition: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          <ProfileForm isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
          {!isUpdating && (
            <div className="mt-6">
              <button
                type="button"
                className="flex items-center gap-2 text-black text-xs py-4"
                onClick={() => router.push("/login")}
              >
                <GoSignOut /> Sign out
              </button>
              <button
                type="button"
                onClick={() => handleActiveScreen("delete")}
                className="flex items-center gap-2 text-state-error-300 text-xs py-4"
              >
                <RiDeleteBinLine /> Delete account
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
);
