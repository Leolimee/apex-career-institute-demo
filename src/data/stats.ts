export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  isDemoSample: boolean;
}

export const TRUST_STATS: StatItem[] = [
  {
    id: 'years-experience',
    value: 10,
    suffix: '+',
    label: 'Years of Academic Experience',
    sublabel: 'Dedicated coaching & mentorship',
    isDemoSample: true
  },
  {
    id: 'weekly-sessions',
    value: 25,
    suffix: '+',
    label: 'Weekly Learning Sessions',
    sublabel: 'Interactive batches & doubt desks',
    isDemoSample: true
  },
  {
    id: 'students-guided',
    value: 500,
    suffix: '+',
    label: 'Students Guided',
    sublabel: 'Across board & competitive tiers',
    isDemoSample: true
  },
  {
    id: 'parent-satisfaction',
    value: 95,
    suffix: '%',
    label: 'Parent Satisfaction',
    sublabel: 'Consistent progress feedback',
    isDemoSample: true
  }
];

export interface AchievementCard {
  id: string;
  metric: string;
  title: string;
  description: string;
  highlight: string;
}

export const RESULTS_METRICS: AchievementCard[] = [
  {
    id: 'satisfaction-rate',
    metric: '95%',
    title: 'Sample Parent Satisfaction',
    description: 'Reported satisfaction with structured syllabus coverage, consistent mentor communication, and visible student discipline.',
    highlight: 'Parent Trust'
  },
  {
    id: 'score-improvement',
    metric: '2.4×',
    title: 'Sample Improvement in Scores',
    description: 'Average score progression observed between initial diagnostic evaluation and third comprehensive simulated mock test.',
    highlight: 'Measured Growth'
  },
  {
    id: 'mentored-count',
    metric: '500+',
    title: 'Sample Students Guided',
    description: 'Learners mentored across Foundation (8–10), Senior Secondary (11–12), and competitive test preparation batches.',
    highlight: 'Academic Reach'
  }
];
