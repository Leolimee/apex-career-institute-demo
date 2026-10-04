import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { CourseModal } from './components/CourseModal';
import { LearningProcess } from './components/LearningProcess';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Faculty } from './components/Faculty';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingActions } from './components/FloatingActions';
import type { Course } from './data/courses';
import { Sparkles, X } from 'lucide-react';

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedEnquiryProgram, setSelectedEnquiryProgram] = useState<string>('');
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [showDemoTopNotice, setShowDemoTopNotice] = useState(true);

  const handleOpenEnquiry = (programName?: string) => {
    if (programName) {
      setSelectedEnquiryProgram(programName);
    }
    setIsEnquiryModalOpen(true);
  };

  const handleSelectCourseModal = (course: Course) => {
    setSelectedCourseForDetail(course);
  };

  const handleCourseModalEnquiry = (courseTitle: string) => {
    setSelectedCourseForDetail(null);
    setSelectedEnquiryProgram(courseTitle);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      
      {/* Top Professional Demo Banner */}
      {showDemoTopNotice && (
        <div className="bg-[#0B172D] text-white text-xs px-4 py-2 border-b border-white/10 relative z-50 flex items-center justify-between">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 hidden sm:inline" />
            <span>
              <strong className="text-amber-400 font-bold uppercase tracking-wider">Demo Website Showcase:</strong>{' '}
              Fictional demonstration model built for coaching institutes. All statistics, testimonials & faculty profiles are sample data.
            </span>
          </div>
          <button
            onClick={() => setShowDemoTopNotice(false)}
            className="p-1 rounded text-slate-400 hover:text-white ml-2 flex-shrink-0"
            aria-label="Dismiss demo banner"
            title="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Sticky Responsive Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />
        <TrustStats />
        <About onOpenEnquiry={() => handleOpenEnquiry()} />
        <Courses
          onSelectCourse={handleSelectCourseModal}
          onOpenEnquiry={handleOpenEnquiry}
        />
        <LearningProcess />
        <Results />
        <Testimonials />
        <Faculty />
        <Gallery />
        <FAQ onOpenEnquiry={() => handleOpenEnquiry()} />
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry()} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CourseModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onSelectCourseForEnquiry={handleCourseModalEnquiry}
      />

      <EnquiryModal
        key={`${selectedEnquiryProgram}-${isEnquiryModalOpen}`}
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProgram={selectedEnquiryProgram}
      />

      {/* Floating Actions (WhatsApp, Mobile Call, Scroll To Top) */}
      <FloatingActions />

    </div>
  );
}

export default App;
