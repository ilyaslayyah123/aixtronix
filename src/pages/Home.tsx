import { useState } from 'react';
import {
  Brain, Code, Globe, Bot, Palette, ArrowRight, Sparkles,
  ChevronRight, Cpu, Shield, Rocket, Clock,
  BarChart3, Users, MessageCircle, FileText, Code2,
  TrendingUp, Zap, Star, Award,
} from 'lucide-react';
import AIBackground from '../components/AIBackground';
import FloatingOrbs from '../components/FloatingOrbs';
import HeroVisual from '../components/HeroVisual';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const services = [
  { icon: Brain, title: 'AI Solutions', description: 'Intelligent AI-powered solutions including chatbots, automation, and machine learning.', path: '/#/services', gradient: 'from-blue-500 to-cyan-400', glowColor: 'shadow-blue-500/20' },
  { icon: Code, title: 'Custom Software', description: 'Tailored software solutions built to meet your specific business requirements.', path: '/#/services', gradient: 'from-cyan-500 to-blue-500', glowColor: 'shadow-cyan-500/20' },
  { icon: Globe, title: 'Web Development', description: 'Modern, responsive websites that drive engagement and conversions.', path: '/#/services', gradient: 'from-emerald-500 to-teal-400', glowColor: 'shadow-emerald-500/20' },
  { icon: Bot, title: 'Automation', description: 'Streamline workflows and business processes with intelligent automation.', path: '/#/services', gradient: 'from-amber-500 to-orange-400', glowColor: 'shadow-amber-500/20' },
  { icon: Palette, title: 'Graphic Design', description: 'Creative UI/UX design, branding, and marketing materials that stand out.', path: '/#/services', gradient: 'from-violet-500 to-purple-400', glowColor: 'shadow-violet-500/20' },
];

const process = [
  { step: '01', icon: MessageCircle, title: 'Consultation', description: 'We discuss your goals, challenges, and vision to understand your needs.' },
  { step: '02', icon: FileText, title: 'Planning', description: 'We create a detailed roadmap with timelines, milestones, and deliverables.' },
  { step: '03', icon: Code2, title: 'Development', description: 'Our team builds your solution with regular updates and iterative feedback.' },
  { step: '04', icon: Rocket, title: 'Launch', description: 'We deploy, monitor, and optimize your solution for maximum performance.' },
];

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Rocket },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: Star },
  { value: 5, suffix: '', label: 'Expert Services', icon: Award },
  { value: 24, suffix: '/7', label: 'Support Available', icon: Clock },
];

const portfolioProjects = [
  {
    title: 'ShopLux',
    category: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with a modern shopping experience and responsive design.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Edu Navigator',
    category: 'EdTech Platform',
    description: 'Educational guidance platform helping students explore academic and career opportunities.',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'TaskBuddy AI',
    category: 'AI Productivity Tool',
    description: 'AI-powered assistant for task management and productivity enhancement.',
    image: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'AI', 'Firebase'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Smart Recipe Generator',
    category: 'AI Application',
    description: 'Intelligent recipe recommendation system powered by AI.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'AI/ML', 'React'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'AI Quiz Generator',
    category: 'AI Learning Platform',
    description: 'Automated quiz generation platform for interactive learning experiences.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'AI', 'OpenAI'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Mobile App UI Design',
    category: 'UI/UX Design',
    description: 'Modern and user-centric mobile application interface design.',
    image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    gradient: 'from-pink-500 to-rose-500',
  },
];

const faqs = [
  { question: 'What services does Aixtronix offer?', answer: 'We offer AI Solutions, Custom Software Development, Web Development, Automation Solutions, and Graphic Design services. We work with startups, businesses, and enterprises worldwide.' },
  { question: 'How long does a typical project take?', answer: 'Project timelines vary based on complexity. A simple website may take 2-3 weeks, while a complex software solution can take 2-3 months. We provide detailed timelines during the consultation.' },
  { question: 'Do you offer ongoing support?', answer: 'Yes, we provide comprehensive maintenance and support packages. Our team is available for bug fixes, updates, feature enhancements, and technical support.' },
  { question: 'What industries do you serve?', answer: 'We serve startups, small businesses, clinics, educational institutes, agencies, and enterprises across various industries including healthcare, education, e-commerce, and technology.' },
  { question: 'How do I get started?', answer: 'Simply reach out via our contact form, email, or WhatsApp. We will schedule a free consultation to discuss your project and provide a tailored proposal.' },
];

const trustBadges = [
  { icon: Shield, text: 'Enterprise Security' },
  { icon: Clock, text: 'On-Time Delivery' },
  { icon: Cpu, text: 'Modern Tech Stack' },
  { icon: Users, text: 'Expert Team' },
  { icon: BarChart3, text: 'Data-Driven' },
  { icon: Rocket, text: 'Scalable Solutions' },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-card-hover rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-blue-500/30">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-bold text-white pr-4 text-base">{faq.question}</span>
        <ChevronRight className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#050816]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-section">
        <FloatingOrbs />
        <AIBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(6,182,212,0.1),transparent)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container-custom relative z-10 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div className="max-w-2xl">
              <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-8 shadow-glow-subtle">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">AI-Powered Digital Solutions</span>
              </div>

              <h1 className="fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 text-balance drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Transforming Ideas Into{' '}
                <span className="gradient-text-animated">Intelligent</span> Digital Solutions
              </h1>

              <p className="fade-in-up delay-200 text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 text-balance max-w-xl">
                Aixtronix helps businesses grow through AI Solutions, Software Development, Web Development, and Automation Services.
              </p>

              <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center gap-4">
                <a href="/#/contact" className="btn-glow text-lg px-8 py-4 w-full sm:w-auto">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="/#/portfolio" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                  View Our Work
                </a>
              </div>

              {/* Trust badges */}
              <div className="fade-in-up delay-500 mt-12 flex flex-wrap items-center gap-3">
                {trustBadges.slice(0, 3).map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-sm text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <badge.icon className="w-3.5 h-3.5 text-blue-400" /> {badge.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:block">
              <div className="fade-in-right delay-400">
                <HeroVisual />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative section-padding bg-[#0a0f2e] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card-hover rounded-2xl p-6 text-center border border-white/10 hover:border-blue-500/30 hover:shadow-glow-subtle transition-all duration-500 group/card">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 group-hover/card:shadow-glow-blue transition-all duration-500">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1 font-mono">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">What We Do</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">Our Services</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Comprehensive technology solutions tailored to help your business thrive in the digital age.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a href={service.path} className="group/card relative block">
                  <div className="glass-card rounded-2xl p-8 h-full border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg overflow-hidden group-hover/card:bg-[rgba(15,23,42,0.75)]">
                    {/* Gradient border effect on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover/card:opacity-[0.04] transition-opacity duration-500`} />

                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 ${service.glowColor} transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-3`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover/card:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-5">{service.description}</p>
                    <span className="inline-flex items-center text-blue-400 font-bold text-sm group-hover/card:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/card:translate-x-1" />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[#0a0f2e] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Our Process</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">How We Work</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A streamlined approach that ensures every project is delivered with excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="relative p-8 glass-card rounded-2xl border border-white/10 hover:border-blue-500/30 hover:shadow-glass transition-all duration-500 hover:-translate-y-2 text-center group/card">
                  <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-black flex items-center justify-center shadow-glow-blue z-10 font-mono">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5 mt-3 transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-glow-blue">
                    <step.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(6,182,212,0.06),transparent)]" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Our Work</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">Featured Projects</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Explore our portfolio of innovative digital solutions delivered for clients worldwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a href="/#/portfolio" className="group/card block">
                  <div className="relative overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.gradient} shadow-lg transition-all duration-500 group-hover/card:shadow-glow`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-blue-400 font-bold text-sm group-hover/card:gap-3 transition-all duration-300">
                        View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/card:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-14">
              <a href="/#/portfolio" className="btn-glow">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#0a0f2e] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom max-w-3xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-lg leading-relaxed">Got questions? We have answers.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <FAQItem faq={faq} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden cta-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 mb-8 shadow-glow-subtle">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Ready to Scale?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                Let us discuss how Aixtronix can help you achieve your digital goals. Schedule a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/#/contact" className="btn-glow text-lg px-8 py-4 w-full sm:w-auto">
                  Schedule a Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="https://wa.me/923090256542" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 transition-all duration-300 hover:bg-emerald-500/20 hover:-translate-y-0.5 text-lg w-full sm:w-auto">
                  <Zap className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
