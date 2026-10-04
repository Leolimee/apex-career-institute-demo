import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentClass, setStudentClass] = useState('Class 10');
  const [program, setProgram] = useState(defaultProgram || 'Foundation Program (Classes 8–10)');
  const [mode, setMode] = useState('In-Campus (Guwahati)');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide student or parent name');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setError('Please provide a valid 10-digit phone number');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-enquiry-heading"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0B172D] text-white p-6 relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            Admissions 2026–27
          </div>
          <h3 id="modal-enquiry-heading" className="text-xl sm:text-2xl font-bold font-display text-white">
            Book a Free Counselling Session
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Personalized academic roadmaps & diagnostic guidance.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0B172D] mb-1">
                Counselling Booked!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xs mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our academic coordinator will call you on <span className="font-semibold text-slate-900">{phone}</span> to confirm your session slot.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="btn-primary w-full text-center text-sm py-2.5"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {error && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Student or Parent Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Class
                  </label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Dropper">Dropper</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mode
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="In-Campus (Guwahati)">In-Campus (Guwahati)</option>
                    <option value="Online Virtual">Online Virtual</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Program of Interest
                </label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="Foundation Program (Classes 8–10)">Foundation Program (Classes 8–10)</option>
                  <option value="Senior Secondary (Classes 11–12)">Senior Secondary (Classes 11–12)</option>
                  <option value="Competitive Preparation (JEE/NEET)">Competitive Preparation (JEE/NEET)</option>
                  <option value="Exam Booster Revision">Exam Booster Revision</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-sm py-3 justify-center shadow-md shadow-orange-500/20"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Free Counselling Slot'}
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Sample interactive form. No actual booking will be processed.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
