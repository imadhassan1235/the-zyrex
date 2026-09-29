import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Zyrex about a business project or learning pathway.",
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const leadTypes = ["BUSINESS", "ACADEMY", "GENERAL"] as const;

function readText(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

async function submitContact(formData: FormData) {
  "use server";

  const name = readText(formData, "name");
  const email = readText(formData, "email").toLowerCase();
  const phone = readText(formData, "phone");
  const message = readText(formData, "message");
  const serviceId = readText(formData, "serviceId");
  const leadTypeValue = readText(formData, "leadType");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidLeadType = leadTypes.some((type) => type === leadTypeValue);

  if (
    name.length < 2 ||
    name.length > 100 ||
    email.length > 320 ||
    !emailPattern.test(email) ||
    phone.length > 40 ||
    message.length < 20 ||
    message.length > 3000 ||
    !isValidLeadType
  ) {
    redirect("/contact?status=invalid");
  }

  if (serviceId) {
    const service = await prisma.service.findFirst({
      where: { id: serviceId, status: "PUBLISHED" },
      select: { id: true },
    });

    if (!service) {
      redirect("/contact?status=invalid");
    }
  }

  const leadType = leadTypeValue as (typeof leadTypes)[number];

  try {
    await prisma.lead.create({
      data: {
        name,
        email,
        phone: phone || null,
        source: "CONTACT",
        leadType,
        requirement: message,
        ...(serviceId
          ? { interestedService: { connect: { id: serviceId } } }
          : {}),
        contactSubmit: {
          create: {
            message,
            ...(serviceId
              ? { service: { connect: { id: serviceId } } }
              : {}),
          },
        },
      },
    });
  } catch {
    redirect("/contact?status=error");
  }

  redirect("/contact?status=sent");
}

type ContactPageProps = {
  searchParams: Promise<{ status?: string | string[] }>;
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const [services, query] = await Promise.all([
    prisma.service.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    }),
    searchParams,
  ]);

  const status = Array.isArray(query.status)
    ? query.status[0]
    : query.status;

  return (
    <>
      

      <main className="flex-1">
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Contact The Zyrex
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              Tell us what you want to build or learn.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-dark-gray">
              Share a few details about your project or learning goals. The
              Zyrex team can use them to understand your enquiry.
            </p>
          </div>

          <div className="border border-line p-6 sm:p-9">
            {status === "sent" && (
              <p
                role="status"
                className="mb-6 border border-line bg-light-gray p-4 text-sm leading-6"
              >
                Your enquiry has been received.
              </p>
            )}

            {status === "invalid" && (
              <p
                role="alert"
                className="mb-6 border border-line bg-light-gray p-4 text-sm leading-6"
              >
                Check the form fields. Please provide a valid email and a
                message between 20 and 3000 characters.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="mb-6 border border-line bg-light-gray p-4 text-sm leading-6"
              >
                We could not save the enquiry. Please try again later.
              </p>
            )}

            <form action={submitContact} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  required
                  className="min-h-12 w-full border border-line bg-background px-4 text-sm outline-none focus:border-foreground"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={320}
                    required
                    className="min-h-12 w-full border border-line bg-background px-4 text-sm outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    className="min-h-12 w-full border border-line bg-background px-4 text-sm outline-none focus:border-foreground"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="leadType" className="mb-2 block text-sm font-medium">
                    I am enquiring about
                  </label>
                  <select
                    id="leadType"
                    name="leadType"
                    required
                    defaultValue="BUSINESS"
                    className="min-h-12 w-full border border-line bg-background px-4 text-sm outline-none focus:border-foreground"
                  >
                    <option value="BUSINESS">Business services</option>
                    <option value="ACADEMY">Academy and learning</option>
                    <option value="GENERAL">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="serviceId" className="mb-2 block text-sm font-medium">
                    Service <span className="text-muted">(optional)</span>
                  </label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    defaultValue=""
                    className="min-h-12 w-full border border-line bg-background px-4 text-sm outline-none focus:border-foreground"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  minLength={20}
                  maxLength={3000}
                  required
                  className="w-full resize-y border border-line bg-background px-4 py-3 text-sm leading-6 outline-none focus:border-foreground"
                />
              </div>

              <p className="text-xs leading-5 text-muted">
                Your details will be used to respond to this enquiry.
              </p>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-graphite"
              >
                Send enquiry <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      
    </>
  );
}