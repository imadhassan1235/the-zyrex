const principles = [
  {
    number: "01",
    label: "Foundation",
    title: "Learn Practical Skills.",
    description:
      "Discard redundant theory. Our curriculum comes from real engineering work and is updated as technology evolves.",
  },
  {
    number: "02",
    label: "Execution",
    title: "Build Real-World Projects.",
    description:
      "Work on production services, commerce experiences, and automated workflows based on real business needs.",
    highlight: true,
  },
  {
    number: "03",
    label: "Trajectory",
    title: "Grow Your Digital Career.",
    description:
      "Build a competitive portfolio and gain practical experience to support your next career step.",
  },
  {
    number: "04",
    label: "Enterprise",
    title: "Transform Your Online Presence.",
    description:
      "We design digital experiences that help businesses build authority and grow sustainably.",
    gold: true,
  },
  {
    number: "05",
    label: "Synthesis",
    title: "Modern Solutions for Modern Businesses.",
    description:
      "Technology meets creativity through thoughtful engineering and expressive brand design.",
  },
];

export function HomeWhyZyrex() {
  return (
    <section className="relative w-full overflow-hidden bg-inverse-surface py-28 text-inverse-on-surface lg:py-40">
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[150px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-96 w-96 rounded-full bg-tertiary/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/the-zyrex-logo-white.png"
              alt="The Zyrex"
              className="h-9 w-auto object-contain opacity-90"
            />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-inverse-on-surface/50">
              Core Tenets • 2025
            </span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-primary-fixed">
            The Zyrex Standard
          </span>
        </div>

        <div className="flex flex-col gap-14 sm:gap-20">
          {principles.map((principle, index) => (
            <div key={principle.number}>
              <div className="grid grid-cols-1 items-baseline gap-8 lg:grid-cols-12">
                <span className="text-xs font-mono uppercase tracking-widest text-inverse-on-surface/40 lg:col-span-2">
                  {principle.number} / {principle.label}
                </span>

                <div className="lg:col-span-10">
                  <h2
                    className={`text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl ${
                      principle.highlight
                        ? "bg-gradient-to-r from-inverse-on-surface via-primary-fixed-dim to-inverse-on-surface bg-clip-text text-transparent"
                        : principle.gold
                          ? "text-tertiary-fixed"
                          : ""
                    }`}
                  >
                    {principle.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg font-light text-inverse-on-surface/70">
                    {principle.description}
                  </p>
                </div>
              </div>

              {index < principles.length - 1 && (
                <div className="mt-14 h-px w-full bg-inverse-on-surface/10 sm:mt-20" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 border-t border-inverse-on-surface/10 pt-12 md:grid-cols-2">
          <article className="rounded-2xl bg-surface-container-highest/10 p-8 backdrop-blur-md sm:p-10">
            <span className="mb-3 block text-xs font-mono uppercase tracking-widest text-primary-fixed">
              For Businesses
            </span>
            <h3 className="mb-3 text-2xl font-bold tracking-tight">
              Institutional Agility
            </h3>
            <p className="text-sm leading-relaxed text-inverse-on-surface/70">
              Gain a technology and growth partner. We focus on practical
              solutions delivered to your business needs.
            </p>
          </article>

          <article className="rounded-2xl bg-surface-container-highest/10 p-8 backdrop-blur-md sm:p-10">
            <span className="mb-3 block text-xs font-mono uppercase tracking-widest text-tertiary-fixed">
              For Learners
            </span>
            <h3 className="mb-3 text-2xl font-bold tracking-tight">
              Real-World Mastery
            </h3>
            <p className="text-sm leading-relaxed text-inverse-on-surface/70">
              Learn through practical projects with guidance, and build
              experience you can demonstrate.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}