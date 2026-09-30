import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface to-surface-container-low/40 pb-24 pt-8 sm:pb-32 lg:pb-44 lg:pt-14">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-primary-fixed/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-[10%] -top-24 h-[480px] w-[480px] rounded-full bg-secondary-container/30 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-surface-container-highest/60 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
              Technology &amp; Training Studio
            </span>
          </div>

          <div className="hidden items-center gap-2 text-xs uppercase tracking-wider text-outline sm:flex">
            <span>/</span>
            <span>Enterprise • Education</span>
          </div>
        </div>

        <div className="mb-14 grid grid-cols-1 items-end gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-5 lg:col-span-8">
            <h1 className="text-6xl font-black uppercase leading-[0.92] tracking-tighter text-on-surface sm:text-7xl lg:text-9xl">
              Learn.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
                Earn.
              </span>
              <br />
              Grow.
            </h1>

            <p className="mt-2 max-w-2xl text-xl font-bold tracking-tight text-on-surface-variant sm:text-2xl lg:text-3xl">
              Practical Digital Skills. Creative Digital Solutions.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-7 lg:col-span-4">
            <p className="text-base leading-relaxed text-on-surface-variant/90 sm:text-lg">
              The Zyrex provides modern digital solutions for businesses and
              practical technology training for students.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-inverse-surface px-8 py-4 text-sm font-semibold tracking-tight text-inverse-on-surface shadow-md transition-all duration-300 hover:bg-on-surface hover:shadow-xl"
              >
                <span>Start a Project</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/academy"
                className="inline-flex items-center justify-center rounded-full bg-surface-container-high/70 px-7 py-4 text-sm font-semibold tracking-tight text-on-surface shadow-sm transition-all duration-300 hover:bg-surface-container-highest"
              >
                Explore Academy
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative w-full overflow-hidden rounded-2xl bg-inverse-surface shadow-2xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-[21/9]">
            <img
              alt="The Zyrex technology and academy environment"
              className="h-full w-full scale-[1.01] object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              src="/assets/zyrex-home-hero.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent mix-blend-overlay" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-end sm:p-8 lg:p-10">
            <div className="max-w-md">
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">
                Ecosystem Integration
              </span>
              <h2 className="text-xl font-bold tracking-tight text-inverse-on-surface sm:text-2xl">
                Where Industrial Engineering Bridges Digital Mastery
              </h2>
            </div>

            <div className="flex items-center gap-4 rounded-full bg-inverse-surface/70 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-inverse-on-surface/80 shadow-lg backdrop-blur-md">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed" />
                Production First
              </span>
              <span className="text-inverse-on-surface/40">•</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-fixed" />
                Mentor-Led
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}