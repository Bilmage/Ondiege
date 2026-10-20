export interface SectionHeadingProps {
  label: string;
  heading: string;
  number?: string;
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  number,
  className = "",
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

      {/* Main heading */}
      <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        {heading}
      </h2>
    </div>
  );
}
