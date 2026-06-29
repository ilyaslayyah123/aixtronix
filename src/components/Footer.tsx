import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowRight, Sparkles, Globe, Clock, Zap, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const quickLinks = [
  { label: 'Home', path: '/#' },
  { label: 'About', path: '/#/about' },
  { label: 'Services', path: '/#/services' },
  { label: 'Portfolio', path: '/#/portfolio' },
  { label: 'Contact', path: '/#/contact' },
];

const services = [
  'AI Solutions',
  'Software Development',
  'Web Development',
  'Automation Solutions',
  'Graphic Design',
];

const trustBadges = [
  { icon: Clock, text: '24/7 Support' },
  { icon: Globe, text: 'Global Reach' },
  { icon: Zap, text: 'Fast Delivery' },
  { icon: Sparkles, text: 'AI-Powered' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0f2e] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-10 pt-20 pb-12">
        {/* Top Trust Bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 pb-12 border-b border-white/5">
            {trustBadges.map((badge, i) => (
              <div key={i} className="group/card flex items-center gap-3 p-4 rounded-xl bg-[rgba(15,23,42,0.6)] border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow-subtle">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow-blue">
                  <badge.icon className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-bold text-white">{badge.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/#" className="flex items-center gap-2 mb-5 group">
              <div className="relative">
                <img
                  src="/assets/images/ChatGPT_Image_Apr_6,_2026,_10_30_46_PM.png"
                  alt="Aixtronix Logo"
                  className="w-10 h-10 rounded-xl object-contain bg-[#0a0f2e] border border-white/10 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-glow-blue" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">Aixtronix</span>
                <span className="text-[10px] text-blue-400 font-bold -mt-0.5 tracking-wider font-mono">
                  Innovate. Automate. Elevate.
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming ideas into intelligent digital solutions. We help businesses grow through AI, software, and automation.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/aixtronix/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(15,23,42,0.8)] border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:shadow-glow-subtle">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/1JkuYpMkC1/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(15,23,42,0.8)] border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:shadow-glow-subtle">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/aixtronix?igsh=ZmpvdzdjMmVvcWpo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(15,23,42,0.8)] border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/30 transition-all duration-300 hover:shadow-glow-subtle">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="/#/services" className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:aixtronix@gmail.com" className="flex items-start gap-3 group text-gray-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <span className="text-sm">aixtronix@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923090256542" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group text-gray-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                    <span className="text-sm">+92 309 0256542</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <span className="text-sm">Lahore, Pakistan</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Aixtronix. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-pink-400" /> in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
