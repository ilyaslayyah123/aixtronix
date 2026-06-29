import { useRef } from 'react';
import { BarChart3, Layers, Cpu, Shield, Globe, Zap, Activity, Wifi } from 'lucide-react';

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto lg:mx-0">
      {/* Main Dashboard Card */}
      <div className="relative z-20 glass-card rounded-2xl p-6 border border-white/10 floating">
        {/* Glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-sm opacity-50" />

        {/* Header */}
        <div className="relative flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/assets/images/ChatGPT_Image_Apr_6,_2026,_10_30_46_PM.png"
                alt="Aixtronix"
                className="w-8 h-8 rounded-lg object-contain bg-[#0a0f2e]"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-500 shadow-glow-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Aixtronix Dashboard</p>
              <p className="text-xs text-gray-500 font-mono">AI-Powered Solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-glow" />
            <span className="text-xs text-emerald-400 font-medium">Live</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="relative grid grid-cols-3 gap-3 mb-6">
          <div className="rounded-xl p-3 bg-[rgba(59,130,246,0.08)] border border-blue-500/10">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs text-gray-500">Performance</span>
            </div>
            <p className="text-lg font-bold text-white">98.4%</p>
            <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
          </div>
          <div className="rounded-xl p-3 bg-[rgba(6,182,212,0.08)] border border-cyan-500/10">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs text-gray-500">Services</span>
            </div>
            <p className="text-lg font-bold text-white">5 Active</p>
            <div className="flex gap-1 mt-1.5">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-cyan-500/60" />
              ))}
            </div>
          </div>
          <div className="rounded-xl p-3 bg-[rgba(16,185,129,0.08)] border border-emerald-500/10">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs text-gray-500">Security</span>
            </div>
            <p className="text-lg font-bold text-white">A+</p>
            <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* AI Processing Bar */}
        <div className="relative rounded-xl p-4 mb-4 bg-[rgba(15,23,42,0.8)] border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <span className="text-sm font-semibold text-white">AI Processing</span>
                <span className="text-xs text-gray-500 block font-mono">Neural Network v3.2</span>
              </div>
            </div>
            <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full animate-pulse" />
            </div>
            <span className="text-xs text-gray-400 font-medium font-mono">85%</span>
          </div>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div
                key={i}
                className="flex-1 h-1 rounded-full bg-gradient-to-r from-blue-500/40 to-cyan-500/40"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Mini Activity Feed */}
        <div className="relative space-y-2">
          {[
            { icon: Globe, text: 'Web development completed', time: '2 min ago', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { icon: Cpu, text: 'AI model trained successfully', time: '5 min ago', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
            { icon: Shield, text: 'Security audit passed', time: '12 min ago', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className={`w-6 h-6 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-3 h-3 ${item.color}`} />
              </div>
              <span className="text-xs text-gray-400 flex-1">{item.text}</span>
              <span className="text-[10px] text-gray-600 font-mono">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Side Cards */}
      <div className="absolute -top-4 -right-8 z-30 glass-card rounded-xl p-3 border border-white/10 floating-delayed">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Activity className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Analytics</p>
            <p className="text-[10px] text-gray-500 font-mono">Real-time</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-6 z-30 glass-card rounded-xl p-3 border border-white/10 floating-slow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Wifi className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Global Reach</p>
            <p className="text-[10px] text-gray-500 font-mono">Worldwide</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-4 z-10 glass-card rounded-lg p-2 border border-white/10 floating">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-gray-400 font-medium">Online</span>
        </div>
      </div>

      {/* Bottom status card */}
      <div className="absolute -bottom-2 -right-4 z-20 glass-card rounded-lg px-3 py-2 border border-white/10 floating-slow">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span className="text-[10px] text-gray-400 font-mono">99.9% Uptime</span>
        </div>
      </div>
    </div>
  );
}
