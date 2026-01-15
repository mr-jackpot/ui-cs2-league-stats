import type {
  Player,
  PlayerSearchResponse,
  PlayerSeasonsResponse,
  PlayerStats,
} from '../types/api';

export async function getPlayer(playerId: string): Promise<Player> {
  const response = await fetch(`/players/${playerId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch player');
  }
  return response.json();
}

export async function searchPlayers(nickname: string): Promise<PlayerSearchResponse> {
  const response = await fetch(
    `/players/search?nickname=${encodeURIComponent(nickname)}`
  );
  if (!response.ok) {
    throw new Error('Failed to search players');
  }
  return response.json();
}

export async function getPlayerSeasons(playerId: string): Promise<PlayerSeasonsResponse> {
  const response = await fetch(`/players/${playerId}/esea`);
  if (!response.ok) {
    throw new Error('Failed to fetch player seasons');
  }
  return response.json();
}

export async function getPlayerStats(
  playerId: string,
  competitionId: string
): Promise<PlayerStats> {
  const response = await fetch(
    `/players/${playerId}/competitions/${competitionId}/stats`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch player stats');
  }
  return response.json();
}
