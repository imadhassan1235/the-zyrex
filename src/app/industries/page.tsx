import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Explore digital solutions for healthcare, e-commerce, education, real estate, restaurants, and finance.",
};

const industries = [
  {
    number: "01",
    name: "Healthcare",
    description:
      "Explore digital experiences and tools shaped around healthcare services and their audiences.",
  },
  {
    number: "02",
    name: "E-commerce",
    description:
      "Consider storefronts, customer journeys, and digital growth for online commerce.",
  },
  {
    number: "03",
    name: "Education",
    description:
      "Explore learning platforms and digital experiences for education and training.",
  },
  {
    number: "04",
    name: "Real Estate",
    description:
      "Consider digital experiences for property discovery and real estate services.",
  },
  {
    number: "05",
    name: "Restaurants",
    description:
      "Explore digital presence and customer experiences for restaurant businesses.",
  },
  {
    number: "06",
    name: "Finance",
    description:
      "Consider clear digital experiences for financial services and their customers.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Industries
        </p>

        <div className="mt-5 grid gap-8 border-b border-line pb-9 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
            Solutions shaped around your industry.
          </h1>
          <p className="max-w-xl text-base leading-8 text-dark-gray">
            Different industries bring different needs. Explore these starting
            points and tell us what your organization is working toward.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="flex min-h-64 flex-col border border-line p-6 sm:p-7"
            >
              <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                {industry.number}
              </span>

              <h2 className="mt-9 text-2xl font-semibold tracking-[-0.04em]">
                {industry.name}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {industry.description}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Discuss your needs <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-light-gray">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Have a different industry in mind?
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Let’s start with the problem you want to solve.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-graphite"
          >
            Explore services <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}