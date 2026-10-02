"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Article = {
  title: string;
  category: string;
  topic: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

const featuredArticle: Article = {
  title:
    "Architecting Resilient Multi-Agent AI Systems for Enterprise Automation",
  category: "Technology & AI Architecture",
  topic: "AI & Automation",
  readTime: "8 min read",
  excerpt:
    "A deep dive into orchestration pipelines, context-boundary isolation, and high-concurrency event loops for production AI deployments.",
  image: "/assets/zyrex-ai-automation-workflow-01.jpg",
  imageAlt: "Multi-agent AI automation workflow",
  tags: ["Agents", "Python", "Enterprise AI", "Microservices"],
};

const articles: Article[] = [
  {
    title:
      "Next-Generation Headless E-Commerce: Integrating Next.js with Shopify & Custom Microservices",
    category: "E-Commerce",
    topic: "E-Commerce",
    readTime: "6 min read",
    excerpt:
      "Why modern retail experiences are decoupling storefront presentation from backend inventory catalogs to achieve faster checkouts and custom design ownership.",
    image: "/assets/E-Commerce Development Workspace.png",
    imageAlt: "E-commerce development workspace",
    tags: ["Next.js", "Shopify", "Edge Caching"],
  },
  {
    title:
      "Modern Python Engineering: High-Performance Concurrency & Asynchronous Workflows",
    category: "Backend",
    topic: "AI & Python",
    readTime: "5 min read",
    excerpt:
      "Best practices in asyncio, event-driven task queues, and memory profiling for data pipelines and production backends.",
    image: "/assets/Cinematic Python Developer Workspace.png",
    imageAlt: "Python developer working at a computer",
    tags: ["Python 3.12+", "AsyncIO", "Backend"],
  },
  {
    title:
      "The State of Modern Search: Algorithmic Intent & High-Performance Technical SEO",
    category: "Growth Search Systems",
    topic: "Technical SEO",
    readTime: "7 min read",
    excerpt:
      "Adapting organic discovery strategies for generative AI search and Core Web Vitals performance.",
    image: "/assets/SEO and Search Workspace.png",
    imageAlt: "SEO and search strategy workspace",
    tags: ["Core Web Vitals", "Technical SEO", "Search"],
  },
  {
    title:
      "Autonomous Workflow Automations & Machine Learning Integration",
    category: "AI Autonomous Agents",
    topic: "AI & Automation",
    readTime: "9 min read",
    excerpt:
      "Deploying deterministic self-healing loops, data extractors, and automated business workflows to reduce manual overhead.",
    image: "/assets/zyrex-ai-automation.webp",
    imageAlt: "AI workflow and automation planning",
    tags: ["LLM Chains", "Automation", "Machine Learning"],
  },
  {
    title:
      "Cross-Platform Mobile Interface Architecture for 120fps Fluidity",
    category: "Mobile",
    topic: "Full Stack Dev",
    readTime: "6 min read",
    excerpt:
      "Hardware-accelerated gestures, optimistic UI updates, and offline caching for mobile enterprise products.",
    image: "/assets/zyrex-technology-mobile.webp",
    imageAlt: "Mobile app interface and dashboard",
    tags: ["120 FPS", "iOS", "React Native"],
  },
  {
    title:
      "Creative Direction & Brand Identity in High-Stakes Digital Products",
    category: "Design",
    topic: "Business & Systems",
    readTime: "5 min read",
    excerpt:
      "Balancing tactile minimalism, typographic hierarchy, and visual restraint to build lasting brand authority.",
    image: "/assets/zyrex-creative-studio.webp",
    imageAlt: "Creative studio developing brand materials",
    tags: ["Brand Systems", "Creative Direction"],
  },
];

const categories = [
  "All Insights",
  "Technology",
  "AI & Automation",
  "Web Development",
  "Digital Marketing",
  "SEO & Search",
  "E-Commerce",
  "Business & Systems",
  "Career & Growth",
  "Freelancing",
  "Academy",
  "Company News",
];

const trending = [
  {
    title: "How AI Is Changing Modern Business Architecture",
    topic: "AI",
    readTime: "6 min",
  },
  {
    title: "Building Better Digital Experiences: Speed, Latency, and Visual Rhythm",
    topic: "Engineering",
    readTime: "5 min",
  },
  {
    title: "Practical SEO for High-Growth Technology Companies",
    topic: "Growth",
    readTime: "7 min",
  },
  {
    title: "Headless CMS vs Traditional Monoliths: A Practical Guide",
    topic: "Architecture",
    readTime: "8 min",
  },
];

const topics = [
  {
    title: "Artificial Intelligence",
    count: "24 Articles",
    description: "LLM orchestration, agent workflows, and vision models.",
    category: "AI & Automation",
  },
  {
    title: "Software Engineering",
    count: "38 Articles",
    description: "Next.js, Python, microservices, and databases.",
    category: "Full Stack Dev",
  },
  {
    title: "Digital Marketing",
    count: "19 Articles",
    description: "Paid acquisition, conversion audits, and funnel optimization.",
    category: "Digital Marketing",
  },
  {
    title: "Search Engine Optimization",
    count: "15 Articles",
    description: "Semantic indexing, site architecture, and technical audits.",
    category: "Technical SEO",
  },
  {
    title: "E-Commerce Architecture",
    count: "22 Articles",
    description: "Headless Shopify, custom cart APIs, and global payments.",
    category: "E-Commerce",
  },
  {
    title: "Business & Scale",
    count: "12 Articles",
    description: "Operations, product strategy, and engineering management.",
    category: "Business & Systems",
  },
  {
    title: "Career & Skills",
    count: "17 Articles",
    description: "Developer paths, technical interviews, and leadership.",
    category: "Career & Growth",
  },
  {
    title: "Global Freelancing",
    count: "14 Articles",
    description: "Remote client acquisition, proposals, and contracts.",
    category: "Freelancing",
  },
];

const learningTracks = [
  ["01", "AI & Python", "Autonomous workflows and scripts"],
  ["02", "Full Stack Dev", "Next.js, Node, and SQL"],
  ["03", "Growth & Ads", "Google Ads and Meta funnels"],
  ["04", "Technical SEO", "Audits and schema pipelines"],
  ["05", "E-Commerce", "Liquid, Shopify, and stores"],
  ["06", "Freelancing", "Client pitches and business growth"],
];

function ArticleDetails({
  article,
  onClose,
}: {
  article: Article | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!article) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <article
        aria-labelledby="article-dialog-title"
        aria-modal="true"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-outline-variant/50 bg-background p-6 text-foreground shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button
          aria-label="Close article"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition hover:bg-surface-container"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <p className="pr-10 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {article.category} · {article.readTime}
        </p>
        <h2
          className="mt-4 pr-8 text-3xl font-semibold tracking-tight text-on-surface"
          id="article-dialog-title"
        >
          {article.title}
        </h2>
        <p className="mt-5 leading-7 text-on-surface-variant">
          {article.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              className="rounded-full border border-outline-variant/50 bg-surface-container px-3 py-1.5 text-xs text-on-surface-variant"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-7 border-t border-outline-variant/40 pt-5 text-sm leading-7 text-on-surface-variant">
          The Zyrex shares practical knowledge to help learners and businesses
          make informed decisions about technology, digital products, and
          growth.
        </p>
      </article>
    </div>
  );
}

export function InsightsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
      if (event.key === "Escape") setSearchOpen(false);
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const visibleArticles = useMemo(() => {
    const search = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Insights" ||
        article.topic === activeCategory ||
        article.category === activeCategory ||
        (activeCategory === "Technology" &&
          ["AI & Automation", "Full Stack Dev"].includes(article.topic)) ||
        (activeCategory === "Web Development" &&
          article.topic === "Full Stack Dev") ||
        (activeCategory === "SEO & Search" &&
          article.topic === "Technical SEO");

      const matchesSearch =
        !search ||
        `${article.title} ${article.category} ${article.excerpt} ${article.tags.join(" ")}`
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <>
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-outline-variant/30 bg-surface-container-low px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Zyrex Insights
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-on-surface sm:text-6xl lg:text-7xl">
                Ideas. Knowledge. Digital Growth.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-on-surface-variant">
                Explore practical insights, tutorials, and ideas from The Zyrex
                across technology, AI, digital marketing, business, and the
                digital world.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-inverse-surface px-6 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
                  href="#recent-articles"
                >
                  Explore Articles
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-6 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
                  href="#topics"
                >
                  Browse Topics ↓
                </a>
              </div>
            </div>

            <button
              className="group flex min-h-40 items-center justify-between gap-4 rounded-2xl border border-outline-variant/50 bg-background px-5 text-left shadow-sm transition hover:border-primary/50 sm:px-7"
              onClick={() => setSearchOpen(true)}
              type="button"
            >
              <span>
                <span className="block text-xs uppercase tracking-widest text-on-surface-variant">
                  Looking for something?
                </span>
                <span className="mt-2 block text-base font-medium text-on-surface">
                  Search articles and topics
                </span>
              </span>
              <span className="shrink-0 rounded-lg border border-outline-variant px-3 py-2 font-mono text-xs text-on-surface-variant">
                ⌘K
              </span>
            </button>
          </div>
        </section>

        <section
          className="border-b border-outline-variant/30 bg-surface-container-low py-12 sm:py-16"
          id="featured"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-12">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[380px]">
              <Image
                alt={featuredArticle.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={featuredArticle.image}
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white">
                Featured Spotlight / 01
              </span>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Executive Brief · {featuredArticle.category}
              </p>
              <p className="mt-3 text-xs text-on-surface-variant">
                {featuredArticle.readTime}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-on-surface sm:text-4xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 leading-7 text-on-surface-variant">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredArticle.tags.map((tag) => (
                  <span
                    className="rounded-full border border-outline-variant/50 bg-background px-3 py-1.5 text-xs text-on-surface-variant"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-on-surface-variant">
                By Zyrex Engineering Core · Published Oct 2026
              </p>
              <button
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-70"
                onClick={() => setSelectedArticle(featuredArticle)}
                type="button"
              >
                Read Article <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="sticky top-20 z-30 border-b border-outline-variant/40 bg-background/90 py-4 backdrop-blur-md">
          <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 sm:px-8 lg:px-12">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition ${
                  activeCategory === category
                    ? "border-inverse-surface bg-inverse-surface text-inverse-on-surface"
                    : "border-transparent text-on-surface-variant hover:border-outline-variant/50 hover:bg-surface-container"
                }`}
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  document
                    .getElementById("recent-articles")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section
          className="border-b border-outline-variant/30 px-5 py-16 sm:px-8 lg:px-12"
          id="recent-articles"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Curated Deployments & Knowledge
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
                  Recent Editorial Articles
                </h2>
              </div>
              <span className="text-xs uppercase tracking-wider text-on-surface-variant">
                {visibleArticles.length} articles
              </span>
            </div>

            {visibleArticles.length > 0 ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {visibleArticles.map((article) => (
                  <article
                    className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest transition hover:-translate-y-1 hover:border-primary/50"
                    key={article.title}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        alt={article.imageAlt}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        src={article.image}
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white">
                        {article.category} · {article.readTime}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-semibold leading-snug text-on-surface">
                        {article.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-on-surface-variant">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            className="rounded-full border border-outline-variant/40 bg-surface-container-low px-2.5 py-1 text-[10px] text-on-surface-variant"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        className="mt-5 self-start text-xs font-semibold text-primary transition hover:opacity-70"
                        onClick={() => setSelectedArticle(article)}
                        type="button"
                      >
                        Read →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-8 rounded-2xl border border-outline-variant/40 bg-surface-container-low p-8 text-sm text-on-surface-variant">
                Is category ya search ke liye abhi article nahi mila.
              </p>
            )}
          </div>
        </section>

        <section className="border-b border-outline-variant/30 bg-surface-container-low px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              High Engagement · This Month
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-on-surface">
              Trending Insights
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {trending.map((item, index) => (
                <article
                  className="flex gap-4 rounded-xl border border-outline-variant/40 bg-background p-5"
                  key={item.title}
                >
                  <span className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs text-on-surface-variant">
                      {item.topic} · {item.readTime}
                    </p>
                    <h3 className="mt-2 font-semibold text-on-surface">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-b border-outline-variant/30 px-5 py-16 sm:px-8 lg:px-12"
          id="topics"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Knowledge Taxonomies
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
              Explore by Topic
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {topics.map((topic) => (
                <button
                  className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 text-left transition hover:border-primary/50 hover:bg-surface-container-low"
                  key={topic.title}
                  onClick={() => {
                    setActiveCategory(topic.category);
                    document
                      .getElementById("recent-articles")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  type="button"
                >
                  <span className="text-xs font-semibold text-primary">
                    {topic.count}
                  </span>
                  <h3 className="mt-3 font-semibold text-on-surface">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {topic.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant/30 bg-surface-container-low px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Educational Ecosystem
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                Learn Something New. Build Practical Digital Mastery.
              </h2>
              <p className="mt-4 leading-7 text-on-surface-variant">
                Practical knowledge for students and professionals building
                their digital careers, from AI prompt engineering to
                production full-stack systems.
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70"
                href="/academy"
              >
                Explore The Zyrex Academy →
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {learningTracks.map(([number, title, description]) => (
                <div
                  className="rounded-xl border border-outline-variant/40 bg-background p-4"
                  key={number}
                >
                  <span className="font-mono text-xs text-primary">
                    {number}
                  </span>
                  <h3 className="mt-3 font-semibold text-on-surface">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant/30 px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 rounded-2xl border border-outline-variant/40 bg-surface-container-low p-6 sm:p-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Looking for something specific?
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-on-surface">
                Ask The Zyrex AI to help you find the right path.
              </h2>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                Search for an insight, service, or learning path across our
                knowledge base.
              </p>
            </div>
            <a
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:opacity-70"
              href="/contact"
            >
              Ask The Zyrex AI ↗
            </a>
          </div>
        </section>

        <section className="border-b border-outline-variant/30 bg-surface-container-low px-5 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-lg font-semibold text-on-surface">
                Stay Updated
              </p>
              <p className="mt-1 text-sm text-on-surface-variant">
                Follow The Zyrex for new insights, projects, and digital updates.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["LinkedIn", "Instagram", "Facebook"].map((network) => (
                <a
                  className="rounded-full border border-outline-variant/50 px-4 py-2 text-xs font-semibold text-on-surface-variant transition hover:bg-surface-container"
                  href="/contact"
                  key={network}
                >
                  {network} ↗
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-outline-variant/40 bg-surface-container-low p-7 sm:p-10 lg:flex-row lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Initiate Collaboration
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-on-surface sm:text-4xl">
                Have a Question or a Project in Mind?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">
                Whether you need knowledge, a digital solution, or a technology
                partner, The Zyrex can help you find the right path.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-inverse-surface px-5 py-3 text-sm font-semibold text-inverse-on-surface transition hover:opacity-80"
                href="/contact"
              >
                Start a Project
              </a>
              <a
                className="rounded-full border border-outline-variant px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
                href="/academy"
              >
                Explore Academy
              </a>
            </div>
          </div>
        </section>
      </main>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/70 px-4 pt-[15vh] backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
          role="presentation"
        >
          <section
            aria-labelledby="insights-search-title"
            aria-modal="true"
            className="w-full max-w-xl rounded-2xl border border-outline-variant/50 bg-background p-5 shadow-2xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="flex items-center justify-between gap-4">
              <h2
                className="text-lg font-semibold text-on-surface"
                id="insights-search-title"
              >
                Search Insights
              </h2>
              <button
                className="rounded-lg border border-outline-variant px-3 py-1.5 text-xs text-on-surface-variant hover:bg-surface-container"
                onClick={() => setSearchOpen(false)}
                type="button"
              >
                Esc
              </button>
            </div>
            <input
              autoFocus
              className="mt-5 w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm text-on-surface outline-none placeholder:text-muted focus:border-primary"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles, topics, and skills"
              value={query}
            />
            <div className="mt-5 max-h-64 space-y-2 overflow-y-auto">
              {visibleArticles.slice(0, 5).map((article) => (
                <button
                  className="block w-full rounded-lg p-3 text-left transition hover:bg-surface-container"
                  key={article.title}
                  onClick={() => {
                    setSearchOpen(false);
                    setSelectedArticle(article);
                  }}
                  type="button"
                >
                  <span className="block text-sm font-medium text-on-surface">
                    {article.title}
                  </span>
                  <span className="mt-1 block text-xs text-on-surface-variant">
                    {article.category} · {article.readTime}
                  </span>
                </button>
              ))}
              {visibleArticles.length === 0 && (
                <p className="p-3 text-sm text-on-surface-variant">
                  Koi matching article nahi mila.
                </p>
              )}
            </div>
          </section>
        </div>
      )}

      <ArticleDetails
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}