import { artistData } from "@/data/artist";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-cream)] pt-20"
      aria-label="Hero section"
    >
      {/* Video Background with Real Moving Video and Fallback Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 filter contrast-125 grayscale"
          poster="/nyanam/Nyanam3.jpg"
          aria-hidden="true"
        >
          <source src="/video/performance-reel-2.mp4" type="video/mp4" />
          <source src="/video/WhatsApp%20Video%202026-10-20%20at%2011.11.05.mp4" type="video/mp4" />
        </video>
        {/* Layered overlays: retro vignette and contrast treatment */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/85 via-[var(--color-charcoal)]/40 to-[var(--color-charcoal)]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--color-charcoal)]/40 to-[var(--color-charcoal)]" />
      </div>

      {/* Decorative Archival Frame Lines */}
      <div className="absolute inset-6 md:inset-10 border border-[var(--color-cream)]/10 pointer-events-none z-10 hidden sm:block">
        <div className="absolute top-0 left-0 p-3 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-cream)]/30">
          ARCHIVE // 1993–2026
        </div>
        <div className="absolute bottom-0 right-0 p-3 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-cream)]/30">
          NAIROBI · KENYA
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Eyebrow / Tagline */}
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 border border-[var(--color-burnt-orange)]/40 bg-[var(--color-charcoal)]/60 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)] animate-pulse" />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-[var(--color-cream)]">
            {artistData.location}
          </span>
        </div>

        {/* Main Artist Name */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--color-cream)] leading-[0.95] mb-4">
          Onyango Ondiege{" "}
          <span className="text-[var(--color-burnt-orange)] text-2xl sm:text-4xl md:text-5xl font-mono align-super font-semibold tracking-normal">
            OGW
          </span>
        </h1>

        {/* Profession */}
        <p className="font-mono text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase text-[var(--color-cream)]/80 mb-8">
          {artistData.profession}
        </p>

        {/* Thin Archival Divider */}
        <div className="w-20 h-px bg-[var(--color-burnt-orange)] mb-10" />

        {/* Core Philosophy Quotation */}
        <blockquote className="max-w-2xl mb-8">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl italic font-normal text-[var(--color-cream-light)] leading-snug">
            “{artistData.quote}”
          </p>
        </blockquote>

        {/* Kenya Sometimes Solo Inquiry Description */}
        <p className="max-w-xl font-body text-xs sm:text-sm text-[var(--color-neutral-light)] leading-relaxed mb-12">
          {artistData.kenyaSometimes}
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-burnt-orange)] text-[var(--color-cream-light)] font-mono text-xs uppercase tracking-[0.18em] font-medium hover:bg-[var(--color-burnt-orange-dark)] transition-colors duration-300"
          >
            Explore Archive
          </a>
          <a
            href="#works"
            className="w-full sm:w-auto px-8 py-3.5 border border-[var(--color-cream)]/30 text-[var(--color-cream)] font-mono text-xs uppercase tracking-[0.18em] hover:border-[var(--color-burnt-orange)] hover:text-[var(--color-burnt-orange-light)] transition-colors duration-300"
          >
            Watch The Work
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-cream)]/50">
          SCROLL
        </span>
        <div className="w-px h-8 bg-[var(--color-burnt-orange)]/60 scroll-indicator-line" />
      </div>
    </section>
  );
}
