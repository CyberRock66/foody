type OptionsCurrencyType = {
  style: string;
  currency: string;
};

export const optionsCurrencyUSD = {
  style: 'currency',
  currency: 'USD',
};

export const convertToCurrency = (
  optionCurrency: OptionsCurrencyType,
  currency: number,
) => new Intl.NumberFormat('en-US', optionCurrency).format(currency);
