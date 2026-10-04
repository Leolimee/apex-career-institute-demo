import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  phone: string;
  studentClass: string;
  program: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  studentClass?: string;
  program?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    studentClass: '',
    program: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter student or parent name';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a 10-digit contact number';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, '').slice(-10))) {
      newErrors.phone = 'Please provide a valid Indian mobile number';
    }

    if (!formData.studentClass) {
      newErrors.studentClass = 'Please select student class';
    }

    if (!formData.program) {
      newErrors.program = 'Please select interested program';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      studentClass: '',
      program: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              Reach Out
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B172D] tracking-tight font-display mb-4">
              Let's Start a Conversation
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Whether you are planning your child's board preparation or gearing up for competitive entrance exams, our counselors are here to help.
            </p>

            {/* Contact Information List */}
            <div className="space-y-5 w-full mb-8">
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Phone Inquiries
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-base font-bold text-[#0B172D] hover:text-amber-600 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Mon–Sat, 9:00 AM – 7:00 PM IST
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Official Email
                  </div>
                  <a
                    href="mailto:hello@apexcareer.example"
                    className="text-base font-bold text-[#0B172D] hover:text-amber-600 transition-colors break-all"
                  >
                    hello@apexcareer.example
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Responses within 24 business hours
                  </div>
                </div>
              </div>

              {/* Campus Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Campus Location
                  </div>
                  <div className="text-base font-bold text-[#0B172D]">
                    Main Road, Guwahati, Assam
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Near Central Square • Dedicated visitor parking available
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions (WhatsApp & Mobile Call) */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-3 mb-6">
              <a
                href="https://wa.me/919876543210?text=Hello%20Apex%20Career%20Institute,%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mandatory Demo Notice */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-800 flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>These are fictional demo contact details for client presentation purposes.</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative">
              
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B172D] font-display">
                  Book an Academic Counselling Session
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below. Our senior counsellor will get in touch within one working day.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-4 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B172D] font-display mb-2">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. We have recorded your interest in the <span className="font-semibold text-slate-900">{formData.program}</span> for <span className="font-semibold text-slate-900">{formData.studentClass}</span>. Our team will contact you at <span className="font-semibold text-slate-900">{formData.phone}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary text-sm !py-2.5 !px-5"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name (Student / Parent) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.name ? 'border-rose-400 bg-rose-50/20 ring-1 ring-rose-400' : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone & Class Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20 ring-1 ring-rose-400' : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-class" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Student Class <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-class"
                        value={formData.studentClass}
                        onChange={(e) => {
                          setFormData({ ...formData, studentClass: e.target.value });
                          if (errors.studentClass) setErrors({ ...errors, studentClass: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none transition-all ${
                          errors.studentClass ? 'border-rose-400 bg-rose-50/20 ring-1 ring-rose-400' : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                        }`}
                      >
                        <option value="">Select current class</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                        <option value="Dropper / Repeat Year">Dropper / Repeat Year</option>
                      </select>
                      {errors.studentClass && (
                        <p className="text-xs text-rose-600 mt-1 font-medium">{errors.studentClass}</p>
                      )}
                    </div>
                  </div>

                  {/* Interested Program */}
                  <div>
                    <label htmlFor="contact-program" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Interested Program <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="contact-program"
                      value={formData.program}
                      onChange={(e) => {
                        setFormData({ ...formData, program: e.target.value });
                        if (errors.program) setErrors({ ...errors, program: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none transition-all ${
                        errors.program ? 'border-rose-400 bg-rose-50/20 ring-1 ring-rose-400' : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                      }`}
                    >
                      <option value="">Select program of interest</option>
                      <option value="Foundation Program (Classes 8–10)">Foundation Program (Classes 8–10)</option>
                      <option value="Senior Secondary (Classes 11–12)">Senior Secondary (Classes 11–12)</option>
                      <option value="Competitive Preparation (JEE/NEET)">Competitive Preparation (JEE/NEET)</option>
                      <option value="Exam Booster Revision">Exam Booster Revision</option>
                      <option value="General Academic Counselling">General Academic Counselling</option>
                    </select>
                    {errors.program && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{errors.program}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Learning Goals <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell us about specific subject needs or target examinations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-base py-3.5 px-6 shadow-md shadow-orange-500/20 justify-center disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Enquiry...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 We respect your privacy. No spam or unsolicited promotions.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
