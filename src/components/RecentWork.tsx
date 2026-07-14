import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

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
    <section className="relative py-28 bg-surface" id="recent-work">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4 block font-medium">
            Recent Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Real sites, real results
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Built for South African businesses — live, performant, and driving leads.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {clientSites.map((site) => (
            <motion.div
              key={site.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="absolute -inset-[2px] bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative bg-surface-card rounded-2xl border border-boundary overflow-hidden card-hover hover:shadow-2xl hover:shadow-emerald-500/5">
                <div className={`bg-gradient-to-br ${site.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="flex items-center gap-1.5 px-4 pt-3 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  <div className="px-4 pb-6 relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{site.title}</h3>
                    <p className="text-white/60 text-sm mt-0.5">{site.tagline}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-foreground-muted text-sm leading-relaxed flex-grow">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                    {site.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-surface-alt text-foreground-muted text-xs rounded-md font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-accent border-t border-boundary pt-4">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-accent-muted transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Visit Live Site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
