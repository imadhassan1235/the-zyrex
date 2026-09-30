const metrics = [
  {
    category: "Web Architecture",
    value: "60+",
    description: "Live Websites",
  },
  {
    category: "Media Production",
    value: "50+",
    description: "Edited Videos",
  },
  {
    category: "Brand Presence",
    value: "30+",
    description: "Social Media & Branding Projects",
  },
  {
    category: "Enterprise Systems",
    value: "CRM",
    description: "Custom Solutions",
  },
  {
    category: "Retail Point",
    value: "POS",
    description: "Industrial Systems",
  },
];

export function HomeMetrics() {
  return (
    <section className="w-full bg-surface-container-high/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Track Record
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-on-surface sm:text-5xl">
              Proven Execution Metrics
            </h2>
          </div>

          <p className="font-mono text-sm uppercase tracking-wider text-on-surface-variant">
            Production Deliverables
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <article
              key={metric.category}
              className={`flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-6 shadow-sm sm:p-8 ${
                index === 4 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="mb-4 block text-xs font-bold uppercase tracking-wider text-outline">
                {metric.category}
              </span>

              <div>
                <p className="text-4xl font-black tracking-tighter text-on-surface sm:text-5xl lg:text-6xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-on-surface-variant sm:text-sm">
                  {metric.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}