import Image from "next/image";
import { artistData } from "@/data/artist";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const paragraphs = artistData.biography.split("\n\n");

  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-[var(--color-cream)] relative overflow-hidden"
      aria-label="About the Artist"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="01"
          label="01 / ABOUT"
          heading="A life in movement."
        />

        {/* ══════════════════════════════════════════════════════════════
            Top Area: Asymmetrical Portrait & Editorial Lead-in
            (Inspired by Travis Colderichers / Carissa Leadge reference layouts)
           ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Portrait with wireframe + color accent offset */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div
              className="absolute -top-4 -left-4 w-3/4 h-3/4 border-2 border-[var(--color-burnt-orange)]/40 pointer-events-none z-0"
              aria-hidden="true"
            />
            <div className="relative z-10 aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-[var(--color-charcoal)] shadow-xl border border-[var(--color-charcoal)]/15">
              <Image
                src="/kenya-sometimes/IMG_9047.jpg"
                alt="Portrait of Onyango Ondiege OGW in performance costume"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter grayscale contrast-120"
                priority
              />
            </div>
            {/* Color block accent badge (Solid burnt orange, highly legible white text) */}
            <div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-36 sm:w-44 h-36 sm:h-44 bg-[var(--color-burnt-orange)] z-20 pointer-events-none p-4 flex flex-col justify-end text-white shadow-xl border border-[var(--color-cream-light)]/20"
              aria-hidden="true"
            >
              <span className="font-mono text-[0.625rem] text-white/90 uppercase tracking-widest font-bold drop-shadow-sm">
                PRACTICE // 33+ YRS
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-white uppercase mt-0.5 drop-shadow-sm">
                NAIROBI, KE
              </span>
            </div>
          </div>

          {/* Lead Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="border-l-2 border-[var(--color-burnt-orange)] pl-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-burnt-orange)] font-semibold block mb-2">
                ARTISTIC PHILOSOPHY
              </span>
              <p className="font-display text-2xl sm:text-3xl text-[var(--color-charcoal)] italic leading-snug">
                “His career in contemporary dance is shaped by the body, place, contradiction, memory, and the possibilities of making art in Kenya.”
              </p>
            </div>

            <p className="font-body text-base sm:text-lg text-[var(--color-charcoal-light)] leading-relaxed">
              {paragraphs[0]}
            </p>

            <p className="font-body text-sm sm:text-base text-[var(--color-charcoal-light)] leading-relaxed">
              {paragraphs[2]}
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            Bottom Area: Complete Biography & Archival Dossier Grid
           ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 border-t border-[var(--color-charcoal)]/15">
          {/* Detailed Biography Prose */}
          <div className="lg:col-span-7 space-y-5 text-[var(--color-charcoal-light)] font-body text-sm sm:text-base leading-relaxed">
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--color-charcoal)] mb-4">
              Lineage & Evolution
            </h4>
            <p>{paragraphs[3]}</p>
            <p>{paragraphs[4]}</p>
            <p>{paragraphs[1]}</p>
          </div>

          {/* Structured Dossier & Training Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Dossier Card */}
            <div className="bg-[var(--color-cream-light)] border border-[var(--color-charcoal)]/15 p-6 sm:p-8 relative shadow-sm">
              <div className="absolute top-0 right-0 bg-[var(--color-charcoal)] text-[var(--color-cream)] px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.2em]">
                DOSSIER // ARCHIVE
              </div>

              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-burnt-orange)] mb-6 font-semibold">
                Artist Information
              </h4>

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
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-burnt-orange)] mb-4 font-semibold">
                Formative Training
              </h4>

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
