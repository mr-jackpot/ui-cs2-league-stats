// FACEIT level colors (official tier colors)
export const FACEIT_LEVEL_COLORS: Record<number, string> = {
  1: '#EE4B2B',
  2: '#EE4B2B',
  3: '#EE4B2B',    // Red (low)
  4: '#FFCC00',
  5: '#FFCC00',
  6: '#FFCC00',    // Yellow (mid)
  7: '#1FAD61',
  8: '#1FAD61',
  9: '#1FAD61',    // Green (high)
  10: '#FF5500',   // Orange (FACEIT 10)
};

export function getFaceitLevelColor(level: number): string {
  return FACEIT_LEVEL_COLORS[level] || '#666666';
}
