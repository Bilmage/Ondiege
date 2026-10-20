export interface RetroArrowsProps {
  className?: string;
}

export function RetroArrows({ className = "" }: RetroArrowsProps) {
  return (
    <div
      className={`hidden sm:inline-flex items-center gap-2 text-[var(--color-burnt-orange)] ${className}`}
      aria-hidden="true"
    >
      <span className="text-xl leading-none select-none">◀</span>
      <span className="text-xl leading-none select-none">◀</span>
      <span className="font-mono tracking-tighter text-sm leading-none select-none">
        |||||
      </span>
    </div>
  );
}
