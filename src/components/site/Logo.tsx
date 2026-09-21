export function Ginkgo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 58c-1.5-9-1.2-16-.4-22" />
      <path d="M31.6 36c-9 2-16-1-19.5-6.5C8 23.5 10 15 16.5 11c5-3 11 .5 13 8" />
      <path d="M32 36c9 2 16-1 19.5-6.5C56 23.5 54 15 47.5 11c-5-3-11 .5-13 8" />
      <path d="M32 36c-2-8-2-16 0-23" />
      <path d="M24 33c1-8 3.5-14 8-19" />
      <path d="M40 33c-1-8-3.5-14-8-19" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 text-current">
      <Ginkgo className="h-8 w-8 shrink-0 opacity-80" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display tracking-brand ${compact ? "text-base" : "text-lg"} uppercase`}
        >
          Olivia
        </span>
        <span className={`font-script ${compact ? "text-base" : "text-xl"} -mt-1 self-end pr-1`}>
          Atelier
        </span>
      </span>
    </span>
  );
}
