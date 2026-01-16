// ESEA average stats for comparison
export const ESEA_AVERAGES = {
  kd_ratio: 1.0,
  adr: 75,
  headshot_pct: 45,
  win_rate: 50,
};

export type StatKey = keyof typeof ESEA_AVERAGES;

export function getStatColor(value: number, average: number, higherIsBetter = true): string {
  const ratio = value / average;

  if (higherIsBetter) {
    if (ratio >= 1.1) return 'var(--color-good)';
    if (ratio >= 0.9) return 'var(--color-avg)';
    return 'var(--color-poor)';
  } else {
    if (ratio <= 0.9) return 'var(--color-good)';
    if (ratio <= 1.1) return 'var(--color-avg)';
    return 'var(--color-poor)';
  }
}

export function calculateRating(kdRatio: number, adr: number): number {
  // Simplified rating calculation inspired by HLTV
  const kdComponent = kdRatio * 0.5;
  const adrComponent = (adr / 100) * 0.5;

  return Math.round((kdComponent + adrComponent) * 100) / 100;
}

export function getRatingTier(rating: number): { label: string; color: string } {
  if (rating >= 1.2) return { label: 'Elite', color: 'var(--color-cs2)' };
  if (rating >= 1.0) return { label: 'Good', color: 'var(--color-good)' };
  if (rating >= 0.9) return { label: 'Average', color: 'var(--color-avg)' };
  return { label: 'Below', color: 'var(--color-poor)' };
}
