import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/gallery';
import { Sparkles, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Learning Spaces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-4">
            Designed for Focus & Academic Clarity
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a look inside our modern classrooms, reference library, and collaborative doubt-solving areas.
          </p>
        </div>

        {/* Gallery Grid: 1 Featured Large Image + 3 Supporting Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Featured Large Image (spans 2 columns on desktop) */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group h-[320px] sm:h-[420px] bg-slate-900">
            <img
              src={GALLERY_DATA[0].src}
              alt={GALLERY_DATA[0].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B172D]/90 via-[#0B172D]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-1 inline-block">
                  {GALLERY_DATA[0].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {GALLERY_DATA[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md hidden sm:block">
                  Acoustically designed tiered halls ensuring clear line-of-sight and focused teaching.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(GALLERY_DATA[0].src)}
                className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                aria-label="Enlarge lecture hall image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Supporting Image 1: Teacher Interaction */}
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 group h-[260px] sm:h-[420px] bg-slate-900">
            <img
              src={GALLERY_DATA[1].src}
              alt={GALLERY_DATA[1].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B172D]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-1 inline-block">
                  {GALLERY_DATA[1].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  {GALLERY_DATA[1].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(GALLERY_DATA[1].src)}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                aria-label="Enlarge smartboard classroom image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Supporting Image 2: Students Collaborative Study */}
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 group h-[260px] sm:h-[300px] bg-slate-900">
            <img
              src={GALLERY_DATA[2].src}
              alt={GALLERY_DATA[2].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B172D]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-0.5 inline-block">
                  {GALLERY_DATA[2].category}
                </span>
                <h3 className="text-base font-bold font-display text-white">
                  {GALLERY_DATA[2].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(GALLERY_DATA[2].src)}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                aria-label="Enlarge collaborative study image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Supporting Image 3: Quiet Reference Library (spans 2 on desktop) */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-md border border-slate-200 group h-[260px] sm:h-[300px] bg-slate-900">
            <img
              src={GALLERY_DATA[3].src}
              alt={GALLERY_DATA[3].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B172D]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-0.5 inline-block">
                  {GALLERY_DATA[3].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  {GALLERY_DATA[3].title}
                </h3>
                <p className="text-xs text-slate-300 hidden sm:block">
                  Equipped with NCERT references, previous year question banks, and dedicated reading pods.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(GALLERY_DATA[3].src)}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                aria-label="Enlarge quiet library image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img
              src={selectedImage}
              alt="Enlarged campus view"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-slate-900/80 text-white text-xs font-bold hover:bg-slate-900 transition-colors"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
