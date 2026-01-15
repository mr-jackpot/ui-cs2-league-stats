import type { Player } from '../types/api';

interface PlayerProfileProps {
  player: Player;
  onBack: () => void;
  children: React.ReactNode;
}

export function PlayerProfile({ player, onBack, children }: PlayerProfileProps) {
  return (
    <div className="card bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <div className="flex items-center gap-4 mb-4">
          {player.avatar && (
            <img
              src={player.avatar}
              alt={player.nickname}
              className="w-16 h-16 rounded-full"
            />
          )}
          <div>
            <h2 className="card-title">{player.nickname}</h2>
            <span className="text-sm opacity-70">{player.country}</span>
          </div>
          <button className="btn btn-ghost btn-sm ml-auto" onClick={onBack}>
            Back to results
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
