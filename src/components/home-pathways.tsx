const pathways = [
  {
    number: "01",
    prompt: "I need a digital solution",
    label: "Build",
    title: "Enterprise Architecture",
    description:
      "Full-scale custom software, web architecture, and enterprise apps engineered for speed and scale.",
    image: "/assets/zyrex-home-build.webp",
    imageAlt: "Digital products being built by The Zyrex",
    link: "#services",
    action: "Start Project",
  },
  {
    number: "02",
    prompt: "I want to grow my business",
    label: "Grow",
    title: "Scale & Dominate",
    description:
      "Performance marketing, SEO dominance, AI automation, and omnichannel conversion systems.",
    image: "/assets/zyrex-home-grow.webp",
    imageAlt: "Digital growth and business transformation",
    link: "#services",
    action: "Scale Operations",
  },
  {
    number: "03",
    prompt: "I want to learn a skill",
    label: "Learn",
    title: "Industrial Mastery",
    description:
      "Hands-on, mentor-led industry training with real-world production projects.",
    image: "/assets/zyrex-home-learn.webp",
    imageAlt: "A student learning technology and software development",
    link: "#academy",
    action: "View Academy",
  },
];

export function HomePathways() {
  return (
    <section
      className="w-full bg-surface-container-lowest py-24 lg:py-32"
      id="pathways"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-xs font-extrabold uppercase tracking-widest text-primary">
              Targeted Trajectories
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
              What brings you to The Zyrex?
            </h2>
          </div>

          <p className="max-w-md text-base font-normal leading-relaxed text-on-surface-variant lg:text-lg">
            Select your trajectory — business transformation or career
            acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pathways.map((pathway) => (
            <article
              key={pathway.number}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container shadow-sm transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-80 w-full overflow-hidden bg-surface-dim">
                <img
                  src={pathway.image}
                  alt={pathway.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-surface/90 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-on-surface shadow-sm backdrop-blur-md">
                    {pathway.label}
                  </span>
                </div>
              </div>

              <div className="flex flex-grow flex-col justify-between p-8 pt-2">
                <div>
                  <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-widest text-outline">
                    {pathway.number} — {pathway.prompt}
                  </span>

                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-on-surface">
                    {pathway.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {pathway.description}
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href={pathway.link}
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-tight text-primary transition-colors group-hover:text-on-surface"
                  >
                    <span>{pathway.action}</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}