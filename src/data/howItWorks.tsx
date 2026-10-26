import { ReactNode } from 'react';
import { BookOpen, LineChart, ShieldCheck } from 'lucide-react';

export interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: '01',
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Learn the Fundamentals',
    description: 'Start with how the Indian stock market works — equities, indices, market participants and basic terminology.',
  },
  {
    number: '02',
    icon: <LineChart className="h-6 w-6" />,
    title: 'Understand Analysis Concepts',
    description: 'Study charts, price action, Open Interest, volume and derivatives concepts in a structured, easy-to-follow way.',
  },
  {
    number: '03',
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Build Risk Discipline',
    description: 'Learn capital preservation, position sizing and risk-reward principles so every decision is an informed one.',
  },
];
