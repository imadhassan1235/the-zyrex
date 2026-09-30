import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface-container-lowest/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="The Zyrex home" className="shrink-0">
          <Image
            src="/assets/the-zyrex-logo-black.png"
            alt="The Zyrex"
            width={2644}
            height={1890}
            priority
            className="h-14 w-auto rounded bg-white object-contain p-1 sm:h-16"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 text-[13px] xl:flex"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-1.5 text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-inverse-surface px-4 py-2.5 text-xs font-semibold tracking-tight text-inverse-on-surface shadow-sm transition-colors hover:bg-on-surface"
          >
            Start a Project
          </Link>
        </div>

        <details className="relative xl:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full mt-3 flex w-64 flex-col rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-3 shadow-xl"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-outline-variant/40 py-3">
              <ThemeToggle />
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-inverse-surface px-4 py-3 text-center text-sm font-semibold text-inverse-on-surface"
            >
              Start a Project
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}