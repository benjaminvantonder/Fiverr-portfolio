import { Code2, Globe, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-800/10"></div>
      <div className="blur-orb w-[600px] h-[600px] bg-emerald-500 -top-40 -right-40"></div>
      <div className="blur-orb w-[500px] h-[500px] bg-cyan-500 -bottom-40 -left-40"></div>
      <div className="blur-orb w-[300px] h-[300px] bg-emerald-400/30 top-1/3 left-1/4"></div>

      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">Benjamin van Tonder</span>
          </div>
          <a
            href="#contact"
            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Web Developer & Problem Solver</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I build websites that help
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> local businesses grow</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            I'm Benjamin van Tonder, a web developer focused on crafting fast, modern websites for service businesses like trades, contractors, and local shops. No fluff — just results that drive phone calls and quote requests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2"
            >
              See Pricing <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-lg transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
