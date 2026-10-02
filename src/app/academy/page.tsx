import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Explore practical learning, projects, internships, and career pathways through The Zyrex Academy.",
};

const pathways = [
  {
    number: "01",
    title: "Courses and training",
    description:
      "Explore IT courses and structured training designed to build robust practical programming capabilities.",
    tags: ["Python", "Algorithms", "APIs"],
    image: "/assets/zyrex-home-learn.webp",
    alt: "Learner developing practical technology skills",
    linkText: "Explore curriculum",
  },
  {
    number: "02",
    title: "Projects",
    description:
      "Apply what you learn through practical projects and guided work under senior tech lead code reviews.",
    tags: ["Full-Stack", "CI/CD", "Git Workflows"],
    image: "/assets/zyrex-academy-practical-learning-01.jpg",
    alt: "Practical project work at a development desk",
    linkText: "View project tracks",
  },
  {
    number: "03",
    title: "Internships",
    description:
      "Explore internship pathways that connect immersive learning with actual client and workplace experience.",
    tags: ["Team Pods", "Agile Sprints", "Live Deploy"],
    image: "/assets/zyrex-academy-learning.webp",
    alt: "Technology team learning together",
    linkText: "Discover internships",
  },
  {
    number: "04",
    title: "Career support",
    description:
      "Build toward long-term career opportunities with resume craft, interview practice, and career networking.",
    tags: ["Mock Tech Round", "Portfolio Review"],
    image: "/assets/zyrex-contact-consultation.webp",
    alt: "Career guidance and professional consultation",
    linkText: "View career roadmap",
  },
];

const outcomes = [
  {
    value: "96.8%",
    label: "Placement Success",
    detail: "Alumni hired within 180 days of track completion",
  },
  {
    value: "12+ Wks",
    label: "Immersive Sprints",
    detail: "High-tempo code architecture & deployment",
  },
  {
    value: "1-on-1",
    label: "Mentor Reviews",
    detail: "Direct guidance from active engineering leads",
  },
  {
    value: "100%",
    label: "Practical Labs",
    detail: "Production-focused practice and projects",
  },
];

export default function AcademyPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Zyrex Academy
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-on-surface sm:text-6xl lg:text-7xl">
              Learn skills for the work ahead.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-on-surface-variant sm:text-lg">
              Explore practical learning paths built around IT skills,
              projects, internships, and career development. Designed for
              engineers who want practical, high-impact mastery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#pathways"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition-colors hover:opacity-80"
              >
                Explore Curriculum <span aria-hidden="true">↘</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
              >
                Download Syllabus
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[440px]">
            <Image
              src="/assets/zyrex-academy-learning.webp"
              alt="The Zyrex Academy practical technology learning environment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />
            <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                The Zyrex Accelerator
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Learn. Earn. Grow.
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                Bridging computer science academia and industry engineering
                production.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 border-t border-outline-variant/40 pt-6 sm:grid-cols-3">
          {[
            "100% Project-Driven",
            "1-on-1 Mentor Reviews",
            "Direct Internship Pipelines",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm font-medium text-on-surface-variant"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        className="border-y border-outline-variant/40 bg-surface-container-low py-16 sm:py-20"
        id="pathways"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Practical Mastery · Learning Pathways
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-on-surface sm:text-4xl">
                Build knowledge by putting it into practice.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-on-surface-variant md:justify-self-end">
              A battle-tested four-tier model created to help aspiring
              developers become self-sufficient industry contributors.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((pathway) => (
              <article
                key={pathway.number}
                className="group overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest transition duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={pathway.image}
                    alt={pathway.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-xs font-semibold text-white backdrop-blur">
                    {pathway.number}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-on-surface">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 min-h-[6rem] text-sm leading-6 text-on-surface-variant">
                    {pathway.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pathway.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-outline-variant/40 bg-surface-container-low px-2 py-1 font-mono text-[10px] text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 border-t border-outline-variant/40 pt-4 text-xs font-semibold text-on-surface transition-colors hover:text-primary"
                  >
                    {pathway.linkText} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Learning with purpose
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-on-surface sm:text-4xl">
            Skills connect to real opportunities.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-on-surface-variant sm:text-base">
            The Academy brings together courses, practical projects,
            internships, and career support. Learners build skills step by step
            and explore how those skills apply to production technology
            environments.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:opacity-70"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[380px]">
          <Image
            src="/assets/zyrex-academy-practical-learning-01.jpg"
            alt="Practical technical learning through guided project work"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section
        aria-label="Academy outcomes"
        className="border-y border-outline-variant/40 bg-surface-container-low py-14 sm:py-16"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 md:grid-cols-4 md:gap-10 lg:px-12">
          {outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="border-l border-outline-variant/50 pl-5"
            >
              <p className="font-mono text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
                {outcome.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                {outcome.label}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted">
                {outcome.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-low">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Enterprise Upskilling
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-on-surface sm:text-4xl">
                Need a custom engineering cohort for your team?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-on-surface-variant sm:text-base">
                We train and deploy custom engineering pipelines in Full-Stack,
                AI integration, and cloud development, aligned with your
                internal stack.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition-colors hover:opacity-80"
              >
                Schedule Technical Discovery{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="relative min-h-[260px] lg:min-h-full">
              <Image
                src="/assets/Custom Engineering Workspace.png"
                alt="Custom engineering team training workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}