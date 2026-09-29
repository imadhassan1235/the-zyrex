import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="The Zyrex home">
          <span className="flex size-11 items-center justify-center bg-foreground text-sm font-semibold tracking-[-0.08em] text-background">
            TZ
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.16em]">
              THE ZYREX
            </span>
            <span className="mt-0.5 text-xs text-muted">Learn. Earn. Grow.</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark-gray sm:gap-x-7"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/services" className="transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/academy" className="transition-colors hover:text-foreground">
            Academy
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-graphite"
        >
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}