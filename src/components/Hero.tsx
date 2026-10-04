import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Award, BookOpen, Users } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const scrollToCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50">
      {/* Decorative Subtle Background Grids */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0B172D 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />
      
      {/* Subtle radial glow top-right */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 shadow-xs mb-6 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-amber-900 uppercase">
                ADMISSIONS OPEN • 2026–27
              </span>
              <span className="text-[11px] font-medium text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full hidden sm:inline-block">
                Limited Seats
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0B172D] tracking-tight leading-[1.12] font-display mb-6">
              Build Strong Foundations.{' '}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Achieve Bigger Goals.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Personalized learning, experienced guidance, and focused preparation designed to help students move confidently toward their academic goals.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#courses"
                onClick={scrollToCourses}
                className="btn-primary text-center text-sm sm:text-base px-6 py-3.5 shadow-md shadow-orange-500/20 group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn-secondary text-center text-sm sm:text-base px-6 py-3.5 hover:bg-slate-50 transition-colors"
              >
                <span>Book a Free Counselling</span>
              </button>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Focused Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Regular Assessments</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Academic Composition */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Backing Card / Framing */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background architectural layer */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/15 via-[#0B172D]/10 to-indigo-500/10 rounded-2xl filter blur-xl transform -rotate-1 pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="/images/hero-students.jpg"
                  alt="Apex Career Institute students collaborating in academic library"
                  className="w-full h-[360px] sm:h-[420px] md:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Subtle Image Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B172D]/80 via-transparent to-transparent pointer-events-none" />

                {/* In-Image Tagline Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Academic Environment</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    Focused study sessions, peer problem-solving, and mentor attention.
                  </p>
                </div>
              </div>

              {/* Floating Academic Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-100 flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B172D]">Concept-First</div>
                  <div className="text-[11px] text-slate-500">Structured Modules</div>
                </div>
              </div>

              {/* Floating Academic Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B172D]">Small Batch Sizes</div>
                  <div className="text-[11px] text-slate-500">Individual Doubt Clearing</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
