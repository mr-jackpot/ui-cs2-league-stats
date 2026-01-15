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
    <div className="max-w-4xl mx-auto">
      <PlayerSearch
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
        loading={loading}
      />

      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      <PlayerList players={players} onSelect={handleSelectPlayer} />

      {loading && (
        <div className="flex justify-center py-8">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
}
