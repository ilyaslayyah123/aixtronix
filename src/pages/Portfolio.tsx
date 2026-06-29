import { useState } from 'react';
import {
  ShoppingCart, GraduationCap, ChefHat, Sparkles,
  Smartphone, BrainCircuit, X,
  ArrowRight, CheckCircle, ArrowUpRight,
  Code2, Eye,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingOrbs from '../components/FloatingOrbs';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  gradient: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ShopLux',
    category: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with a modern shopping experience and responsive design.',
    longDescription: 'ShopLux is a comprehensive e-commerce solution built with modern web technologies. It features a sleek user interface, secure payment integration, real-time inventory management, and a powerful admin dashboard. The platform is designed to scale with your business.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: ['Secure payment processing', 'Real-time inventory tracking', 'Responsive mobile design', 'Admin dashboard', 'Order management system'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: 'Edu Navigator',
    category: 'EdTech Platform',
    description: 'Educational guidance platform helping students explore academic and career opportunities.',
    longDescription: 'Edu Navigator connects students with educational resources, career guidance, and academic planning tools. The platform features personalized recommendations, course comparisons, and a comprehensive database of institutions and programs.',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'AI', 'Tailwind CSS'],
    features: ['Personalized recommendations', 'Course comparison tools', 'Institution database', 'Career path planning', 'AI-powered guidance'],
    gradient: 'from-emerald-500 to-teal-500',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'TaskBuddy AI',
    category: 'AI Productivity Tool',
    description: 'AI-powered assistant for task management and productivity enhancement.',
    longDescription: 'TaskBuddy is an AI-powered productivity application that helps users manage tasks, set smart reminders, and optimize their workflow. The app features natural language processing for quick task creation and intelligent priority suggestions.',
    image: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'AI', 'Firebase', 'Node.js', 'Express'],
    features: ['Smart task prioritization', 'Natural language input', 'Cross-platform sync', 'AI-powered insights', 'Collaboration features'],
    gradient: 'from-violet-500 to-purple-500',
    icon: Sparkles,
  },
  {
    id: 4,
    title: 'Smart Recipe Generator',
    category: 'AI Application',
    description: 'Intelligent recipe recommendation system powered by AI.',
    longDescription: 'This intelligent application uses machine learning to generate personalized recipes based on ingredients you have, dietary restrictions, and taste preferences. It includes nutritional analysis, step-by-step cooking instructions, and meal planning features.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'TensorFlow', 'React', 'Flask', 'PostgreSQL'],
    features: ['Ingredient-based recommendations', 'Nutritional analysis', 'Dietary preference filtering', 'Meal planning', 'Shopping list generation'],
    gradient: 'from-amber-500 to-orange-500',
    icon: ChefHat,
  },
  {
    id: 5,
    title: 'AI Quiz Generator',
    category: 'AI Learning Platform',
    description: 'Automated quiz generation platform for interactive learning experiences.',
    longDescription: 'An AI-driven platform that automatically generates quizzes based on educational content. It supports multiple question types, provides instant feedback, and tracks learning progress over time.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'AI', 'OpenAI', 'TypeScript', 'Supabase'],
    features: ['Auto-generated quizzes', 'Multiple question types', 'Instant feedback', 'Progress tracking', 'Custom content support'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: BrainCircuit,
  },
  {
    id: 6,
    title: 'Mobile App UI Design',
    category: 'UI/UX Design',
    description: 'Modern and user-centric mobile application interface design.',
    longDescription: 'A comprehensive mobile application UI design project featuring modern aesthetics, intuitive navigation, and accessibility-focused design. The project includes complete design systems, component libraries, and interactive prototypes.',
    image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Figma', 'UI/UX', 'Design System', 'Prototyping', 'Accessibility'],
    features: ['Complete design system', 'Interactive prototypes', 'Accessibility compliant', 'Component library', 'Cross-platform consistency'],
    gradient: 'from-pink-500 to-rose-500',
    icon: Smartphone,
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Our Projects</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions delivered for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <div
                  className="group/card relative overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 hover:shadow-glass-lg transition-all duration-500 cursor-pointer h-full flex flex-col hover:-translate-y-2"
                  onClick={() => setSelectedProject(project)}
                >
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
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg transition-all duration-500 group-hover/card:shadow-glow`}>
                        <project.icon className="w-3 h-3" />
                        {project.category}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#0f172a]/90 border border-white/20 flex items-center justify-center transform scale-0 group-hover/card:scale-100 transition-transform duration-500 backdrop-blur-sm">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-400 font-semibold text-sm group-hover/card:gap-3 transition-all duration-300 mt-auto">
                      View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/card:translate-x-1" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className="relative glass-card-strong rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 modal-enter">
            <div className="relative h-56 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${selectedProject.gradient}`}>
                  <selectedProject.icon className="w-3 h-3" />
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0f172a]/90 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-mono">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm font-medium text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-mono">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a href="/#/contact" className="btn-glow flex-1 text-center">
                  <Code2 className="w-4 h-4 mr-2" /> Start Similar Project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary flex-1 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative section-padding overflow-hidden cta-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-8 shadow-glow-subtle">
                <Eye className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white font-mono drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Your Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Ready to Build Your Next Project?
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Let us turn your vision into reality. We bring the same expertise and dedication to every project we undertake.
              </p>
              <a href="/#/contact" className="btn-glow text-lg px-8 py-4">
                Let's Discuss <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
