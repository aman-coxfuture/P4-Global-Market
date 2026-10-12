export function formatCurrency(amountMinorUnits, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amountMinorUnits / 100);
}
