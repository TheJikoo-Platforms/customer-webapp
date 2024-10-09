import RegistrationFlow from "@/components/auth/registration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register",
};

export default function RegisterPage() {
  return <RegistrationFlow />;
}
