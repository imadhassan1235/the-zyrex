import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20">
        <div className="lg:col-span-2">
          <Link
            href="/"
            aria-label="The Zyrex home"
            className="inline-flex flex-col items-start"
          >
            <Image
              src="/assets/the-zyrex-logo-white.png"
              alt="The Zyrex"
              width={2644}
              height={1890}
              className="h-16 w-auto object-contain"
            />
            <span className="mt-2 text-xs tracking-wide text-inverse-on-surface/60">
              Learn. Earn. Grow.
            </span>
          </Link>

          <p className="mt-6 max-w-md text-sm leading-7 text-inverse-on-surface/70">
            Practical digital skills and creative technology solutions for
            learners and businesses.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-fixed">
            Explore
          </h2>
          <nav
            aria-label="Footer navigation"
            className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-inverse-on-surface/70 transition-colors hover:text-inverse-on-surface"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-fixed">
            Start a conversation
          </h2>
          <p className="mt-5 text-sm leading-6 text-inverse-on-surface/70">
            Have a project or learning goal in mind? Get in touch with The
            Zyrex.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-inverse-on-surface transition-colors hover:text-primary-fixed"
          >
            Contact us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-inverse-on-surface/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-inverse-on-surface/55 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>© {new Date().getFullYear()} The Zyrex. All rights reserved.</span>
          <span>Learn. Earn. Grow.</span>
        </div>
      </div>
    </footer>
  );
}