"use client";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { CgShoppingCart } from "react-icons/cg";
import { TiStarFullOutline } from "react-icons/ti";
import { PiCookingPot } from "react-icons/pi";
import { WishlistButton } from "../wishlist-button";
import {
  AddedToCartIcon,
  AddToCartIcon,
  CartIcon,
  NairaIcon,
} from "../ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";

import {
  setCurrentProductItem,
  setShowProductItemOverlay,
} from "@/redux-store/slices/backdrop/food-items";
import { IProductItem } from "../types";

export const FoodItem = ({ data }: { data: IProductItem }) => {
  const cartItems = useAppSelector((state) => state.foodItemData.cartItems);
  const isAddedToCart = cartItems?.some(
    (item) => item.product._id === data._id
  );
  const dispatch = useAppDispatch();
  const handleShowOverlay = () => {
    dispatch(setShowProductItemOverlay(true));
    dispatch(setCurrentProductItem(data));
  };
  return (
    <div onClick={handleShowOverlay} className="w-full cursor-pointer">
      <div className="flex">
        {/* Left */}
        <div className="relative flex-1 w-[33%]">
          <Image
            alt=""
            src={data?.image}
            width={200}
            height={200}
            className="w-full min-w-[102px] object-cover rounded-md rounded-br-[32px] h-full max-h-[120px]"
            quality={100}
          />
          <WishlistButton
            product={data}
            className="absolute top-[8px] left-[5px]"
          />
        </div>

        {/* Right */}
        <div className="ml-3 w-[66%] overflow-x-auto scrollbar-none text-nowrap tracking-[-0.4px]">
          <p className="w-full truncate overflow-hidden whitespace-nowrap text-left text-sm font-extrabold capitalize">
            {data.name}
          </p>

          <div className="mt-1.5 flex items-center">
            {/* Logo */}
            <Image
              src={data?.store?.photo}
              alt="Resturant Logo"
              className="w-3 h-3 rounded-full object-cover"
              width={55}
              height={55}
              unoptimized
            />

            <div className="ml-1 flex text-[13px] tracking-[-0.4px] items-center text-[#787D78E5]">
              <p className="truncate max-w-32 sm500:max-w-full lg:max-w-32">
                {data?.store?.name}
              </p>
              <LuDot className="mx-0.5" />
              <span className="mr-1">{data?.sold} sold</span>
            </div>
          </div>

          <div className="mt-1.5 flex items-center text-[#787D78E5] text-[13px]">
            <p className="flex gap-2 items-center">
              <StarIcon /> <span>{"4.5"}</span>
            </p>
            <LuDot className="mx-0.5" />
            <p className="flex gap-1 items-center">
              <PotIcon /> <span>{data?.cookingTime}</span>
            </p>
          </div>

          <div className="mt-2 flex justify-between max-w-[95%] md:max-w-[240px] lg:max-w-[95%] xl:max-w-[230px]">
            <div className="flex flex-col">
              <p className="text-jikoo-brand-green font-extrabold text-xl flex items-center">
                <NairaIcon className="size-4 fill-jikoo-brand-green mb-px" />{" "}
                {data?.price - data?.discount}
              </p>
              <p className="line-through text-xs text-[#787D78E5]">
                ₦{data?.price}
              </p>
            </div>

            <span
              className={`${
                isAddedToCart
                  ? "bg-jikoo-brand-green"
                  : "border border-jikoo-brand-green"
              } rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200`}
            >
              <CgShoppingCart
                className={`text-xl ${
                  isAddedToCart ? "text-white" : "text-jikoo-brand-green"
                }`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <rect width="12" height="12" fill="url(#pattern0_24996_3977)" />
    <defs>
      <pattern
        id="pattern0_24996_3977"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_24996_3977" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_24996_3977"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const PotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <rect width="12" height="12" fill="url(#pattern0_24994_3980)" />
    <defs>
      <pattern
        id="pattern0_24994_3980"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_24994_3980" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_24994_3980"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABNRJREFUeJztW11oHFUYPd/sbNy0+etLDVZpqkExKzFm0mxti000m02DaNuHYJ8E9aH6Ij4IUhCKIK0gFkFDnxQEtbYoFbF1s9GsqE022U0imvrQqPUnLWoxP4ba7M98PjQ/dyabTNA7e2Mz5+18e+43Z87enXuHnSEoQrS+8X4iegtAhpkfjwz2f6bCh6bioABAGr0EYBOAKiJ640QwWKTCh7IAwBgX2ObywPr9KmwoC4CJjoqcoD2swoeyAHqTfVEAl+c4gVsOKfBDbjSNGUY5SG/SMlryga97x5bSdRmhjwG0L5jJVoRTqUlR8+nd924y/WaDnp35vHl4eEK2V+mJf7hjRylDH2LGqZxunovVb7tzKS0R/hK5qWllIu9ubLzd1M3vmHEq47thMGYY5bL9Sg9g3UzOALBllpYx+MhSWmbcIfKcplm+fc5pEQZKZ+kWk33PSjULN35znBkC8Oc8J+zuqaursMuiDQ13AagVSufbE4kpUWNStgeAKfR6RLZd6QGEU6lJEN4VSv6MHgjadcT6C9bj8wd2TSSZ/BbMX8yPAd12OhQqs+v+C9y56jJ+FymZZonIY0ZoJ8B7hdLfWZ1ey9uL6A+R6mm9JK/uX8KtZWenSNikHywceMqiJjrankj8am/S09SkA9gmlK5MVN/0m0Sf8gPovidUA6BFKF06O5z4fo7wtaW3Tfh8Oj2jv5yvV3bq6j4AN8+PZZztOHkyJ9Ov9ADYh6ch7C8Y1HlIuJBFDaMSwAZhSP+D33wpbosXehE/YykQvy7VLNwIgLFHoFeKkDlmOaAZsG++8k7pnq1bK2Gd/ucnb938kRyXgh+ZzaK12zcC2CiUeppTqcuixp/2T1lH4cZ8vdI5qhE5A+/Lnv6A5AByPh9bK5S2a5pH4tMAfhFK26O1teudehOwqJcMSA2guNw3ThC3t9ycd91mnBZYQPOve2yxxPezrfQQu3DvIjWA5ng8C7KcXIWepQ67jjQ6LnIGP2rXtA32jgI4J5TquutDIWlmZyH/IkjmEQC5BY5Fd4PhZF8cQHyOE+hSvl4EflGgGVNnqXsAwIUAWgcGhpl5DxjHAX4ykuw7k0/n18z9BHQS0Ek6P5FPE071vwPiA0R4j8B7I/39P8r268HDGseKlpUuI9QKol1g0+e2ISkgLcfgeCSZiDlKnQRdRqgVQFSKsQJD0yjcMtDXvazGqQkz3yfPUmHBJu9y0jgvg0T/j2mfBww4elf3z9AqgReAagOqseYDIAA4EQwWVQRKhgDUOOivF4xOXJ0OdoyMpDUA2BAIVGLtnDwAVM+e87WfQEbXzeX11x9MTWMA0AFgdyIxFmsIvckmbrELiVANoKqw9qThAjNG7UUiGpusqrqIgQHnrXDUCB0m4Dl3/LmOw62pxMHlBGt+FfACUG1ANbwAVBtQDS8A1QZUwwtAtQHV8AJQbUA1vABUG1ANLwDVBlTDC0C1AdXwAlBtQDW8AFQbUA3HAAjIFMKIS3D07vyABPFPcrwUHsS44KRxngE5/xm49Jyuy0jnKPuJk8gxgNahry4S4VU5ngoHBl5pS6XyPoEqYkUXQb2k+CBgeRFqVYPAbxeVFj+/Mu0KwQB1N4T2mSYOEMGA9a2P1YBxAEliOhYe7Fv0BtpS+AcNJ2AU43NcvgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);
