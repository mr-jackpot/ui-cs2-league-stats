import { calculateRating, getRatingTier } from '../utils/statAverages';

interface RatingBadgeProps {
  kdRatio: number;
  adr: number;
}

export function RatingBadge({ kdRatio, adr }: RatingBadgeProps) {
  const rating = calculateRating(kdRatio, adr);
  const tier = getRatingTier(rating);

  return (
    <div className="flex flex-col items-center flex-shrink-0">
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-30"
          style={{ backgroundColor: tier.color }}
        />

        {/* Ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${tier.color} 0deg, ${tier.color}50 360deg)`,
            padding: '3px',
          }}
        >
          <div className="w-full h-full rounded-full bg-base-100 flex items-center justify-center">
            <span
              className="text-2xl md:text-3xl font-bold font-mono tabular-nums"
              style={{ color: tier.color }}
            >
              {rating.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <span
        className="mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
        style={{
          backgroundColor: `color-mix(in srgb, ${tier.color} 15%, transparent)`,
          color: tier.color
        }}
      >
        {tier.label}
      </span>
    </div>
  );
}
