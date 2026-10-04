import React from 'react';
import { FACULTY_DATA } from '../data/faculty';
import { Award, BookOpen, GraduationCap, AlertCircle } from 'lucide-react';

export const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-amber-600" />
            <span>Experienced Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-4">
            Learn Under Dedicated Academic Faculty
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
            Subject specialists who guide students through concept building, derivation clarity, and exam strategies.
          </p>

          {/* Mandatory Demo Disclaimer */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
            <span>Sample faculty profiles — replace with actual faculty information.</span>
          </div>
        </div>

        {/* 3 Faculty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACULTY_DATA.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header Banner & Academic Avatar */}
                <div className="h-28 bg-gradient-to-r from-[#0B172D] to-[#1E3A8A] p-6 relative flex items-end">
                  <div className="absolute -bottom-8 left-6 w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border-4 border-white shadow-md flex items-center justify-center text-white font-extrabold text-2xl tracking-wider font-display">
                    {faculty.avatarInitials}
                  </div>
                  <div className="ml-auto">
                    <span className="text-[11px] font-bold text-amber-300 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/20">
                      {faculty.experience}
                    </span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="pt-12 px-6 pb-6">
                  {/* Subject Tag */}
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/60">
                    {faculty.subject}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B172D] font-display mb-1">
                    {faculty.name}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{faculty.education}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 mb-4">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Focus Area
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      {faculty.specialization}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faculty.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  Regular Doubt Desks
                </span>
                <span className="font-semibold text-amber-700">Class Mentor</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
