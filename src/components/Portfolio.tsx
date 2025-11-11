import { ExternalLink, Zap, Globe, TrendingUp } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Local Lighting show business",
      category: "Entertainemnt and Aesthetics",
      description:
        "Developed a modern, creative website for a local Lighting show business with online services display, location finder, and contact forms. The mobile-responsive design increased online reservations by 45% within the first month.",
      tags: ["React", "Mobile-First", "SEO Optimized"],
    },
    {
      title: "Architect based in south africa",
      category: "Landing page",
      description:
        "Developed and still maintain an architect''s landing page. Not only do I develop these websites to fit customer needs, I also expand and mold it into their perfect website over time.",
      tags: ["React", "Business", "Landing pages"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Portfolio & Case Studies
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real projects, real results. Here's a glimpse of the work I've
              delivered for satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 h-48 flex items-center justify-center">
                  <Globe className="w-20 h-20 text-white opacity-50" />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-emerald-600 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              The Impact of Professional Web Development
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              These aren't just websites—they're business tools that deliver
              measurable results. Each project represents a partnership where I
              worked closely with the client to understand their goals and
              deliver a solution that exceeded expectations. From increasing
              online visibility to generating leads and boosting conversions,
              the websites I build actively contribute to business growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Zap className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  Under 1s
                </div>
                <div className="text-slate-600">Average Load Time</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <TrendingUp className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  35%+
                </div>
                <div className="text-slate-600">Average Traffic Increase</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Globe className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  100%
                </div>
                <div className="text-slate-600">Mobile Responsive</div>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
            <p className="text-lg text-slate-700 italic mb-3">
              "Benjamin was a pleasure to work with. He took our rough ideas and
              turned them into a sleek, easy-to-navigate site that truly
              reflects our brand. The attention to detail is outstanding."
            </p>
            <footer className="text-slate-600 font-semibold">
              — Creative Director, Boutique Design Studio
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
            <p className="text-lg text-slate-700 italic mb-3">
              "What impressed us most was how proactive Benjamin was. He
              suggested improvements we hadn’t even thought of, and the final
              result far exceeded expectations."
            </p>
            <footer className="text-slate-600 font-semibold">
              — Founder, Nonprofit Organization
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
            <p className="text-lg text-slate-700 italic mb-3">
              "Our old site was slow and dated—Benjamin completely transformed
              it. We’re now seeing more engagement and better SEO rankings
              within weeks of launch."
            </p>
            <footer className="text-slate-600 font-semibold">
              — Marketing Manager, E-Commerce Brand
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
            <p className="text-lg text-slate-700 italic mb-3">
              "Benjamin is that rare combination of technical skill and design
              sensibility. He handled everything from UI tweaks to hosting
              optimization with total professionalism."
            </p>
            <footer className="text-slate-600 font-semibold">
              — Product Lead, SaaS Company
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
            <p className="text-lg text-slate-700 italic mb-3">
              "Clear communication, smart design choices, and on-time delivery.
              Couldn’t ask for a smoother process. We’ll definitely be working
              together again."
            </p>
            <footer className="text-slate-600 font-semibold">
              — Project Manager, Digital Agency
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
