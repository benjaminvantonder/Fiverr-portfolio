import { GitFork, Code2, Gamepad2, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A self-taught developer from South Africa who loves building things for the web
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Hi, I'm Benjamin
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I started coding in early 2023, and since then I've published 12 open-source projects on GitHub spanning web apps, games, and developer tools. My work ranges from React + TypeScript websites to C++ graphics experiments and game development with raylib.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I'm passionate about helping local service businesses — plumbers, electricians, contractors, and trades — get online with fast, professional websites that actually bring in leads. No complicated CMS, no bloated frameworks. Just clean, static sites that load instantly and rank well.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My tech stack includes TypeScript, React, Tailwind CSS, and Vite. I also work with C/C++ for lower-level projects and game development. I believe in writing simple, maintainable code that solves real problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <GitFork className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">12 Repos</h4>
                <p className="text-slate-600">Public projects on GitHub spanning web dev, games, and tools</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <Code2 className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">TypeScript</h4>
                <p className="text-slate-600">Primary language — used in 5 of my public repositories</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <Gamepad2 className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Game Dev</h4>
                <p className="text-slate-600">Built Orc-TD and graphics experiments with raylib and SDL2</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <Globe className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Locally Focused</h4>
                <p className="text-slate-600">Serving South African small businesses and contractors</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              What I Work With
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Web Development</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  React, TypeScript, Tailwind CSS, Vite — modern tooling that produces fast, static sites. I build component-based layouts that are easy to maintain and extend. No page builders, no WordPress, no unnecessary complexity.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Every site I build is fully responsive, SEO-optimized, and designed to load in under a second. I focus on the fundamentals: clean markup, semantic HTML, and performance-first architecture.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Game Development & Systems</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Beyond the web, I enjoy working with C, C++, raylib, and SDL2. My Orc-TD project is a tower defense game built in JavaScript, and my graphics repos explore low-level rendering concepts. This cross-domain experience gives me a deeper understanding of how software works at every level.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  GitHub: <a href="https://github.com/benjaminvantonder" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">github.com/benjaminvantonder</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
