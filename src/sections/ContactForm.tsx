import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { type } from '../styles/typography';
import { Send, Loader2 } from 'lucide-react';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config/emailjs';

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobRole: string;
  message: string;
}

const initialForm: FormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  jobRole: '',
  message: '',
};

export const ContactForm = ({ isLoading = false }: { isLoading?: boolean }) => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.cf-headline', { y: '110%' }, { y: '0%', duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.3 })
        .fromTo('.cf-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo('.cf-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.5');
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) next.firstName = 'First name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSendError('');

    const fullName = [form.firstName, form.middleName, form.lastName].filter(Boolean).join(' ');

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: fullName,
        email: form.email,
        phone: form.phone || 'Not provided',
        company: form.company || 'Not provided',
        job_role: form.jobRole || 'Not provided',
        message: form.message || 'No message',
        time: new Date().toLocaleString(),
      }, EMAILJS_PUBLIC_KEY);

      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border bg-white/80 backdrop-blur-sm text-nodal-graphite font-light transition-all duration-200 outline-none placeholder:text-nodal-graphite-soft/60';
  const inputNormal = `${inputBase} border-slate-200 focus:border-nodal-blue focus:ring-2 focus:ring-nodal-blue/10`;
  const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10`;

  const labelClass = `${type.ui} font-medium text-nodal-graphite mb-1.5 block`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-20 z-10"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
        {/* Left — Heading & context */}
        <div className="md:sticky md:top-32 md:w-2/5 flex-shrink-0">
          <h1 className={`${type.display} font-semibold tracking-tight leading-[1.02] text-nodal-blue mb-6`}>
            <div className="overflow-hidden">
              <span className="cf-headline block">Get in</span>
            </div>
            <div className="overflow-hidden">
              <span className="cf-headline block">touch</span>
            </div>
          </h1>
          <p className={`cf-subtitle opacity-0 ${type.body} text-nodal-graphite font-light leading-relaxed mb-10`}>
            Have a question or want to learn more about Nodal? Fill out the form and our team will get back to you.
          </p>

          <div className="cf-subtitle opacity-0 space-y-6">
            <div className="border-l-2 border-nodal-green pl-5">
              <p className={`${type.ui} font-semibold text-nodal-graphite-soft uppercase tracking-widest mb-1`}>Email</p>
              <a href="mailto:core.nodal@gmail.com" className={`${type.body} text-nodal-graphite font-light hover:text-nodal-blue transition-colors`}>
                core.nodal@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="cf-card opacity-0 flex-1 min-w-0">
          {submitted ? (
            <div className="bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-nodal-green/10 flex items-center justify-center mx-auto mb-6">
                <Send className="w-7 h-7 text-nodal-green" />
              </div>
              <h2 className={`${type.subheading} font-semibold text-nodal-blue mb-3`}>Message sent</h2>
              <p className={`${type.body} text-nodal-graphite font-light`}>
                Thank you for reaching out. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl p-8 md:p-10 space-y-5"
            >
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className={errors.firstName ? inputError : inputNormal}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="middleName" className={labelClass}>Middle name</label>
                  <input
                    id="middleName"
                    name="middleName"
                    type="text"
                    value={form.middleName}
                    onChange={handleChange}
                    placeholder="M."
                    className={inputNormal}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={inputNormal}
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputNormal}
                  />
                </div>
              </div>

              {/* Company & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className={labelClass}>Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Health"
                    className={inputNormal}
                  />
                </div>
                <div>
                  <label htmlFor="jobRole" className={labelClass}>Job role</label>
                  <input
                    id="jobRole"
                    name="jobRole"
                    type="text"
                    value={form.jobRole}
                    onChange={handleChange}
                    placeholder="Clinical Director"
                    className={inputNormal}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className={`${inputNormal} resize-none`}
                />
              </div>

              {/* Error */}
              {sendError && (
                <p className="text-red-500 text-sm">{sendError}</p>
              )}

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-10 py-4 bg-nodal-green text-white rounded-xl font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {sending ? (
                    <>
                      Sending
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};