/**
 * Convert a 2-letter ISO country code to a flag emoji
 * Works by converting each letter to its regional indicator symbol
 */
export function countryCodeToFlag(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) {
    return countryCode || '';
  }

  const code = countryCode.toUpperCase();
  const offset = 0x1F1E6 - 65; // Regional indicator 'A' minus ASCII 'A'

  return String.fromCodePoint(
    code.charCodeAt(0) + offset,
    code.charCodeAt(1) + offset
  );
}
