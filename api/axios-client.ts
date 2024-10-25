import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jikoo-backend.onrender.com/v1/",
  headers: { "Content-Type": "application/json" },
});

// Request Interceptor to attach token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor to handle expired or invalid tokens
axiosInstance.interceptors.response.use(
  (response) => response, // Return response if it's successful
  (error) => {
    const originalRequest = error.config;

    // If the token has expired or is invalid (401 Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loop

      // Log out the user, clear tokens, and redirect to login page
      console.error("Token expired or invalid. Logging out...");
      localStorage.clear(); // Clear all stored tokens
      window.location.href = "/login"; // Redirect to login page

      return Promise.reject(error); // Reject the error to stop further execution
    }

    return Promise.reject(error); // Handle other errors as usual
  }
);

export default axiosInstance;
