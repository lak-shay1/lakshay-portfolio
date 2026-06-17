import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const contactMethods = [
  { icon: Mail, color: '#FF7B6B', label: 'lakshayarora1904@gmail.com', href: 'mailto:lakshayarora1904@gmail.com' },
  { icon: Linkedin, color: '#60B5FF', label: 'linkedin.com/in/lakshay-1904arora', href: 'https://www.linkedin.com/in/lakshay-1904arora/' },
  { icon: Github, color: '#5A6378', label: 'github.com/lak-shay1', href: 'https://github.com/lak-shay1' },
  { icon: MapPin, color: '#4ADE80', label: 'Melbourne, Australia', href: null },
];

const subjectOptions = [
  'Graduate / Junior Role',
  'Internship Opportunity',
  'Technical Interview',
  'General Inquiry',
  'Other',
];

export default function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const formEndpoint =
    import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formsubmit.co/ajax/lakshayarora1904@gmail.com';

  const handleInputChange = (field: 'name' | 'email' | 'subject' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Contact form submission failed');
      }

      setFormState('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      // Fallback to mailto so user can still contact even if endpoint fails.
      const mailtoUrl =
        `mailto:lakshayarora1904@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject || 'General Inquiry'}`)}` +
        `&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
      window.location.href = mailtoUrl;
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="bg-surface section-padding">
      <div className="content-max-width page-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              eyebrow="GET IN TOUCH"
              heading="Let's connect"
              subtext="Recruiters, hiring managers, and teams — I'd love to hear about graduate and junior opportunities. Reach out directly or send a message below."
            />

            {/* Availability Card */}
            <div className="mt-6 p-5 rounded-card bg-surface-elevated border border-border-custom flex items-center gap-4">
              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-mint animate-pulse-dot" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Available for new opportunities
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  Junior, graduate, and internship roles across software, cloud, and support
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="mt-8 space-y-3">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-card bg-surface border border-border-custom hover:border-border-hover hover:bg-surface-elevated hover:translate-x-1 transition-all duration-200"
                    >
                      <method.icon size={20} style={{ color: method.color }} />
                      <span className="text-sm font-medium text-text-primary">{method.label}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-card bg-surface border border-border-custom">
                      <method.icon size={20} style={{ color: method.color }} />
                      <span className="text-sm font-medium text-text-primary">{method.label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Response time */}
            <p className="flex items-center gap-1.5 mt-4 text-xs text-text-tertiary">
              <Clock size={12} />
              I typically respond within 24 hours.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="p-6 rounded-card bg-surface-elevated border border-border-custom">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-mint mb-4" />
                  <p className="text-base font-medium text-text-primary">
                    Message sent!
                  </p>
                  <p className="text-sm text-text-secondary mt-1">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h4 className="text-base font-semibold text-text-primary mb-5">
                    Send a message
                  </h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-button bg-bg-dark border border-border-custom text-text-primary placeholder:text-text-tertiary text-sm focus:border-coral focus:outline-none focus:ring-[3px] focus:ring-coral/10 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Your email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-button bg-bg-dark border border-border-custom text-text-primary placeholder:text-text-tertiary text-sm focus:border-coral focus:outline-none focus:ring-[3px] focus:ring-coral/10 transition-all duration-200"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        What is this about?
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full px-4 py-3 rounded-button bg-bg-dark border border-border-custom text-text-primary text-sm focus:border-coral focus:outline-none focus:ring-[3px] focus:ring-coral/10 transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject...</option>
                        {subjectOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Your message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about the role or opportunity..."
                        className="w-full px-4 py-3 rounded-button bg-bg-dark border border-border-custom text-text-primary placeholder:text-text-tertiary text-sm focus:border-coral focus:outline-none focus:ring-[3px] focus:ring-coral/10 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-coral text-bg-dark font-semibold text-sm px-5 py-3 rounded-button hover:bg-coral-light hover:shadow-coral-glow hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                    >
                      <Send size={16} />
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>

                    {formState === 'error' && (
                      <p className="text-xs text-coral mt-2">
                        Direct email fallback opened. If it did not open, please email me at
                        {' '}
                        lakshayarora1904@gmail.com.
                      </p>
                    )}

                    <p className="text-[11px] text-text-tertiary text-center">
                      Your information is kept private and only used to respond to your inquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
