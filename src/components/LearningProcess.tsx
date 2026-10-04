import React from 'react';
import { useInView } from '../hooks/useInView';
import { Search, Compass, PenTool, TrendingUp, CheckCircle } from 'lucide-react';

export const LearningProcess: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const steps = [
    {
      num: '01',
      title: 'ASSESS',
      tagline: 'Understand current strengths and gaps',
      desc: 'We start with a diagnostic evaluation identifying conceptual strong points, blind spots, and foundational problem areas.',
      icon: Search,
      deliverable: 'Diagnostic report & baseline benchmark'
    },
    {
      num: '02',
      title: 'PLAN',
      tagline: 'Create a structured learning roadmap',
      desc: 'Our academic counselors design a realistic, term-wise timetable aligned with both school exams and competitive test milestones.',
      icon: Compass,
      deliverable: 'Personalized study schedule'
    },
    {
      num: '03',
      title: 'PRACTICE',
      tagline: 'Strengthen concepts through guided practice',
      desc: 'Classroom theory is reinforced via graded exercise sheets, teacher-guided problem solving, and daily doubt removal.',
      icon: PenTool,
      deliverable: 'Daily practice problem sets (DPPs)'
    },
    {
      num: '04',
      title: 'IMPROVE',
      tagline: 'Measure progress and refine the strategy',
      desc: 'Timed simulated exams and error-log analytics highlight recurring mistakes, fine-tuning accuracy and speed before finals.',
      icon: TrendingUp,
      deliverable: 'Cumulative analytics & mock rank'
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Academic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-4">
            How We Help Students Improve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A tested four-stage learning framework that transforms uncertainty into mastery.
          </p>
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal Connecting Guide Line */}
          <div className="absolute top-1/4 left-12 right-12 h-0.5 bg-slate-200 -z-0" />
          
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`flex flex-col items-start bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Top Badge & Number */}
                  <div className="w-full flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold font-display text-slate-300">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B172D] font-display mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 mb-3">
                    {step.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  <div className="mt-auto pt-3 border-t border-slate-100 w-full flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-slate-200" />

          <div className="space-y-6 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex items-start gap-4">
                  {/* Number Circle Marker */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md shadow-amber-500/20 z-10">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold text-amber-600 tracking-wider">
                        STAGE {step.num}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {step.deliverable.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0B172D] font-display">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-700 mt-0.5 mb-2">
                      {step.tagline}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
