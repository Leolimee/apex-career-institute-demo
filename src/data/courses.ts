export interface Course {
  id: string;
  badge: string;
  title: string;
  targetClasses: string;
  shortDescription: string;
  fullDescription: string;
  subjects: string[];
  keyHighlights: string[];
  schedule: string;
  duration: string;
  batchSize: string;
  iconName: 'Compass' | 'GraduationCap' | 'Target' | 'Zap';
}

export const COURSES_DATA: Course[] = [
  {
    id: 'foundation-program',
    badge: 'Classes 8–10',
    title: 'FOUNDATION PROGRAM',
    targetClasses: 'Classes 8 to 10 (CBSE / ICSE / State)',
    shortDescription: 'Build strong fundamentals in Mathematics, Science, and core academic concepts.',
    fullDescription: 'Designed to eliminate rote memorization and nurture analytical thinking at an early age. Covers school syllabi thoroughly while preparing students for Olympiads and future entrance tests.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Mental Ability'],
    keyHighlights: [
      'Concept-first pedagogy with real-world applications',
      'Weekly diagnostic tests with detailed parent report cards',
      'Early foundation for NTSE, Olympiads, and STEM aptitude',
      'Daily 30-minute doubt-solving breakout sessions'
    ],
    schedule: '3 Days / Week (Evening Batches)',
    duration: '1 Year Academic Cycle',
    batchSize: '25 Students Max',
    iconName: 'Compass'
  },
  {
    id: 'senior-secondary',
    badge: 'Classes 11–12',
    title: 'SENIOR SECONDARY',
    targetClasses: 'Classes 11 & 12 (Board Focus)',
    shortDescription: 'Focused academic preparation with structured revision and regular assessments.',
    fullDescription: 'A balanced, rigorous curriculum that ensures students excel in their board examinations without feeling overwhelmed. Emphasizes NCERT depth, answer-writing skills, and conceptual clarity.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    keyHighlights: [
      'Comprehensive line-by-line NCERT syllabus mastery',
      'Structured step-marking practice for subjective board papers',
      'Chapter-wise cumulative mock tests simulating real board conditions',
      'Dedicated mentor for academic stress management and time planning'
    ],
    schedule: '4 Days / Week (Morning & Evening Options)',
    duration: '2 Year Comprehensive Program',
    batchSize: '28 Students Max',
    iconName: 'GraduationCap'
  },
  {
    id: 'competitive-preparation',
    badge: 'JEE / NEET FOUNDATION',
    title: 'COMPETITIVE PREPARATION',
    targetClasses: 'Classes 11, 12 & Dropper Batches',
    shortDescription: 'Concept-driven preparation designed to build the fundamentals required for competitive examinations.',
    fullDescription: 'High-intensity coaching crafted for serious engineering and medical aspirants. Integrates high-order problem solving, speed tricks, error analysis, and full-length all-India pattern test series.',
    subjects: ['Physics (Mechanics/Electro)', 'Chemistry (Org/Inorg/Phys)', 'Mathematics / Biology'],
    keyHighlights: [
      'Multi-concept question solving workshops led by senior faculty',
      'Computer-based test (CBT) portal simulating actual NTA testing conditions',
      'Micro-level performance analytics highlighting weak topics',
      'Daily curated problem sheets (DPPs) with video/live solutions'
    ],
    schedule: '5 Days / Week + Sunday Test Series',
    duration: '1 to 2 Years Intensive',
    batchSize: '30 Students Max',
    iconName: 'Target'
  },
  {
    id: 'exam-booster',
    badge: 'Board & Competitive Revision',
    title: 'EXAM BOOSTER',
    targetClasses: 'Class 10 & 12 Pre-Exam Intensive',
    shortDescription: 'Focused revision, mock tests, doubt sessions, and exam-oriented practice.',
    fullDescription: 'A fast-paced, high-yield crash program conducted before major term exams and board finals. Focuses on previous 10 years question papers, expected high-probability problems, and speed refinement.',
    subjects: ['Core Sciences', 'Mathematics', 'Exam Strategy'],
    keyHighlights: [
      'High-probability question bank and formula memory sheets',
      '12 Full-length timed mock exams with individual teacher evaluation',
      'Rapid doubt counters open 7 days a week during revision month',
      'Exam day temperament and time-allocation masterclasses'
    ],
    schedule: 'Weekend & Daily Crash Sessions Available',
    duration: '60 to 90 Days Fast-Track',
    batchSize: '20 Students Max',
    iconName: 'Zap'
  }
];
