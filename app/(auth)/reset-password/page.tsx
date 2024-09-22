import ResetPassword from "@/components/auth/reset-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset Password",
};

export default function ResetPasswordPage() {
  return <ResetPassword />;
}
