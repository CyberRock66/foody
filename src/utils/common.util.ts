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

export const generateRandomPath = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};
