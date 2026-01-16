import type { Player } from '../types/api';
import { CountryFlag } from '../utils/countryFlag';

interface PlayerProfileProps {
  player: Player;
  onBack: () => void;
  children: React.ReactNode;
}

export function PlayerProfile({ player, onBack, children }: PlayerProfileProps) {
  return (
    <div className="glass rounded-2xl border border-white/5 overflow-hidden animate-fade-in-up">
      {/* Header with gradient background */}
      <div className="relative p-6 md:p-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--glass-bg)] to-transparent pointer-events-none" />

        <div className="relative flex items-center gap-5">
          {/* Avatar with country flag overlay */}
          <div className="relative flex-shrink-0">
            {player.avatar ? (
              <img
                src={player.avatar}
                alt={player.nickname}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl ring-4 ring-white/10 shadow-xl object-cover"
              />
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-xl">
                <span className="text-3xl font-black text-white">
                  {player.nickname.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            {/* Country flag badge */}
            <div className="absolute -bottom-2 -right-2 bg-base-100 rounded-md p-1 shadow-lg">
              <CountryFlag countryCode={player.country} className="w-7 h-5 rounded-sm" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white truncate mb-1">
              {player.nickname}
            </h2>
            <p className="text-base-content/50 text-sm">
              ESEA Competition History
            </p>
          </div>

          {/* Back button */}
          <button
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-base-content/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            onClick={onBack}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline">Back</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 pt-0 md:pt-0">
        {children}
      </div>
    </div>
  );
}
