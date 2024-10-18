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
