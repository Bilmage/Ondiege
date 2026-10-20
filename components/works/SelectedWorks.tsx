"use client";

import {useState} from "react";
import Image from "next/image";
import {WorkMediaItem, worksData} from "@/data/works";
import {SectionHeading} from "@/components/ui/SectionHeading";

export function SelectedWorks() {
  const kenyaSometimes = worksData.find((w) => w.id === "kenya-sometimes") || worksData[0];
  const nyanamWork = worksData.find((w) => w.id === "nyanam");
  const otherWorks = worksData.filter((w) => w.id !== "kenya-sometimes" && w.id !== "nyanam");

  // Tab state for Portfolio view: 'all' | 'kenya-sometimes' | 'nyanam'
  const [activeTab, setActiveTab] = useState<"all" | "kenya-sometimes" | "nyanam">("all");
  const [showKenyaVideo, setShowKenyaVideo] = useState(false);
  const [showNyanamVideo, setShowNyanamVideo] = useState(false);

  // Helper to extract clean YouTube embed URL (works for normal video & playlists)
  const getEmbedUrl = (url?: string, isPlaylist = false) => {
    if (!url) return "";
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

  // Compile items to display in the 3-column portfolio gallery based on tab
  const getPortfolioItems = (): Array<{
    item: WorkMediaItem;
    projectTitle: string;
    projectPeriod: string;
    projectId: string;
  }> => {
    const items: Array<{
      item: WorkMediaItem;
      projectTitle: string;
      projectPeriod: string;
      projectId: string;
    }> = [];

    if (activeTab === "all" || activeTab === "kenya-sometimes") {
      kenyaSometimes.gallery?.forEach((m) => {
        items.push({
          item: m,
          projectTitle: kenyaSometimes.title,
          projectPeriod: kenyaSometimes.period,
          projectId: kenyaSometimes.id,
        });
      });
    }

    if (activeTab === "all" || activeTab === "nyanam") {
      nyanamWork?.gallery?.forEach((m) => {
        items.push({
          item: m,
          projectTitle: nyanamWork.title,
          projectPeriod: nyanamWork.period,
          projectId: nyanamWork.id,
        });
      });
    }

    if (activeTab === "all") {
      otherWorks.forEach((work) => {
        work.gallery?.forEach((m) => {
          items.push({
            item: m,
            projectTitle: work.title,
            projectPeriod: work.period,
            projectId: work.id,
          });
        });
      });
    }

    return items;
  };

  const portfolioItems = getPortfolioItems();

  return (
    <section
      id="works"
      className="py-24 md:py-36 bg-[var(--color-cream-light)] relative border-t border-[var(--color-charcoal)]/10 overflow-hidden"
      aria-label="Selected Works & Portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="02"
          label="02 / SELECTED WORKS & PORTFOLIO"
          heading="The work is the archive."
        />

        {/* ══════════════════════════════════════════════════════════════
            1. PRIMARY SPOTLIGHT: KENYA SOMETIMES (Leading Current Production)
            - Visually dominant hero spread matching Vibez reference
            - Integrated live YouTube video toggle with Video.js aesthetic
           ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-burnt-orange)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-burnt-orange)] font-bold">
              CURRENT PRODUCTION // LEAD INQUIRY (2026)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Overlapping Image / Embedded Video */}
            <div className="lg:col-span-7 relative">
              {/* Outline Wireframe Motif */}
              <div
                className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-4/5 h-4/5 border-2 border-[var(--color-burnt-orange)]/40 pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Main Media Showcase */}
              <div className="relative z-10 aspect-[3/4] sm:aspect-[4/5] max-h-[660px] w-full overflow-hidden bg-[var(--color-charcoal)] shadow-2xl border border-[var(--color-charcoal)]/15">
                {!showKenyaVideo ? (
                  <div className="relative w-full h-full group">
                    <Image
                      src={kenyaSometimes.image}
                      alt={kenyaSometimes.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/85 via-transparent to-transparent pointer-events-none" />

                    {/* Circular Play Button to trigger embedded YouTube performance */}
                    <button
                      type="button"
                      onClick={() => setShowKenyaVideo(true)}
                      className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:border-[var(--color-burnt-orange)] group-hover:bg-[var(--color-burnt-orange)]/80 transition-all duration-300 shadow-xl cursor-pointer"
                      aria-label="Play Kenya Sometimes performance video"
                    >
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>

                    <div className="absolute top-4 left-4 z-20">
                      <span className="font-mono text-[0.625rem] uppercase tracking-widest px-2.5 py-1 bg-[var(--color-charcoal)] text-[var(--color-cream-light)] border border-white/20">
                        CLICK TO WATCH RECORDING
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative bg-black">
                    <iframe
                      src={`${getEmbedUrl(kenyaSometimes.youtubeUrl)}?autoplay=1`}
                      title="Kenya Sometimes Performance"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                    <button
                      onClick={() => setShowKenyaVideo(false)}
                      className="absolute top-3 right-3 z-30 px-3 py-1 bg-[var(--color-charcoal)]/90 text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--color-burnt-orange)] transition-colors"
                    >
                      ✕ Close Video
                    </button>
                  </div>
                )}
              </div>

              {/* Red Accent Geometry Box (Reference Motif with high-contrast readable typography) */}
              <div
                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-52 sm:w-64 md:w-72 h-44 sm:h-52 md:h-60 bg-[var(--color-burnt-orange)] z-20 pointer-events-none flex flex-col justify-end p-5 text-white shadow-2xl border border-[var(--color-cream-light)]/20"
                aria-hidden="true"
              >
                <span className="font-mono text-[0.625rem] sm:text-xs tracking-[0.25em] uppercase font-bold text-white/90 drop-shadow-md">
                  SOLO INQUIRY // 2026
                </span>
                <span className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight text-white mt-1 drop-shadow-md">
                  KENYA SOMETIMES
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Text & Live Video Link */}
            <div className="lg:col-span-5 space-y-6 pt-6 lg:pt-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-burnt-orange)] font-semibold">
                  01 // FEATURED
                </span>
                <span className="w-8 h-px bg-[var(--color-burnt-orange)]" />
                <span className="font-mono text-xs tracking-wider text-[var(--color-neutral)]">
                  {kenyaSometimes.period}
                </span>
              </div>

              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--color-charcoal)] leading-[0.98]">
                  {kenyaSometimes.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-burnt-orange)] mt-2 font-medium">
                  {kenyaSometimes.category}
                </p>
              </div>

              <p className="font-body text-base text-[var(--color-charcoal-light)] leading-relaxed pt-2">
                {kenyaSometimes.description}
              </p>

              {kenyaSometimes.curatorialQuote && (
                <blockquote className="border-l-2 border-[var(--color-burnt-orange)] pl-4 py-1 italic font-display text-lg text-[var(--color-charcoal)]">
                  “{kenyaSometimes.curatorialQuote}”
                </blockquote>
              )}

              {/* Watch Video Direct Action */}
              <div className="pt-2">
                <a
                  href={kenyaSometimes.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] px-5 py-3 bg-[var(--color-burnt-orange)] text-[var(--color-cream-light)] hover:bg-[var(--color-burnt-orange-dark)] transition-colors shadow-sm"
                >
                  <span>Watch on YouTube</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Archival metadata ledger */}
              {kenyaSometimes.metaDetails && (
                <div className="pt-4 border-t border-[var(--color-charcoal)]/10 space-y-1.5 font-mono text-xs text-[var(--color-neutral-dark)]">
                  <p className="flex justify-between">
                    <span className="text-[var(--color-neutral)]">LOCATION:</span>
                    <span className="font-semibold">{kenyaSometimes.metaDetails.creation}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[var(--color-neutral)]">MEDIUM:</span>
                    <span className="font-semibold">{kenyaSometimes.metaDetails.medium}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[var(--color-neutral)]">STATUS:</span>
                    <span className="font-semibold text-[var(--color-burnt-orange)]">
                      {kenyaSometimes.metaDetails.status}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. SECONDARY SPOTLIGHT: NYANAM (Daughter of the Lake)
            - Equal architectural stature with rich photography from public/nyanam
            - Integrated multi-part YouTube Playlist stream player
           ══════════════════════════════════════════════════════════════ */}
        {nyanamWork && (
          <div className="mb-24 md:mb-32 pt-16 border-t border-[var(--color-charcoal)]/15">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-charcoal)]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-burnt-orange)] font-bold">
                STAGE & MIXED-ABILITY REPERTOIRE (2023–2024)
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Text Description & Playlist Access Column */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-burnt-orange)] font-semibold">
                    02 // ENSEMBLE
                  </span>
                  <span className="w-8 h-px bg-[var(--color-burnt-orange)]" />
                  <span className="font-mono text-xs tracking-wider text-[var(--color-neutral)]">
                    {nyanamWork.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--color-charcoal)] leading-[0.98]">
                    {nyanamWork.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-burnt-orange)] mt-2 font-medium">
                    {nyanamWork.category}
                  </p>
                </div>

                <p className="font-body text-base text-[var(--color-charcoal-light)] leading-relaxed pt-2">
                  {nyanamWork.description}
                </p>

                {nyanamWork.curatorialQuote && (
                  <blockquote className="border-l-2 border-[var(--color-burnt-orange)] pl-4 py-1 italic font-display text-lg text-[var(--color-charcoal)]">
                    “{nyanamWork.curatorialQuote}”
                  </blockquote>
                )}

                {/* Playlist Action */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setShowNyanamVideo(!showNyanamVideo)}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] px-5 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream-light)] hover:bg-[var(--color-burnt-orange)] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>{showNyanamVideo ? "Hide Playlist Stream" : "Watch Official Playlist"}</span>
                    <span>▶</span>
                  </button>

                  <a
                    href={nyanamWork.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] px-5 py-3 border border-[var(--color-charcoal)]/30 text-[var(--color-charcoal)] hover:border-[var(--color-burnt-orange)] hover:text-[var(--color-burnt-orange)] transition-colors"
                  >
                    <span>Open Playlist ↗</span>
                  </a>
                </div>

                {/* Archival metadata ledger */}
                {nyanamWork.metaDetails && (
                  <div className="pt-4 border-t border-[var(--color-charcoal)]/10 space-y-1.5 font-mono text-xs text-[var(--color-neutral-dark)]">
                    <p className="flex justify-between">
                      <span className="text-[var(--color-neutral)]">CREATION:</span>
                      <span className="font-semibold">{nyanamWork.metaDetails.creation}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[var(--color-neutral)]">MEDIUM:</span>
                      <span className="font-semibold">{nyanamWork.metaDetails.medium}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[var(--color-neutral)]">STATUS:</span>
                      <span className="font-semibold text-[var(--color-burnt-orange)]">
                        {nyanamWork.metaDetails.status}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Right Media Column: Nyanam Imagery or Embedded Playlist */}
              <div className="lg:col-span-7 relative order-1 lg:order-2">
                <div
                  className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-4/5 h-4/5 border-2 border-[var(--color-charcoal)]/30 pointer-events-none z-0"
                  aria-hidden="true"
                />

                <div className="relative z-10 aspect-[3/4] sm:aspect-[4/5] max-h-[660px] w-full overflow-hidden bg-[var(--color-charcoal)] shadow-2xl border border-[var(--color-charcoal)]/15">
                  {!showNyanamVideo ? (
                    <div className="relative w-full h-full group">
                      <Image
                        src={nyanamWork.image}
                        alt={nyanamWork.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-center filter contrast-115 grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/85 via-transparent to-transparent pointer-events-none" />

                      {/* Play Button Trigger for Playlist */}
                      <button
                        type="button"
                        onClick={() => setShowNyanamVideo(true)}
                        className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:border-[var(--color-burnt-orange)] group-hover:bg-[var(--color-burnt-orange)]/80 transition-all duration-300 shadow-xl cursor-pointer"
                        aria-label="Play Nyanam playlist"
                      >
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 text-white translate-x-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>

                      <div className="absolute top-4 left-4 z-20">
                        <span className="font-mono text-[0.625rem] uppercase tracking-widest px-2.5 py-1 bg-[var(--color-charcoal)] text-[var(--color-cream-light)] border border-white/20">
                          NYANAM // YOUTUBE PLAYLIST
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full relative bg-black">
                      <iframe
                        src={`${getEmbedUrl(nyanamWork.youtubeUrl, true)}&autoplay=1`}
                        title="Nyanam YouTube Playlist"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                      <button
                        onClick={() => setShowNyanamVideo(false)}
                        className="absolute top-3 right-3 z-30 px-3 py-1 bg-[var(--color-charcoal)]/90 text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--color-burnt-orange)] transition-colors"
                      >
                        ✕ Close Playlist
                      </button>
                    </div>
                  )}
                </div>

                {/* Accent geometry placard for Nyanam */}
                <div
                  className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-52 sm:w-64 md:w-72 h-44 sm:h-52 md:h-60 bg-[var(--color-charcoal)] z-20 pointer-events-none flex flex-col justify-end p-5 text-white shadow-2xl border border-[var(--color-cream-light)]/20"
                  aria-hidden="true"
                >
                  <span className="font-mono text-[0.625rem] sm:text-xs tracking-[0.25em] uppercase font-bold text-[var(--color-burnt-orange)]">
                    STAGE ARCHIVE // 2023–2024
                  </span>
                  <span className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight text-white mt-1">
                    NYANAM
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            3. PORTFOLIO TABS SECTION (Direct Reproduction of Vibez Screenshot)
            - Tabs: "SHOW ALL", "KENYA SOMETIMES", "NYANAM"
            - 3-Column Image-Led Gallery with hover effects and clean captions
           ══════════════════════════════════════════════════════════════ */}
        <div className="pt-20 border-t border-[var(--color-charcoal)]/15">
          {/* Header Title with Graphic Arrow Accent (Matching Reference 2) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8">
            <div className="flex items-center gap-6">
              <h4 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--color-charcoal)]">
                PORTFOLIO
              </h4>
              <div className="hidden sm:flex items-center gap-2 text-[var(--color-burnt-orange)]" aria-hidden="true">
                <span className="text-xl">◀</span>
                <span className="text-xl">◀</span>
                <span className="font-mono tracking-tighter text-sm">|||||</span>
              </div>
            </div>

            <p className="font-body text-sm sm:text-base text-[var(--color-charcoal-light)] max-w-md leading-relaxed font-medium">
              Curated visual index of performance photography and choreographic archives across solo and ensemble inquiries.
            </p>
          </div>

          {/* Interactive Filter Tabs (SHOW ALL / KENYA SOMETIMES / NYANAM) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 mb-12 border-b border-[var(--color-charcoal)]/15 pb-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`font-mono text-xs uppercase tracking-[0.2em] pb-2 transition-all relative cursor-pointer ${activeTab === "all"
                ? "text-[var(--color-burnt-orange)] font-bold"
                : "text-[var(--color-neutral-dark)] hover:text-[var(--color-charcoal)] font-semibold"
                }`}
            >
              SHOW ALL
              {activeTab === "all" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-burnt-orange)]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("kenya-sometimes")}
              className={`font-mono text-xs uppercase tracking-[0.2em] pb-2 transition-all relative cursor-pointer ${activeTab === "kenya-sometimes"
                ? "text-[var(--color-burnt-orange)] font-bold"
                : "text-[var(--color-neutral-dark)] hover:text-[var(--color-charcoal)] font-semibold"
                }`}
            >
              KENYA SOMETIMES
              {activeTab === "kenya-sometimes" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-burnt-orange)]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("nyanam")}
              className={`font-mono text-xs uppercase tracking-[0.2em] pb-2 transition-all relative cursor-pointer ${activeTab === "nyanam"
                ? "text-[var(--color-burnt-orange)] font-bold"
                : "text-[var(--color-neutral-dark)] hover:text-[var(--color-charcoal)] font-semibold"
                }`}
            >
              NYANAM
              {activeTab === "nyanam" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-burnt-orange)]" />
              )}
            </button>
          </div>

          {/* 3-Column Performance Photography Grid (Vibez Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {portfolioItems.map((entry, idx) => (
              <article
                key={`${entry.projectId}-${idx}`}
                className="group flex flex-col bg-[var(--color-cream-light)] border-2 border-[var(--color-charcoal)]/20 hover:border-[var(--color-burnt-orange)] transition-all duration-300 shadow-md overflow-hidden"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-charcoal)]">
                  <Image
                    src={entry.item.url}
                    alt={entry.item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="font-mono text-[0.625rem] sm:text-xs uppercase tracking-[0.2em] px-2.5 py-1 bg-[var(--color-charcoal)] text-white border border-white/30 font-semibold shadow-sm">
                      {entry.item.categoryTag || entry.projectTitle}
                    </span>
                  </div>
                </div>

                {/* Caption Bar (High contrast and clearly legible) */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[var(--color-cream-light)] border-t border-[var(--color-charcoal)]/15">
                  <div>
                    <h5 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--color-charcoal)] group-hover:text-[var(--color-burnt-orange)] transition-colors mb-2 leading-tight">
                      {entry.item.caption || entry.projectTitle}
                    </h5>
                    <p className="font-mono text-xs sm:text-sm text-[var(--color-burnt-orange)] uppercase tracking-wider font-semibold">
                      {entry.projectTitle} · {entry.projectPeriod}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
