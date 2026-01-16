import { getStatColor } from '../utils/statAverages';

interface StatBarProps {
  label: string;
  value: number;
  max: number;
  average: number;
  format?: 'number' | 'percent' | 'ratio';
  higherIsBetter?: boolean;
}

export function StatBar({
  label,
  value,
  max,
  average,
  format = 'number',
  higherIsBetter = true,
}: StatBarProps) {
  const color = getStatColor(value, average, higherIsBetter);
  const percentage = Math.min((value / max) * 100, 100);
  const averagePercentage = Math.min((average / max) * 100, 100);

  const formatValue = (val: number): string => {
    switch (format) {
      case 'percent':
        return `${val.toFixed(1)}%`;
      case 'ratio':
        return val.toFixed(2);
      default:
        return val.toFixed(1);
    }
  };

  const diff = value - average;
  const diffSign = diff >= 0 ? '+' : '';
  const diffDisplay = format === 'ratio'
    ? `${diffSign}${diff.toFixed(2)}`
    : format === 'percent'
    ? `${diffSign}${diff.toFixed(1)}%`
    : `${diffSign}${diff.toFixed(1)}`;

  return (
    <div className="bg-base-200/40 rounded-xl p-4 md:p-5 border border-white/5 hover:border-white/10 transition-colors">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-medium text-base-content/60">{label}</span>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
            color: color
          }}
        >
          {diffDisplay}
        </span>
      </div>

      <div className="text-3xl font-bold mb-3 font-mono tabular-nums" style={{ color }}>
        {formatValue(value)}
      </div>

      {/* Progress bar with average marker */}
      <div className="relative w-full bg-base-300/50 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}40`
          }}
        />
        {/* Average marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-0.5 h-4 bg-white/30 rounded-full"
          style={{ left: `${averagePercentage}%` }}
          title={`Average: ${average}`}
        />
      </div>
    </div>
  );
}
