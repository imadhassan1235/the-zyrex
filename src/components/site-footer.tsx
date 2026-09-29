import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="The Zyrex home"
          >
            <span className="flex size-10 items-center justify-center bg-foreground text-xs font-semibold tracking-[-0.08em] text-background">
              TZ
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.16em] text-foreground">
                THE ZYREX
              </span>
              <span className="mt-0.5 text-xs text-muted">
                Learn. Earn. Grow.
              </span>
            </span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
          >
            <Link href="/services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/academy" className="hover:text-foreground">
              Academy
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-line pt-5 text-xs text-muted">
          © {new Date().getFullYear()} The Zyrex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}