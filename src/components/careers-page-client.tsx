"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Role = {
  department: string;
  workMode: string;
  type: string;
  location: string;
  title: string;
  description: string;
  tags: string[];
};

const roles: Role[] = [
  {
    department: "Engineering",
    workMode: "Hybrid / Remote",
    type: "Full-time",
    location: "Faisalabad HQ & Remote",
    title: "Full-Stack Engineer (Next.js / TypeScript)",
    description:
      "Architect high-performance web applications, integrate performant microservices, and work with product design teams on seamless user journeys.",
    tags: ["Next.js 14+", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST / GraphQL"],
  },
  {
    department: "AI & Automation",
    workMode: "Hybrid / Remote",
    type: "Full-time",
    location: "Amin Town, Faisalabad",
    title: "AI Workflow Engineer (Python / LangChain)",
    description:
      "Design enterprise LLM automations, intelligent extraction pipelines, and autonomous agent loops for operational scaling.",
    tags: ["Python 3.11", "LangChain", "Vector DBs", "FastAPI", "OpenAI API"],
  },
];

const values = [
  ["Curiosity", "Ask why things break and how they can be rebuilt better."],
  ["Problem Solving", "Find practical solutions instead of stopping at edge cases."],
  ["Learning Mindset", "Keep learning and adapt to modern tools and practices."],
  ["Creativity", "Bring craft and visual care to functional digital products."],
  ["Communication", "Share clear updates that help teammates move forward."],
  ["Responsibility", "Own work from the first commit through deployment."],
  ["Teamwork", "Help others with useful reviews, documentation, and patience."],
  ["Adaptability", "Work well across changing projects and disciplines."],
];

const team = [
  ["AA", "Ahsan Abdullah", "Chief Executive Officer", "Vision, Strategy & Leadership"],
  ["IH", "Imad Hassan", "Developer + AI", "Applied LLMs & Cloud Systems"],
  ["AM", "Atta ul Mannan", "Software Developer", "Full-Stack Web & Applications"],
  ["MY", "Muaz Younas", "Lead Designer", "Visual Identity & UI/UX Systems"],
  ["AS", "Adeela Safdar", "Digital Marketing", "Growth Campaigns & Outreach"],
  ["MR", "Mariyam Rasheed", "Performance Marketing", "SEO & Social Brand Strategy"],
];

const disciplines = [
  "Software Development",
  "Web Development",
  "App Development",
  "AI & Automation",
  "Machine Learning",
  "Digital Marketing",
  "Technical SEO",
  "Social Media Strategy",
  "Graphic & Brand Design",
  "Video Production & Motion",
  "E-Commerce Infrastructure",
  "WordPress Engine",
  "Shopify Plus",
];

const applicationAreas = [
  "Software / Web / App Engineering",
  "AI, Automation & Machine Learning",
  "UI/UX & Brand Design",
  "Digital Marketing & Growth",
  "Student Internship / Practical Trainee",
  "Other Technical Role",
];

const experienceLevels = [
  "Entry Level / Student (< 1 year)",
  "Mid-Level (1–3 years)",
  "Senior (3–5+ years)",
  "Staff / Lead",
];

export function CareersPageClient() {
  const [department, setDepartment] = useState("All");
  const [workMode, setWorkMode] = useState("All");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [applicationReceived, setApplicationReceived] = useState(false);

  const filteredRoles = useMemo(
    () =>
      roles.filter(
        (role) =>
          (department === "All" || role.department === department) &&
          (workMode === "All" ||
            (workMode === "Remote" && role.workMode.includes("Remote")) ||
            (workMode === "Hybrid" && role.workMode.includes("Hybrid")) ||
            (workMode === "On-site" && role.location.includes("Faisalabad"))),
      ),
    [department, workMode],
  );

  function submitApplication(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setApplicationReceived(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-surface-container-low px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Careers at The Zyrex · Cohort 2026.1 Active
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-on-surface sm:text-6xl lg:text-7xl">
                Build Your Career. Build What&apos;s Next.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-on-surface-variant">
                Join a growing technology and digital team where people learn,
                create, solve real problems, and build practical digital
                experiences for global products.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
                  href="#open-positions"
                >
                  View Open Positions ↓
                </a>
                <a
                  className="rounded-full border border-outline-variant px-6 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
                  href="#send-profile"
                >
                  Send Your Profile
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-outline-variant/40 pt-6 sm:grid-cols-4">
                {[
                  ["Genesis", "Founded Feb 2026"],
                  ["Location", "Faisalabad"],
                  ["Flexibility", "Hybrid & Remote"],
                  ["Progression", "Skill Mastery"],
                ].map(([label, text]) => (
                  <div key={label}>
                    <p className="text-xs font-semibold text-on-surface">{label}</p>
                    <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[420px]">
              <Image
                alt="Technology team building digital products"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/assets/zyrex-technology-development.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                  Cross-disciplinary pods
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  AI · Product · Growth
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Collective Ethos
            </p>
            <div className="mt-3 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
                A Culture Built Around Growth and Real-World Velocity.
              </h2>
              <p className="leading-7 text-on-surface-variant">
                We value curiosity, clean code, thoughtful architecture, and
                people who take responsibility for delivering excellent work.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Learning", "Daily compounding"],
                ["Ownership", "End-to-end agency"],
                ["Collaboration", "No organizational silos"],
                ["Creativity", "Design engineering"],
                ["Professional Growth", "Merit-driven path"],
                ["Real-World Work", "Production impact"],
              ].map(([title, text]) => (
                <div
                  className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-5"
                  key={title}
                >
                  <span className="text-primary">✓</span>
                  <h3 className="mt-3 font-semibold text-on-surface">{title}</h3>
                  <p className="mt-1 text-sm text-on-surface-variant">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/30 bg-surface-container-low px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Build With Us?
              </p>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                Five pillars shape our daily work, engineering standards, and
                product-focused culture.
              </p>
              <div className="relative mt-8 min-h-[260px] overflow-hidden rounded-2xl">
                <Image
                  alt="Creative team working together"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  src="/assets/zyrex-home-about.webp"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["01", "Learn", "Develop practical skills with modern technologies and shared knowledge.", "Continuous Up-skilling"],
                ["02", "Build", "Work on real client projects and production systems.", "Real Deliverables"],
                ["03", "Create", "Bring technology, interactive design, and storytelling together.", "Creative Freedom"],
                ["04", "Grow", "Develop through ownership, feedback, and mentorship.", "Direct Mentorship"],
                ["05", "Impact", "Contribute to products that create measurable value.", "Tangible Results"],
              ].map(([number, title, description, note]) => (
                <article
                  className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5"
                  key={number}
                >
                  <span className="font-mono text-xs text-primary">{number}</span>
                  <h3 className="mt-3 text-lg font-semibold text-on-surface">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {description}
                  </p>
                  <p className="mt-4 text-xs font-semibold text-primary">{note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Areas We Work In
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                Explore our technical and creative specializations.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {disciplines.map((discipline) => (
                <span
                  className="rounded-full border border-outline-variant/50 bg-surface-container-low px-4 py-2 text-xs text-on-surface-variant"
                  key={discipline}
                >
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-y border-outline-variant/30 bg-surface-container-low px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
          id="open-positions"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Recruitment
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                  Open Positions
                </h2>
                <p className="mt-3 text-sm text-on-surface-variant">
                  Filter and apply for active roles across our teams.
                </p>
              </div>
              <span className="text-xs text-on-surface-variant">
                {filteredRoles.length} open roles available
              </span>
            </div>

            <div className="mt-7 grid gap-4 rounded-2xl border border-outline-variant/40 bg-background p-5 sm:grid-cols-2">
              <label className="text-xs font-semibold text-on-surface-variant">
                Department
                <select
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  onChange={(event) => setDepartment(event.target.value)}
                  value={department}
                >
                  {["All", "Engineering", "AI & Automation", "Design & Creative", "Marketing & Growth"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                Work Mode
                <select
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  onChange={(event) => setWorkMode(event.target.value)}
                  value={workMode}
                >
                  {["All", "Remote", "Hybrid", "On-site"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 space-y-4">
              {filteredRoles.map((role) => (
                <article
                  className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-7"
                  key={role.title}
                >
                  <div className="flex flex-wrap gap-2 text-xs text-on-surface-variant">
                    {[role.department, role.workMode, role.type, role.location].map(
                      (detail) => (
                        <span
                          className="rounded-full border border-outline-variant/40 px-3 py-1"
                          key={detail}
                        >
                          {detail}
                        </span>
                      ),
                    )}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-on-surface">
                    {role.title}
                  </h3>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-on-surface-variant">
                    {role.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        className="rounded-md bg-surface-container px-2.5 py-1 text-xs text-on-surface-variant"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      className="rounded-full bg-inverse-surface px-5 py-2.5 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
                      href="#send-profile"
                      onClick={() => {
                        const select = document.getElementById(
                          "desired-position",
                        ) as HTMLSelectElement | null;
                        if (select) select.value = role.title;
                      }}
                    >
                      Apply Now
                    </a>
                    <button
                      className="text-sm font-semibold text-primary hover:opacity-70"
                      onClick={() => setSelectedRole(role)}
                      type="button"
                    >
                      View Details →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-outline-variant/40 bg-background p-6">
              <h3 className="font-semibold text-on-surface">
                Looking for design, marketing, or custom dev roles?
              </h3>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                We are expanding for upcoming client cohorts. Share your CV for
                future design, growth, and technical opportunities.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:opacity-70"
                href="#send-profile"
              >
                Send General Profile ↓
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[380px]">
              <Image
                alt="Practical learning and academy workstation"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                src="/assets/zyrex-academy-practical-learning-01.jpg"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Zyrex Academy Bridge
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                Start Your Career With Practical Experience.
              </h2>
              <p className="mt-4 leading-7 text-on-surface-variant">
                Students and aspiring professionals can develop demonstrable
                industry skills through real client codebases, internal tools,
                and supervised project pods.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  ["01", "Learn", "Core Tech"],
                  ["02", "Practice", "Drills"],
                  ["03", "Build", "Real Apps"],
                  ["04", "Intern", "Pod Work"],
                  ["05", "Grow", "Full Associate"],
                ].map(([number, title, detail]) => (
                  <div
                    className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-3"
                    key={number}
                  >
                    <p className="font-mono text-[10px] text-primary">{number}</p>
                    <p className="mt-2 text-xs font-semibold text-on-surface">{title}</p>
                    <p className="mt-1 text-[10px] leading-4 text-on-surface-variant">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
              <a
                className="mt-6 inline-flex text-sm font-semibold text-primary hover:opacity-70"
                href="/academy"
              >
                Explore The Zyrex Academy ↗
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/30 bg-surface-container-low px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Character & Alignment
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
              What We Value
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-on-surface-variant">
              We prize deliberate behavior and follow-through over pedigree.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(([title, description]) => (
                <article
                  className="rounded-xl border border-outline-variant/40 bg-background p-5"
                  key={title}
                >
                  <h3 className="font-semibold text-on-surface">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Leadership & Pods
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                  The People Behind The Zyrex
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-on-surface-variant">
                Work alongside builders in engineering, creative direction, and
                digital growth.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map(([initials, name, role, focus]) => (
                <article
                  className="flex items-center gap-4 rounded-xl border border-outline-variant/40 bg-surface-container-low p-5"
                  key={name}
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary-container font-semibold text-on-primary">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-surface">{name}</h3>
                    <p className="mt-1 text-xs text-primary">{role}</p>
                    <p className="mt-1 text-xs text-on-surface-variant">{focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-y border-outline-variant/30 bg-surface-container-low px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
          id="send-profile"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                General Candidacy
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                Don&apos;t See Your Role? Send Your Profile
              </h2>
              <p className="mt-4 leading-7 text-on-surface-variant">
                We are always open to meeting talented people. Share your
                interests and experience for future opportunities.
              </p>
            </div>

            <form
              className="grid gap-4 rounded-2xl border border-outline-variant/40 bg-background p-5 sm:grid-cols-2 sm:p-7"
              onSubmit={submitApplication}
            >
              <label className="text-xs font-semibold text-on-surface-variant">
                Full Name *
                <input
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="name"
                  required
                />
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                Email Address *
                <input
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="email"
                  required
                  type="email"
                />
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                Phone / WhatsApp *
                <input
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="phone"
                  required
                  type="tel"
                />
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                Desired Position / Area *
                <select
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  id="desired-position"
                  name="position"
                  required
                >
                  <option value="">Select your discipline</option>
                  {applicationAreas.map((area) => (
                    <option key={area}>{area}</option>
                  ))}
                  {roles.map((role) => (
                    <option key={role.title}>{role.title}</option>
                  ))}
                </select>
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                Experience Level
                <select
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="experience"
                >
                  {experienceLevels.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                Current Location / City
                <input
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="location"
                />
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                LinkedIn URL
                <input
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="linkedin"
                  type="url"
                />
              </label>
              <label className="text-xs font-semibold text-on-surface-variant">
                Portfolio / Website / GitHub
                <input
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="portfolio"
                  type="url"
                />
              </label>
              <label className="text-xs font-semibold text-on-surface-variant sm:col-span-2">
                Cover Note & What Excites You About The Zyrex
                <textarea
                  className="mt-2 block min-h-28 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface"
                  name="message"
                />
              </label>
              <label className="text-xs font-semibold text-on-surface-variant sm:col-span-2">
                Attach Resume / CV (PDF, DOC, DOCX)
                <input
                  accept=".pdf,.doc,.docx"
                  className="mt-2 block w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-3 text-sm text-on-surface"
                  name="resume"
                  type="file"
                />
              </label>
              <label className="flex gap-3 text-xs leading-5 text-on-surface-variant sm:col-span-2">
                <input className="mt-1 accent-primary" required type="checkbox" />
                I agree that The Zyrex may use the information I provide to
                evaluate my application and contact me about relevant
                opportunities.
              </label>
              <button
                className="rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80 sm:col-span-2"
                type="submit"
              >
                Submit Application →
              </button>
            </form>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-outline-variant/40 bg-surface-container-low p-7 sm:p-10 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Join the Movement
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                Let&apos;s Build Something Together.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">
                Whether you are looking for a career opportunity or want to
                collaborate on an ambitious digital project, we would love to
                hear from you.
              </p>
            </div>
            <a
              className="shrink-0 rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {selectedRole && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedRole(null)}
          role="presentation"
        >
          <section
            aria-labelledby="role-dialog-title"
            aria-modal="true"
            className="w-full max-w-xl rounded-2xl border border-outline-variant/50 bg-background p-6 text-foreground shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {selectedRole.department} · {selectedRole.workMode}
                </p>
                <h2
                  className="mt-3 text-2xl font-semibold text-on-surface"
                  id="role-dialog-title"
                >
                  {selectedRole.title}
                </h2>
              </div>
              <button
                aria-label="Close role details"
                className="rounded-full border border-outline-variant px-3 py-1 text-on-surface-variant"
                onClick={() => setSelectedRole(null)}
                type="button"
              >
                ×
              </button>
            </div>
            <p className="mt-5 leading-7 text-on-surface-variant">
              {selectedRole.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {selectedRole.tags.map((tag) => (
                <span
                  className="rounded-full border border-outline-variant/50 bg-surface-container px-3 py-1.5 text-xs text-on-surface-variant"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              className="mt-7 inline-flex rounded-full bg-inverse-surface px-5 py-3 text-sm font-semibold text-inverse-on-surface"
              href="#send-profile"
              onClick={() => {
                setSelectedRole(null);
                const select = document.getElementById(
                  "desired-position",
                ) as HTMLSelectElement | null;
                if (select) select.value = selectedRole.title;
              }}
            >
              Apply for this role
            </a>
          </section>
        </div>
      )}

      {applicationReceived && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setApplicationReceived(false)}
          role="presentation"
        >
          <section
            aria-labelledby="application-success-title"
            aria-modal="true"
            className="w-full max-w-md rounded-2xl border border-outline-variant/50 bg-background p-7 text-center text-foreground shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-container text-2xl text-on-primary">
              ✓
            </div>
            <h2
              className="mt-5 text-2xl font-semibold text-on-surface"
              id="application-success-title"
            >
              Application Received
            </h2>
            <p className="mt-3 leading-6 text-on-surface-variant">
              Thank you for your interest in The Zyrex. Our team will review
              your profile and reach out if there is an active match.
            </p>
            <button
              className="mt-6 rounded-full bg-inverse-surface px-5 py-2.5 text-sm font-semibold text-inverse-on-surface"
              onClick={() => setApplicationReceived(false)}
              type="button"
            >
              Dismiss
            </button>
          </section>
        </div>
      )}
    </>
  );
}