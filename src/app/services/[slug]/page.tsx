import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function getService(slug: string) {
  return prisma.service.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    select: {
      name: true,
      slug: true,
      shortDescription: true,
      description: true,
      featured: true,
      canonicalUrl: true,
      seoTitle: true,
      seoDescription: true,
      ogImageUrl: true,
    },
  });
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const title = service.seoTitle || `${service.name} | THE ZYREX`;
  const description =
    service.seoDescription ||
    service.shortDescription ||
    `Explore ${service.name} services from The Zyrex.`;

  return {
    title,
    description,
    ...(service.canonicalUrl
      ? { alternates: { canonical: service.canonicalUrl } }
      : {}),
    openGraph: {
      title,
      description,
      type: "website",
      ...(service.ogImageUrl ? { images: [service.ogImageUrl] } : {}),
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const summary =
    service.shortDescription ||
    service.description ||
    `Explore ${service.name} services from The Zyrex.`;

  return (
    <>
      

      <main className="flex-1">
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:py-28">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span className="px-2">/</span>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <span className="px-2">/</span>
              <span className="text-dark-gray">{service.name}</span>
            </nav>

            {service.featured && (
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Featured service
              </p>
            )}

            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              {service.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-dark-gray">
              {summary}
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-graphite"
            >
              Discuss your project <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div
            aria-hidden="true"
            className="relative flex min-h-72 items-end overflow-hidden bg-graphite p-8 text-background sm:min-h-96 sm:p-10"
          >
            <div className="absolute -right-16 -top-16 size-64 rounded-full border border-white/25 sm:size-80" />
            <div className="absolute -bottom-24 -left-10 size-64 rotate-45 border border-white/25 sm:size-80" />
            <div className="relative max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                THE ZYREX
              </p>
              <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Learn. Earn. Grow.
              </p>
            </div>
          </div>
        </section>

        {service.description && (
          <section className="border-y border-line bg-light-gray">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                About this service
              </p>
              <p className="mt-5 max-w-3xl whitespace-pre-line text-base leading-8 text-dark-gray sm:text-lg">
                {service.description}
              </p>
            </div>
          </section>
        )}

        <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="text-sm text-muted">
            Looking for another service?
          </p>
          <Link
            href="/services"
            className="text-sm font-semibold text-foreground underline decoration-line underline-offset-4 hover:decoration-foreground"
          >
            Browse all services
          </Link>
        </section>
      </main>

     
     
    </>
  );
}