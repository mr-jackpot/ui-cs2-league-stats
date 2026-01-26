import { calculateRating, getRatingTier } from '../utils/statAverages';

interface InlineRatingBadgeProps {
  kdRatio: number;
  adr: number;
}

export function InlineRatingBadge({ kdRatio, adr }: InlineRatingBadgeProps) {
  const rating = calculateRating(kdRatio, adr);
  const tier = getRatingTier(rating);

  return (
    <div
      className="w-[105px] flex items-center gap-2 px-3 py-1.5 rounded-md border-l-2"
      style={{
        backgroundColor: `color-mix(in srgb, ${tier.color} 8%, transparent)`,
        borderLeftColor: tier.color,
      }}
    >
      <span
        className="font-mono text-sm font-semibold tabular-nums"
        style={{ color: tier.color }}
      >
        {rating.toFixed(2)}
      </span>
      <span className="text-[10px] text-base-content/50 uppercase tracking-wide">
        {tier.label}
      </span>
    </div>
  );
}
