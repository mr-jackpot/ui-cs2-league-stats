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
    <div className={`transition-all duration-500 ${hasResults ? 'mb-8' : 'min-h-[50vh] flex flex-col justify-center'}`}>
      {!hasResults && (
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-cs2)' }}>
            CS2 League Stats
          </h1>
          <p className="text-base-content/60">
            Search for players and view their ESEA competition statistics
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search player by nickname..."
            className="w-full py-4 px-6 pr-32 rounded-full bg-base-100 border-2 border-base-content/10 focus:border-[var(--color-cs2)] focus:outline-none transition-colors text-lg"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50"
            style={{
              backgroundColor: 'var(--color-cs2)',
              color: 'white',
            }}
            disabled={loading || !value.trim()}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
