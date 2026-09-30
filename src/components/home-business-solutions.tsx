import Link from "next/link";

type IconName = "terminal" | "robot" | "growth" | "commerce" | "creative";

const solutions: {
  cluster: string;
  title: string;
  description: string;
  tags: string[];
  icon: IconName;
  iconStyle: string;
  size: string;
}[] = [
  {
    cluster: "Cluster 01 / Core Engineering",
    title: "Full Stack Development & App Development",
    description:
      "Architecting fault-tolerant web applications, responsive APIs, and cross-platform native iOS & Android systems powered by modern stacks (React, Next.js, Node, Flutter).",
    tags: [
      "Full Stack Development",
      "App Development",
      "Cloud Infrastructure",
    ],
    icon: "terminal",
    iconStyle: "bg-primary text-on-primary",
    size: "lg:col-span-7",
  },
  {
    cluster: "Cluster 02 / Intelligence",
    title: "AI Automation / Python & Machine Learning",
    description:
      "Autonomous workflows, custom neural models, predictive analytical engines, and end-to-end Python pipeline integration designed to eliminate friction.",
    tags: ["AI Automation / Python", "Machine Learning"],
    icon: "robot",
    iconStyle: "bg-tertiary text-on-tertiary",
    size: "lg:col-span-5",
  },
  {
    cluster: "",
    title: "Digital Marketing, Google Ads & SEO",
    description:
      "Algorithm-calibrated organic search, Google PPC campaigns, and conversion funnel optimization.",
    tags: ["Digital Marketing", "SEO", "Google Ads"],
    icon: "growth",
    iconStyle: "bg-primary-fixed text-on-primary-fixed",
    size: "lg:col-span-4",
  },
  {
    cluster: "",
    title: "E-Commerce, Shopify & WordPress",
    description:
      "High-converting commerce storefronts, custom Shopify themes, and robust WordPress deployments with seamless checkout.",
    tags: ["E-Commerce", "Shopify Development", "WordPress Development"],
    icon: "commerce",
    iconStyle: "bg-secondary-fixed text-on-secondary-fixed",
    size: "lg:col-span-4",
  },
  {
    cluster: "",
    title: "Creative Production & Monetization",
    description:
      "Visual identity design, commercial video editing, social media management, and online monetization solutions.",
    tags: [
      "Graphic Designing",
      "Video Editing",
      "Social Media Marketing",
      "Online Earning",
    ],
    icon: "creative",
    iconStyle: "bg-tertiary-fixed text-on-tertiary-fixed",
    size: "lg:col-span-4",
  },
];

function CapabilityIcon({ name }: { name: IconName }) {
  const icon = {
    terminal: (
      <>
        <path d="m7 8-4 4 4 4" />
        <path d="M13 16h8" />
      </>
    ),
    robot: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="3" />
        <path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" />
      </>
    ),
    growth: (
      <>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
    commerce: (
      <>
        <path d="M3 3h2l2.4 11.4a2 2 0 0 0 2 1.6H18a2 2 0 0 0 2-1.6L22 8H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </>
    ),
    creative: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.3-3h1.1A4.9 4.9 0 0 0 22 9.8C22 6 17.5 3 12 3Z" />
        <path d="M7.5 10h.01M10 6.5h.01M15 6.5h.01" />
      </>
    ),
  }[name];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {icon}
    </svg>
  );
}

export function HomeBusinessSolutions() {
  return (
    <section className="w-full bg-surface py-24 lg:py-36" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-8 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-secondary-container">
              Industrial Capabilities
            </div>

            <h2 className="text-4xl font-black uppercase leading-[1.02] tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
              Creative &amp; Engineering Solutions
            </h2>

            <p className="mt-4 text-lg font-normal text-on-surface-variant">
              End-to-end digital capabilities powering high-growth startups and
              established brands.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-inverse-surface px-8 py-4 text-sm font-bold tracking-tight text-inverse-on-surface shadow-sm transition-colors hover:bg-on-surface"
          >
            <span>Explore Services</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className={`${solution.size} flex flex-col justify-between rounded-3xl bg-surface-container p-8 shadow-sm transition-shadow hover:shadow-md lg:p-10`}
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${solution.iconStyle}`}
                  >
                    <CapabilityIcon name={solution.icon} />
                  </span>

                  {solution.cluster && (
                    <span className="font-mono text-xs uppercase tracking-widest text-outline">
                      {solution.cluster}
                    </span>
                  )}
                </div>

                <h3
                  className={`mb-4 font-bold tracking-tight text-on-surface ${
                    index < 2
                      ? "text-2xl sm:text-3xl"
                      : "text-xl"
                  }`}
                >
                  {solution.title}
                </h3>

                <p
                  className={`mb-6 leading-relaxed text-on-surface-variant ${
                    index < 2 ? "text-base" : "text-sm"
                  }`}
                >
                  {solution.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-surface-container-lowest px-3 py-1.5 text-xs font-semibold text-on-surface shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}