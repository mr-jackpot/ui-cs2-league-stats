import type { PlayerStats } from '../types/api';
import { StatBar } from './StatBar';
import { RatingBadge } from './RatingBadge';
import { ESEA_AVERAGES } from '../utils/statAverages';

interface PlayerStatsCardProps {
  stats: PlayerStats;
}

export function PlayerStatsCard({ stats }: PlayerStatsCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Header with title and rating */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="card-title text-xl" style={{ color: 'var(--color-cs2)' }}>
              {stats.competition_name}
            </h2>
            <p className="text-base-content/60 text-sm mt-1">
              {stats.matches_played} matches played
            </p>
          </div>
          <RatingBadge
            kdRatio={stats.kd_ratio}
            adr={stats.adr}
            winRate={stats.win_rate}
          />
        </div>

        {/* Main stat bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatBar
            label="K/D Ratio"
            value={stats.kd_ratio}
            max={2.0}
            average={ESEA_AVERAGES.kd_ratio}
            format="ratio"
          />
          <StatBar
            label="ADR"
            value={stats.adr}
            max={120}
            average={ESEA_AVERAGES.adr}
            format="number"
          />
          <StatBar
            label="Headshot %"
            value={stats.headshot_pct}
            max={100}
            average={ESEA_AVERAGES.headshot_pct}
            format="percent"
          />
        </div>

        {/* Win/Loss section */}
        <div className="bg-base-200 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-base-content/70">Record:</span>
              <span className="text-success font-bold text-lg">{stats.wins}W</span>
              <span className="text-base-content/50">-</span>
              <span className="text-error font-bold text-lg">{stats.losses}L</span>
              <span
                className="px-2 py-1 rounded text-sm font-semibold"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--color-cs2) 20%, transparent)`,
                  color: 'var(--color-cs2)'
                }}
              >
                {stats.win_rate}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base-content/70">MVPs:</span>
              <span className="font-bold text-lg" style={{ color: 'var(--color-cs2)' }}>
                {stats.mvps}
              </span>
            </div>
          </div>
        </div>

        {/* Combat stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <StatBox value={stats.kills} label="Kills" highlight />
          <StatBox value={stats.deaths} label="Deaths" />
          <StatBox value={stats.assists} label="Assists" />
        </div>

        {/* Multi-kills section */}
        <div className="bg-base-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-base-content/70 mb-3 uppercase tracking-wider">
            Multi-Kills
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <MultiKillBox value={stats.multi_kills.triples} label="3K" />
            <MultiKillBox value={stats.multi_kills.quads} label="4K" />
            <MultiKillBox value={stats.multi_kills.aces} label="ACE" highlight />
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatBoxProps {
  value: number;
  label: string;
  highlight?: boolean;
}

function StatBox({ value, label, highlight }: StatBoxProps) {
  return (
    <div className="bg-base-200 p-4 rounded-lg text-center">
      <div
        className="text-2xl font-bold"
        style={highlight ? { color: 'var(--color-cs2)' } : undefined}
      >
        {value}
      </div>
      <div className="text-sm text-base-content/60">{label}</div>
    </div>
  );
}

interface MultiKillBoxProps {
  value: number;
  label: string;
  highlight?: boolean;
}

function MultiKillBox({ value, label, highlight }: MultiKillBoxProps) {
  return (
    <div className="text-center">
      <div
        className="text-xl font-bold"
        style={highlight ? { color: 'var(--color-cs2)' } : undefined}
      >
        {value}
      </div>
      <div className="text-xs text-base-content/60 uppercase">{label}</div>
    </div>
  );
}
