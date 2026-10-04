export interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  experience: string;
  education: string;
  specialization: string;
  description: string;
  avatarColor: string;
  avatarInitials: string;
}

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'arjun-mehta',
    name: 'Dr. Arjun Mehta',
    subject: 'Mathematics',
    experience: '12+ Years Experience',
    education: 'Ph.D. & M.Sc. Applied Mathematics (IIT Alumni)',
    specialization: 'Calculus, Vectors & Analytical Geometry',
    description: 'Renowned for breaking down intricate algebraic equations and multi-step calculus problems into intuitive visual steps that build lasting exam confidence.',
    avatarColor: 'from-blue-600 to-indigo-800',
    avatarInitials: 'AM'
  },
  {
    id: 'riya-sharma',
    name: 'Ms. Riya Sharma',
    subject: 'Physics',
    experience: '9+ Years Experience',
    education: 'M.Sc. Physics (Gold Medalist), B.Ed.',
    specialization: 'Classical Mechanics & Electrodynamics',
    description: 'Focuses on derivation clarity and real-world experiments. Specializes in transforming difficult competitive numericals into approachable problem-solving frameworks.',
    avatarColor: 'from-amber-500 to-orange-700',
    avatarInitials: 'RS'
  },
  {
    id: 'kunal-das',
    name: 'Mr. Kunal Das',
    subject: 'Chemistry',
    experience: '10+ Years Experience',
    education: 'M.Sc. Chemistry, CSIR-NET Qualified',
    specialization: 'Organic Reaction Mechanisms & Physical Chemistry',
    description: 'Brings precision and memorable memory maps to reaction mechanisms. Helps students master scoring high marks across both board and competitive papers.',
    avatarColor: 'from-emerald-600 to-teal-800',
    avatarInitials: 'KD'
  }
];
