import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layout, Banknote, FolderOpen } from "lucide-react";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import StarfieldBackground from "../components/StarfieldBackground";

const explore = [
  {
    icon: Layout,
    title: "Services",
    desc: "Custom design, responsive build, SEO, hosting and more — everything your business site needs.",
    to: "/services",
    cta: "Explore Services",
  },
  {
    icon: Banknote,
    title: "Pricing",
    desc: "Straightforward, one-time pricing with no hidden fees. See exactly what a site costs.",
    to: "/pricing",
    cta: "See Pricing",
  },
  {
    icon: FolderOpen,
    title: "Portfolio",
    desc: "Real projects, client sites, and mock previews that show the quality and range of my work.",
    to: "/portfolio",
    cta: "View My Work",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-foreground overflow-x-hidden">
      <Hero />
      <RecentWork />

      <section className="relative py-28 bg-surface">
        <StarfieldBackground count={600} color="#34d399" speed={0.02} opacity={0.3} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4 block font-medium">
              Explore
            </span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Everything you need to <span className="text-accent">get online</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {explore.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <Link
                    to={card.to}
                    className="group block h-full"
                  >
                    <div className="relative h-full rounded-2xl p-8 glass-card card-hover">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                      <p className="text-foreground-muted leading-relaxed text-sm mb-6">{card.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        {card.cta}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/about"
              className="px-8 py-3.5 rounded-full glass-strong text-foreground hover:text-accent transition-colors font-semibold text-base"
            >
              More About Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}