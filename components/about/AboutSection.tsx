import { artistData } from "@/data/artist";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const paragraphs = artistData.biography.split("\n\n");

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[var(--color-cream)] relative overflow-hidden"
      aria-label="About the Artist"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="01"
          label="01 / ABOUT"
          heading="A life in movement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Biography Column - Editorial Prose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-[var(--color-burnt-orange)] pl-6 mb-8">
              <p className="font-display text-xl sm:text-2xl text-[var(--color-charcoal)] italic leading-relaxed">
                “His career in contemporary dance is shaped by the body, place, contradiction, memory, and the possibilities of making art in Kenya.”
              </p>
            </div>

            <div className="space-y-5 text-[var(--color-charcoal-light)] font-body text-base sm:text-lg leading-relaxed">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-justify sm:text-left">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Structured Artist Archive & Training Info Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Dossier Card */}
            <div className="bg-[var(--color-cream-light)] border border-[var(--color-charcoal)]/15 p-6 sm:p-8 relative shadow-sm">
              <div className="absolute top-0 right-0 bg-[var(--color-charcoal)] text-[var(--color-cream)] px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
                DOSSIER // ARCHIVE
              </div>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-burnt-orange)] mb-6 font-semibold">
                Artist Information
              </h3>

              <dl className="space-y-4 font-body divide-y divide-[var(--color-charcoal)]/10 text-sm">
                <div className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-neutral)]">
                    Practice
                  </dt>
                  <dd className="text-[var(--color-charcoal)] font-medium sm:text-right">
                    {artistData.practice}
                  </dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-neutral)]">
                    Base
                  </dt>
                  <dd className="text-[var(--color-charcoal)] font-medium sm:text-right">
                    {artistData.base}
                  </dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-neutral)]">
                    Career
                  </dt>
                  <dd className="text-[var(--color-charcoal)] font-medium sm:text-right">
                    {artistData.careerDuration}
                  </dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-neutral)]">
                    Founded
                  </dt>
                  <dd className="text-[var(--color-charcoal)] font-medium sm:text-right">
                    {artistData.founded}
                  </dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-neutral)]">
                    Honour
                  </dt>
                  <dd className="text-[var(--color-burnt-orange)] font-semibold sm:text-right">
                    {artistData.honour}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Training Subsection */}
            <div className="bg-[var(--color-cream-light)] border border-[var(--color-charcoal)]/15 p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-burnt-orange)] mb-4 font-semibold">
                Formative Training
              </h3>

              <ul className="space-y-3 font-body text-sm text-[var(--color-charcoal-light)]">
                {artistData.training.map((institution, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[var(--color-burnt-orange)] mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="font-medium text-[var(--color-charcoal)]">
                      {institution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
