"use client";

import { useState } from "react";
import Image from "next/image";
import { videosData } from "@/data/videos";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoJsPlayer } from "./VideoJsPlayer";

export function VideoArchive() {
  const [isPlayingFeatured, setIsPlayingFeatured] = useState(false);

  const primaryVideo = videosData[0];
  const youtubeEmbedUrl = primaryVideo.youtubeUrl.includes("watch?v=")
    ? primaryVideo.youtubeUrl.replace("watch?v=", "embed/")
    : primaryVideo.youtubeUrl;

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster: "/aWCa18V8.jpg",
    sources: [
      {
        src: "/hero-video.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <section
      id="video"
      className="py-24 md:py-36 bg-[var(--color-cream)] relative border-t border-[var(--color-charcoal)]/10"
      aria-label="Moving Image and Video Archive"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="03"
          label="03 / MOVING IMAGE"
          heading="Watch the work."
        />

        <p className="font-body text-base text-[var(--color-neutral)] max-w-2xl mb-14 leading-relaxed">
          A curated video shelf rather than an endless feed. New work can be added here as it is selected and edited.
        </p>

        {/* ══════════════════════════════════════════════════════════════
            FEATURED PERFORMANCE PLAYER (Video.js Architecture)
            - Circular play button aesthetic directly matching reference screenshot 4
            - Seamless switch between archival cover and Video.js playback
           ══════════════════════════════════════════════════════════════ */}
        <div className="bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-charcoal)]/20 shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Player Container */}
            <div className="lg:col-span-8 relative aspect-video bg-black flex items-center justify-center">
              {!isPlayingFeatured ? (
                <div className="relative w-full h-full group cursor-pointer overflow-hidden" onClick={() => setIsPlayingFeatured(true)}>
                  <Image
                    src="/aWCa18V8.jpg"
                    alt="Onyango Ondiege performing Kenya Sometimes - Video Cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center filter grayscale contrast-125 opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent opacity-80" />

                  {/* Circular Play Button (Direct reproduction of Reference 4) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      aria-label="Play video"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[var(--color-cream-light)] flex items-center justify-center backdrop-blur-sm bg-black/30 group-hover:scale-110 group-hover:border-[var(--color-burnt-orange)] group-hover:bg-[var(--color-burnt-orange)]/20 transition-all duration-300"
                    >
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-cream-light)] translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-burnt-orange-light)]">
                      CLICK TO INITIATE VIDEO.JS ARCHIVE PLAYER
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full">
                  <VideoJsPlayer options={videoJsOptions} />
                </div>
              )}
            </div>

            {/* Placard / Curatorial Description Panel (Matching Reference 4 Typography) */}
            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[var(--color-charcoal-mid)] bg-[var(--color-charcoal)]">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[var(--color-charcoal-mid)]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-burnt-orange-light)] font-semibold">
                    {primaryVideo.period}
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--color-cream)]/70 px-2 py-0.5 border border-[var(--color-cream)]/20">
                    {primaryVideo.type}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--color-cream)] mb-4">
                  {primaryVideo.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[var(--color-neutral-light)] leading-relaxed mb-6">
                  {primaryVideo.description}
                </p>

                <div className="font-mono text-xs text-[var(--color-neutral-light)] space-y-2 border-t border-[var(--color-charcoal-mid)] pt-4">
                  <p>
                    <span className="text-[var(--color-neutral)]">PLAYER ENGINE:</span> Video.js HTML5
                  </p>
                  <p>
                    <span className="text-[var(--color-neutral)]">CHOREOGRAPHY:</span> Onyango Ondiege
                  </p>
                  <p>
                    <span className="text-[var(--color-neutral)]">LOCATION:</span> Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* YouTube Archival Stream Link & Switcher */}
              <div className="mt-8 pt-6 border-t border-[var(--color-charcoal-mid)] flex flex-col gap-3">
                <a
                  href={primaryVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--color-burnt-orange-light)] hover:text-[var(--color-cream)] transition-colors p-3 bg-[var(--color-charcoal-light)] border border-[var(--color-charcoal-mid)]"
                >
                  <span>Watch on YouTube</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            YOUTUBE ARCHIVAL FEED (Secondary Curated Stream)
           ══════════════════════════════════════════════════════════════ */}
        <div className="bg-[var(--color-cream-light)] border border-[var(--color-charcoal)]/15 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[var(--color-charcoal)]/10 gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-burnt-orange)] font-semibold block mb-1">
                STREAM ARCHIVE
              </span>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--color-charcoal)]">
                YouTube Official Performance Recording
              </h4>
            </div>
            <span className="font-mono text-xs text-[var(--color-neutral)]">
              SOLO SOLILOQUY // COMPLETE RECORDING
            </span>
          </div>

          <div className="aspect-video w-full bg-black overflow-hidden border border-[var(--color-charcoal)]/15 shadow-md">
            <iframe
              src={youtubeEmbedUrl}
              title={`${primaryVideo.title} - Official Video Stream`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
