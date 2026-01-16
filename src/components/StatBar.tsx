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
    <div className="bg-base-200 rounded-lg p-4">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-sm text-base-content/70">{label}</span>
        <span
          className="text-xs px-1.5 py-0.5 rounded"
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
            color: color
          }}
        >
          {diffDisplay}
        </span>
      </div>
      <div className="text-2xl font-bold mb-2" style={{ color }}>
        {formatValue(value)}
      </div>
      <div className="w-full bg-base-300 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
