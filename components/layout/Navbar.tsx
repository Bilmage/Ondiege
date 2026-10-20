"use client";

import {useEffect, useState} from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Contact Us", href: "#contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--color-cream)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,23,20,0.08)]"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="relative z-50 group"
            aria-label="Onyango Ondiege — Home"
          >
            <span
              className={`font-display text-lg md:text-xl font-bold tracking-tight transition-colors duration-500 ${
                isScrolled || isOpen
                  ? "text-[var(--color-charcoal)]"
                  : "text-[var(--color-cream)]"
              }`}
            >
              ONDIEGE
            </span>
            <span
              className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] block -mt-1 transition-colors duration-500 ${
                isScrolled || isOpen
                  ? "text-[var(--color-burnt-orange)]"
                  : "text-[var(--color-burnt-orange-light)]"
              }`}
            >
              OGW
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-[0.6875rem] uppercase tracking-[0.15em] link-underline transition-colors duration-300 ${
                  isScrolled
                    ? "text-[var(--color-charcoal)] hover:text-[var(--color-burnt-orange)]"
                    : "text-[var(--color-cream)]/80 hover:text-[var(--color-cream)]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden w-10 h-10 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${
                  isScrolled || isOpen
                    ? "bg-[var(--color-charcoal)]"
                    : "bg-[var(--color-cream)]"
                } ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] transition-all duration-300 ${
                  isScrolled || isOpen
                    ? "bg-[var(--color-charcoal)]"
                    : "bg-[var(--color-cream)]"
                } ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${
                  isScrolled || isOpen
                    ? "bg-[var(--color-charcoal)]"
                    : "bg-[var(--color-cream)]"
                } ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[var(--color-cream)] z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-4"
            >
              <span className="font-mono text-[0.6rem] text-[var(--color-burnt-orange)] tracking-[0.2em]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-3xl font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-burnt-orange)] transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile menu footer */}
        <div className="absolute bottom-12 text-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-neutral-light)]">
            Nairobi · Kenya · East Africa
          </p>
        </div>
      </div>
    </nav>
  );
}
