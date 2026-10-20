import { worksData } from "@/data/works";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SelectedWorks() {
  const featuredWork = worksData.find((w) => w.featured) || worksData[0];
  const regularWorks = worksData.filter((w) => w.id !== featuredWork.id);

  return (
    <section
      id="works"
      className="py-24 md:py-32 bg-[var(--color-cream-light)] relative border-t border-[var(--color-charcoal)]/10"
      aria-label="Selected Works"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="02"
          label="02 / SELECTED WORKS"
          heading="The work is the archive."
        />

        {/* Featured Work - Asymmetrical Magazine Hero Spread */}
        {featuredWork && (
          <div className="mb-16 bg-[var(--color-cream)] border border-[var(--color-charcoal)]/15 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm">
            <div className="lg:col-span-7 bg-[var(--color-charcoal)] p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-[var(--color-cream)] relative min-h-[360px]">
              {/* Retro Film/Archive Overlay badge */}
              <div className="flex items-center justify-between gap-4 border-b border-[var(--color-cream)]/20 pb-4 mb-8">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-burnt-orange-light)]">
                  FEATURED WORK // {featuredWork.period}
                </span>
                <span className="font-mono text-[0.625rem] px-2 py-0.5 border border-[var(--color-cream)]/30 uppercase tracking-widest text-[var(--color-cream)]/80">
                  {featuredWork.category}
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--color-cream)] mb-6 leading-tight">
                  {featuredWork.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[var(--color-neutral-light)] leading-relaxed max-w-xl">
                  {featuredWork.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[var(--color-cream)]/15 flex flex-wrap gap-2">
                {featuredWork.themes.map((theme) => (
                  <span
                    key={theme}
                    className="font-mono text-[0.625rem] uppercase tracking-[0.18em] px-2.5 py-1 bg-[var(--color-charcoal-light)] text-[var(--color-cream-light)] border border-[var(--color-cream)]/10"
                  >
                    #{theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual/Archival Placard Side */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[var(--color-paper)] border-t lg:border-t-0 lg:border-l border-[var(--color-charcoal)]/15">
              <div>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-neutral)] block mb-2">
                  CURATORIAL NOTE
                </span>
                <p className="font-display text-lg italic text-[var(--color-charcoal)] leading-relaxed">
                  “A contemporary dance soliloquy using irony, dark humour, satire, poetry, and emotional fracture.”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-charcoal)]/10">
                <div className="font-mono text-xs text-[var(--color-neutral-dark)] space-y-1">
                  <p>CREATION: Nairobi, Kenya</p>
                  <p>MEDIUM: Solo Contemporary Performance</p>
                  <p>STATUS: Active Repertoire (2026)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining 3 Works - Editorial 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularWorks.map((work, idx) => (
            <article
              key={work.id}
              className="bg-[var(--color-cream)] border border-[var(--color-charcoal)]/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--color-burnt-orange)] transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[var(--color-charcoal)]/10 pb-3">
                  <span className="font-mono text-[0.6875rem] font-bold text-[var(--color-burnt-orange)]">
                    0{idx + 2} {"//"}
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--color-neutral)] px-2 py-0.5 border border-[var(--color-charcoal)]/15">
                    {work.category}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-mono text-[0.6875rem] tracking-wider text-[var(--color-neutral)]">
                    {work.period}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--color-charcoal)] mb-4 leading-snug">
                  {work.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[var(--color-charcoal-light)] leading-relaxed mb-6">
                  {work.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-charcoal)]/10 flex flex-wrap gap-1.5">
                {work.themes.map((theme) => (
                  <span
                    key={theme}
                    className="font-mono text-[0.5625rem] uppercase tracking-widest text-[var(--color-neutral)]"
                  >
                    · {theme}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
