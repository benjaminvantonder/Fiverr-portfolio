import { Monitor, ArrowRight, ExternalLink } from "lucide-react";

const mockSites = [
  {
    id: "bold-trades",
    title: "Bold Trades",
    tagline: "Contractor & Tradesman",
    description: "A bold, trust-building site for a tradesman — estimates, gallery, and contact.",
    gradient: "from-amber-500 to-orange-600",
    features: ["Quote Request", "Project Gallery", "Service Areas"],
  },
  {
    id: "bloom-cafe",
    title: "Bloom Café",
    tagline: "Local Café & Eatery",
    description: "A warm, inviting site for a local café — menu, location, and story.",
    gradient: "from-rose-400 to-pink-600",
    features: ["Online Menu", "Table Booking", "Gallery"],
  },
  {
    id: "pulse-studio",
    title: "Pulse Studio",
    tagline: "Fitness & Wellness",
    description: "A high-energy site for a fitness studio — classes, trainers, and booking.",
    gradient: "from-violet-500 to-purple-700",
    features: ["Class Schedule", "Trainer Profiles", "Membership"],
  },
];

export default function MockSites() {
  return (
    <section id="mock-sites" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="blur-orb w-[600px] h-[600px] bg-emerald-400 top-20 -left-60"></div>
      <div className="blur-orb w-[500px] h-[500px] bg-cyan-400 bottom-20 -right-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Monitor className="w-4 h-4" /> Site Previews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Possible Sites
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Click any mock to explore a fully designed site — see exactly what your business could look like.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mockSites.map((site) => (
            <a
              key={site.id}
              href={`#/mock/${site.id}`}
              className="mock-card group cursor-pointer block no-underline"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                window.location.hash = `#/mock/${site.id}`;
                window.location.reload();
              }}
            >
              <div className="mock-card-inner bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-100 overflow-hidden flex flex-col h-full">
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
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                      <ExternalLink className="w-6 h-6 text-white" />
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
                      <span key={i} className="px-2.5 py-1 bg-surface-card border border-boundary text-foreground-muted text-xs rounded-md font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors border-t border-slate-100 pt-4">
                    Explore This Site <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
