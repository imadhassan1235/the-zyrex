import type { Metadata } from "next";
import { InsightsPageClient } from "@/components/insights-page-client";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas, guides, and perspectives on technology, business, and digital growth from The Zyrex.",
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}