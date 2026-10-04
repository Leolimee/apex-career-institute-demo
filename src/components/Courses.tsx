import React from 'react';
import { COURSES_DATA, type Course } from '../data/courses';
import { Compass, GraduationCap, Target, Zap, ArrowRight, BookOpen } from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (course: Course) => void;
  onOpenEnquiry: (programName?: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const getIcon = (iconName: Course['iconName']) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-500 transition-transform group-hover:rotate-45 duration-300" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-500 transition-transform group-hover:-translate-y-0.5 duration-300" />;
      case 'Target':
        return <Target className="w-6 h-6 text-rose-500 transition-transform group-hover:scale-110 duration-300" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400 transition-transform group-hover:scale-110 duration-300" />;
      default:
        return <BookOpen className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            Academic Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-4">
            Programs Designed Around Student Goals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Structured programs for different academic stages and competitive ambitions.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Top Accent Strip */}
              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-6 group-hover:w-20 transition-all duration-300" />

              <div>
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-amber-50/60 transition-colors">
                    {getIcon(course.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 uppercase tracking-wide">
                    {course.badge}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-[#0B172D] mb-2 font-display group-hover:text-amber-600 transition-colors">
                  {course.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {course.shortDescription}
                </p>
              </div>

              {/* Card Footer & View Program Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectCourse(course)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B172D] group-hover:text-amber-600 transition-colors cursor-pointer"
                  aria-label={`View details for ${course.title}`}
                >
                  <span>View Program</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[11px] text-slate-400 font-medium">
                  {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto italic">
            * Note: These are fictional demo programs showcasing curriculum presentation. Program names, subjects, and batch structures can be customized for your institute.
          </p>
        </div>

      </div>
    </section>
  );
};
