import { ExternalLink, Globe } from "lucide-react";

const clientSites = [
  {
    title: "Stellerindustries",
    tagline: "Sound, Light & AV Solutions",
    description:
      "A professional business website for Steller Industries — clean product showcase, service areas, and contact-driven layout built to generate qualified leads for their audio-visual and event technology services.",
    gradient: "from-blue-600 to-indigo-700",
    features: ["Service Showcase", "Contact Forms", "Lead Generation"],
    url: "https://stellerindustries.co.za",
  },
  {
    title: "CertSA",
    tagline: "Emergency Response Team",
    description:
      "A modern, trustworthy site for CertSA — an emergency response organisation. Built with React and TypeScript for fast performance, clear calls to action, and mobile-first responsiveness for critical information access.",
    gradient: "from-red-600 to-rose-700",
    features: ["Emergency Info", "Mobile-First", "Fast Performance"],
    url: "https://certsa.org",
  },
];

export default function RecentWork() {
  return (
    <section id="recent-work" className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="blur-orb w-[600px] h-[600px] bg-emerald-400 top-20 -left-60"></div>
      <div className="blur-orb w-[500px] h-[500px] bg-cyan-400 bottom-20 -right-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Recent Work
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real websites built for real South African businesses — delivered and live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clientSites.map((site) => (
            <div
              key={site.title}
              className="mock-card group"
            >
              <div className="mock-card-inner bg-white rounded-xl border border-slate-100 overflow-hidden flex flex-col h-full">
                <div className={`bg-gradient-to-br ${site.gradient} relative overflow-hidden`}>
                  <div className="blur-orb w-48 h-48 bg-white/20 -top-20 -right-20"></div>
                  <div className="blur-orb w-40 h-40 bg-white/10 -bottom-16 -left-16"></div>
                  <div className="flex items-center gap-1.5 px-4 pt-3 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                    <div className="ml-auto flex items-center gap-1 text-white/40 text-[10px] font-mono">
                      <span>---</span>
                    </div>
                  </div>
                  <div className="px-4 pb-6 relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{site.title}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{site.tagline}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                    {site.features.map((f, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors border-t border-slate-100 pt-4">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Visit Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
