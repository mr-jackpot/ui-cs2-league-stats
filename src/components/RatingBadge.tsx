import { calculateRating, getRatingTier } from '../utils/statAverages';

interface RatingBadgeProps {
  kdRatio: number;
  adr: number;
  winRate: number;
}

export function RatingBadge({ kdRatio, adr, winRate }: RatingBadgeProps) {
  const rating = calculateRating(kdRatio, adr, winRate);
  const tier = getRatingTier(rating);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(${tier.color} 0deg, ${tier.color} 360deg)`,
          padding: '3px',
        }}
      >
        <div className="w-full h-full rounded-full bg-base-100 flex items-center justify-center">
          <span
            className="text-2xl font-bold"
            style={{ color: tier.color }}
          >
            {rating.toFixed(2)}
          </span>
        </div>
      </div>
      <span
        className="text-xs font-semibold mt-1 uppercase tracking-wider"
        style={{ color: tier.color }}
      >
        {tier.label}
      </span>
    </div>
  );
}
