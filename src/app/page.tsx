import { HomeAbout } from "@/components/home-about";
import { HomeAcademy } from "@/components/home-academy";
import { HomeAiPreview } from "@/components/home-ai-preview";
import { HomeBusinessSolutions } from "@/components/home-business-solutions";
import { HomeFinalCta } from "@/components/home-final-cta";
import { HomeHero } from "@/components/home-hero";
import { HomeMetrics } from "@/components/home-metrics";
import { HomePathways } from "@/components/home-pathways";
import { HomeWhyZyrex } from "@/components/home-why-zyrex";

export default function Home() {
  return (
    <main id="home" className="flex-1">
      <HomeHero />
      <HomePathways />
      <HomeBusinessSolutions />
      <HomeWhyZyrex />
      <HomeAcademy />
      <HomeMetrics />
      <HomeAbout />
      <HomeAiPreview />
      <HomeFinalCta />
    </main>
  );
}