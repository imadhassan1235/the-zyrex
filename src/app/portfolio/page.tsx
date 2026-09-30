import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected projects and digital work by The Zyrex.",
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function PortfolioPage() {
  const projects = await prisma.portfolioProject.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    select: {
      title: true,
      slug: true,
      shortDescription: true,
      description: true,
      clientName: true,
      featured: true,
    },
  });

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Selected work
        </p>

        <div className="mt-4 flex flex-col justify-between gap-5 border-b border-line pb-8 md:flex-row md:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
            Ideas turned into impact.
          </h1>
          <p className="max-w-md text-sm leading-7 text-muted">
            Explore selected projects built through strategy, technology, and
            creative work.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group flex min-h-64 flex-col border border-line p-6 transition-colors hover:border-foreground sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {project.featured && (
                    <span className="border border-line px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-dark-gray">
                      Featured
                    </span>
                  )}
                </div>

                {project.clientName && (
                  <p className="mt-8 text-xs uppercase tracking-[0.14em] text-muted">
                    {project.clientName}
                  </p>
                )}

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {project.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {project.shortDescription ??
                    project.description ??
                    "Explore this project by The Zyrex."}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  View project
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
            Published projects will appear here.
          </p>
        )}
      </section>
    </main>
  );
}