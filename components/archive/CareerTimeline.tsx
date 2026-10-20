import { timelineData } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CareerTimeline() {
  return (
    <section
      id="archive"
      className="py-24 md:py-32 bg-[var(--color-cream-light)] relative border-t border-[var(--color-charcoal)]/10"
      aria-label="Artistic Archive and Career Timeline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="04"
          label="04 / ARCHIVE"
          heading="Selected milestones."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Timeline Track Line */}
          <div
            className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-burnt-orange)] via-[var(--color-burnt-orange)]/40 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {timelineData.map((entry, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={entry.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Timeline Node/Bullet */}
                  <div
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--color-burnt-orange)] border-2 border-[var(--color-cream-light)] shadow-sm z-10"
                    aria-hidden="true"
                  />

                  {/* Year Tag Column */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 sm:px-10 mb-2 sm:mb-0 ${
                      isEven ? "sm:text-left" : "sm:text-right"
                    }`}
                  >
                    <span className="inline-block font-mono text-sm sm:text-base font-bold text-[var(--color-burnt-orange)] tracking-widest px-2.5 py-1 bg-[var(--color-cream)] border border-[var(--color-burnt-orange)]/20">
                      {entry.year}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 sm:px-10 ${
                      isEven ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <div className="bg-[var(--color-cream)] border border-[var(--color-charcoal)]/15 p-6 hover:border-[var(--color-burnt-orange)] transition-colors duration-300">
                      <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--color-charcoal)] mb-3">
                        {entry.title}
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                        {entry.description}
                      </p>
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
