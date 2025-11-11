import { Code2, Globe, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi02LjY4NiA2LTZ2NmMwIDMuMzE0LTIuNjg2IDYtNiA2cy02IDIuNjg2LTYgNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">BvT Dev</span>
          </div>
          <a
            href="#contact"
            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Lightning-Fast Static Websites</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Web Development for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> Growing Businesses</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Hi, I'm Benjamin van Tonder. I create blazing-fast, responsive websites that help local and international businesses establish their digital presence and drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-emerald-500/20"
            >
              View Pricing - Starting at $5
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-lg transition-colors"
            >
              See My Work
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 text-emerald-400 mb-3" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-slate-400">Websites Delivered</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 text-emerald-400 mb-3" />
              <h3 className="text-2xl font-bold mb-2">99%</h3>
              <p className="text-slate-400">Client Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <Code2 className="w-12 h-12 text-emerald-400 mb-3" />
              <h3 className="text-2xl font-bold mb-2">4 Years</h3>
              <p className="text-slate-400">Coding Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
