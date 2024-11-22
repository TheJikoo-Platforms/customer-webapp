import { useState, useEffect, useRef } from "react";

type Suggestion = {
  address: string;
  area: string;
};

const useLocationSuggestions = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] =
    useState<google.maps.LatLngLiteral | null>(null);
  const autocompleteServiceRef =
    useRef<google.maps.places.AutocompleteService | null>(null);

  // Initialize the Autocomplete Service
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.onload = initializeAutocompleteService;
        document.body.appendChild(script);
      } else {
        initializeAutocompleteService();
      }
    };

    const initializeAutocompleteService = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        autocompleteServiceRef.current =
          new window.google.maps.places.AutocompleteService();
      } else {
        console.error("Google Maps Places API failed to load.");
      }
    };

    loadGoogleMapsScript();
  }, [apiKey]);

  // Get the user's current location
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting user location", error);
            setUserLocation(null); // Fallback if location is not available
          }
        );
      }
    };

    getUserLocation();
  }, []);

  // Fetch suggestions
  const fetchSuggestions = (input: string) => {
    if (!input || !autocompleteServiceRef.current || !userLocation) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    autocompleteServiceRef.current.getPlacePredictions(
      {
        input,
        location: new google.maps.LatLng(userLocation.lat, userLocation.lng), // Use the user's location
        radius: 50000, // Optional: restrict results to a 50km radius
        types: ["geocode"],
      },
      (predictions, status) => {
        setLoading(false);
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          const formattedSuggestions = predictions.map((prediction) => ({
            address: prediction.description,
            area: prediction.structured_formatting.secondary_text || "",
          }));
          setSuggestions(formattedSuggestions);
        } else {
          setSuggestions([]);
        }
      }
    );
  };

  return { suggestions, loading, fetchSuggestions };
};

export default useLocationSuggestions;
