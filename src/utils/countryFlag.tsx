import Flags from 'country-flag-icons/react/3x2';

type FlagComponent = React.ComponentType<{ title?: string; className?: string }>;

/**
 * Get the flag component for a country code
 */
export function CountryFlag({ countryCode, className }: { countryCode: string; className?: string }) {
  if (!countryCode || countryCode.length !== 2) {
    return null;
  }

  const code = countryCode.toUpperCase() as keyof typeof Flags;
  const FlagComponent = Flags[code] as FlagComponent | undefined;

  if (!FlagComponent) {
    return <span className={className}>{countryCode}</span>;
  }

  return <FlagComponent title={countryCode} className={className} />;
}
