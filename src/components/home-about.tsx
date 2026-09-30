import Link from "next/link";

export function HomeAbout() {
  return (
    <section className="w-full bg-surface py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-inverse-surface shadow-2xl">
              <img
                src="/assets/zyrex-home-about.webp"
                alt="The Zyrex team collaborating on digital work"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-inverse-surface/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-2xl bg-surface-container-lowest p-5 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl text-on-primary">
                ◉
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-on-surface">
                  Dual Engine Model
                </p>
                <p className="text-[11px] text-on-surface-variant">
                  Production • Education
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-container-highest px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              About The Ecosystem
            </div>

            <h2 className="text-3xl font-black uppercase leading-[1.05] tracking-tight text-on-surface sm:text-5xl">
              The Zyrex combines technology, creativity, and practical
              education.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-on-surface-variant sm:text-lg">
              <p>
                Our digital team builds software, commerce experiences, and
                marketing solutions for businesses.
              </p>
              <p>
                Our academy connects learning with practical projects, helping
                students build useful skills and experience.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-on-surface px-8 py-4 text-sm font-semibold tracking-tight text-surface shadow-md transition-colors hover:bg-primary"
              >
                <span>About The Zyrex</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}