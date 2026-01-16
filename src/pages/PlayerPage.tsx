import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlayer, getPlayerSeasons, getPlayerStats } from '../services/api';
import type { Season, PlayerStats, Player } from '../types/api';
import { PlayerProfile, SeasonsList, PlayerStatsCard } from '../components';

export function PlayerPage() {
  const { playerId } = useParams<{ playerId: string }>();
  const navigate = useNavigate();

  const [player, setPlayer] = useState<Player | null>(null);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [stats, setStats] = useState<PlayerStats | null>(null);
  const [loadingSeasons, setLoadingSeasons] = useState(true);
  const [loadingStats, setLoadingStats] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!playerId) return;

    const fetchPlayer = async () => {
      const storedPlayer = sessionStorage.getItem(`player-${playerId}`);
      if (storedPlayer) {
        setPlayer(JSON.parse(storedPlayer));
        return;
      }

      try {
        const playerData = await getPlayer(playerId);
        setPlayer(playerData);
        sessionStorage.setItem(`player-${playerId}`, JSON.stringify(playerData));
      } catch {
        // Player fetch failed, continue without player details
      }
    };

    fetchPlayer();
  }, [playerId]);

  useEffect(() => {
    if (!playerId) return;

    const fetchSeasons = async () => {
      setLoadingSeasons(true);
      setError(null);

      try {
        const response = await getPlayerSeasons(playerId);
        setSeasons(response.seasons);
      } catch {
        setError('Failed to fetch player seasons');
      } finally {
        setLoadingSeasons(false);
      }
    };

    fetchSeasons();
  }, [playerId]);

  const handleSelectSeason = async (season: Season) => {
    if (!playerId) return;

    setLoadingStats(true);
    setError(null);

    try {
      const response = await getPlayerStats(playerId, season.competition_id);
      setStats(response);
    } catch {
      setError('Failed to fetch player stats');
    } finally {
      setLoadingStats(false);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const closeModal = () => {
    setStats(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      {player ? (
        <PlayerProfile player={player} onBack={handleBack}>
          {loadingSeasons ? (
            <div className="flex justify-center py-8">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <SeasonsList seasons={seasons} onSelectSeason={handleSelectSeason} />
          )}
        </PlayerProfile>
      ) : (
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <h2 className="card-title">Player Seasons</h2>
              <button className="btn btn-ghost btn-sm" onClick={handleBack}>
                Back to search
              </button>
            </div>
            {loadingSeasons ? (
              <div className="flex justify-center py-8">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <SeasonsList seasons={seasons} onSelectSeason={handleSelectSeason} />
            )}
          </div>
        </div>
      )}

      {/* Stats Modal */}
      {(stats || loadingStats) && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-3xl p-0 bg-transparent shadow-none">
            {loadingStats ? (
              <div className="flex justify-center py-16">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              stats && <PlayerStatsCard stats={stats} />
            )}
            <div className="flex justify-center mt-4">
              <button className="btn btn-ghost" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
          <div className="modal-backdrop bg-black/50" onClick={closeModal} />
        </dialog>
      )}
    </div>
  );
}
