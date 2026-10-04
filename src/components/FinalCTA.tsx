import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, CheckCircle } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#070F1E] via-[#0B172D] to-[#14284D] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Radial ambient glow effects */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions Consultation</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
              Ready to Take the Next Step?
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Talk to our academic counsellors and discover the right learning path for your goals. We evaluate current conceptual readiness and outline a structured plan.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto btn-primary text-base py-3.5 px-8 shadow-lg shadow-orange-500/25 group"
              >
                <span>Book a Free Counselling</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto btn-ghost-dark text-base py-3.5 px-7"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call the Institute</span>
              </a>
            </div>

            {/* Note & Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                No commitment required
              </span>
              <span className="hidden sm:inline">•</span>
              <span>100% Free 30-Minute Diagnostic Consultation</span>
              <span className="hidden sm:inline">•</span>
              <span>Available Online & In-Campus</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
