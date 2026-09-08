import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, ArrowRight, ExternalLink } from "lucide-react";
import StarfieldBackground from "./StarfieldBackground";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

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
    <section id="mock-sites" className="relative py-28 bg-surface overflow-hidden">
      <StarfieldBackground count={600} color="#34d399" speed={0.02} opacity={0.3} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <Monitor className="w-3.5 h-3.5" /> Site Previews
          </span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Possible Sites
          </motion.h2>
          <motion.p
            className="text-lg text-foreground-muted max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Click any mock to explore a fully designed site — see exactly what your business
            could look like.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {mockSites.map((site) => (
            <motion.div key={site.id} variants={cardVariants} className="group relative">
              <div className="absolute -inset-[2px] bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <Link
                to={`/mock/${site.id}`}
                className="relative block h-full"
              >
                <div className="bg-surface-card rounded-2xl border border-boundary overflow-hidden card-hover hover:shadow-2xl hover:shadow-emerald-500/5 flex flex-col h-full">
                  <div className={`bg-gradient-to-br ${site.gradient} relative overflow-hidden`}>
                    <div className="blur-orb w-48 h-48 bg-white/20 -top-20 -right-20"></div>
                    <div className="blur-orb w-40 h-40 bg-white/10 -bottom-16 -left-16"></div>
                    <div className="flex items-center gap-1.5 px-4 pt-3 pb-2 relative z-10">
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
                    <p className="text-foreground-muted text-sm leading-relaxed flex-grow">
                      {site.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                      {site.features.map((f, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-surface-alt border border-boundary text-foreground-muted text-xs rounded-md font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors border-t border-boundary pt-4">
                      Explore This Site
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}