import React from 'react';
import { useInView } from '../hooks/useInView';
import { RESULTS_METRICS } from '../data/stats';
import { TrendingUp, AlertCircle, Award } from 'lucide-react';

export const Results: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="results" className="py-20 md:py-28 bg-[#070F1E] text-white relative overflow-hidden">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-white/10 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Performance Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Progress You Can Measure
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tangible academic improvements achieved through structured revision, test discipline, and active error correction.
          </p>

          {/* Mandatory Demo Disclaimer Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs font-medium">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Sample demonstration statistics — replace with verified institute data.</span>
          </div>
        </div>

        {/* 3 Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {RESULTS_METRICS.map((item, index) => (
            <div
              key={item.id}
              className={`p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div>
                {/* Highlight Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {item.highlight}
                  </span>
                  <TrendingUp className="w-4 h-4 text-slate-400" />
                </div>

                {/* Big Metric */}
                <div className="text-4xl sm:text-5xl font-extrabold font-display bg-gradient-to-r from-amber-400 via-amber-200 to-white bg-clip-text text-transparent mb-3">
                  {item.metric}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Sample Label inside card */}
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Metric Category: Diagnostic Model</span>
                <span className="text-amber-400/80 font-mono">DEMO STAT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          In a production deployment, this section connects directly with real student rank rosters, board exam top percentiles, and verified score improvement testimonials.
        </div>

      </div>
    </section>
  );
};
