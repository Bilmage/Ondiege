import {contactData} from "@/data/contact";
import {SectionHeading} from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[var(--color-cream)] relative border-t border-[var(--color-charcoal)]/10"
      aria-label="Contact and Collaborations"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="05"
          label="05 / CONTACT"
          heading="For performance, collaboration, teaching and conversation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Curatorial & Collaborator Invitation Statement */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-body text-base sm:text-lg text-[var(--color-charcoal-light)] leading-relaxed">
              This is the professional home of Onyango Ondiege — a meeting point for programmers, festivals, curators, artists, researchers, media, and collaborators to encounter selected work and request further material.
            </p>

            <div className="p-6 sm:p-8 bg-[var(--color-cream-light)] border-l-4 border-[var(--color-burnt-orange)] border-y border-r border-[var(--color-charcoal)]/10 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-burnt-orange)] font-semibold block">
                INQUIRY AREAS
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body text-xs sm:text-sm text-[var(--color-charcoal-light)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)]" />
                  Performance Bookings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)]" />
                  International Residencies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)]" />
                  Mixed-Ability Workshops
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)]" />
                  Choreographic Commissions
                </li>
              </ul>
            </div>
          </div>

          {/* Directory / Contact Dossier Card */}
          <div className="lg:col-span-5 bg-[var(--color-charcoal)] text-[var(--color-cream)] p-8 sm:p-10 shadow-lg relative">
            <div className="absolute top-0 right-0 bg-[var(--color-burnt-orange)] text-[var(--color-cream-light)] px-3 py-1 font-mono text-[0.625rem] uppercase tracking-widest font-semibold">
              OFFICIAL CHANNELS
            </div>

            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--color-cream)] mb-6">
              Directory
            </h3>

            <div className="space-y-6 font-body text-xs sm:text-sm divide-y divide-[var(--color-cream)]/10">
              <div className="pt-4 first:pt-0">
                <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-burnt-orange-light)] block mb-1">
                  Email
                </span>
                <span className="text-[var(--color-neutral-light)] italic">
                  {contactData.email}
                </span>
              </div>

              <div className="pt-4">
                <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-burnt-orange-light)] block mb-1">
                  Phone / WhatsApp
                </span>
                <span className="text-[var(--color-neutral-light)] italic">
                  {contactData.phone}
                </span>
              </div>

              <div className="pt-4">
                <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-burnt-orange-light)] block mb-1">
                  Facebook
                </span>
                <a
                  href={contactData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-cream)] hover:text-[var(--color-burnt-orange-light)] underline underline-offset-4 transition-colors"
                >
                  facebook.com/ondiege.matthew ↗
                </a>
              </div>

              <div className="pt-4">
                <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-burnt-orange-light)] block mb-1">
                  Blog & Writings
                </span>
                <a
                  href={contactData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-cream)] hover:text-[var(--color-burnt-orange-light)] underline underline-offset-4 transition-colors"
                >
                  ondiegeogw.blogspot.com ↗
                </a>
              </div>

              <div className="pt-4">
                <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-burnt-orange-light)] block mb-1">
                  YouTube
                </span>
                <span className="text-[var(--color-neutral-light)] italic">
                  {contactData.youtube}
                </span>
              </div>

              <div className="pt-4">
                <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[var(--color-burnt-orange-light)] block mb-1">
                  Location Base
                </span>
                <span className="text-[var(--color-cream)]">
                  {contactData.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
