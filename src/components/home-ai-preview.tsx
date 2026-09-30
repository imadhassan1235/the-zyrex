const suggestions = [
  "Recommend Services",
  "Explore Courses",
  "Request a Quote",
  "Book a Meeting",
];

export function HomeAiPreview() {
  return (
    <section className="w-full bg-surface-container-low py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-primary">
            Next-Gen Advisory
          </span>

          <h2 className="text-3xl font-black uppercase tracking-tight text-on-surface sm:text-4xl">
            Meet The Zyrex Intelligent Assistant
          </h2>

          <p className="mt-2 text-sm text-on-surface-variant">
            Get help exploring services, courses, and project options.
          </p>
        </div>

        <div className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-surface-container-lowest p-6 shadow-xl sm:p-10">
          <div className="flex items-center justify-between gap-4 border-b border-outline-variant/40 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                AI
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface">
                  The Zyrex AI
                </h3>
                <span className="flex items-center gap-1 text-[11px] text-outline">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-outline" />
                  Preview — not connected
                </span>
              </div>
            </div>

            <span className="font-mono text-xs uppercase text-outline">
              Assistant Preview
            </span>
          </div>

          <div className="flex max-w-2xl items-start gap-3 py-2">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm text-primary">
              ✦
            </div>
            <p className="rounded-2xl rounded-tl-sm bg-surface-container p-4 text-sm leading-relaxed text-on-surface shadow-sm sm:p-5 sm:text-base">
              Hello! This is a preview of The Zyrex AI assistant. It will help
              visitors explore services, courses, and project options once the
              assistant is connected.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {suggestions.map((suggestion) => (
              <span
                key={suggestion}
                className="rounded-full bg-surface-container px-4 py-2 text-xs font-semibold tracking-tight text-on-surface-variant"
              >
                {suggestion}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <input
              aria-label="AI assistant preview input"
              className="min-w-0 flex-grow rounded-full bg-surface-container px-5 py-3.5 text-sm text-on-surface outline-none placeholder:text-outline"
              disabled
              placeholder="AI chat will be available after setup."
              type="text"
            />

            <button
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-inverse-surface px-6 py-3.5 text-sm font-semibold tracking-tight text-inverse-on-surface opacity-60"
              disabled
              type="button"
            >
              <span>Talk to AI</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}