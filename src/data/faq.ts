export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Which classes do you teach?',
    answer: 'We provide structured academic programs for students from Class 8 through Class 12, covering CBSE, ICSE, and State Board curricula, alongside targeted preparation for competitive entrance exams such as JEE and NEET Foundation.',
    category: 'Admissions & Batches'
  },
  {
    id: 'faq-2',
    question: 'Do you offer trial or counselling sessions?',
    answer: 'Yes! We offer a complimentary, no-obligation Academic Counselling and Diagnostic Session for both students and parents. This session evaluates the student’s current conceptual grasp and suggests a tailored learning roadmap.',
    category: 'Counselling'
  },
  {
    id: 'faq-3',
    question: 'How are students assessed?',
    answer: 'Assessments are conducted through weekly chapter-wise quizzes, monthly cumulative simulated tests, and term-end full-length papers. Every test report includes micro-analytics detailing question-wise accuracy, time management, and topic-specific weak zones.',
    category: 'Academic Methodology'
  },
  {
    id: 'faq-4',
    question: 'Do you provide doubt-clearing sessions?',
    answer: 'Absolutely. In addition to in-class interactive questions, we run daily dedicated doubt desks where students can sit one-on-one with faculty mentors to clarify numerical steps, homework challenges, and conceptual doubts.',
    category: 'Student Support'
  },
  {
    id: 'faq-5',
    question: 'How can parents track student progress?',
    answer: 'We maintain complete transparency through monthly scheduled parent-teacher meetings (PTMs), bi-weekly WhatsApp/SMS attendance & test report updates, and dedicated mentor availability for scheduled calls.',
    category: 'Parent Communication'
  },
  {
    id: 'faq-6',
    question: 'How do I enquire about admissions?',
    answer: 'You can submit the online enquiry form on this website, connect directly with our admissions counselor via WhatsApp or phone, or visit our Guwahati campus during operating hours (Mon–Sat, 9:00 AM to 7:00 PM).',
    category: 'Admissions'
  }
];
