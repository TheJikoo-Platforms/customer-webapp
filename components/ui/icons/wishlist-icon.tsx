import { SvgProps } from "./upload-icon";

export const WishlistIcon = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <rect width="14" height="14" fill="url(#pattern0_19893_141603)" />
      <defs>
        <pattern
          id="pattern0_19893_141603"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_19893_141603" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_19893_141603"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
