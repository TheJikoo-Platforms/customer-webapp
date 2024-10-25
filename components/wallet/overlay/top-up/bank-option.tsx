"use client";
import BorderedDiv from "@/components/auth/bordered-div";
import InnerHeader from "@/components/inner-page-header-mobile";
import { Button } from "@/components/ui/button";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useAppDispatch } from "@/redux-store/hooks";
import { setShowWalletOverlay } from "@/redux-store/slices/wallet-slice";
import React, { useRef, useState } from "react";
import { TopUpOption } from "./top-up-option";
import { IoClose } from "react-icons/io5";

export const BankOption = React.memo(
  ({
    handleCurrentScreen,
    currentScreen,
  }: {
    handleCurrentScreen: (screen: string) => void;
    currentScreen: string;
  }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContinue = () => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        handleCurrentScreen("account");
      }, 500);
    };
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const handleCloseBackdrop = () => {
      dispatch(
        setShowWalletOverlay({ showWalletOverlay: false, activeScreen: "" })
      );
    };
    useOnClickOutside(ref, handleCloseBackdrop);
    return (
      <div
        ref={ref}
        className="bg-white w-full h-full sm500:h-[initial] sm500:rounded-2xl text-center max-w-[550px] sm500:max-w-[420px] pb-20 sm500:pb-2"
      >
        <InnerHeader
          className="sm500:hidden"
          onClick={handleCloseBackdrop}
          text="Top up"
        />
        <div className="hidden mx-6 sm500:flex items-center justify-between border-b border-b-grey-100 mb-6 py-6 sm500:mb-0">
          <h2 className="tracking-[-0.4px] text-xl font-bold">Topup</h2>

          <IoClose
            className="text-2xl cursor-pointer"
            onClick={handleCloseBackdrop}
          />
        </div>
        <div className="px-5 sm500:px-6 pt-6">
          <label
            htmlFor="amount"
            className="block font-bold text-grey-900 text-left"
          >
            How much?
          </label>
          <BorderedDiv className="items-center gap-2 p-4 mt-4">
            <UnstyledInput
              type="number"
              min="0"
              id="amount"
              placeholder="0.00"
              className="text-sm text-grey-400 placeholder:text-grey-400"
            />

            <span className="text-grey-500 text-sm">NGN</span>
          </BorderedDiv>
        </div>
        <div className="px-5 sm500:mx-6 sm500:px-0 py-6 mt-6 border-t-4 border-t-grey-100">
          {/* Payment Method Selection */}
          <div className="">
            <h3 className="text-sm font-bold text-grey-900 text-left mb-6">
              Select payment method
            </h3>

            <ul className="space-y-0">
              <TopUpOption
                handleCurrentScreen={handleCurrentScreen}
                label="Bank"
                icon={<CardIcon />}
                currentScreen={currentScreen}
                screenName="bank"
              />
              <TopUpOption
                handleCurrentScreen={handleCurrentScreen}
                label="Card payment"
                icon={<CardIcon />}
                currentScreen={currentScreen}
                screenName="bank"
              />
              <TopUpOption
                handleCurrentScreen={handleCurrentScreen}
                label="Crypto (USDT and USDC)"
                icon={<CryptoIcon />}
                currentScreen={currentScreen}
                screenName="crypto"
              />
            </ul>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className={`w-full mt-6 py-4 transition-all ${
              isSubmitting && "opacity-65"
            }`}
            disabled={isSubmitting}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }
);

const CardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
  >
    <g id="button-icon">
      <g id="icon">
        <path
          d="M4.88542 17.3057C4.88542 16.7112 5.36733 16.2293 5.96181 16.2293H14.5729C15.1674 16.2293 15.6493 16.7112 15.6493 17.3057C15.6493 17.9001 15.1674 18.3821 14.5729 18.3821H5.96181C5.36733 18.3821 4.88542 17.9001 4.88542 17.3057Z"
          fill="#009933"
        />
        <path
          d="M17.8021 16.2293C17.2076 16.2293 16.7257 16.7112 16.7257 17.3057C16.7257 17.9001 17.2076 18.3821 17.8021 18.3821H19.9549C20.5493 18.3821 21.0312 17.9001 21.0312 17.3057C21.0312 16.7112 20.5493 16.2293 19.9549 16.2293H17.8021Z"
          fill="#009933"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.65625 7.07997C1.65625 4.70208 3.58391 2.77441 5.96181 2.77441H21.0312C23.4091 2.77441 25.3368 4.70208 25.3368 7.07997V18.9202C25.3368 21.2981 23.4091 23.2258 21.0312 23.2258H5.9618C3.58391 23.2258 1.65625 21.2981 1.65625 18.9202V7.07997ZM5.96181 4.92719C4.77286 4.92719 3.80903 5.89102 3.80903 7.07997V7.61816H23.184V7.07997C23.184 5.89102 22.2202 4.92719 21.0312 4.92719H5.96181ZM23.184 9.77094H3.80903V18.9202C3.80903 20.1092 4.77286 21.073 5.9618 21.073H21.0312C22.2202 21.073 23.184 20.1092 23.184 18.9202V9.77094Z"
          fill="#009933"
        />
      </g>
    </g>
  </svg>
);

const CryptoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
  >
    <g id="button-icon">
      <path
        id="icon"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6532 8.12481V7.08057C15.6532 5.54458 14.6769 4.30789 13.4207 3.50853C12.1518 2.70104 10.4646 2.23682 8.65668 2.23682C6.84879 2.23682 5.16154 2.70104 3.89263 3.50853C2.63649 4.30789 1.66016 5.54458 1.66016 7.08057V18.9208C1.66016 20.4568 2.63649 21.6935 3.89263 22.4929C5.16154 23.3004 6.84879 23.7646 8.65668 23.7646C10.4646 23.7646 12.1518 23.3004 13.4207 22.4929C13.993 22.1287 14.5071 21.6738 14.8974 21.1412C15.2083 21.7831 15.7187 22.3184 16.3087 22.7198C17.2887 23.3868 18.5824 23.7646 19.9588 23.7646C21.3351 23.7646 22.6288 23.3868 23.6089 22.7198C24.5833 22.0567 25.3407 21.0287 25.3407 19.758V10.5489C25.3407 9.27825 24.5833 8.25025 23.6089 7.58712C22.6288 6.92017 21.3351 6.54237 19.9588 6.54237C18.5824 6.54237 17.2887 6.92017 16.3087 7.58712C16.0753 7.74597 15.8543 7.92576 15.6532 8.12481ZM3.81293 7.08057C3.81293 6.5359 4.16187 5.8889 5.0484 5.32475C5.92216 4.76872 7.19498 4.38959 8.65668 4.38959C10.1184 4.38959 11.3912 4.76872 12.265 5.32475C13.1515 5.8889 13.5004 6.5359 13.5004 7.08057C13.5004 7.62523 13.1515 8.27223 12.265 8.83639C11.3912 9.39242 10.1184 9.77154 8.65668 9.77154C7.19498 9.77154 5.92216 9.39242 5.0484 8.83639C4.16187 8.27223 3.81293 7.62523 3.81293 7.08057ZM13.4207 10.6526C13.4474 10.6356 13.474 10.6184 13.5004 10.6011V11.3861C13.5004 11.9308 13.1515 12.5778 12.265 13.1419C11.3912 13.698 10.1184 14.0771 8.65668 14.0771C7.19498 14.0771 5.92216 13.698 5.0484 13.1419C4.16187 12.5778 3.81293 11.9308 3.81293 11.3861V10.6011C3.83937 10.6184 3.86593 10.6356 3.89263 10.6526C5.16154 11.4601 6.84879 11.9243 8.65668 11.9243C10.4646 11.9243 12.1518 11.4601 13.4207 10.6526ZM13.4207 14.9582C13.4474 14.9412 13.474 14.924 13.5004 14.9066V15.6917C13.5004 16.2363 13.1515 16.8833 12.265 17.4475C11.3912 18.0035 10.1184 18.3827 8.65668 18.3827C7.19498 18.3827 5.92216 18.0035 5.0484 17.4475C4.16187 16.8833 3.81293 16.2363 3.81293 15.6917V14.9066C3.83937 14.924 3.86593 14.9412 3.89263 14.9582C5.16154 15.7656 6.84879 16.2299 8.65668 16.2299C10.4646 16.2299 12.1518 15.7656 13.4207 14.9582ZM13.4207 19.2637L13.4623 19.237C13.3506 19.7054 12.9852 20.2184 12.265 20.6767C11.3912 21.2327 10.1184 21.6118 8.65668 21.6118C7.19498 21.6118 5.92216 21.2327 5.0484 20.6767C4.32821 20.2184 3.9628 19.7054 3.85103 19.237L3.89263 19.2637C5.16154 20.0712 6.84879 20.5354 8.65668 20.5354C10.4646 20.5354 12.1518 20.0712 13.4207 19.2637ZM16.7296 10.5489C16.7296 10.2013 16.936 9.76424 17.5199 9.36685C18.0982 8.97329 18.9572 8.69515 19.9588 8.69515C20.9603 8.69515 21.8194 8.97329 22.3977 9.36685C22.9816 9.76424 23.1879 10.2013 23.1879 10.5489C23.1879 10.8965 22.9816 11.3336 22.3977 11.731C21.8194 12.1246 20.9603 12.4027 19.9588 12.4027C18.9572 12.4027 18.0982 12.1246 17.5199 11.731C16.936 11.3336 16.7296 10.8965 16.7296 10.5489ZM19.9588 14.5555C21.1461 14.5555 22.2719 14.2743 23.1879 13.7689V13.8977C23.1879 14.2453 22.9816 14.6824 22.3977 15.0798C21.8194 15.4733 20.9603 15.7515 19.9588 15.7515C18.9572 15.7515 18.0982 15.4733 17.5199 15.0798C16.936 14.6824 16.7296 14.2453 16.7296 13.8977V13.7689C17.6456 14.2743 18.7715 14.5555 19.9588 14.5555ZM19.9588 17.9043C21.1461 17.9043 22.2719 17.6231 23.1879 17.1177V17.2465C23.1879 17.5941 22.9816 18.0312 22.3977 18.4285C21.8194 18.8221 20.9603 19.1002 19.9588 19.1002C18.9572 19.1002 18.0982 18.8221 17.5199 18.4285C16.936 18.0312 16.7296 17.5941 16.7296 17.2465V17.1177C17.6456 17.6231 18.7715 17.9043 19.9588 17.9043ZM19.9588 21.253C20.9394 21.253 21.8781 21.0612 22.6913 20.7097C22.6063 20.7874 22.5088 20.8645 22.3977 20.9401C21.8194 21.3337 20.9603 21.6118 19.9588 21.6118C18.9572 21.6118 18.0982 21.3337 17.5199 20.9401C17.4087 20.8645 17.3112 20.7874 17.2262 20.7097C18.0394 21.0612 18.9781 21.253 19.9588 21.253Z"
        fill="#009933"
      />
    </g>
  </svg>
);
