import RegistrationPage from "@/components/auth/registration-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register",
};

export default function RegisterPage() {
  return <RegistrationPage />;
}
