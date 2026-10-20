import Image from "next/image";
import { worksData } from "@/data/works";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SelectedWorks() {
  const featuredWork = worksData.find((w) => w.featured) || worksData[0];
  const regularWorks = worksData.filter((w) => w.id !== featuredWork.id);

  return (
    <section
      id="works"
      className="py-24 md:py-36 bg-[var(--color-cream-light)] relative border-t border-[var(--color-charcoal)]/10 overflow-hidden"
      aria-label="Selected Works"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="02"
          label="02 / SELECTED WORKS"
          heading="The work is the archive."
        />

        {/* ══════════════════════════════════════════════════════════════
            FEATURED WORK (Hero Editorial Composition inspired by Vibez reference)
            - Asymmetric tension with overlapping translucent color block
            - Generous whitespace and strong architectural text lockup
           ══════════════════════════════════════════════════════════════ */}
        {featuredWork && (
          <div className="mb-28 md:mb-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left Column: Overlapping Image Composition */}
              <div className="lg:col-span-7 relative">
                {/* Vintage Outline Wireframe Box (Reference Motif) */}
                <div
                  className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-4/5 h-4/5 border-2 border-[var(--color-burnt-orange)]/40 pointer-events-none z-0"
                  aria-hidden="true"
                />

                {/* Primary Photograph */}
                <div className="relative z-10 aspect-[3/4] sm:aspect-[4/5] max-h-[680px] w-full overflow-hidden bg-[var(--color-charcoal)] shadow-xl border border-[var(--color-charcoal)]/15">
                  <Image
                    src={featuredWork.image}
                    alt={featuredWork.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                {/* Subtle dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Red Accent Geometry Box (Placed behind and protruding, perfectly legible) */}
              <div
                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-48 sm:w-64 md:w-72 h-44 sm:h-56 md:h-64 bg-[var(--color-burnt-orange)] z-20 pointer-events-none flex flex-col justify-end p-5 text-white shadow-2xl border border-[var(--color-cream-light)]/20"
                aria-hidden="true"
              >
                <span className="font-mono text-[0.625rem] sm:text-xs tracking-[0.25em] uppercase font-bold text-white/90 drop-shadow-md">
                  REPERTOIRE // 2026
                </span>
                <span className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight text-white mt-1 drop-shadow-md">
                  KENYA SOMETIMES
                </span>
              </div>
            </div>

              {/* Right Column: Editorial Text & Typography */}
              <div className="lg:col-span-5 space-y-6 pt-6 lg:pt-0">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-burnt-orange)] font-semibold">
                    01 // FEATURED SOLO
                  </span>
                  <span className="w-8 h-px bg-[var(--color-burnt-orange)]" />
                  <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-[var(--color-neutral)]">
                    {featuredWork.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--color-charcoal)] leading-[0.98]">
                    {featuredWork.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-burnt-orange)] mt-2 font-medium">
                    {featuredWork.category}
                  </p>
                </div>

                <p className="font-body text-base text-[var(--color-charcoal-light)] leading-relaxed pt-2">
                  {featuredWork.description}
                </p>

                {/* Curatorial Pull Quote */}
                {featuredWork.curatorialQuote && (
                  <blockquote className="border-l-2 border-[var(--color-burnt-orange)] pl-4 py-1 italic font-display text-lg text-[var(--color-charcoal)]">
                    “{featuredWork.curatorialQuote}”
                  </blockquote>
                )}

                {/* Archival metadata ledger */}
                {featuredWork.metaDetails && (
                  <div className="pt-4 border-t border-[var(--color-charcoal)]/10 space-y-1.5 font-mono text-xs text-[var(--color-neutral-dark)]">
                    <p className="flex justify-between">
                      <span className="text-[var(--color-neutral)]">LOCATION:</span>
                      <span className="font-semibold">{featuredWork.metaDetails.creation}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[var(--color-neutral)]">MEDIUM:</span>
                      <span className="font-semibold">{featuredWork.metaDetails.medium}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[var(--color-neutral)]">STATUS:</span>
                      <span className="font-semibold text-[var(--color-burnt-orange)]">
                        {featuredWork.metaDetails.status}
                      </span>
                    </p>
                  </div>
                )}

                {/* Themes tag list */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {featuredWork.themes.map((theme) => (
                    <span
                      key={theme}
                      className="font-mono text-[0.625rem] uppercase tracking-[0.18em] px-3 py-1 bg-[var(--color-cream)] border border-[var(--color-charcoal)]/15 text-[var(--color-charcoal)]"
                    >
                      #{theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            THREE-COLUMN EDITORIAL GALLERY (Reference: "Three Columns" Layout)
            - Asymmetric photograph aspect ratios with authentic imagery
            - Overlapping geometric framing elements
            - Clean monospaced captions and bold display typography
           ══════════════════════════════════════════════════════════════ */}
        <div className="pt-8 border-t border-[var(--color-charcoal)]/15">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-[var(--color-burnt-orange)] font-semibold block mb-2">
                COLLECTION ARCHIVE
              </span>
              <h4 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--color-charcoal)]">
                Selected Works
              </h4>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-neutral)]">
              STAGE · FILM · INCLUSIVE PLATFORM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {regularWorks.map((work, index) => {
              const displayIndex = String(index + 2).padStart(2, "0");

              return (
                <article
                  key={work.id}
                  className="group flex flex-col justify-between bg-[var(--color-cream)] border border-[var(--color-charcoal)]/15 p-6 hover:border-[var(--color-burnt-orange)] transition-all duration-300 shadow-sm"
                >
                  <div>
                    {/* Image Area with Geometric Frame Effect */}
                    <div className="relative mb-6">
                      {/* Decorative corner accent */}
                      <div
                        className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[var(--color-burnt-orange)] pointer-events-none z-10 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />

                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-charcoal)] border border-[var(--color-charcoal)]/10">
                        <Image
                          src={work.image}
                          alt={work.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/70 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Category badge pinned inside photo */}
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] px-2 py-0.5 bg-[var(--color-charcoal)]/90 text-[var(--color-cream-light)] border border-[var(--color-cream)]/20">
                            {work.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Meta header */}
                    <div className="flex items-center justify-between mb-3 border-b border-[var(--color-charcoal)]/10 pb-2.5">
                      <span className="font-mono text-xs font-bold text-[var(--color-burnt-orange)] tracking-wider">
                        {displayIndex} {"//"}
                      </span>
                      <span className="font-mono text-xs tracking-wider text-[var(--color-neutral)]">
                        {work.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h5 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--color-charcoal)] group-hover:text-[var(--color-burnt-orange)] transition-colors duration-300 mb-3">
                      {work.title}
                    </h5>

                    {/* Description */}
                    <p className="font-body text-xs sm:text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {/* Themes Footer */}
                  <div className="mt-6 pt-4 border-t border-[var(--color-charcoal)]/10 flex flex-wrap gap-1.5">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
