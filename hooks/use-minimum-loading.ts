import { useState, useEffect } from "react";

export const useMinimumLoading = (
  isActuallyLoading: boolean,
  minimumLoadingTime: number = 1000
) => {
  const [isLoading, setIsLoading] = useState(isActuallyLoading);

  useEffect(() => {
    if (isActuallyLoading) {
      setIsLoading(true);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadingTime);

      return () => clearTimeout(timer);
    }
  }, [isActuallyLoading, minimumLoadingTime]);

  return isLoading;
};
