import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SearchParams = Record<string, string | number | boolean>;

export const removeQueryParams = (paramsToRemove: string[]): void => {
  if (typeof window !== "undefined") {
    // Construct a new URL object using the current window location
    const url = new URL(window.location.href);

    // Loop over the array and remove each query parameter
    paramsToRemove.forEach((param) => {
      url.searchParams.delete(param);
    });

    // Replace the current history entry with the new URL without the query parameters
    window.history.replaceState(null, "", url.toString());
  }
};

export function updateURLParameters(
  paramsToUpdate: Record<string, string>
): void {
  // Create a URL object with the current browser URL
  let urlObj = new URL(window.location.href);

  // Get the existing search parameters
  let searchParams = urlObj.searchParams;

  // Loop through the paramsToUpdate object and set each parameter
  for (let key in paramsToUpdate) {
    searchParams.set(key, paramsToUpdate[key]);
  }

  // Update the search parameters of the URL object
  urlObj.search = searchParams.toString();

  // Update the browser URL without reloading the page
  window.history.replaceState({}, "", urlObj.toString());
}

//TODO: should return a correct date and time
export function getTime(time: Date) {
  const date = new Date(time);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  const timeStr = hours + ":" + minutesStr + " " + ampm;
  return timeStr;
}

export function createFilledArray<T>(item: T, count: number): T[] {
  return Array(count).fill(item);
}

export const getImageDimensions = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = (error) => reject(error);
  });
};

export const getFieldClassName = (
  formState: any,
  errors: any,
  fieldName: string
) => {
  const isTouched = formState.touchedFields[fieldName];
  const hasError = errors[fieldName];

  if (isTouched && hasError) {
    return "border-state-error-200 focus-within:border-state-error-200";
  } else if (isTouched && !hasError) {
    return "bg-grey-75";
  } else {
    return "";
  }
};

export const scrollToTop = (): void => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }
};
