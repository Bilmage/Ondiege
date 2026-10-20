import { RetroArrows } from "./RetroArrows";

export interface SectionHeadingProps {
  label: string;
  heading: string;
  number?: string;
  className?: string;
  showArrows?: boolean;
}

export function SectionHeading({
  label,
  heading,
  number,
  className = "",
  showArrows = true,
}: SectionHeadingProps) {
  return (
    <div className={`relative mb-16 md:mb-20 ${className}`}>
      {/* Oversized background number */}
      {number && (
        <span className="section-number -top-8 -left-4" aria-hidden="true">
          {number}
        </span>
      )}

      {/* Eyebrow label */}
      <span className="eyebrow-label block mb-5">{label}</span>

      {/* Thin accent divider */}
      <div className="thin-divider mb-6" aria-hidden="true" />

      {/* Main heading with RetroArrows component */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {heading}
        </h2>
        {showArrows && <RetroArrows className="self-center mt-1" />}
      </div>
    </div>
  );
}

