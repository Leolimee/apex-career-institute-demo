import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Simple active section detection
      const sections = ['home', 'about', 'courses', 'process', 'results', 'faculty', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Faculty', href: '#faculty', id: 'faculty' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            aria-label="Apex Career Institute Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B172D] to-[#1E3A8A] flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform duration-200">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-400 fill-current">
                <path d="M12 2L2 20h6l4-8 4 8h6L12 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0B172D] leading-none uppercase font-display">
                Apex Career <span className="text-amber-600">Institute</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-500 mt-1">
                Learn With Purpose
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-amber-600 font-semibold bg-amber-50/80'
                      : 'text-slate-600 hover:text-[#0B172D] hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0B172D] transition-colors py-2 px-2.5 rounded-lg hover:bg-slate-100"
              title="Call for Admissions"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>+91 98765 43210</span>
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="btn-primary text-xs sm:text-sm !py-2 !px-4 shadow-sm"
              aria-label="Open Admissions Enquiry Modal"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="btn-primary text-xs !py-1.5 !px-3 font-semibold"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0B172D] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl backdrop-blur-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-[#0B172D] hover:bg-amber-50/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-2 flex flex-col gap-2.5">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Call: +91 98765 43210</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-primary w-full text-center py-2.5"
              >
                Book a Free Counselling
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
