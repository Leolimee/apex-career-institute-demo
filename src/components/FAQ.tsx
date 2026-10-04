import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';

interface FAQProps {
  onOpenEnquiry: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenEnquiry }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our teaching methodology, batch schedules, and student support.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B172D] font-display">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-50 text-amber-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Question Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <MessageCircleQuestion className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B172D]">Still have specific questions?</div>
              <div className="text-xs text-slate-500">Our academic counsellors are happy to walk you through the curriculum.</div>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="btn-secondary text-xs sm:text-sm !py-2.5 !px-4 whitespace-nowrap"
          >
            Ask a Counsellor
          </button>
        </div>

      </div>
    </section>
  );
};
