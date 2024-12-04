// components/UseCurrentLocationButton.tsx
"use client";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import useGeolocation from "./hooks/use-current-location";

interface UseCurrentLocationButtonProps {
  fetchSuggestions: (input: string) => void;
}

const UseCurrentLocationButton: React.FC<UseCurrentLocationButtonProps> =
  React.memo(({ fetchSuggestions }) => {
    const { getCurrentLocation, loading, error } =
      useGeolocation(fetchSuggestions);

    return (
      <div>
        <button
          className="text-jikoo-brand-green text-sm flex gap-2.5 mt-4 py-3 border-b border-b-grey-100 items-center w-full"
          type="button"
          onClick={getCurrentLocation}
          disabled={loading}
        >
          <CiLocationArrow1 className="text-xl" />
          Use my current location
        </button>
        {loading && <p>Loading your location...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  });

export default UseCurrentLocationButton;
