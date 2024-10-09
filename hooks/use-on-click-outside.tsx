import { RefObject, useEffect } from "react";
type Event = MouseEvent | TouchEvent;

// Extend to accept either a single ref or an array of refs
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  refs: RefObject<T> | RefObject<T>[],
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const refArray = Array.isArray(refs) ? refs : [refs]; // Ensure refs is an array

      const isOutside = refArray.every((ref) => {
        const elem = ref?.current;
        return !elem || !elem.contains((event?.target as Node) || null);
      });

      if (isOutside) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
};
