export interface Player {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
}

export interface PlayerSearchResponse {
  items: Player[];
}

export interface Season {
  competition_id: string;
  competition_name: string;
  match_count: number;
}

export interface PlayerSeasonsResponse {
  player_id: string;
  seasons: Season[];
}

export interface MultiKills {
  triples: number;
  quads: number;
  aces: number;
}

export interface PlayerStats {
  player_id: string;
  competition_id: string;
  competition_name: string;
  matches_played: number;
  wins: number;
  losses: number;
  win_rate: number;
  kills: number;
  deaths: number;
  assists: number;
  kd_ratio: number;
  adr: number;
  headshot_pct: number;
  mvps: number;
  multi_kills: MultiKills;
}
