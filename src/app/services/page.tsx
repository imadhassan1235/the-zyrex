const services = [
  {
    title: "AI Automation",
    description:
      "End-to-end autonomous agentic systems, enterprise process automation, and intelligent pipelines built for high throughput.",
    tags: ["Autonomous Agents", "LLM Chains", "RPA"],
    image: "/assets/zyrex-ai-automation-workflow-01.jpg",
    alt: "AI Automation Workflow Visual Graph",
  },
  {
    title: "Full-Stack Development",
    description:
      "Scalable cloud-native platforms, resilient microservices, high-concurrency API backends, and responsive client architectures.",
    tags: ["Cloud Native", "Next.js / Node", "PostgreSQL"],
    image: "/assets/zyrex-technology-software-architecture-01.jpg",
    alt: "Full-Stack System Architecture Diagram",
  },
  {
    title: "Machine Learning",
    description:
      "Bespoke predictive neural models, computer vision classifiers, customized embeddings, and lightweight edge deployments.",
    tags: ["PyTorch", "Computer Vision", "Edge AI"],
    image: "/assets/zyrex-ai-automation.webp",
    alt: "Machine Learning Multidimensional Interfaces",
  },
  {
    title: "Mobile App Development",
    description:
      "Native iOS & Android experiences and cross-platform Flutter/React Native builds with fluid 120fps interactions and offline caching.",
    tags: ["iOS Swift", "React Native", "Flutter"],
    image: "/assets/zyrex-technology-mobile.webp",
    alt: "Mobile App Development and Realtime Dashboard",
  },
  {
    title: "Digital Marketing & Growth",
    description:
      "Data-backed customer acquisition funnels, conversion rate optimization (CRO), multi-touch attribution, and ROI scaling.",
    tags: ["Growth Funnels", "CRO", "Analytics", "Paid Media"],
    image: "/assets/zyrex-digital-growth-analytics-01.jpg",
    alt: "Digital Marketing Analytics and Optimization",
  },
  {
    title: "Graphic & Brand Design",
    description:
      "Design systems, typographic identity, premium packaging, 3D motion elements, and luxury digital design frameworks.",
    tags: ["Brand Systems", "Typography", "Art Direction"],
    image: "/assets/zyrex-creative-design-system-01.jpg",
    alt: "Creative Studio Design Craftsmanship",
  },
  {
    title: "AI Integration & Advisory",
    description:
      "Hands-on engineering for legacy modernizations, private vector databases, customized copilots, and executive intelligence roadmaps.",
    tags: ["RAG Pipelines", "Vector DBs", "Enterprise Audit"],
    image: "/assets/zyrex-ai-automation.webp",
    alt: "Executive AI Integration Strategy",
  },
  {
    title: "Python Development",
    description:
      "High-throughput asynchronous backends, FastAPIs, automated data scraping pipelines, and computational scientific computing.",
    tags: ["FastAPI", "Celery", "Pandas"],
    image: "/assets/zyrex-technology-development.webp",
    alt: "Python Development Workspace",
  },
  {
    title: "E-commerce Solutions",
    description:
      "High-conversion international checkout flows, omni-channel inventory sync, headless commerce backends, and Stripe integrations.",
    tags: ["Headless Cart", "Stripe API", "Global Tax"],
    image: "/assets/zyrex-ecommerce.webp",
    alt: "E-Commerce Solutions Workspace",
  },
  {
    title: "SEO & Search Dominance",
    description:
      "Algorithmic crawl optimization, structured JSON-LD schemas, Core Web Vitals speed acceleration, and authoritative digital PR.",
    tags: ["Core Web Vitals", "Schema Graph", "Semantic SERP"],
    image: "/assets/zyrex-digital-growth-analytics-01.jpg",
    alt: "SEO and Search Dominance Workspace",
  },
  {
    title: "Shopify Development",
    description:
      "Liquid & Hydrogen storefronts, custom checkout extensions, private Shopify apps, and frictionless ERP warehouse synchronizations.",
    tags: ["Shopify Plus", "Hydrogen", "Checkout UI"],
    image: "/assets/zyrex-ecommerce-storefront-01.jpg",
    alt: "Shopify Development Workspace",
  },
  {
    title: "Google Ads & Performance",
    description:
      "Performance Max campaign mastery, high-intent search capture, negative keyword fencing, and profit-first ROAS tracking.",
    tags: ["Search Intent", "Performance Max", "ROAS Scale"],
    image: "/assets/zyrex-digital-growth-analytics-01.jpg",
    alt: "Google Ads & Performance Workspace",
  },
  {
    title: "Video Production",
    description:
      "Cinematic brand documentaries, 4K product showcases, high-tempo social clips, color grading, and broadcast motion design.",
    tags: ["Cinematography", "Sound Design", "VFX"],
    image: "/assets/zyrex-creative-studio.webp",
    alt: "Cinematic Video Production",
  },
  {
    title: "WordPress & Headless CMS",
    description:
      "Custom Gutenberg block suites, WPGraphQL architectures, enterprise security shielding, and frictionless editorial authoring.",
    tags: ["Headless WP", "WPGraphQL", "Hardened Security"],
    image: "/assets/zyrex-portfolio-website-showcase-01.jpg",
    alt: "WordPress and Headless CMS Workspace",
  },
];

const metrics = [
  {
    value: "99.4%",
    label: "Client Satisfaction",
    detail: "Rigorous code quality & SLA adherence",
  },
  {
    value: "40+",
    label: "Enterprise Deployments",
    detail: "Autonomous systems & cloud scale",
  },
  {
    value: "14",
    label: "Core Disciplines",
    detail: "End-to-end digital lifecycle coverage",
  },
  {
    value: "24/7",
    label: "Continuous Delivery",
    detail: "Distributed technical talent",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page relative z-10">
      <section
        aria-labelledby="hero-heading"
        className="bg-grid-pattern relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-outline-variant/40 bg-surface-container/70 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-ping rounded-full bg-sky-400" />
            <span className="-ml-4 h-2 w-2 rounded-full bg-sky-400" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest sp-muted">
              Business Solutions & Innovation
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <h1
                id="hero-heading"
                className="text-4xl font-extrabold leading-[1.08] tracking-tight sp-heading sm:text-6xl md:text-7xl"
              >
                What we build.
                <br />
                <span className="bg-gradient-to-r from-on-surface via-on-surface-variant to-outline bg-clip-text text-transparent">
                  What we grow.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-sm leading-relaxed sp-muted sm:text-base">
                Explore technology, digital growth, commerce, and creative
                services engineered by{" "}
                <strong className="font-semibold sp-heading">The Zyrex</strong>.
                Combining deep technical mastery with refined aesthetic craft.
              </p>
            </div>
          </div>

          <div className="no-scrollbar mt-14 flex items-center gap-2 overflow-x-auto border-t border-outline-variant/30 pb-2 pt-8">
            <button
              className="whitespace-nowrap rounded-lg bg-inverse-surface px-4 py-2 text-xs font-semibold text-inverse-on-surface shadow-sm"
              type="button"
            >
              All Services (14)
            </button>
            {[
              "Technology & AI",
              "Growth & Marketing",
              "Design & Studio",
              "E-commerce & Web",
            ].map((category) => (
              <button
                className="whitespace-nowrap rounded-lg border border-transparent px-4 py-2 text-xs font-medium text-on-surface-variant transition hover:border-outline-variant/40 hover:bg-surface-container hover:text-on-surface"
                key={category}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Services Catalog"
        className="pb-28 pt-6"
        id="services"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                className="glass-card group flex flex-col overflow-hidden rounded-2xl"
                key={service.title}
              >
                <div className="relative h-56 overflow-hidden border-b border-outline-variant/30 bg-surface-container">
                  <img
                    alt={service.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <span className="absolute left-4 top-4 rounded-md border border-sky-500/30 bg-sky-950/80 px-2.5 py-1 font-mono text-xs font-bold text-sky-300 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h2 className="text-xl font-bold sp-heading transition-colors group-hover:sp-accent">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed sp-muted">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          className="rounded border border-outline-variant/30 bg-surface-container-low px-2.5 py-0.5 font-mono text-[11px] text-on-surface-variant"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-outline-variant/30 pt-5">
                    <a
                      className="inline-flex items-center text-xs font-semibold text-on-surface-variant transition-all group-hover:translate-x-1 group-hover:text-on-surface"
                      href="/contact"
                    >
                      Explore service <span className="ml-1">→</span>
                    </a>
                    <a
                      className="text-xs text-on-surface-variant transition hover:text-primary"
                      href="/contact"
                    >
                      Discuss specs
                    </a>
                  </div>
                </div>
              </article>
            ))}

            <article className="glass-card group relative flex flex-col overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent" />
              <div className="relative z-10 flex flex-1 flex-col justify-between p-7">
                <div>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/20 bg-sky-500/[0.06] px-3 py-1.5">
                    <span className="relative h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider sp-accent">
                      Tailored Engagements
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold sp-heading transition-colors group-hover:sp-accent">
                    Need a custom engineering cohort?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed sp-muted">
                    We assemble specialized pods of senior full-stack
                    architects, machine learning engineers, and designers
                    dedicated to your roadmap.
                  </p>
                </div>

                <div className="mt-8 border-t border-outline-variant/40 pt-5">
                  <a
                    className="inline-flex w-full items-center justify-center rounded-xl bg-inverse-surface px-4 py-2.5 text-xs font-semibold text-inverse-on-surface transition-all hover:opacity-90"
                    href="/contact"
                  >
                    Schedule Technical Discovery
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-label="Company Capabilities Overview"
        className="border-y border-outline-variant/30 bg-surface-container-low/80 py-20 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 md:gap-12 lg:px-8">
          {metrics.map((metric) => (
            <div className="border-l border-outline-variant/40 pl-6" key={metric.label}>
              <span className="font-mono text-3xl font-extrabold tracking-tight sp-heading sm:text-4xl">
                {metric.value}
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider sp-muted">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-on-surface-variant">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}