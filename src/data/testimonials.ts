export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  badge: string;
  program: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aarav Sengupta',
    initials: 'AS',
    role: 'Student • Sample',
    badge: 'Class 10 Foundation',
    program: 'Foundation Program',
    quote: 'The concept-first teaching completely changed how I look at Physics and Math. Teachers take the time to answer every single doubt until you truly understand the derivation.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Sunita Hazarika',
    initials: 'SH',
    role: 'Parent • Sample',
    badge: 'Parent of Class 12 Aspirant',
    program: 'Senior Secondary',
    quote: 'As parents, we appreciate the structured communication and bi-weekly progress updates. The mentors keep us informed without putting unnecessary stress on the student.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Priyanshu Bordoloi',
    initials: 'PB',
    role: 'Student • Sample',
    badge: 'JEE Foundation Batch',
    program: 'Competitive Preparation',
    quote: 'The regular mock tests and error log analysis helped me pinpoint my weak numerical areas in Physical Chemistry. The faculty guidance is disciplined yet very approachable.',
    rating: 5
  },
  {
    id: 't-4',
    name: 'Dr. Manoj Baruah',
    initials: 'MB',
    role: 'Parent • Sample',
    badge: 'Parent of Class 9 Student',
    program: 'Foundation Program',
    quote: 'Apex has fostered a genuine love for scientific thinking in my daughter. The study material is concise, well-graded, and avoids confusing jargon.',
    rating: 5
  },
  {
    id: 't-5',
    name: 'Devika Nair',
    initials: 'DN',
    role: 'Student • Sample',
    badge: 'Class 12 Boards & Crash',
    program: 'Exam Booster Revision',
    quote: 'The 60-day revision batch before board exams cleared all the gaps in my Calculus and Organic Chemistry. The teacher feedback on practice answers was invaluable.',
    rating: 5
  }
];
