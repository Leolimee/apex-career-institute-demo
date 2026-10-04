import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star, Quote, Info } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // For responsive sliding: 1 on mobile, 3 on desktop
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Visible window of testimonials: 3 items wrapping
  const getVisibleTestimonials = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % TESTIMONIALS_DATA.length;
      list.push(TESTIMONIALS_DATA[idx]);
    }
    return list;
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/60">
              Community Voices
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-3">
              Words From Students & Parents
            </h2>
            <p className="text-base text-slate-600 max-w-xl">
              Real reflections on conceptual growth, disciplined study habits, and consistent teacher encouragement.
            </p>
          </div>

          {/* Sample Notice Badge & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Sample testimonials for demonstration</span>
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-amber-400 hover:bg-amber-50 flex items-center justify-center text-slate-700 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-amber-400 hover:bg-amber-50 flex items-center justify-center text-slate-700 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View: 3 Cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {getVisibleTestimonials().map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-amber-500/25 group-hover:text-amber-500/40 transition-colors" />
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Initial Avatar */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0B172D] to-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B172D]">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-full">
                      {item.role}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet View: 1 Card */}
        <div className="lg:hidden">
          {(() => {
            const item = TESTIMONIALS_DATA[currentIndex];
            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm relative">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-amber-500/30" />
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-base text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>

                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0B172D] to-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B172D]">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
                        {item.role}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-amber-500' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
