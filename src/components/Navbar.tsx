import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/#' },
  { label: 'About', path: '/#/about' },
  { label: 'Services', path: '/#/services' },
  { label: 'Portfolio', path: '/#/portfolio' },
  { label: 'Contact', path: '/#/contact' },
];

function getActivePath() {
  const hash = window.location.hash || '#/';
  const path = hash.replace('#', '').replace(/\/$/, '') || '/';
  return path;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState(getActivePath());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const handleHashChange = () => {
      setActivePath(getActivePath());
      setIsOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/images/ChatGPT_Image_Apr_6,_2026,_10_30_46_PM.png"
                alt="Aixtronix Logo"
                className="w-10 h-10 rounded-xl object-contain bg-[#0a0f2e] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-glow-blue" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Aixtronix
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-cyan-400 -mt-1 tracking-wider">
                Innovate. Automate. Elevate.
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const linkPath = link.path.replace('/#', '').replace('#', '') || '/';
              const isActive = activePath === linkPath || (link.path === '/#' && activePath === '/');
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg border border-white/10" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/923090256542" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300">
              WhatsApp
            </a>
            <a href="/#/contact" className="btn-glow text-sm px-5 py-2.5">
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className="absolute top-0 left-0 right-0 bg-[rgba(5,8,22,0.95)] backdrop-blur-xl shadow-2xl border-t border-white/5 p-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const linkPath = link.path.replace('/#', '').replace('#', '') || '/';
              const isActive = activePath === linkPath || (link.path === '/#' && activePath === '/');
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/5 border border-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/5">
              <a href="https://wa.me/923090256542" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                <span>WhatsApp</span>
              </a>
              <a href="/#/contact" className="btn-glow text-sm text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
