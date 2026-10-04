import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll To Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white/95 text-slate-700 hover:text-[#0B172D] shadow-lg border border-slate-200 hover:border-amber-400 hover:bg-white transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Apex%20Career%20Institute,%20I%20would%20like%20to%20enquire%20about%20admissions%20and%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-700/25 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat with Admissions Counsellor on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Enquire on WhatsApp
        </span>
        <span className="absolute right-0 top-0 -mt-1 -mr-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300" />
        </span>
      </a>

      {/* Floating Call Button (Mobile Only) */}
      <a
        href="tel:+919876543210"
        className="pointer-events-auto sm:hidden p-3 rounded-full bg-[#0B172D] text-white shadow-xl hover:bg-[#14284D] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Call Apex Career Institute"
        title="Call Institute"
      >
        <Phone className="w-5 h-5 text-amber-400" />
      </a>

    </div>
  );
};
