import type { PlayerStats } from '../types/api';
import { StatBar } from './StatBar';
import { RatingBadge } from './RatingBadge';
import { ESEA_AVERAGES } from '../utils/statAverages';

interface PlayerStatsCardProps {
  stats: PlayerStats;
}

export function PlayerStatsCard({ stats }: PlayerStatsCardProps) {
  return (
    <div className="glass rounded-2xl border border-white/5 overflow-hidden animate-scale-in">
      <div className="p-5 md:p-8">
        {/* Header with title and rating */}
        <div className="flex justify-between items-start gap-4 mb-6 md:mb-8">
          <div className="min-w-0 flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              Season Stats
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white truncate">
              {stats.competition_name}
            </h2>
            <p className="text-base-content/50 text-sm mt-1">
              {stats.matches_played} matches played
            </p>
          </div>
          <RatingBadge kdRatio={stats.kd_ratio} adr={stats.adr} />
        </div>

        {/* Main stat bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6">
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
        <div className="bg-base-200/30 rounded-xl p-4 md:p-5 mb-5 md:mb-6 border border-white/5">
          <div className="flex flex-wrap justify-between items-center gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-base-content/60 text-sm">Record:</span>
              <span className="text-[var(--color-good)] font-bold text-lg font-mono">{stats.wins}W</span>
              <span className="text-base-content/30">-</span>
              <span className="text-[var(--color-poor)] font-bold text-lg font-mono">{stats.losses}L</span>
              <span
                className="px-2.5 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--color-primary) 15%, transparent)`,
                  color: 'var(--color-primary)'
                }}
              >
                {stats.win_rate}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base-content/60 text-sm">MVPs:</span>
              <span className="font-bold text-lg font-mono" style={{ color: 'var(--color-primary)' }}>
                {stats.mvps}
              </span>
            </div>
          </div>
        </div>

        {/* Combat stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6">
          <StatBox value={stats.kills} label="Kills" highlight />
          <StatBox value={stats.deaths} label="Deaths" />
          <StatBox value={stats.assists} label="Assists" />
        </div>

        {/* Multi-kills section */}
        <div className="bg-base-200/30 rounded-xl p-4 md:p-5 border border-white/5">
          <h3 className="text-xs font-semibold text-base-content/50 mb-3 md:mb-4 uppercase tracking-wider">
            Multi-Kills
          </h3>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
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
    <div className="bg-base-200/40 p-3 md:p-5 rounded-xl text-center border border-white/5 hover:border-white/10 transition-colors">
      <div
        className="text-2xl md:text-3xl font-bold font-mono tabular-nums"
        style={highlight ? { color: 'var(--color-primary)' } : { color: 'white' }}
      >
        {value.toLocaleString()}
      </div>
      <div className="text-xs md:text-sm text-base-content/50 mt-1">{label}</div>
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
    <div className="text-center py-2">
      <div
        className="text-2xl font-bold font-mono tabular-nums"
        style={highlight ? { color: 'var(--color-primary)' } : { color: 'white' }}
      >
        {value}
      </div>
      <div className="text-xs text-base-content/50 uppercase tracking-wide">{label}</div>
    </div>
  );
}
