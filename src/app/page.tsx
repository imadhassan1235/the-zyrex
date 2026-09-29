import Link from "next/link";

const serviceGroups = [
  {
    title: "Technology",
    description: "Digital products and software built around your requirements.",
    services: [
      "Full-Stack Development",
      "Mobile App Development",
      "Python Development",
      "AI Automation",
      "Machine Learning",
    ],
  },
  {
    title: "Digital Growth",
    description: "Practical ways to improve how people find your business online.",
    services: [
      "Digital Marketing",
      "SEO",
      "Social Media Marketing",
      "Google Ads",
    ],
  },
  {
    title: "Commerce",
    description: "Online stores and platforms for selling products and services.",
    services: ["E-commerce", "Shopify Development", "WordPress Development"],
  },
  {
    title: "Creative",
    description: "Visual content that helps communicate your brand and ideas.",
    services: ["Graphic Design", "Video Production"],
  },
];

const audiencePaths = [
  {
    number: "01",
    title: "I want to build something",
    description:
      "Explore websites, applications, software, and automation for your next idea.",
    href: "#services",
  },
  {
    number: "02",
    title: "I want to grow my business",
    description:
      "Find digital, creative, and commerce services for your business needs.",
    href: "#services",
  },
  {
    number: "03",
    title: "I want to learn a skill",
    description:
      "Discover practical learning and career pathways through The Zyrex Academy.",
    href: "#academy",
  },
];

export default function Home() {
  return (
    <>
      

      <main id="home" className="flex-1">
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-28">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Technology · Creativity · Learning
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Where skills meet solutions.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-dark-gray sm:text-lg">
              The Zyrex brings technology, creativity, digital business, and
              practical learning together. Find the right path for your business
              or your next skill.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#services"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-graphite"
              >
                Explore services <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="#academy"
                className="inline-flex min-h-12 items-center justify-center border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
              >
                Explore the Academy
              </Link>
            </div>

            <p className="mt-8 text-sm font-medium tracking-wide text-muted">
              Learn. Earn. Grow.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="relative min-h-[340px] overflow-hidden bg-graphite p-8 text-background sm:min-h-[440px] sm:p-12"
          >
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />
            <div className="absolute -right-20 -top-20 size-72 rounded-full border border-white/20 sm:size-96" />
            <div className="absolute -bottom-32 -left-16 size-72 rotate-45 border border-white/20 sm:size-96" />
            <div className="absolute right-10 top-12 size-28 rotate-12 border border-white/40 sm:right-16 sm:top-16 sm:size-40" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between sm:min-h-[340px]">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">
                The Zyrex
              </span>
              <span className="text-[7rem] font-semibold leading-none tracking-[-0.12em] sm:text-[10rem]">
                TZ
              </span>
              <span className="max-w-xs text-sm leading-6 text-white/70">
                Technology and creativity for businesses. Practical learning
                for people.
              </span>
            </div>
          </div>
        </section>

        <section id="audience" className="border-y border-line bg-light-gray">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="mb-9 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Start here
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                What brings you to The Zyrex?
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {audiencePaths.map((path) => (
                <Link
                  key={path.number}
                  href={path.href}
                  className="group border border-line bg-background p-6 transition-colors hover:border-foreground sm:p-8"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {path.number}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">
                    {path.title}
                  </h3>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-muted">
                    {path.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between gap-5 border-b border-line pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Business solutions
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                What we build. What we grow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Explore services across technology, digital growth, commerce, and
              creative work.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceGroups.map((group, index) => (
              <article
                key={group.title}
                className="border border-line p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                      {group.title}
                    </h3>
                  </div>
                  <span aria-hidden="true" className="text-xl text-muted">
                    ↗
                  </span>
                </div>

                <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                  {group.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.services.map((service) => (
                    <li
                      key={service}
                      className="border border-line bg-light-gray px-3 py-2 text-xs font-medium text-dark-gray"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-foreground text-background">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                About The Zyrex
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                One place for digital solutions and practical learning.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-white/70">
                The Zyrex connects technology, creativity, digital business,
                and education. Businesses can explore services for their ideas;
                learners can find practical paths to build new skills.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.14em] text-white/65">
                <span className="border border-white/20 px-3 py-2">Technology</span>
                <span className="border border-white/20 px-3 py-2">Creativity</span>
                <span className="border border-white/20 px-3 py-2">Education</span>
              </div>
            </div>
          </div>
        </section>

        <section id="academy" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 border border-line p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                The Zyrex Academy
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Learn practical skills. Build your next opportunity.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                Explore learning paths designed around practical skills,
                projects, internships, and career development.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-graphite"
            >
              Explore learning <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-light-gray">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Start a conversation
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Tell us what you want to build or learn.
              </h2>
            </div>
            <Link
              href="#audience"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-foreground px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              Find your path <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

  
    </>
  );
}