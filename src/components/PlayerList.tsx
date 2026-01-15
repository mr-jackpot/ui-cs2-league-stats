import type { Player } from '../types/api';

interface PlayerListProps {
  players: Player[];
  onSelect: (player: Player) => void;
}

export function PlayerList({ players, onSelect }: PlayerListProps) {
  if (players.length === 0) {
    return null;
  }

  return (
    <div className="card bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">Search Results</h2>
        <div className="divide-y">
          {players.map((player) => (
            <div
              key={player.player_id}
              className="flex items-center gap-4 py-3 cursor-pointer hover:bg-base-200 px-2 rounded"
              onClick={() => onSelect(player)}
            >
              {player.avatar && (
                <img
                  src={player.avatar}
                  alt={player.nickname}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span className="font-medium">{player.nickname}</span>
              <span className="text-sm opacity-70">{player.country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
