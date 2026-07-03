import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { type } from '../styles/typography';
import { Send, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config/emailjs';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  practiceType: string;
  role: string;
  message: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  practiceType: '',
  role: '',
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
    if (!form.lastName.trim()) next.lastName = 'Last name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.practiceType) next.practiceType = 'Practice type is required';
    if (!form.role) next.role = 'Your role is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    const fullName = [form.firstName, form.lastName].filter(Boolean).join(' ');

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: fullName,
        email: form.email,
        phone: 'Not provided',
        company: form.practiceType || 'Not provided',
        job_role: form.role || 'Not provided',
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

  const selectBase =
    'w-full px-4 py-3 rounded-xl border bg-white/80 backdrop-blur-sm text-nodal-graphite font-light transition-all duration-200 outline-none appearance-none';
  const selectNormal = `${selectBase} border-slate-200 focus:border-nodal-blue focus:ring-2 focus:ring-nodal-blue/10`;
  const selectError = `${selectBase} border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10`;

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
              <span className="cf-headline block">Join the</span>
            </div>
            <div className="overflow-hidden">
              <span className="cf-headline block">pilot.</span>
            </div>
          </h1>
          <p className={`cf-subtitle opacity-0 ${type.body} text-nodal-graphite font-light leading-relaxed mb-10`}>
            We are working with a small group of therapists, psychologists, and psychiatrists to refine Nodal before broader launch. We will set up a 20 minute call to understand how your practice works before you start.
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
              <h2 className={`${type.subheading} font-semibold text-nodal-blue mb-3`}>You're in.</h2>
              <p className={`${type.body} text-nodal-graphite font-light`}>
                Thank you for joining the pilot. We'll follow up within 2 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl p-8 md:p-10 space-y-5"
            >
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <label htmlFor="lastName" className={labelClass}>
                    Last name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={errors.lastName ? inputError : inputNormal}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
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

              {/* Practice type & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="practiceType" className={labelClass}>
                    Practice type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="practiceType"
                    name="practiceType"
                    value={form.practiceType}
                    onChange={handleChange}
                    className={errors.practiceType ? selectError : selectNormal}
                  >
                    <option value="" disabled>Select practice type</option>
                    <option value="Solo practice">Solo practice</option>
                    <option value="Group practice">Group practice</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.practiceType && <p className="text-red-500 text-xs mt-1">{errors.practiceType}</p>}
                </div>
                <div>
                  <label htmlFor="role" className={labelClass}>
                    Your role <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={errors.role ? selectError : selectNormal}
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="Therapist">Therapist</option>
                    <option value="Psychologist">Psychologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>Tell us about your practice</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How many patients do you see per week? What documentation system do you currently use?"
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
                  className={`w-full sm:w-auto px-10 py-4 bg-nodal-green text-white ${type.body} rounded-xl font-semibold hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none shadow-md hover:shadow-xl`}
                >
                  {sending ? (
                    <>
                      Sending
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    'Join the pilot →'
                  )}
                </button>
              </div>

              {/* Trust line */}
              <p className="text-xs text-nodal-graphite-soft font-light tracking-wide pt-2">
                HIPAA aligned
                <span className="mx-2 text-nodal-graphite-soft/40">·</span>
                <Link
                  to="/contact"
                  className="underline decoration-nodal-graphite-soft/30 underline-offset-2 hover:text-nodal-blue transition-colors"
                >
                  BAA available
                </Link>
                <span className="mx-2 text-nodal-graphite-soft/40">·</span>
                We'll follow up within 2 business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
