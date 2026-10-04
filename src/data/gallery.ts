export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  alt: string;
  span: 'large' | 'regular';
}

export const GALLERY_DATA: GalleryImage[] = [
  {
    id: 'g-lecture-hall',
    src: '/images/gallery-lecture-hall.jpg',
    title: 'Tiered Academic Lecture Hall',
    category: 'Classroom Infrastructure',
    alt: 'Modern tiered lecture hall with students attending conceptual teaching session',
    span: 'large'
  },
  {
    id: 'g-mentor-class',
    src: '/images/about-mentor.jpg',
    title: 'Interactive Smartboard Mentorship',
    category: 'Teacher Interaction',
    alt: 'Experienced academic educator explaining physics ray diagrams on a digital smartboard to attentive students',
    span: 'regular'
  },
  {
    id: 'g-students-study',
    src: '/images/hero-students.jpg',
    title: 'Collaborative Study Lounge',
    category: 'Peer Learning',
    alt: 'High school students engaged in peer study and problem solving with academic notebooks',
    span: 'regular'
  },
  {
    id: 'g-library-space',
    src: '/images/gallery-study-library.jpg',
    title: 'Quiet Reference Library',
    category: 'Self Study & Books',
    alt: 'Cozy and quiet academic reference library equipped with curated study guides and individual study desks',
    span: 'regular'
  }
];
