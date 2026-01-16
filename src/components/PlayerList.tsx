import type { Player } from '../types/api';
import { CountryFlag } from '../utils/countryFlag';

interface PlayerListProps {
  players: Player[];
  onSelect: (player: Player) => void;
}

export function PlayerList({ players, onSelect }: PlayerListProps) {
  if (players.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {players.map((player) => (
        <div
          key={player.player_id}
          className="group relative flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-[var(--color-primary)]/30 cursor-pointer transition-all duration-300"
          onClick={() => onSelect(player)}
        >
          {/* Hover glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            {player.avatar ? (
              <img
                src={player.avatar}
                alt={player.nickname}
                className="w-14 h-14 rounded-xl ring-2 ring-white/10 group-hover:ring-[var(--color-primary)]/40 transition-all duration-300 object-cover"
              />
            ) : (
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-base-300 to-base-200 flex items-center justify-center ring-2 ring-white/10 group-hover:ring-[var(--color-primary)]/40 transition-all duration-300">
                <span className="text-xl font-bold text-base-content/40">
                  {player.nickname.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="relative flex-1 min-w-0">
            <div className="font-semibold text-base md:text-lg text-white/90 group-hover:text-white truncate transition-colors duration-200">
              {player.nickname}
            </div>
            <div className="flex items-center gap-2 text-sm text-base-content/40">
              <CountryFlag countryCode={player.country} className="w-5 h-3.5 rounded-sm" />
              <span>View profile</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="relative flex items-center">
            <svg
              className="w-5 h-5 text-base-content/20 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
