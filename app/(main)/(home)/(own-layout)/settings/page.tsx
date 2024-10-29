import Settings from "@/components/settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings",
};

export default async function SettingsPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <>
      <Settings />
    </>
  );
}
