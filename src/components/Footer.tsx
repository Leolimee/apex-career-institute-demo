import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#060C18] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M12 2L2 20h6l4-8 4 8h6L12 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white uppercase font-display">
                  Apex Career <span className="text-amber-400">Institute</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                  Academic Mentorship
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              "Learn With Purpose. Achieve With Confidence."
              <br />
              Helping students build strong conceptual foundations, master competitive problem-solving, and achieve their academic ambitions.
            </p>

            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-amber-300 font-medium">
              Demo Project for Academic Institutions
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Courses', href: '#courses' },
                { label: 'Results', href: '#results' },
                { label: 'Faculty', href: '#faculty' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-amber-400 transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, '#courses')}
                  className="hover:text-amber-400 transition-colors block py-0.5"
                >
                  <span className="font-medium text-slate-200">Foundation Program</span>
                  <span className="block text-xs text-slate-500">Classes 8 to 10</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, '#courses')}
                  className="hover:text-amber-400 transition-colors block py-0.5"
                >
                  <span className="font-medium text-slate-200">Senior Secondary</span>
                  <span className="block text-xs text-slate-500">Classes 11 & 12 Board Focus</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, '#courses')}
                  className="hover:text-amber-400 transition-colors block py-0.5"
                >
                  <span className="font-medium text-slate-200">Competitive Preparation</span>
                  <span className="block text-xs text-slate-500">JEE / NEET Foundation</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, '#courses')}
                  className="hover:text-amber-400 transition-colors block py-0.5"
                >
                  <span className="font-medium text-slate-200">Exam Booster</span>
                  <span className="block text-xs text-slate-500">Pre-Exam Crash Revision</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Campus & Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Main Road, Guwahati, Assam, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="mailto:hello@apexcareer.example" className="hover:text-white transition-colors break-all">
                  hello@apexcareer.example
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Operating Hours: Mon–Sat, 9:00 AM – 7:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Apex Career Institute. Demo Website.
            <span className="mx-2">•</span>
            <span>Designed as a demonstration project.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Fictional demonstration showcase</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
