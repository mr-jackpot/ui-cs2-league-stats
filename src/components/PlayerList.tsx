import type { Player } from '../types/api';
import { countryCodeToFlag } from '../utils/countryFlag';

interface PlayerListProps {
  players: Player[];
  onSelect: (player: Player) => void;
}

export function PlayerList({ players, onSelect }: PlayerListProps) {
  if (players.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {players.map((player) => (
        <div
          key={player.player_id}
          className="flex items-center gap-4 p-3 rounded-lg bg-base-100/50 hover:bg-base-100 cursor-pointer transition-all duration-200 border border-transparent hover:border-[var(--color-cs2)]/30"
          onClick={() => onSelect(player)}
        >
          {player.avatar ? (
            <img
              src={player.avatar}
              alt={player.nickname}
              className="w-12 h-12 rounded-full ring-2 ring-base-content/10"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-base-300 flex items-center justify-center ring-2 ring-base-content/10">
              <span className="text-lg font-bold text-base-content/50">
                {player.nickname.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-base-content truncate">
              {player.nickname}
            </div>
            <div className="text-sm text-base-content/50">
              Click to view stats
            </div>
          </div>
          <span className="text-2xl" title={player.country}>
            {countryCodeToFlag(player.country)}
          </span>
          <svg
            className="w-5 h-5 text-base-content/30"
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
      ))}
    </div>
  );
}
