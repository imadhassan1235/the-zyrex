import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how The Zyrex brings technology, creativity, digital business, and practical education together.",
};

export default function AboutPage() {
  return (
    <>
     

      <main className="flex-1">
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            About The Zyrex
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Where skills meet solutions.
            </h1>

            <p className="max-w-xl text-base leading-8 text-dark-gray sm:text-lg">
              The Zyrex brings technology, creativity, digital business, and
              practical learning together—supporting businesses with digital
              solutions and helping people build useful skills.
            </p>
          </div>

          <div className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2 lg:mt-20">
            <article className="bg-light-gray p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                For businesses
              </p>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                Build and grow your digital presence.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                Explore services across websites and applications, software,
                AI and automation, e-commerce, marketing, and creative work.
              </p>
              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore services <span aria-hidden="true">↗</span>
              </Link>
            </article>

            <article className="bg-foreground p-7 text-background sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                For learners
              </p>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-background">
                Learn skills through practical work.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                The Zyrex Academy focuses on practical skills, projects,
                internships, and pathways toward career opportunities.
              </p>
              <Link
                href="/#academy"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-background"
              >
                Explore the Academy <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              How it connects
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              One platform. Paths for building, growing, and learning.
            </h2>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Build", "Create digital products and business solutions."],
                ["02", "Grow", "Strengthen your online presence and operations."],
                ["03", "Learn", "Develop practical skills for future opportunities."],
              ].map(([number, title, description]) => (
                <article key={number} className="border border-line p-6">
                  <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {number}
                  </span>
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              The Zyrex
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
              Learn. Earn. Grow.
            </h2>
          </div>
          <Link
            href="/#audience"
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-graphite"
          >
            Find your path <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      
    </>
  );
}