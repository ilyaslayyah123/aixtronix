import { useState } from 'react';
import {
  Mail, Phone, MapPin, Linkedin, MessageCircle,
  Send, CheckCircle, AlertCircle, Loader2, ArrowRight,
  Clock, Shield, Sparkles, Zap, Globe, Headphones,
  MessageSquare,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingOrbs from '../components/FloatingOrbs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+92 309 0256542',
      href: 'https://wa.me/923090256542',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      buttonClass: 'bg-emerald-500 hover:bg-emerald-600 text-white',
      label: 'Chat Now',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'aixtronix@gmail.com',
      href: 'mailto:aixtronix@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      buttonClass: 'bg-blue-500 hover:bg-blue-600 text-white',
      label: 'Send Email',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Aixtronix',
      href: 'https://www.linkedin.com/company/aixtronix/',
      color: 'text-[#0ea5e9]',
      bgColor: 'bg-[#0ea5e9]/10',
      borderColor: 'border-[#0ea5e9]/20',
      buttonClass: 'bg-[#0ea5e9] hover:bg-[#0284c7] text-white',
      label: 'Connect',
    },
  ];

  const trustItems = [
    { icon: Clock, title: 'Response Time', desc: 'Reply within 24 hours' },
    { icon: Shield, title: 'Privacy', desc: 'Information is secure' },
    { icon: Sparkles, title: 'Free Consultation', desc: 'No obligation, no cost' },
  ];

  return (
    <div className="bg-[#050816]">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden page-header">
        <FloatingOrbs />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.14)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="fade-in-up text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-6 shadow-glow-subtle">
              <Headphones className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Get In Touch</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to transform your business? Let's start a conversation. We are here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group/card relative overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2 p-8 text-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.bgColor} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${method.bgColor} border ${method.borderColor} flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow`}>
                      <method.icon className={`w-7 h-7 ${method.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors duration-300">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-5 font-mono">{method.value}</p>
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-glow ${method.buttonClass}`}
                    >
                      {method.label} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Send a Message</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">Let's Talk</h2>
                    <p className="text-gray-400 leading-relaxed">
                      Fill out the form and we'll get back to you within 24 hours. We value every inquiry and respond promptly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {trustItems.map((item, i) => (
                      <div key={i} className="group/card flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10 hover:border-blue-500/30 hover:shadow-glow-subtle transition-all duration-500 hover:-translate-y-0.5">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow-blue">
                          <item.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-sm mb-1 group-hover/card:text-blue-300 transition-colors duration-300">{item.title}</h3>
                          <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="p-6 rounded-xl glass-card border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">Location</h3>
                        <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">Global</h3>
                        <p className="text-gray-400 text-sm">Remote Services Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/20 transition-all duration-500">
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6 fade-in-up">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <p className="text-emerald-400 text-sm font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-6">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="label-dark">Full Name *</label>
                        <input
                          type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                          className="input-dark"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="label-dark">Email Address *</label>
                        <input
                          type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                          className="input-dark"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="label-dark">Subject *</label>
                      <select
                        id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                        className="select-dark"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="software-development">Software Development</option>
                        <option value="web-development">Web Development</option>
                        <option value="automation">Automation Solutions</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="label-dark">Message *</label>
                      <textarea
                        id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className="input-dark resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button type="submit" disabled={isSubmitting} className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                        ) : (
                          <><Send className="w-5 h-5 mr-2" /> Send Message</>
                        )}
                      </button>
                      <a
                        href="https://wa.me/923090256542"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-emerald-500 text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-glow flex-1"
                      >
                        <MessageCircle className="w-5 h-5" /> WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden cta-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-8 shadow-glow-subtle">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Take Action</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Let's Create Something Extraordinary
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                Whether you have a clear vision or just the beginning of an idea, we're here to help you bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+923090256542" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </a>
                <a
                  href="https://wa.me/923090256542"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-emerald-500 text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-glow text-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
