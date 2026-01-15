import type { PlayerStats } from '../types/api';

interface PlayerStatsCardProps {
  stats: PlayerStats;
}

export function PlayerStatsCard({ stats }: PlayerStatsCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-4">{stats.competition_name}</h2>

        <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-4">
          <div className="stat">
            <div className="stat-title">K/D Ratio</div>
            <div className="stat-value text-primary">{stats.kd_ratio.toFixed(2)}</div>
          </div>
          <div className="stat">
            <div className="stat-title">ADR</div>
            <div className="stat-value text-secondary">{stats.adr.toFixed(1)}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Win Rate</div>
            <div className="stat-value text-accent">{stats.win_rate}%</div>
          </div>
          <div className="stat">
            <div className="stat-title">HS %</div>
            <div className="stat-value">{stats.headshot_pct.toFixed(1)}%</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <StatBox value={stats.matches_played} label="Matches" />
          <StatBox value={stats.wins} label="Wins" className="text-success" />
          <StatBox value={stats.losses} label="Losses" className="text-error" />
          <StatBox value={stats.mvps} label="MVPs" />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <StatBox value={stats.kills} label="Kills" />
          <StatBox value={stats.deaths} label="Deaths" />
          <StatBox value={stats.assists} label="Assists" />
        </div>

        <h3 className="font-semibold mb-2">Multi-Kills</h3>
        <div className="grid grid-cols-3 gap-4">
          <StatBox value={stats.multi_kills.triples} label="3K" />
          <StatBox value={stats.multi_kills.quads} label="4K" />
          <StatBox value={stats.multi_kills.aces} label="ACE" />
        </div>
      </div>
    </div>
  );
}

interface StatBoxProps {
  value: number;
  label: string;
  className?: string;
}

function StatBox({ value, label, className }: StatBoxProps) {
  return (
    <div className="bg-base-200 p-4 rounded-lg text-center">
      <div className={`text-2xl font-bold ${className ?? ''}`}>{value}</div>
      <div className="text-sm opacity-70">{label}</div>
    </div>
  );
}
