import { useState } from "react";

const loadGoogleMapsScript = async (apiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load Google Maps script"));
    document.body.appendChild(script);
  });
};

const getAddressFromCoordinates = async (
  latitude: number,
  longitude: number,
  fetchSuggestions: (input: string) => void
) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("Google API key is missing.");
    return;
  }

  // Load Google Maps API if not already loaded
  await loadGoogleMapsScript(apiKey);

  const geocoder = new window.google.maps.Geocoder();
  const latLng = new window.google.maps.LatLng(latitude, longitude);

  geocoder.geocode({ location: latLng }, (results, status) => {
    if (
      status === window.google.maps.GeocoderStatus.OK &&
      results &&
      results[0]
    ) {
      const addressComponents = results[0].address_components;

      // Helper function to extract a component by type
      const getAddressComponent = (type: any) => {
        const component = addressComponents.find((comp) =>
          comp.types.includes(type)
        );
        return component ? component.long_name : null; // Use short_name if needed
      };

      const streetName = getAddressComponent("route");
      const city = getAddressComponent("locality");
      const state = getAddressComponent("administrative_area_level_1");
      const country = getAddressComponent("country");

      // Build the most reliable search query
      let searchQuery =
        streetName || city || state || country || "Unknown location";
      console.log("streetName", streetName);
      console.log("city", city);
      console.log("state", state);
      console.log("country", country);

      // Fetch suggestions with the most relevant search query
      fetchSuggestions(searchQuery);
    } else {
      console.error("Geocoder failed or no results:", status);
    }
  });
};

const useGeolocation = (fetchSuggestions: (input: string) => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = async () => {
    setLoading(true);
    setError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          getAddressFromCoordinates(
            latitude,
            longitude,
            fetchSuggestions
          ).finally(() => setLoading(false));
        },
        (error) => {
          setError("Error getting location: " + error.message);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  return { getCurrentLocation, loading, error };
};

export default useGeolocation;
