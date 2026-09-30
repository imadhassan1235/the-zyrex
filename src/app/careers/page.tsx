import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and join The Zyrex team.",
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function CareersPage() {
  const jobs = await prisma.jobPosition.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    select: {
      title: true,
      slug: true,
      department: true,
      location: true,
      employmentType: true,
      description: true,
    },
  });

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Careers at The Zyrex
        </p>

        <div className="mt-4 flex flex-col justify-between gap-5 border-b border-line pb-8 md:flex-row md:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
            Do meaningful work with us.
          </h1>
          <p className="max-w-md text-sm leading-7 text-muted">
            Explore open roles and find an opportunity to learn, contribute,
            and grow with The Zyrex.
          </p>
        </div>

        {jobs.length > 0 ? (
          <div className="mt-8 grid gap-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex flex-col gap-6 border border-line p-6 transition-colors hover:border-foreground sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted">
                    {[job.department, job.location, job.employmentType]
                      .filter(Boolean)
                      .map((detail) => (
                        <span
                          key={detail}
                          className="border border-line px-2.5 py-1"
                        >
                          {detail}
                        </span>
                      ))}
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                    {job.title}
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                    {job.description}
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold">
                  View role
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-10 border border-line p-8 text-sm text-muted">
            There are no open roles right now. Please check back later.
          </p>
        )}
      </section>
    </main>
  );
}