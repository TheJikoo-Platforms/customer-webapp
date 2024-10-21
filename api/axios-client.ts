import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jikoo-backend.onrender.com/v1/",
  headers: { "Content-Type": "application/json" },
});

// Request Interceptor
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

// Response Interceptor for Refresh Token Logic
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to expired token (usually a 401 Unauthorized status)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Avoid infinite loop
      try {
        // Request a new access token using the refresh token
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          "https://your-api-endpoint.com/refresh-token",
          { refreshToken }
        );

        // Store the new access token
        localStorage.setItem("accessToken", response.data.accessToken);

        // Update the authorization header with the new token
        axiosInstance.defaults.headers[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;

        // Retry the original request with the new access token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token expiration (e.g., log out the user)
        console.error("Refresh token expired or invalid. Logging out.");
        localStorage.clear(); // Clear tokens
        window.location.href = "/login"; // Redirect to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
