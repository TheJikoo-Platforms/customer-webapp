import { Metadata } from "next";
import Vendors from "@/components/vendors";

export const metadata: Metadata = {
  title: "Vendors",
  description: "Vendors",
};

export default async function VendorsPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return <Vendors />;
}
