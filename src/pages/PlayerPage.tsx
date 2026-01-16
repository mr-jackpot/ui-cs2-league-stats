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
    <div className="max-w-4xl mx-auto px-4 py-6">
      {error && (
        <div className="alert alert-error mb-6 rounded-xl">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {player ? (
        <PlayerProfile player={player} onBack={handleBack}>
          {loadingSeasons ? (
            <div className="flex flex-col items-center justify-center py-12">
              <span className="loading loading-spinner loading-lg text-[var(--color-primary)]"></span>
              <p className="text-base-content/40 mt-4 text-sm">Loading seasons...</p>
            </div>
          ) : (
            <SeasonsList seasons={seasons} onSelectSeason={handleSelectSeason} />
          )}
        </PlayerProfile>
      ) : (
        <div className="glass rounded-2xl border border-white/5 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Player Seasons</h2>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-base-content/60 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={handleBack}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to search
            </button>
          </div>
          {loadingSeasons ? (
            <div className="flex flex-col items-center justify-center py-12">
              <span className="loading loading-spinner loading-lg text-[var(--color-primary)]"></span>
              <p className="text-base-content/40 mt-4 text-sm">Loading seasons...</p>
            </div>
          ) : (
            <SeasonsList seasons={seasons} onSelectSeason={handleSelectSeason} />
          )}
        </div>
      )}

      {/* Stats Modal */}
      {(stats || loadingStats) && (
        <dialog className="modal modal-open">
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={closeModal}
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-3xl mx-4 my-auto max-h-[90vh] overflow-y-auto">
            {loadingStats ? (
              <div className="flex flex-col items-center justify-center py-20">
                <span className="loading loading-spinner loading-lg text-[var(--color-primary)]"></span>
                <p className="text-base-content/40 mt-4">Loading stats...</p>
              </div>
            ) : (
              stats && <PlayerStatsCard stats={stats} />
            )}

            {/* Close button */}
            <div className="flex justify-center mt-6 pb-4">
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium glass border border-white/10 text-base-content/80 hover:text-white hover:border-white/20 transition-all duration-200"
                onClick={closeModal}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
