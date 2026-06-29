import {
  Brain, Code, Globe, Bot, Palette,
  MessageSquare, Cog, BarChart3, Puzzle,
  Monitor, Layout, FileText, Workflow,
  Database, Layers, PenTool, Share2,
  Fingerprint, Megaphone, ArrowRight, CheckCircle,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingOrbs from '../components/FloatingOrbs';

const servicesData = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and enhance customer experiences.',
    gradient: 'from-blue-500 to-cyan-400',
    glowColor: 'shadow-blue-500/20',
    borderColor: 'border-blue-500/20',
    items: [
      { icon: MessageSquare, title: 'AI Chatbots', description: 'Intelligent conversational agents for customer support and engagement.' },
      { icon: Cog, title: 'AI Automation', description: 'Automate repetitive tasks with intelligent AI-powered workflows.' },
      { icon: BarChart3, title: 'Machine Learning', description: 'Custom ML models for predictive analytics and data-driven decisions.' },
      { icon: Puzzle, title: 'AI Integrations', description: 'Seamlessly integrate AI capabilities into your existing systems.' },
    ],
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions built from the ground up to solve your unique business challenges.',
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'shadow-cyan-500/20',
    borderColor: 'border-cyan-500/20',
    items: [
      { icon: Monitor, title: 'Custom Software', description: 'Bespoke applications tailored to your exact business requirements.' },
      { icon: Database, title: 'Business Systems', description: 'ERP, CRM, and management systems to streamline operations.' },
      { icon: Layers, title: 'Desktop Applications', description: 'Powerful cross-platform desktop apps for Windows, macOS, and Linux.' },
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive, and high-performance websites that drive engagement and conversions.',
    gradient: 'from-emerald-500 to-teal-400',
    glowColor: 'shadow-emerald-500/20',
    borderColor: 'border-emerald-500/20',
    items: [
      { icon: Globe, title: 'Business Websites', description: 'Professional corporate websites that build trust and drive leads.' },
      { icon: Layout, title: 'WordPress Websites', description: 'Custom WordPress themes and plugins for easy content management.' },
      { icon: Fingerprint, title: 'Portfolio Websites', description: 'Stunning portfolio sites that showcase your work beautifully.' },
      { icon: FileText, title: 'Landing Pages', description: 'High-converting landing pages designed to maximize conversions.' },
    ],
  },
  {
    icon: Bot,
    title: 'Automation Solutions',
    description: 'Streamline your business processes with intelligent automation that saves time and reduces costs.',
    gradient: 'from-amber-500 to-orange-400',
    glowColor: 'shadow-amber-500/20',
    borderColor: 'border-amber-500/20',
    items: [
      { icon: Workflow, title: 'Workflow Automation', description: 'Automate multi-step processes to eliminate manual work.' },
      { icon: Cog, title: 'Business Process', description: 'End-to-end automation of business processes for maximum efficiency.' },
      { icon: Database, title: 'Data Automation', description: 'Automate data collection, processing, and reporting workflows.' },
    ],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative design solutions that make your brand stand out and communicate effectively.',
    gradient: 'from-violet-500 to-purple-400',
    glowColor: 'shadow-violet-500/20',
    borderColor: 'border-violet-500/20',
    items: [
      { icon: PenTool, title: 'UI/UX Design', description: 'User-centered interface designs that delight and convert.' },
      { icon: Share2, title: 'Social Media Designs', description: 'Eye-catching graphics for all social media platforms.' },
      { icon: Fingerprint, title: 'Brand Identity', description: 'Complete branding packages including logos, colors, and guidelines.' },
      { icon: Megaphone, title: 'Marketing Materials', description: 'Brochures, flyers, banners, and more to promote your business.' },
    ],
  },
];

const whyChoose = [
  'Custom solutions tailored to your needs',
  'Modern, scalable architecture',
  'Clean, maintainable code',
  'Rigorous testing & quality assurance',
  'Post-launch support & maintenance',
  'Transparent communication & reporting',
];

export default function Services() {
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
              <img src="/assets/images/ChatGPT_Image_Apr_6,_2026,_10_30_46_PM.png" alt="Aixtronix" className="w-5 h-5 object-contain rounded-sm" />
              <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">What We Offer</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Comprehensive technology solutions designed to help your business thrive in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />
        <div className="container-custom relative z-10">
          <div className="space-y-28">
            {servicesData.map((service, serviceIndex) => (
              <div key={serviceIndex}>
                <ScrollReveal>
                  <div className="text-center mb-14">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-5 shadow-glow-blue transition-all duration-500 hover:scale-110 hover:shadow-glow-strong`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">{service.title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">{service.description}</p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.items.map((item, itemIndex) => (
                    <ScrollReveal key={itemIndex} delay={itemIndex * 100}>
                      <div className="group/card p-6 glass-card rounded-2xl border border-white/10 hover:border-blue-500/30 hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                        {/* Hover gradient background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover/card:opacity-[0.04] transition-opacity duration-500`} />
                        
                        <div className="relative z-10">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors duration-300">{item.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="section-padding bg-[#0a0f2e] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Our Promise</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">Why Our Services Stand Out</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We deliver more than just code. We deliver results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group/card flex items-start gap-4 p-6 glass-card rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-glow-subtle transition-all duration-500 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow-blue">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300 font-medium text-sm leading-relaxed pt-1 group-hover/card:text-white transition-colors duration-300">{item}</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-8 shadow-glow-subtle">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Start Your Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Let's discuss how we can bring your ideas to life with our expert services.
              </p>
              <a href="/#/contact" className="btn-glow text-lg px-8 py-4">
                Start a Project <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
