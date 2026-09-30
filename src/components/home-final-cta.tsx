import Link from "next/link";

export function HomeFinalCta() {
  return (
    <section
      className="w-full bg-surface-container-lowest py-28 lg:py-40"
      id="contact-hub"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative w-full overflow-hidden rounded-3xl bg-inverse-surface shadow-2xl">
          <div className="relative flex min-h-[460px] w-full items-center lg:min-h-[520px]">
            <img
              src="/assets/zyrex-home-cta.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-40 mix-blend-luminosity"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/90 to-inverse-surface/60" />

            <div className="relative z-10 flex max-w-3xl flex-col gap-6 p-8 sm:p-14 lg:p-20">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                Initiate Next Step
              </span>

              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-inverse-on-surface sm:text-6xl lg:text-7xl">
                Ready to Learn, Build or Grow?
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-inverse-on-surface/80 sm:text-lg">
                Whether you need engineering for your business or practical
                training to grow your career, The Zyrex is ready to help.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-on-primary px-8 py-4 text-sm font-bold tracking-tight text-on-surface shadow-lg transition-colors hover:bg-surface-container-low"
                >
                  <span>Start a Project</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href="#academy"
                  className="inline-flex items-center justify-center rounded-full bg-inverse-surface/80 px-8 py-4 text-sm font-semibold tracking-tight text-inverse-on-surface shadow-md transition-colors hover:bg-inverse-surface"
                >
                  Explore Academy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}