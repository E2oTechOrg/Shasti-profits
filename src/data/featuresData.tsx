import { ReactNode } from 'react';
import { Landmark, LineChart, Layers, BarChart3, ShieldCheck, Target } from 'lucide-react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <Landmark className="h-6 w-6" />,
    title: 'Stock Market Fundamentals',
    description: 'Understand how the Indian stock market works, including equities, indices, and market participants.',
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Technical Analysis Education',
    description: 'Learn about charts, price patterns, technical indicators, support, and resistance.',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Derivatives Market Knowledge',
    description: 'Explore the fundamentals of futures and options, including option premiums, expiry, time decay, and contract characteristics.',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Market Data Education',
    description: 'Understand institutional methodology, volume, market structure, and how these concepts are interpreted in financial market analysis.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Risk Awareness & Financial Discipline',
    description: 'Learn about capital preservation, position sizing, risk-reward concepts, and the importance of informed financial decisions.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Price Action & Market Trends',
    description: 'Learn how price movement and market trends are studied, explained in a simple and understandable way.',
  },
];