"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-8 right-8 z-50 p-3 sm:px-4 sm:py-3 bg-[var(--color-charcoal)] text-[var(--color-cream-light)] border border-[var(--color-burnt-orange)]/60 hover:bg-[var(--color-burnt-orange)] hover:text-white transition-all duration-300 shadow-2xl flex items-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-burnt-orange)]"
    >
      <span className="font-mono text-xs select-none">▲</span>
      <span className="font-mono text-[0.625rem] sm:text-xs uppercase tracking-[0.2em] font-semibold hidden sm:inline-block">
        TOP
      </span>
      <span
        className="text-[var(--color-burnt-orange-light)] group-hover:text-white font-mono text-[0.625rem] tracking-tighter hidden md:inline-block"
        aria-hidden="true"
      >
        |||
      </span>
    </button>
  );
}
