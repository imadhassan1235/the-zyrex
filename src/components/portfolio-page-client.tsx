"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  filters: string[];
  liveUrl: string;
};

const featuredProject: Project = {
  title: "Bayt Design",
  category: "E-Commerce / Architecture",
  description:
    "High-end interior design and custom furniture commerce platform tailored with fluid visual grids, bespoke typography, and an ultra-responsive layout.",
  tags: ["Next.js", "Tailwind CSS", "Headless Architecture", "Stripe API"],
  image: "/assets/zyrex-brand-detail.webp",
  imageAlt: "Design materials and digital commerce concept",
  filters: ["websites", "ecommerce"],
  liveUrl: "https://bayt-design.ie/",
};

const projects: Project[] = [
  {
    title: "Lifecare (UAE)",
    category: "Healthcare & Clinical",
    description:
      "Enterprise-grade healthcare presence and patient engagement infrastructure, including practitioner directories and integrated scheduling.",
    tags: ["Enterprise Architecture", "Patient Portal", "Healthcare"],
    image: "/assets/zyrex-portfolio-web.webp",
    imageAlt: "Healthcare website and digital platform",
    filters: ["websites", "web-apps", "crm", "healthcare"],
    liveUrl: "https://lifecare.ae/",
  },
  {
    title: "PowBank",
    category: "Energy & CleanTech",
    description:
      "A technology portal for sustainable mobile energy systems, with product information, telemetry, and a product configurator.",
    tags: ["IoT Telemetry", "Vue", "Nuxt"],
    image: "/assets/zyrex-technology-mobile.webp",
    imageAlt: "Mobile technology dashboard",
    filters: ["websites", "web-apps", "tools"],
    liveUrl: "https://powbank.nl/",
  },
  {
    title: "MASP Group",
    category: "Corporate & Industry",
    description:
      "A multi-brand corporate portal with international branch management, partner pipelines, and compliance governance.",
    tags: ["Multi-tenant CMS", "Enterprise Security"],
    image: "/assets/zyrex-brand-statement.webp",
    imageAlt: "Corporate architecture and digital brand experience",
    filters: ["websites", "crm"],
    liveUrl: "https://maspgroup.com/",
  },
  {
    title: "Get WP Tools",
    category: "Developer Utility",
    description:
      "A software utility engine for automated diagnostics, speed audits, and plugin compatibility checks.",
    tags: ["Plugin Architecture", "REST API"],
    image: "/assets/zyrex-mockup-saas-dashboard-01.jpg",
    imageAlt: "Software dashboard interface",
    filters: ["tools", "web-apps"],
    liveUrl: "http://getwptools.com/",
  },
  {
    title: "WP Tools Kit",
    category: "SaaS Suite",
    description:
      "A toolkit for digital agencies managing multiple client sites, with centralized health updates and maintenance tools.",
    tags: ["Headless CMS", "Agency Tools"],
    image: "/assets/zyrex-technology-software-architecture-01.jpg",
    imageAlt: "Software architecture system",
    filters: ["tools", "web-apps"],
    liveUrl: "https://wptoolskit.com/",
  },
  {
    title: "Smart Earn Lab",
    category: "EdTech & Monetization",
    description:
      "A digital academy and student performance dashboard for online learning, certifications, and progress analytics.",
    tags: ["LMS Dashboard", "Video Delivery CDN", "Payments"],
    image: "/assets/zyrex-academy-learning.webp",
    imageAlt: "Digital learning environment",
    filters: ["web-apps", "websites"],
    liveUrl: "https://smartearnlab.com/",
  },
  {
    title: "Marhold Space",
    category: "Spatial Architecture",
    description:
      "An architectural showcase with editorial typography, material galleries, and a focus on spatial design.",
    tags: ["WebGL", "Canvas", "Responsive 3D"],
    image: "/assets/zyrex-brand-hero-01.jpg",
    imageAlt: "Architectural space and design",
    filters: ["websites", "creative"],
    liveUrl: "https://www.marhold.space/",
  },
  {
    title: "Aimsish",
    category: "Digital Platform",
    description:
      "A customer-facing digital platform focused on intuitive interfaces, inquiry flows, and modern visual branding.",
    tags: ["Cloud Hosting", "Responsive UI"],
    image: "/assets/zyrex-portfolio-website-showcase-01.jpg",
    imageAlt: "Responsive website design",
    filters: ["websites", "web-apps"],
    liveUrl: "https://aimsish.com/",
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Web Applications", value: "web-apps" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "CRM & POS", value: "crm" },
  { label: "Software & Tools", value: "tools" },
  { label: "Creative / Video", value: "creative" },
  { label: "Healthcare & Clinical", value: "healthcare" },
];

const disciplines = [
  {
    number: "01",
    title: "Websites & Web Portals",
    description:
      "Custom responsive platforms engineered for speed, search, and modern design standards.",
  },
  {
    number: "02",
    title: "Web Applications & SaaS",
    description:
      "Dashboard architecture, cloud databases, role-based workflows, and client portals.",
  },
  {
    number: "03",
    title: "E-Commerce Platforms",
    description:
      "Headless Shopify, WooCommerce, and checkout experiences designed for conversion.",
  },
  {
    number: "04",
    title: "CRM & POS Systems",
    description:
      "Customer relationship and point-of-sale platforms connecting retail with cloud accounting.",
  },
  {
    number: "05",
    title: "Video Production & 3D Motion",
    description:
      "Cinematic commercials, documentaries, social video, and CGI assets.",
  },
  {
    number: "06",
    title: "AI Solutions & Digital Growth",
    description:
      "Automation, customer support tools, data workflows, and digital acquisition.",
  },
];

const industries = [
  "Healthcare",
  "Banking & Fintech",
  "Restaurant & Hospitality",
  "E-Commerce & Retail",
  "EV & CleanTech",
  "SaaS & Software",
  "Travel & Tourism",
  "Media & Entertainment",
  "On-Demand Services",
  "Social Media & Creator",
  "Transportation & Logistics",
  "Education & LMS",
  "Real Estate & Spatial",
  "Telecommunications",
  "Oil & Gas",
  "Automotive",
  "Insurance",
  "Manufacturing",
  "Agriculture",
  "Fitness & Wellness",
  "Consultants & Legal",
  "Medical Billing",
];

const media = [
  {
    type: "Cinematic Commercial",
    duration: "02:14",
    title: "High-Production Tech Brand Spot",
    description:
      "A full visual treatment with camera direction, color grading, and sound design for a global technology rollout.",
    image: "/assets/Cinematic Camera Operator on Set.png",
    alt: "Cinematic commercial being filmed",
  },
  {
    type: "Brand Documentary",
    duration: "03:45",
    title: "Bespoke Artisan & Architectural Case",
    description:
      "Material finishes, architectural details, and craft storytelling for a premium client experience.",
    image: "/assets/zyrex-creative-studio.webp",
    alt: "Creative studio developing a brand story",
  },
  {
    type: "3D Product Reel",
    duration: "01:30",
    title: "Tactile Packaging & Material Motion",
    description:
      "Motion sequences highlighting luxury unboxing, print finishes, and digital brand assets.",
    image: "/assets/zyrex-card-creative.webp",
    alt: "Creative brand materials and packaging",
  },
];

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <section
        aria-labelledby="project-modal-title"
        aria-modal="true"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-outline-variant/50 bg-background p-6 text-foreground shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button
          aria-label="Close project details"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition hover:bg-surface-container"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <p className="pr-10 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {project.category}
        </p>
        <h2
          className="mt-3 pr-10 text-3xl font-semibold tracking-tight text-on-surface"
          id="project-modal-title"
        >
          {project.title}
        </h2>
        <p className="mt-5 leading-7 text-on-surface-variant">
          {project.description}
        </p>

        <h3 className="mt-8 text-sm font-semibold text-on-surface">
          Technologies & Architecture
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              className="rounded-full border border-outline-variant/50 bg-surface-container px-3 py-1.5 text-xs text-on-surface-variant"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-inverse-surface px-5 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
          href={project.liveUrl}
          rel="noreferrer"
          target="_blank"
        >
          Visit live project <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}

export function PortfolioPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <>
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-outline-variant/30 bg-subtle-grid px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Selected Work & Archive
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-on-surface sm:text-6xl lg:text-7xl">
                Ideas Into Digital Experiences.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-on-surface-variant">
                Explore websites, software solutions, e-commerce platforms,
                CRM systems, POS solutions, creative projects, and digital
                experiences built by The Zyrex.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
                  href="/contact"
                >
                  Start a Project
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-6 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
                  href="#selected-work"
                >
                  Explore Selected Work
                </a>
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[390px]">
              <Image
                alt="Digital project portfolio showcase"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/assets/zyrex-portfolio-web.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-[0.18em] text-white/80">
                The Zyrex · Selected Work
              </p>
            </div>
          </div>
        </section>

        <section
          aria-label="Experience Metrics"
          className="border-b border-outline-variant/30 bg-surface-container-low py-10"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
            {[
              ["60+", "Live Websites Built"],
              ["CRM", "Enterprise Systems"],
              ["POS", "Point of Sale Deployed"],
              ["50+", "Edited Videos & Films"],
            ].map(([value, label]) => (
              <div className="border-l border-outline-variant/50 pl-5" key={label}>
                <p className="font-mono text-3xl font-semibold text-on-surface">
                  {value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-on-surface-variant">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-outline-variant/30 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-low lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[300px] lg:min-h-[420px]">
              <Image
                alt={featuredProject.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={featuredProject.image}
              />
              <span className="absolute left-5 top-5 rounded-full bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white">
                Spotlight / 01
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Commerce Architecture & Interiors
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
                {featuredProject.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                A high-performance digital presence and tailored commerce
                platform engineered for a luxury interior design firm. It
                combines spatial visuals, fast catalog navigation, and
                architectural storytelling.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    className="rounded-full border border-outline-variant/50 px-3 py-1.5 text-xs text-on-surface-variant"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-inverse-surface px-5 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
                  href={featuredProject.liveUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  View Live Project <span aria-hidden="true">↗</span>
                </a>
                <button
                  className="rounded-full border border-outline-variant px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
                  onClick={() => setSelectedProject(featuredProject)}
                  type="button"
                >
                  Quick Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
          id="selected-work"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Catalogue of Deployments
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-on-surface sm:text-5xl">
              Selected Work.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">
              A curated selection of digital products, websites, software
              engines, and platforms developed by The Zyrex.
            </p>

            <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  aria-pressed={activeFilter === filter.value}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    activeFilter === filter.value
                      ? "border-inverse-surface bg-inverse-surface text-inverse-on-surface"
                      : "border-outline-variant/50 text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  type="button"
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project) => (
                <article
                  className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest transition duration-300 hover:-translate-y-1 hover:border-primary/50"
                  key={project.title}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      alt={project.imageAlt}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-semibold text-on-surface">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-on-surface-variant">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          className="rounded-full border border-outline-variant/40 bg-surface-container-low px-2.5 py-1 text-[11px] text-on-surface-variant"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-outline-variant/40 pt-4">
                      <a
                        className="text-xs font-semibold text-on-surface-variant transition hover:text-primary"
                        href={project.liveUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Visit Live Site ↗
                      </a>
                      <button
                        className="text-xs font-semibold text-on-surface-variant transition hover:text-primary"
                        onClick={() => setSelectedProject(project)}
                        type="button"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/30 bg-surface-container-low px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Visual Storytelling & Production
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
                  50+ Edited Videos & Creative Media.
                </h2>
              </div>
              <p className="max-w-2xl leading-7 text-on-surface-variant">
                High-grade cinematography, 3D motion graphics, brand
                commercials, and social growth content produced by The Zyrex
                media team.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {media.map((item) => (
                <article
                  className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest"
                  key={item.title}
                >
                  <div className="relative h-48">
                    <Image
                      alt={item.alt}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      src={item.image}
                    />
                    <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 font-mono text-xs text-white">
                      {item.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.type}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-on-surface">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant/30 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
              Digital Work Types We Deliver.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {disciplines.map((item) => (
                <article
                  className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 transition-colors hover:bg-surface-container-low"
                  key={item.number}
                >
                  <span className="font-mono text-xs text-primary">
                    {item.number}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {item.description}
                  </p>
                  <span aria-hidden="true" className="mt-5 block text-primary">
                    →
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Multi-Disciplinary Impact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
              Industries We Work Across.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">
              We adapt technology architecture and creative strategies across
              industries worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span
                  className="rounded-full border border-outline-variant/50 bg-surface-container-lowest px-4 py-2 text-xs text-on-surface-variant"
                  key={industry}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-outline-variant/40 bg-surface-container-low p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Initiate Collaboration
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">
                Let’s turn your idea into a digital experience with technical
                precision and thoughtful design.
              </p>
            </div>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
              href="/contact"
            >
              Start a Project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <ProjectDetailsModal
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}