import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas, guides, and perspectives on technology, business, and digital growth from The Zyrex.",
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function InsightsPage() {
  const articles = await prisma.article.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    select: {
      title: true,
      slug: true,
      excerpt: true,
      publishedAt: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          The Zyrex journal
        </p>

        <div className="mt-4 flex flex-col justify-between gap-5 border-b border-line pb-8 md:flex-row md:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
            Ideas for what comes next.
          </h1>
          <p className="max-w-md text-sm leading-7 text-muted">
            Read perspectives and practical guides on technology, digital
            growth, and building better businesses.
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex min-h-64 flex-col border border-line p-6 transition-colors hover:border-foreground sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {article.category && (
                    <span className="text-xs text-muted">
                      {article.category.name}
                    </span>
                  )}
                </div>

                {article.publishedAt && (
                  <p className="mt-8 text-xs uppercase tracking-[0.12em] text-muted">
                    {article.publishedAt.toLocaleDateString("en", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {article.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {article.excerpt ?? "Read this article from The Zyrex."}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Read article
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
            Published articles will appear here.
          </p>
        )}
      </section>
    </main>
  );
}