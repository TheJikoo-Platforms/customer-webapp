"use client";
import React, { useState } from "react";
import { GoSignOut } from "react-icons/go";
import Image from "next/image";
import { ArrowLeftIcon } from "@/components/ui/icons";
import InnerHeader from "../inner-page-header-mobile";
import UploadImage from "./upload-image";
import { RiDeleteBinLine } from "react-icons/ri";
import { useTransitionRouter } from "next-view-transitions";
import { ProfileForm } from "./profile-form";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import Skeleton from "../ui/skeleton";

export interface UploadImageProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export const Profile = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const router = useTransitionRouter();
    const user = useAppSelector((state: RootState) => state.user.user);
    const [isUpdating, setIsUpdating] = useState(false);
    const [file, setFile] = useState<File | null>(null);
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
              className="items-center gap-2 pt-1 pb-[36px] hidden md:flex"
            >
              <ArrowLeftIcon />
              <h3 className="text-black font-bold tracking-[-0.48px]">
                Update profile
              </h3>
            </button>
          )}

          {isUpdating ? (
            <UploadImage file={file} setFile={setFile} />
          ) : user ? (
            <Image
              src={user.image || "/avatar-settings.png"}
              height={100}
              width={100}
              alt="User Picture"
              className="w-16 h-16 rounded-full object-cover mx-auto mb-6"
            />
          ) : (
            <Skeleton className="w-16 h-16 rounded-full bg-grey-200" />
          )}

          <ProfileForm
            file={file}
            isUpdating={isUpdating}
            setIsUpdating={setIsUpdating}
          />
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
