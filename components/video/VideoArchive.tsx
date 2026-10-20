"use client";

import { useState } from "react";
import Image from "next/image";
import { videosData } from "@/data/videos";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoJsPlayer } from "./VideoJsPlayer";

export function VideoArchive() {
  const [isPlayingFeatured, setIsPlayingFeatured] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const currentVideo = videosData[selectedVideoIndex] || videosData[0];

  const getEmbedUrl = (url: string, isPlaylist = false) => {
    if (isPlaylist && url.includes("playlist?list=")) {
      const listId = url.split("list=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/videoseries?list=${listId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster: currentVideo.thumbnail || "/kenya-sometimes/aWCa18V8.jpg",
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

        {/* Video Shelf Selector */}
        <div className="flex flex-wrap gap-4 mb-10">
          {videosData.map((v, i) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVideoIndex(i);
                setIsPlayingFeatured(false);
              }}
              className={`font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 border transition-all cursor-pointer ${selectedVideoIndex === i
                  ? "bg-[var(--color-burnt-orange)] text-white border-[var(--color-burnt-orange)]"
                  : "bg-[var(--color-cream-light)] text-[var(--color-charcoal)] border-[var(--color-charcoal)]/20 hover:border-[var(--color-burnt-orange)]"
                }`}
            >
              0{i + 1} {"//"} {v.title}
            </button>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            FEATURED VIDEO PLAYER (Video.js Architecture + YouTube Toggle)
           ══════════════════════════════════════════════════════════════ */}
        <div className="bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-charcoal)]/20 shadow-2xl overflow-hidden mb-16">
          <div className="flex flex-col xl:flex-row items-stretch">
            {/* Player Container - Constrained to 55-60% on XL screens, full width stacked on smaller screens */}
            <div className="w-full xl:w-[58%] relative aspect-video bg-black flex items-center justify-center shrink-0">
              {!isPlayingFeatured ? (
                <div
                  className="relative w-full h-full group cursor-pointer overflow-hidden"
                  onClick={() => setIsPlayingFeatured(true)}
                >
                  <Image
                    src={currentVideo.thumbnail || "/kenya-sometimes/aWCa18V8.jpg"}
                    alt={`${currentVideo.title} video cover`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 58vw"
                    className="object-cover object-center filter grayscale contrast-125 opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent opacity-80" />

                  {/* Circular Play Button (Reference 4 Motif) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      aria-label="Play video"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[var(--color-cream-light)] flex items-center justify-center backdrop-blur-sm bg-black/40 group-hover:scale-110 group-hover:border-[var(--color-burnt-orange)] group-hover:bg-[var(--color-burnt-orange)]/40 transition-all duration-300 cursor-pointer"
                    >
                      <svg
                        className="w-7 h-7 sm:w-9 sm:h-9 text-[var(--color-cream-light)] translate-x-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                    <span className="font-mono text-[0.625rem] sm:text-xs uppercase tracking-widest text-[var(--color-burnt-orange-light)] bg-black/60 px-2 py-1 border border-[var(--color-burnt-orange-light)]/30">
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

            {/* Placard / Curatorial Description Panel - Guaranteed 42% width on desktop, full width on laptop/tablet */}
            <div className="w-full xl:w-[42%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t xl:border-t-0 xl:border-l border-[var(--color-charcoal-mid)] bg-[var(--color-charcoal)]">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[var(--color-charcoal-mid)] gap-2 flex-wrap">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-burnt-orange-light)] font-bold">
                    {currentVideo.period}
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--color-cream)]/80 px-2 py-0.5 border border-[var(--color-cream)]/20 font-medium">
                    {currentVideo.type}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[var(--color-cream)] mb-4 break-words">
                  {currentVideo.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[var(--color-neutral-light)] leading-relaxed mb-6">
                  {currentVideo.description}
                </p>

                <div className="font-mono text-xs text-[var(--color-neutral-light)] space-y-2 border-t border-[var(--color-charcoal-mid)] pt-4">
                  <p>
                    <span className="text-[var(--color-neutral)] font-medium">PLAYER ENGINE:</span> Video.js HTML5
                  </p>
                  <p>
                    <span className="text-[var(--color-neutral)] font-medium">CHOREOGRAPHY:</span> Onyango Ondiege
                  </p>
                  <p>
                    <span className="text-[var(--color-neutral)] font-medium">FORMAT:</span>{" "}
                    {currentVideo.isPlaylist ? "YouTube Series / Playlist" : "Solo Soliloquy"}
                  </p>
                </div>
              </div>

              {/* YouTube Archival Stream Direct Link */}
              <div className="mt-8 pt-6 border-t border-[var(--color-charcoal-mid)] flex flex-col gap-3">
                <a
                  href={currentVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--color-burnt-orange-light)] hover:text-[var(--color-cream)] transition-colors p-3 bg-[var(--color-charcoal-light)] border border-[var(--color-charcoal-mid)] font-semibold"
                >
                  <span>{currentVideo.isPlaylist ? "Open YouTube Playlist" : "Watch on YouTube"}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            YOUTUBE EMBEDDED STREAM
           ══════════════════════════════════════════════════════════════ */}
        <div className="bg-[var(--color-cream-light)] border border-[var(--color-charcoal)]/15 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[var(--color-charcoal)]/10 gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-burnt-orange)] font-semibold block mb-1">
                STREAM ARCHIVE // {currentVideo.isPlaylist ? "PLAYLIST" : "PERFORMANCE"}
              </span>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--color-charcoal)]">
                {currentVideo.title}
              </h4>
            </div>
            <span className="font-mono text-xs text-[var(--color-neutral)]">
              {currentVideo.isPlaylist ? "MULTI-PART DOCUMENTATION" : "COMPLETE PERFORMANCE RECORDING"}
            </span>
          </div>

          <div className="aspect-video w-full bg-black overflow-hidden border border-[var(--color-charcoal)]/15 shadow-md">
            <iframe
              src={getEmbedUrl(currentVideo.youtubeUrl, currentVideo.isPlaylist)}
              title={`${currentVideo.title} - Official Video Stream`}
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
