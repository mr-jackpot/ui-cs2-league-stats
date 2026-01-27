interface NoResultsFoundProps {
  query: string;
}

export function NoResultsFound({ query }: NoResultsFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in-up">
      {/* Icon with glow effect */}
      <div className="relative inline-flex mb-6">
        <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary)] blur-2xl opacity-20" />
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-base-content/10 to-base-content/5 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm">
          {/* Search icon with X overlay */}
          <svg className="w-8 h-8 md:w-10 md:h-10 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9l4 4m0-4l-4 4" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-base-content/80 mb-2">
        No players found
      </h3>

      {/* Query display */}
      <p className="text-base-content/40 text-sm md:text-base mb-4 text-center">
        No results for{' '}
        <span className="text-[var(--color-primary)] font-medium">"{query}"</span>
      </p>

      {/* Suggestion */}
      <div className="flex items-center gap-2 text-xs md:text-sm text-base-content/30 bg-base-100/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5">
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Try a different spelling or search term</span>
      </div>
    </div>
  );
}
