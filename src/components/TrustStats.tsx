import React from 'react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { TRUST_STATS, type StatItem } from '../data/stats';
import { Info } from 'lucide-react';

interface StatBlockProps {
  stat: StatItem;
  isInView: boolean;
}

const StatBlock: React.FC<StatBlockProps> = ({ stat, isInView }) => {
  const count = useCountUp(stat.value, 1600, isInView);

  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-amber-300 transition-colors">
      <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-1">
        <span>{count}</span>
        <span className="text-amber-600">{stat.suffix}</span>
      </div>
      <div className="text-sm font-bold text-slate-800 mb-0.5 leading-snug">
        {stat.label}
      </div>
      <div className="text-xs text-slate-500 leading-normal">
        {stat.sublabel}
      </div>
    </div>
  );
};

export const TrustStats: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-12 bg-white border-y border-slate-200/70 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tagline & Sample Disclaimer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
              Proven Learning Methodology
            </div>
            <p className="text-base sm:text-lg font-semibold text-slate-900">
              Focused on better learning, stronger fundamentals, and measurable progress.
            </p>
          </div>

          {/* Explicit Demo Marker */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 self-start md:self-auto">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Sample Demonstration Data</span>
          </div>
        </div>

        {/* 4 Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_STATS.map((stat) => (
            <StatBlock key={stat.id} stat={stat} isInView={isInView} />
          ))}
        </div>

      </div>
    </section>
  );
};
