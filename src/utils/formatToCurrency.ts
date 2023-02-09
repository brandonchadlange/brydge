interface FormatToCurrencyProps {
  value: number;
  locale?: string;
  currency?: string;
}

export const formatToCurrency = ({ value, locale = 'en-US', currency = 'USD' }: FormatToCurrencyProps) => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
}
