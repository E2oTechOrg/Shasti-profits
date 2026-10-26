export interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Market Foundations',
    description: 'For beginners who want to understand how the Indian stock market works.',
    features: [
      'How the stock market works',
      'Equities, indices and market participants',
      'Basic market terminology',
      'Introduction to risk awareness',
    ],
    buttonText: 'Enquire Now',
  },
  {
    name: 'Technical Analysis',
    description: 'Learn to read charts, price action and market structure.',
    features: [
      'Charts and price patterns',
      'Technical indicators',
      'Support and resistance',
      'Volume and Open Interest concepts',
      'Market trends and price action',
    ],
    highlighted: true,
    buttonText: 'Enquire Now',
  },
  {
    name: 'Futures & Options',
    description: 'Understand derivatives concepts along with risk management principles.',
    features: [
      'Futures and options fundamentals',
      'Option premiums, expiry and time decay',
      'Open Interest in derivatives',
      'Position sizing and risk-reward',
      'Capital preservation principles',
    ],
    buttonText: 'Enquire Now',
  },
];
