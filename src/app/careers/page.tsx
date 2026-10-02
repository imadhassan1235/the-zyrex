import type { Metadata } from "next";
import { CareersPageClient } from "@/components/careers-page-client";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore career opportunities and join The Zyrex team.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}