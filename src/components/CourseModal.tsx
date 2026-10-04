import React, { useEffect } from 'react';
import type { Course } from '../data/courses';
import { X, Check, Calendar, Clock, Users, BookOpen, ArrowRight } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onSelectCourseForEnquiry: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onSelectCourseForEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (course) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B172D] to-[#162C5B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            {course.badge}
          </div>

          <h3 id="course-modal-title" className="text-xl sm:text-2xl font-bold font-display text-white">
            {course.title}
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            {course.targetClasses}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Program Overview</h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {course.fullDescription}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Duration</div>
                <div className="text-slate-500">{course.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Schedule</div>
                <div className="text-slate-500">{course.schedule}</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <Users className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Batch Limit</div>
                <div className="text-slate-500">{course.batchSize}</div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Core Pedagogical Highlights</h4>
            <ul className="space-y-2.5">
              {course.keyHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects Covered */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5">Subjects Covered</h4>
            <div className="flex flex-wrap gap-2">
              {course.subjects.map((sub) => (
                <span
                  key={sub}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Demo Note */}
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/70 text-xs text-amber-800 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Fictional sample program curriculum for coaching institute demonstration.</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
          >
            Close Details
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectCourseForEnquiry(course.title);
            }}
            className="w-full sm:w-auto btn-primary text-xs sm:text-sm !py-2.5 !px-5"
          >
            <span>Enquire For This Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
