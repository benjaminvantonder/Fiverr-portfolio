import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Clock, Wrench, Sparkles, Check } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import StarfieldBackground from "./StarfieldBackground";

function PriceCounter({ end, duration = 1.5, delay = 0.3 }: { end: number; duration?: number; delay?: number }) {
  const { ref, display } = useCountUp(end, duration, delay);
  return (
    <span ref={ref} className="tabular-nums">
      R{display.toLocaleString()}
    </span>
  );
}

const features = [
  "Home, About, Services & Contact pages",
  "Mobile-responsive design",
  "On-page SEO optimization",
  "Social media integration",
  "Contact forms & lead capture",
  "Performance optimized",
  "Fast static hosting",
];

const careItems = [
  { icon: Shield, title: "Cloud Hosting & SSL", desc: "Fast hosting with automatic SSL renewal" },
  { icon: Clock, title: "1 Hour of Updates", desc: "Text changes, image swaps, minor updates" },
  { icon: Wrench, title: "Security & Backups", desc: "Monthly security updates and automated backups" },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const cardScale = useTransform(scrollYProgress, [0.1, 0.3], [0.85, 1]);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-28 bg-surface"
    >
      <StarfieldBackground count={600} color="#34d399" speed={0.02} opacity={0.3} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4 block font-medium">
              Pricing
            </span>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              One rate. <span className="text-accent">No surprises.</span>
            </motion.h2>
            <motion.p
              className="text-lg text-foreground-muted max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Straightforward pricing for a proper business website — built and live fast.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-xl mx-auto"
            style={{ scale: cardScale }}
          >
            <div className="group relative">
              <motion.div
                className="absolute -inset-[3px] bg-gradient-to-br from-accent/40 via-accent/10 to-cyan-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                animate={{
                  opacity: [0, 0.4, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative rounded-3xl p-8 md:p-10 glass-strong overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-cyan-500 to-accent" />

                <div className="flex items-center gap-2 mb-8">
                  <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">
                      Business Website
                    </h3>
                    <p className="text-foreground-muted text-sm mt-1">
                      4 Pages
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-5xl md:text-6xl font-bold text-accent tracking-tight">
                      <PriceCounter end={3500} />
                    </div>
                    <p className="text-foreground-muted text-xs mt-1">One-time project price</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted text-sm">{f}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  className="block text-center py-3.5 rounded-xl font-semibold bg-accent text-white btn-shimmer shadow-lg shadow-accent/20"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(5,150,105,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get a Quote</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-2xl p-6 md:p-8 bg-surface-card border border-boundary">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Add-On
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    Monthly Care Plan
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      Ongoing maintenance, hosting, and backups.
                    </p>
                    <div className="text-2xl font-bold text-accent mt-2">
                      R350 – R750 <span className="text-sm font-normal text-foreground-muted">/mo</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {careItems.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-2.5">
                          <Icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                            <p className="text-xs text-foreground-muted">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
