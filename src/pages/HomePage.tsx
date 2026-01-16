import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchPlayers } from '../services/api';
import type { Player } from '../types/api';
import { PlayerSearch, PlayerList } from '../components';

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await searchPlayers(searchQuery);
      setPlayers(response.items);
    } catch {
      setError('Failed to search players');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPlayer = (player: Player) => {
    sessionStorage.setItem(`player-${player.player_id}`, JSON.stringify(player));
    navigate(`/player/${player.player_id}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <PlayerSearch
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
        loading={loading}
        hasResults={players.length > 0}
      />

      {error && (
        <div className="alert alert-error mb-6 rounded-xl">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <PlayerList players={players} onSelect={handleSelectPlayer} />

      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <span className="loading loading-spinner loading-lg text-[var(--color-primary)]"></span>
          <p className="text-base-content/40 mt-4 text-sm">Searching players...</p>
        </div>
      )}
    </div>
  );
}
