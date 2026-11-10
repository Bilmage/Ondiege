import Image from "next/image";
import { timelineData } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CareerTimeline() {
  return (
    <section
      id="archive"
      className="py-24 md:py-36 bg-[var(--color-cream-light)] relative border-t border-[var(--color-charcoal)]/10 overflow-hidden"
      aria-label="Artistic Archive and Career Timeline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="04"
          label="04 / ARCHIVE"
          heading="Selected milestones."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Vertical Central Guide Spine Line */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-px bg-gradient-to-b from-[var(--color-burnt-orange)] via-[var(--color-charcoal)]/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-16 lg:space-y-24">
            {timelineData.map((entry, index) => {
              const isEven = index % 2 === 0;
              const hasPhotos = entry.photos && entry.photos.length > 0;

              return (
                <div
                  key={`${entry.year}-${index}`}
                  className="relative group"
                >
                  {/* Central Timeline Milestone Pin (Desktop) */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-3 w-5 h-5 rounded-full bg-[var(--color-cream)] border-2 border-[var(--color-burnt-orange)] items-center justify-center z-20 shadow-md group-hover:scale-125 group-hover:bg-[var(--color-burnt-orange)] transition-all duration-300"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)] group-hover:bg-white transition-colors" />
                  </div>

                  {/* Desktop 2-Column Balanced Spread / Mobile Stack */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* ──── Column A: Written Milestone Dossier Card ──── */}
                    <div
                      className={`lg:col-span-6 flex flex-col ${
                        isEven ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                      }`}
                    >
                      <div className="w-full bg-[var(--color-cream)] border border-[var(--color-charcoal)]/15 hover:border-[var(--color-burnt-orange)] p-6 sm:p-8 shadow-sm transition-all duration-300 relative group-hover:shadow-md">
                        {/* Year Badge + Accent Tag */}
                        <div
                          className={`flex items-center gap-3 mb-4 pb-3 border-b border-[var(--color-charcoal)]/10 flex-wrap ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          <span className="font-mono text-sm sm:text-base font-bold text-white bg-[var(--color-burnt-orange)] px-3 py-1 shadow-sm">
                            {entry.year}
                          </span>
                          <span className="font-mono text-[0.625rem] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-neutral-dark)] font-semibold">
                            ARCHIVAL RECORD
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--color-charcoal)] mb-4">
                          {entry.title}
                        </h4>

                        {/* Description */}
                        <p className="font-body text-xs sm:text-sm text-[var(--color-charcoal-light)] leading-relaxed font-normal whitespace-pre-line">
                          {entry.description}
                        </p>

                        {/* External Link (e.g. Counter Circles Vimeo) */}
                        {entry.link && (
                          <div className={`mt-6 pt-4 border-t border-[var(--color-charcoal)]/10 flex ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}>
                            <a
                              href={entry.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] px-4 py-2.5 transition-colors shadow-sm font-medium"
                            >
                              <span>{entry.link.label}</span>
                              <span aria-hidden="true">↗</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ──── Column B: Opposite Side Photo Gallery / Archival Visual Artifact ──── */}
                    <div
                      className={`lg:col-span-6 flex flex-col justify-center ${
                        isEven ? "lg:items-start" : "lg:items-end"
                      }`}
                    >
                      {hasPhotos ? (
                        <div className="w-full space-y-4">
                          {/* Main Primary Photo Frame */}
                          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[var(--color-charcoal)] border-2 border-[var(--color-charcoal)]/20 shadow-md group-hover:border-[var(--color-burnt-orange)] transition-all duration-300">
                            <Image
                              src={entry.photos![0].url}
                              alt={entry.photos![0].alt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 45vw"
                              className="object-cover object-center filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/85 via-transparent to-transparent pointer-events-none" />

                            {/* Caption Badge at bottom */}
                            {entry.photos![0].caption && (
                              <div className="absolute bottom-3 left-3 right-3 z-10">
                                <span className="inline-block font-mono text-[0.625rem] sm:text-xs uppercase tracking-wider text-[var(--color-cream-light)] bg-[var(--color-charcoal)]/90 px-2.5 py-1 border border-white/20 font-medium">
                                  {entry.photos![0].caption}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Secondary Supporting Photos (Duet shots, trophy, extra stills) */}
                          {entry.photos!.length > 1 && (
                            <div className="grid grid-cols-2 gap-3 pt-1">
                              {entry.photos!.slice(1).map((photo, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="relative aspect-square w-full overflow-hidden bg-[var(--color-charcoal)] border border-[var(--color-charcoal)]/15 shadow-sm group-hover:border-[var(--color-burnt-orange)]/60 transition-all duration-300"
                                >
                                  <Image
                                    src={photo.url}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 22vw"
                                    className="object-cover object-center filter grayscale contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                                  {photo.caption && (
                                    <div className="absolute bottom-2 left-2 right-2 z-10">
                                      <span className="inline-block font-mono text-[0.5625rem] leading-tight uppercase tracking-wider text-[var(--color-cream-light)] bg-black/80 px-1.5 py-0.5 border border-white/20 truncate max-w-full">
                                        {photo.caption}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Fallback Archival Seal/Plate for milestones without physical photos (e.g. Counter Circles) */
                        <div className="w-full bg-[var(--color-charcoal)] text-[var(--color-cream-light)] border border-[var(--color-charcoal-mid)] p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden min-h-[220px]">
                          <div
                            className="absolute -right-10 -bottom-10 text-[var(--color-charcoal-light)]/20 font-display text-9xl font-black select-none pointer-events-none"
                            aria-hidden="true"
                          >
                            {entry.year.slice(-2)}
                          </div>
                          <div>
                            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-burnt-orange-light)] font-bold block mb-2">
                              DOCUMENTARY RECORD // {entry.year}
                            </span>
                            <h5 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--color-cream)]">
                              {entry.title}
                            </h5>
                          </div>
                          <div className="pt-6 border-t border-[var(--color-charcoal-mid)] font-mono text-xs text-[var(--color-neutral-light)] flex items-center justify-between">
                            <span>INCLUSIVE DANCE INQUIRY</span>
                            <span className="text-[var(--color-burnt-orange-light)] font-bold">DIS ARCHIVE</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
