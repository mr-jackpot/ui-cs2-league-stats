// FACEIT level colors (matched to badge images)
export const FACEIT_LEVEL_COLORS: Record<number, string> = {
  1: '#EEEEEE',    // Gray
  2: '#1CE400',    // Green
  3: '#1CE400',    // Green
  4: '#FFC800',    // Yellow
  5: '#FFC800',    // Yellow
  6: '#FFC800',    // Yellow
  7: '#FFA500',    // Orange
  8: '#FFA500',    // Orange
  9: '#FF5500',    // Deep orange
  10: '#EE1B2E',   // Red
};

export function getFaceitLevelColor(level: number): string {
  return FACEIT_LEVEL_COLORS[level] || '#666666';
}
