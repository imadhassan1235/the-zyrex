import Link from "next/link";

const courses = [
  {
    duration: "16 WEEKS",
    track: "Industrial Grade",
    title: "Full Stack Development",
    description:
      "Learn Next.js, TypeScript, Node.js, Python, PostgreSQL, and cloud deployment through practical projects.",
    outcome: "Production Projects",
    color: "bg-primary/10 text-primary",
  },
  {
    duration: "12 WEEKS",
    track: "Advanced Track",
    title: "AI Automation & Machine Learning",
    description:
      "Explore Python agents, AI workflows, machine learning, and practical automation systems.",
    outcome: "Automation Projects",
    color: "bg-tertiary-container/30 text-on-tertiary-container",
  },
  {
    duration: "10 WEEKS",
    track: "Growth Track",
    title: "Digital Marketing & SEO Mastery",
    description:
      "Learn customer acquisition, technical SEO, Google Ads, and campaign optimization.",
    outcome: "Live Campaign Practice",
    color: "bg-secondary-container text-on-secondary-container",
  },
  {
    duration: "12 WEEKS",
    track: "Mobile Focus",
    title: "App Development (Flutter & React Native)",
    description:
      "Build cross-platform applications and learn state management, data storage, and publishing.",
    outcome: "App Publishing",
    color: "bg-primary/10 text-primary",
  },
  {
    duration: "8 WEEKS",
    track: "Creative Suite",
    title: "UI/UX & Graphic Designing",
    description:
      "Learn Figma, design systems, typography, brand identity, and vector design.",
    outcome: "Design Systems",
    color: "bg-surface-variant text-on-surface",
  },
];

const specialistModules = [
  "Freelancing",
  "E-Commerce",
  "Video Editing",
  "Google Ads",
  "Shopify",
  "WordPress",
  "Online Earning",
];

export function HomeAcademy() {
  return (
    <section
      className="w-full bg-surface-container-lowest py-24 lg:py-36"
      id="academy"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-on-primary-fixed">
              Zyrex Academy Cohorts
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-on-surface sm:text-6xl">
              Learn Skills That Build Careers.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              The Zyrex Academy bridges the gap between academic theory and
              practical work. Learn skills used in today’s technology industry.
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/academy"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-tight text-on-primary shadow-md transition-colors hover:bg-on-primary-fixed-variant"
            >
              <span>Explore Academy</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col justify-between rounded-3xl bg-surface-container p-8 shadow-sm transition-all duration-300 hover:bg-surface-container-high"
            >
              <div>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs font-bold ${course.color}`}
                  >
                    {course.duration}
                  </span>
                  <span className="text-right text-xs font-bold uppercase tracking-wider text-outline">
                    {course.track}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-on-surface">
                  {course.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                  {course.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-outline-variant/40 pt-4">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant">
                  <span aria-hidden="true" className="text-primary">
                    ✓
                  </span>
                  {course.outcome}
                </span>
                <span
                  aria-hidden="true"
                  className="text-outline transition-colors group-hover:text-primary"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary via-primary-container to-secondary p-8 text-on-primary shadow-lg">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-on-primary/70">
                Complete Spectrum
              </span>

              <h3 className="mb-4 text-2xl font-extrabold tracking-tight">
                Full Curriculum Coverage
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-on-primary/90">
                Explore additional specialist modules offered by The Zyrex
                Academy.
              </p>

              <div className="flex flex-wrap gap-2">
                {specialistModules.map((module) => (
                  <span
                    key={module}
                    className="rounded-md bg-on-primary/10 px-2.5 py-1 text-xs font-medium backdrop-blur-sm"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-primary hover:underline"
              >
                <span>Ask about enrollment</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}