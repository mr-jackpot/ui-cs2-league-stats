interface PlayerSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
  hasResults?: boolean;
}

export function PlayerSearch({ value, onChange, onSubmit, loading, hasResults }: PlayerSearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={`transition-all duration-700 ease-out ${hasResults ? 'mb-8' : 'min-h-[55vh] flex flex-col justify-center'}`}>
      {!hasResults && (
        <div className="text-center mb-10 md:mb-12 px-4 animate-fade-in-up">
          {/* Icon */}
          <div className="relative inline-flex mb-6">
            <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary)] blur-2xl opacity-30" />
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-2xl">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-gradient">
            CSScout
          </h1>
          <p className="text-base-content/50 text-sm md:text-base max-w-md mx-auto">
            Scout player statistics from ESEA competitions
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto px-4">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/10 to-[var(--color-primary)]/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            <input
              type="text"
              placeholder="Search for a player..."
              className="w-full py-4 md:py-5 px-5 md:px-6 pr-16 md:pr-36 rounded-xl bg-base-100/80 backdrop-blur-sm border border-white/10 focus:border-[var(--color-primary)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all duration-300 text-base md:text-lg placeholder:text-base-content/30"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 md:px-5 md:py-2.5 rounded-lg font-semibold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:hover:scale-100 disabled:shadow-none"
              disabled={loading || !value.trim()}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  <svg className="w-5 h-5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="hidden md:flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {!hasResults && (
          <p className="text-center text-xs text-base-content/30 mt-4">
            Search by FACEIT nickname
          </p>
        )}
      </form>
    </div>
  );
}
