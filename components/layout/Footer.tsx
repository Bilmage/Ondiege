import {contactData} from "@/data/contact";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="relative bg-[var(--color-charcoal)] text-[var(--color-cream)] overflow-hidden"
      role="contentinfo"
    >
      {/* Top accent line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-burnt-orange)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Identity */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              Onyango Ondiege
            </h3>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-burnt-orange)] mb-4">
              OGW
            </p>
            <p className="font-body text-sm text-[var(--color-neutral-light)] leading-relaxed max-w-sm">
              Artist · Choreographer · Performer
              <br />
              Founder of Dance Into Space · 1997
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-neutral-light)] mb-5">
              Links
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={contactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-burnt-orange)] transition-colors duration-300"
              >
                Facebook →
              </a>
              <a
                href={contactData.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-burnt-orange)] transition-colors duration-300"
              >
                Blog →
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-4 md:text-right">
            <h4 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-neutral-light)] mb-5">
              Location
            </h4>
            <p className="font-body text-sm text-[var(--color-cream)]/70">
              {contactData.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-[var(--color-cream)]/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[var(--color-neutral)]">
            © {currentYear} Onyango Ondiege. All rights reserved.
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[var(--color-neutral)]">
            Dance Into Space · Nairobi
          </p>
        </div>
      </div>

      {/* Oversized decorative text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <p className="font-display text-[8rem] md:text-[14rem] font-bold text-[var(--color-cream)] opacity-[0.02] leading-none whitespace-nowrap translate-y-[30%]">
          ONDIEGE OGW
        </p>
      </div>
    </footer>
  );
}
