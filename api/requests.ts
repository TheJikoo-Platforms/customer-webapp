import axiosInstance from "./axios-client";

export const verifyOtp = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  const response = await axiosInstance.post("/verify-otp", { email, otp });
  return response.data;
};

export const registerUser = async (userData: {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  dob: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await axiosInstance.post("/auth/user/register", userData);
  return response.data;
};

export const validateOtp = async (otpData: { email: string; otp: string }) => {
  const response = await axiosInstance.post("/auth/email/validateotp", otpData);
  return response.data;
};

export const verifyMail = async (otpData: { email: string; otp: string }) => {
  const response = await axiosInstance.post(
    "/auth/user/email/verification",
    otpData
  );
  return response.data;
};

export const sendOtpToMail = async (email: string) => {
  const response = await axiosInstance.post("/auth/email/forgot/passsword", {
    email: email,
  });
  return response.data;
};

export const loginUserMail = async (loginData: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/user/login", loginData);
  return response.data;
};
export const loginUserNumber = async (loginData: {
  phone: string;
  password: string;
}) => {
  const response = await axiosInstance.post(
    "/auth/user/phone/login",
    loginData
  );
  return response.data;
};

export const resetPassword = async (verificationData: {
  email: string;
  // otp: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await axiosInstance.post(
    "/auth/email/reset/passsword",
    verificationData
  );
  return response.data;
};
export const getUser = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};
export const updateUserName = async (firstname: string, lastname: string) => {
  const response = await axiosInstance.put("/users/name", {
    firstname,
    lastname,
  });
  return response.data;
};
export const updateUserEmail = async (email: string) => {
  const response = await axiosInstance.put("/users/email", { email });
  return response.data;
};
export const updateUserDob = async (dob: string) => {
  const response = await axiosInstance.put("/users/dob", { dob });
  return response.data;
};

export const getAllCategories = async (
  page: number = 1,
  limit: number = 30
) => {
  const response = await axiosInstance.get("user/product/category", {
    params: {
      page,
      limit,
    },
  });
  return response.data;
};
export const getSingleCategory = async (categoryId: string) => {
  const response = await axiosInstance.get(`/user/product/category/single`, {
    params: {
      categoryId: categoryId, // This will be appended to the URL as a query parameter
    },
  });
  return response.data; // Assuming the response data contains the category details
};
export const searchCategories = async (searchTerm: string) => {
  const response = await axiosInstance.get(`/user/product/category/search`, {
    params: {
      search: searchTerm, // This will be appended to the URL as a query parameter
    },
  });
  return response.data; // Assuming the response data contains the list of matching categories
};
export const getAllProducts = async (page: number = 1, limit: number = 20) => {
  const response = await axiosInstance.get("user/product", {
    params: {
      page,
      limit,
    },
  });
  return response.data; // Assuming the response data contains the list of products
};
export const getSingleProduct = async (productId: string) => {
  const response = await axiosInstance.get(`/user/product/single`, {
    params: {
      productId: productId, // This will be appended to the URL as a query parameter
    },
  });
  return response.data; // Assuming the response data contains the product details
};
export const searchProducts = async (searchTerm: string) => {
  const response = await axiosInstance.get(`/user/product/search`, {
    params: {
      search: searchTerm, // This will be appended to the URL as a query parameter
    },
  });
  return response.data; // Assuming the response data contains the list of matching products
};
