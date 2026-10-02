import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About The Zyrex",
  description:
    "Learn how The Zyrex brings technology, creativity, business solutions, and practical education together.",
};

const capabilities = [
  {
    number: "01",
    title: "Software Company",
    label: "Engineering",
    description:
      "We build digital products, web applications, mobile platforms, and custom software for growing businesses.",
    image: "/assets/zyrex-technology-development.webp",
    alt: "Software development workspace",
    tags: "Next.js · Python · Cloud",
  },
  {
    number: "02",
    title: "IT Company",
    label: "Infrastructure",
    description:
      "We connect business systems with secure architecture, databases, POS, CRM, and workflow automation.",
    image: "/assets/zyrex-technology-software-architecture-01.jpg",
    alt: "Software architecture diagram",
    tags: "Systems · Networks · Data",
  },
  {
    number: "03",
    title: "AI & Automation",
    label: "Intelligence",
    description:
      "We design practical AI integrations and automated workflows that reduce repetitive work.",
    image: "/assets/zyrex-ai-automation-workflow-01.jpg",
    alt: "AI automation workflow",
    tags: "AI · Workflows · Automation",
  },
  {
    number: "04",
    title: "Digital Growth",
    label: "Marketing",
    description:
      "We help brands improve their online presence through strategy, performance marketing, and analytics.",
    image: "/assets/zyrex-digital-growth-analytics-01.jpg",
    alt: "Digital growth analytics dashboard",
    tags: "Strategy · SEO · Analytics",
  },
];

const team = [
  ["AA", "Ahsan Abdullah", "Chief Executive Officer"],
  ["IH", "Imad Hassan", "Engineering"],
  ["AM", "Atta ul Mannan", "Engineering"],
  ["MY", "Muaz Younas", "Design"],
  ["AS", "Adeela Safdar", "Marketing"],
  ["MR", "Mariyam Rasheed", "Marketing"],
];

const stages = [
  ["01", "Understand", "We learn about your goals, users, and technical needs."],
  ["02", "Plan", "We shape the roadmap, milestones, and system architecture."],
  ["03", "Build", "We develop, review, and refine the solution together."],
  ["04", "Launch", "We prepare the product for a reliable release."],
  ["05", "Grow", "We keep improving performance and adding what you need."],
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative border-b border-outline-variant/40">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <div className="relative z-10 lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface-container-low px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
              <span className="h-2 w-2 rounded-full bg-primary" />
              About The Zyrex
            </p>

            <h1 className="mt-8 text-6xl font-black uppercase leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Learn.
              <br />
              <span className="text-on-surface-variant">Create.</span>
              <br />
              Grow.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl">
              The Zyrex brings modern technology, software engineering,
              performance marketing, and practical education together to
              support ambitious businesses and help people build digital skills.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-on-primary transition hover:brightness-110"
              >
                Work with us <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/academy"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-7 text-sm font-semibold transition hover:bg-surface-container"
              >
                Explore the Academy
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container">
              <Image
                src="/assets/zyrex-brand-hero-01.jpg"
                alt="Modern architectural space representing The Zyrex"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/65 p-4 text-white backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/65">
                  Headquarters &amp; expansion
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Faisalabad HQ · Working worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="border-b border-outline-variant/40 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between gap-5 border-b border-outline-variant/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-on-surface-variant">
                Our origin &amp; trajectory
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Built with a purpose.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-on-surface-variant">
              A team bringing digital services and practical technology
              education together under one shared standard.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 text-base leading-8 text-on-surface-variant lg:col-span-7">
              <p>
                <strong className="text-foreground">THE ZYREX</strong> was
                incorporated on <strong className="text-foreground">1 February 2026</strong> in
                Faisalabad, Pakistan, with a goal to bring digital services
                together and make practical technology education more
                accessible.
              </p>
              <p>
                Our foundation draws on more than four years of freelancing and
                digital product work. Before establishing the company, our
                team worked on cloud systems, e-commerce platforms, and digital
                products for clients in different markets.
              </p>
              <p>
                Today, we work with businesses and learners in Pakistan and
                across international markets through a distributed team.
              </p>

              <div className="rounded-xl border border-outline-variant/50 bg-surface-container p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary">
                  Our approach
                </p>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  We bring real project work into our services and use those
                  practical lessons to shape how we teach.
                </p>
              </div>
            </div>

            <aside className="space-y-5 lg:col-span-5">
              <div className="rounded-2xl border border-outline-variant/50 bg-surface-container p-7">
                <h3 className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                  Where we work
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    ["Pakistan", "Faisalabad HQ · Nationwide"],
                    ["United Arab Emirates", "Dubai · Abu Dhabi"],
                    ["Europe", "Remote partnerships"],
                    ["Worldwide", "Distributed client teams"],
                  ].map(([place, detail]) => (
                    <div
                      key={place}
                      className="flex flex-wrap justify-between gap-2 border-b border-outline-variant/40 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-semibold">{place}</span>
                      <span className="text-xs text-on-surface-variant">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="rounded-2xl border border-outline-variant/50 bg-surface-container-high p-7">
                <p className="text-xl font-medium leading-snug">
                  “We engineer digital engines for businesses and create
                  practical paths for people to grow.”
                </p>
                <footer className="mt-5 text-sm text-on-surface-variant">
                  Ahsan Abdullah · CEO, The Zyrex
                </footer>
              </blockquote>
            </aside>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-b border-outline-variant/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-on-surface-variant">
              What The Zyrex does
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              One team. Multiple digital capabilities.
            </h2>
            <p className="mt-4 leading-7 text-on-surface-variant">
              Specialized capabilities working together to help organizations
              build, operate, and grow.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-outline-variant/50 bg-surface-container-low p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/60 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-widest text-on-surface-variant">
                    {item.number} / CAPABILITY
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    {item.label}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 min-h-14 leading-7 text-on-surface-variant">
                  {item.description}
                </p>
                <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-xl bg-surface-container">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-mono text-xs text-white">
                    {item.tags}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/40 bg-surface-container-low">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-on-surface-variant">
              Learn · Earn · Grow
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              The core Zyrex philosophy.
            </h2>
            <p className="mt-5 leading-7 text-on-surface-variant">
              We connect education with real work, and digital solutions with
              the people and businesses that need them.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["LEARN.", "Build practical skills with guidance and hands-on work."],
              ["EARN.", "Turn useful skills into meaningful opportunities."],
              ["GROW.", "Keep improving your work, business, and future."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-xl border border-outline-variant/50 bg-surface-container p-5"
              >
                <h3 className="text-2xl font-black tracking-tight text-primary">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-on-surface-variant">
                Technology &amp; AI
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Building with modern technology.
              </h2>
              <p className="mt-5 leading-7 text-on-surface-variant">
                We choose tools that support speed, reliable delivery, and
                future expansion.
              </p>
              <div className="mt-7 space-y-3">
                {[
                  ["AI Automation & Python", "Intelligent workflows and useful data automation."],
                  ["Next.js & Headless Architecture", "Modern web products and flexible commerce systems."],
                  ["Full Stack & Mobile", "Connected applications, services, and databases."],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-outline-variant/50 bg-surface-container p-4"
                  >
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-on-surface-variant">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container">
              <Image
                src="/assets/zyrex-technology-software-architecture-01.jpg"
                alt="Connected software architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/40 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-on-surface-variant">
            How we work
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">A clear path from idea to growth.</h2>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map(([number, title, body]) => (
              <article
                key={number}
                className="rounded-xl border border-outline-variant/50 bg-surface-container p-5"
              >
                <span className="font-mono text-xs text-primary">STAGE {number}</span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-b border-outline-variant/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-on-surface-variant">
                The people behind the work
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Meet The Zyrex team.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-on-surface-variant">
              A multidisciplinary team working across engineering, design, and
              digital growth.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(([initials, name, role]) => (
              <article
                key={name}
                className="rounded-xl border border-outline-variant/50 bg-surface-container-low p-5"
              >
                <div className="flex h-24 items-end rounded-lg bg-gradient-to-br from-surface-container-high to-surface-container p-4">
                  <span className="font-mono text-4xl font-black text-primary/70">
                    {initials}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{name}</h3>
                <p className="mt-1 text-sm text-on-surface-variant">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Let’s learn, build, and grow together
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            More than a digital company.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-on-surface-variant">
            Whether you need a digital solution or want to develop practical
            technology skills, there’s a path to start with The Zyrex.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-on-primary transition hover:brightness-110"
            >
              Start a project
            </Link>
            <Link
              href="/academy"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-7 text-sm font-semibold transition hover:bg-surface-container"
            >
              Explore Academy
            </Link>
            <Link
              href="/careers"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-7 text-sm font-semibold transition hover:bg-surface-container"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}