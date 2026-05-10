export const startProCheckout = async () => {
  console.info('[stripeApi] Pro checkout placeholder called');
  return { tier: 'pro', status: 'stubbed' };
};

export const startEliteCheckout = async () => {
  console.info('[stripeApi] Elite checkout placeholder called');
  return { tier: 'elite', status: 'stubbed' };
};

export const startFoundersCheckout = async () => {
  console.info('[stripeApi] Founders checkout placeholder called');
  return { tier: 'founders', status: 'stubbed' };
};
