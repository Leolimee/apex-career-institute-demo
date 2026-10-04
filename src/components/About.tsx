import React from 'react';
import { CheckCircle2, ArrowRight, BookMarked, UserCheck, BarChart3, HelpCircle, CalendarCheck, MessageSquare } from 'lucide-react';

interface AboutProps {
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  const points = [
    {
      title: 'Concept-focused teaching',
      desc: 'We emphasize deep understanding of core scientific laws and mathematical logic rather than rote memorization.',
      icon: BookMarked,
    },
    {
      title: 'Individual attention',
      desc: 'Controlled batch sizes ensure every student’s learning curve and pace are monitored and supported by faculty.',
      icon: UserCheck,
    },
    {
      title: 'Regular assessments',
      desc: 'Weekly diagnostic tests and monthly full-length papers benchmark performance against competitive standards.',
      icon: BarChart3,
    },
    {
      title: 'Doubt-solving sessions',
      desc: 'Dedicated daily breakout desks where students sit one-on-one with subject teachers to resolve tough questions.',
      icon: HelpCircle,
    },
    {
      title: 'Structured study plans',
      desc: 'Customized weekly study calendars that balance school syllabus requirements with entrance test drills.',
      icon: CalendarCheck,
    },
    {
      title: 'Parent progress communication',
      desc: 'Scheduled monthly parent-mentor reviews and detailed digital report cards tracking topic-wise accuracy.',
      icon: MessageSquare,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Academic Visual with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle background offset frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-[#0B172D]/10 filter blur-lg pointer-events-none" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="/images/about-mentor.jpg"
                  alt="Experienced faculty mentor teaching physics optics to students on smartboard at Apex Career Institute"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Floating Badge: Student-first learning */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B172D] uppercase tracking-wide">
                      Student-First Learning
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Guiding every learner individually
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Why Apex & Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-3">
              WHY APEX
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B172D] tracking-tight leading-tight font-display mb-6">
              Learning that goes beyond the classroom.
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              At Apex Career Institute, we believe academic mastery is built through structured habits, conceptual clarity, and patient mentorship. We provide a disciplined yet supportive environment where curious minds turn academic potential into demonstrable success.
            </p>

            {/* 6 Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-900 leading-snug">
                      {point.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenEnquiry}
              className="btn-primary text-sm sm:text-base py-3 px-6 shadow-md shadow-orange-500/15 group"
            >
              <span>Discover Our Approach</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
