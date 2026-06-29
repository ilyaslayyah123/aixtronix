import {
  Target, Eye, Award, Users, Heart, ArrowRight,
  CheckCircle, Globe, Cpu, Sparkles, Zap,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingOrbs from '../components/FloatingOrbs';

const values = [
  { icon: Target, title: 'Innovation', description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.' },
  { icon: Heart, title: 'Passion', description: 'We love what we do, and that passion drives us to deliver exceptional results for every client, every project, every time.' },
  { icon: Users, title: 'Collaboration', description: 'We work closely with our clients as true partners, ensuring transparency and shared success throughout every project.' },
  { icon: Award, title: 'Excellence', description: 'We set high standards and maintain them in every aspect of our work, from design to deployment and beyond.' },
];

const leaders = [
  {
    name: 'Muhammad Ilyas',
    role: 'Founder & CEO',
    description: 'Leading Aixtronix with a passion for innovation, technology, and digital transformation.',
    image: '/assets/images/20260624_132114-IMG_STYLE.jpg copy.jpeg',
  },
  {
    name: 'Syeda Dua Zahra',
    role: 'Co-Founder',
    description: 'Driving strategic vision and operational excellence to deliver world-class solutions.',
    image: '/assets/images/avatar.PNG',
  },
];

const trustStats = [
  { icon: Globe, label: 'Global Reach', value: 'Worldwide' },
  { icon: Cpu, label: 'Tech Stack', value: 'AI & Modern' },
  { icon: Sparkles, label: 'Innovation', value: 'AI-Powered' },
  { icon: Zap, label: 'Speed', value: 'Fast Delivery' },
];

export default function About() {
  return (
    <div className="bg-[#050816]">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden page-header">
        <FloatingOrbs />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.06)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="fade-in-up text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-6 shadow-glow-subtle">
              <img src="/assets/images/ChatGPT_Image_Apr_6,_2026,_10_30_46_PM.png" alt="Aixtronix" className="w-5 h-5 object-contain rounded-sm" />
              <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">About Aixtronix</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              A technology-driven company focused on delivering innovative digital solutions that transform businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-2xl transition-all duration-700 group-hover:from-blue-500/25 group-hover:to-cyan-500/25" />
                <div className="relative glass-card rounded-2xl p-8 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-glass-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -mr-16 -mt-16" />
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="p-5 rounded-xl bg-[rgba(15,23,42,0.8)] border border-white/10 hover:border-blue-500/30 hover:shadow-glow-subtle transition-all duration-500 hover:-translate-y-1 group/card">
                      <div className="w-8 h-8 mb-3 flex items-center justify-center text-2xl">
                        <Cpu className="w-6 h-6 text-blue-400" />
                      </div>
                      <p className="text-xl font-bold text-white">AI-Powered</p>
                      <p className="text-sm text-gray-500 font-mono">Solutions</p>
                    </div>
                    <div className="p-5 rounded-xl bg-[rgba(15,23,42,0.8)] border border-white/10 hover:border-cyan-500/30 hover:shadow-glow-subtle transition-all duration-500 hover:-translate-y-1 group/card">
                      <div className="w-8 h-8 mb-3 flex items-center justify-center text-2xl">
                        <Zap className="w-6 h-6 text-cyan-400" />
                      </div>
                      <p className="text-xl font-bold text-white">Fast Delivery</p>
                      <p className="text-sm text-gray-500 font-mono">On-Time</p>
                    </div>
                    <div className="p-5 rounded-xl bg-[rgba(15,23,42,0.8)] border border-white/10 hover:border-emerald-500/30 hover:shadow-glow-subtle transition-all duration-500 hover:-translate-y-1 group/card">
                      <div className="w-8 h-8 mb-3 flex items-center justify-center text-2xl">
                        <Users className="w-6 h-6 text-emerald-400" />
                      </div>
                      <p className="text-xl font-bold text-white">Dedicated</p>
                      <p className="text-sm text-gray-500 font-mono">Support</p>
                    </div>
                    <div className="p-5 rounded-xl bg-[rgba(15,23,42,0.8)] border border-white/10 hover:border-violet-500/30 hover:shadow-glow-subtle transition-all duration-500 hover:-translate-y-1 group/card">
                      <div className="w-8 h-8 mb-3 flex items-center justify-center text-2xl">
                        <Globe className="w-6 h-6 text-violet-400" />
                      </div>
                      <p className="text-xl font-bold text-white">Global</p>
                      <p className="text-sm text-gray-500 font-mono">Remote Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-3 block font-mono">Who We Are</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                  Technology-Driven <span className="gradient-text">Innovation</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                  Aixtronix helps startups and businesses transform ideas into scalable digital solutions through software development, AI-powered applications, web development, automation, and digital innovation.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Our team of skilled professionals works tirelessly to transform ideas into reality, helping businesses of all sizes navigate the digital landscape and achieve their goals. From startups to enterprises, we are the trusted partner for your digital transformation journey.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: CheckCircle, text: 'Custom software solutions' },
                    { icon: CheckCircle, text: 'AI-powered applications' },
                    { icon: CheckCircle, text: 'Modern web development' },
                    { icon: CheckCircle, text: 'Business automation' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <a href="/#/services" className="btn-glow">
                  Explore Our Services <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-[#0a0f2e] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustStats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-center gap-3 glass-card rounded-xl p-5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-subtle group/card">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow-blue">
                    <stat.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">{stat.label}</p>
                    <p className="text-sm font-bold text-white group-hover/card:text-blue-300 transition-colors duration-300">{stat.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(6,182,212,0.05),transparent)]" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 glass-card rounded-2xl border border-white/10 h-full hover:border-blue-500/30 transition-all duration-500 hover:shadow-glass-lg hover:-translate-y-1 group/card">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow-blue">
                  <Target className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover/card:text-blue-300 transition-colors duration-300">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To empower businesses through innovative and intelligent technology solutions. We strive to be the catalyst for digital transformation, helping our clients achieve efficiency, growth, and competitive advantage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="p-8 glass-card rounded-2xl border border-white/10 h-full hover:border-cyan-500/30 transition-all duration-500 hover:shadow-glass-lg hover:-translate-y-1 group/card">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow-cyan">
                  <Eye className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover/card:text-cyan-300 transition-colors duration-300">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To become a trusted technology partner for businesses worldwide. We envision a future where every business, regardless of size, has access to world-class technology that drives success and innovation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#0a0f2e] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-3 block font-mono">Our Values</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">What Drives Us</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our core values define who we are and how we approach every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group p-6 glass-card rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-glow-blue transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow-strong mx-auto">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-3 block font-mono">Leadership</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">Meet Our Leaders</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Visionaries who guide Aixtronix toward innovation and excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leaders.map((leader, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2 group/card">
                  <div className="relative h-56 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 flex items-center justify-center">
                    <div className="absolute inset-0 dot-pattern opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#0a0f2e] shadow-2xl border-4 border-white/10 overflow-hidden z-10 transition-all duration-700 group-hover/card:border-blue-500/30 group-hover/card:shadow-glow-blue group-hover/card:scale-105">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-16 pb-8 px-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover/card:text-blue-300 transition-colors duration-300">{leader.name}</h3>
                    <p className="text-blue-400 font-semibold text-sm mb-3 font-mono">{leader.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text-animated mb-6 leading-tight">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Ready to transform your business? Our team is here to help you every step of the way.
              </p>
              <a href="/#/contact" className="btn-glow text-lg px-8 py-4">
                Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
