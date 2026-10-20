"use client";

import { videosData } from "@/data/videos";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideoArchive() {
  return (
    <section
      id="video"
      className="py-24 md:py-32 bg-[var(--color-cream)] relative border-t border-[var(--color-charcoal)]/10"
      aria-label="Moving Image and Video Archive"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="03"
          label="03 / MOVING IMAGE"
          heading="Watch the work."
        />

        <p className="font-body text-sm sm:text-base text-[var(--color-neutral)] max-w-2xl mb-12 leading-relaxed">
          A curated video shelf rather than an endless feed. New work can be added here as it is selected and edited.
        </p>

        <div className="space-y-16">
          {videosData.map((video) => {
            const embedUrl = video.youtubeUrl.includes("watch?v=")
              ? video.youtubeUrl.replace("watch?v=", "embed/")
              : video.youtubeUrl;

            return (
              <div
                key={video.id}
                className="bg-[var(--color-cream-light)] border border-[var(--color-charcoal)]/15 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm"
              >
                {/* 16:9 Video Player Screen */}
                <div className="lg:col-span-8 bg-[var(--color-charcoal)] relative aspect-video flex items-center justify-center">
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>

                {/* Video Info Placard */}
                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[var(--color-charcoal)]/15">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-burnt-orange)]">
                        {video.period}
                      </span>
                      <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--color-neutral)] px-2 py-0.5 border border-[var(--color-charcoal)]/20">
                        {video.type}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--color-charcoal)] mb-4">
                      {video.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--color-charcoal)]/10 flex flex-col gap-3">
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-burnt-orange)] hover:text-[var(--color-burnt-orange-dark)] transition-colors"
                    >
                      <span>Open on YouTube</span>
                      <span>↗</span>
                    </a>
                    <span className="font-mono text-[0.625rem] text-[var(--color-neutral)] uppercase tracking-wider">
                      CHOREOGRAPHY & PERFORMANCE: ONYANGO ONDIEGE
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
