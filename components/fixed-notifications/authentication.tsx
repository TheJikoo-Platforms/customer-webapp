"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import Link from "next/link";

const WRAPPERCLASSNAMES =
  "bg-[#0A1910F2] py-3 px-4 flex w-full max-sm500:max-w-[calc(100%-30px)] sm500:w-[350px] items-center rounded-md fixed bottom-[72px] lg:bottom-[30px] left-1/2 -translate-x-1/2 max-h-[44px] z-10 text-sm text-white justify-between";

export const AuthNotificationContainter = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const cartItems = useAppSelector(
    (state: RootState) => state.foodItemData.cartItems
  );

  return !isAuthenticated ? (
    <div className={`${cartItems?.length === 0 ? "block" : "hidden lg:block"}`}>
      <AuthNotification />
    </div>
  ) : null;
};
const AuthNotification = () => {
  return (
    <Link href={"/login"}>
      <div className={WRAPPERCLASSNAMES}>
        <div className="flex items-center gap-2">
          <UserIcon />
          <p className="flex-1 text-sm text-left">Login/Create account</p>
        </div>

        <p className="font-bold">Sign in</p>
      </div>
    </Link>
  );
};

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0007 1.6665C7.69947 1.6665 5.83398 3.53198 5.83398 5.83317C5.83398 8.13436 7.69947 9.99984 10.0007 9.99984C12.3018 9.99984 14.1673 8.13436 14.1673 5.83317C14.1673 3.53198 12.3018 1.6665 10.0007 1.6665ZM7.50065 5.83317C7.50065 4.45246 8.61994 3.33317 10.0007 3.33317C11.3814 3.33317 12.5007 4.45246 12.5007 5.83317C12.5007 7.21388 11.3814 8.33317 10.0007 8.33317C8.61994 8.33317 7.50065 7.21388 7.50065 5.83317Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0006 19.1665C8.7169 19.1665 6.85883 18.875 5.46351 18.2643C4.77851 17.9645 4.08186 17.5354 3.67711 16.9143C3.46425 16.5877 3.32968 16.2029 3.33409 15.7733C3.33846 15.3477 3.47852 14.9399 3.71391 14.5605C4.85508 12.7212 7.18964 10.8332 10.0006 10.8332C12.8117 10.8332 15.1462 12.7212 16.2874 14.5605C16.5228 14.9399 16.6628 15.3477 16.6672 15.7733C16.6716 16.2029 16.5371 16.5877 16.3242 16.9143C15.9194 17.5354 15.2228 17.9645 14.5378 18.2643C13.1425 18.875 11.2844 19.1665 10.0006 19.1665ZM5.13014 15.4392C5.02042 15.616 5.00129 15.7296 5.00067 15.7905C5.00008 15.8474 5.0147 15.9142 5.07345 16.0044C5.21193 16.2169 5.54821 16.4821 6.13176 16.7375C7.27352 17.2372 8.89501 17.4998 10.0006 17.4998C11.1063 17.4998 12.7278 17.2372 13.8695 16.7375C14.4531 16.4821 14.7894 16.2169 14.9278 16.0044C14.9866 15.9142 15.0012 15.8474 15.0006 15.7905C15 15.7296 14.9809 15.616 14.8712 15.4392C13.936 13.932 12.0709 12.4998 10.0006 12.4998C7.93037 12.4998 6.06527 13.932 5.13014 15.4392Z"
      fill="white"
    />
  </svg>
);
