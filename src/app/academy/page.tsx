import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Explore practical learning, projects, internships, and career pathways through The Zyrex Academy.",
};

const pathways = [
  {
    number: "01",
    title: "Courses and training",
    description:
      "Explore IT courses and structured training to build practical skills.",
  },
  {
    number: "02",
    title: "Projects",
    description:
      "Apply what you learn through practical projects and guided work.",
  },
  {
    number: "03",
    title: "Internships",
    description:
      "Explore internship pathways that connect learning with workplace experience.",
  },
  {
    number: "04",
    title: "Career support",
    description:
      "Build toward career opportunities with skill development and practical preparation.",
  },
];

export default function AcademyPage() {
  return (
    <>


      <main className="flex-1">
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              The Zyrex Academy
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl">
              Learn skills for the work ahead.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-dark-gray sm:text-lg">
              Explore practical learning paths built around IT skills,
              projects, internships, and career development.
            </p>
            <Link
              href="#pathways"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-graphite"
            >
              Explore learning paths <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div
            aria-hidden="true"
            className="relative flex min-h-72 items-end overflow-hidden bg-graphite p-8 text-background sm:min-h-96 sm:p-10"
          >
            <div className="absolute -right-16 -top-16 size-64 rounded-full border border-white/25 sm:size-80" />
            <div className="absolute -bottom-24 -left-10 size-64 rotate-45 border border-white/25 sm:size-80" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                The Zyrex
              </p>
              <p className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                Learn.
                <br />
                Earn.
                <br />
                Grow.
              </p>
            </div>
          </div>
        </section>

        <section id="pathways" className="border-y border-line bg-light-gray">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Learning pathways
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Build knowledge by putting it into practice.
            </h2>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pathways.map((pathway) => (
                <article
                  key={pathway.number}
                  className="border border-line bg-background p-6 sm:p-7"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {pathway.number}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {pathway.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Learning with purpose
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Skills connect to real opportunities.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-muted sm:text-base">
              The Academy brings together courses, practical projects,
              internships, and career support. Learners can build skills step
              by step and explore how those skills apply to real work.
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

   
    </>
  );
}