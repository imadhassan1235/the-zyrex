import type { Metadata } from "next";
import { PortfolioPageClient } from "@/components/portfolio-page-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected projects and digital work by The Zyrex.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}