import { useRef } from "react";
import { motion } from "framer-motion";
import { Layout, Smartphone, Rocket, Palette, Search, Lock } from "lucide-react";
import StarfieldBackground from "./StarfieldBackground";

const services = [
  {
    icon: Layout,
    title: "Custom Website Design",
    description:
      "Built from scratch to guide visitors toward a call-to-action — whether that's calling you or filling out a form.",
    style: "square",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Over 60% of web traffic is mobile. Your site looks perfect on every screen, tested across real devices.",
    style: "circle",
  },
  {
    icon: Rocket,
    title: "Lightning-Fast Performance",
    description:
      "Static site generation means your site loads in under a second. No database queries, no server processing.",
    style: "square",
  },
  {
    icon: Palette,
    title: "Clean UI/UX Design",
    description:
      "Typography, spacing, color, and hierarchy that naturally guide visitors to take action.",
    style: "circle",
  },
  {
    icon: Search,
    title: "Local SEO Optimization",
    description:
      "Semantic HTML, fast load times, mobile-first — the technical foundations that help you rank locally.",
    style: "square",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description:
      "Static sites are inherently secure. HTTPS, reliable hosting, auto backups — your site stays safe.",
    style: "circle",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-28 bg-surface"
    >
      <StarfieldBackground count={600} color="#34d399" speed={0.02} opacity={0.3} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4 block font-medium">
              Services
            </span>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              What I Do
            </motion.h2>
            <motion.p
              className="text-lg text-foreground-muted max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Straightforward web development services for local businesses that
              need a real online presence.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isCircle = service.style === "circle";
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/20 via-cyan-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div
                    className={`relative glass-card rounded-2xl p-8 card-hover ${isCircle ? "text-center" : ""}`}
                  >
                    <div
                      className={`w-14 h-14 bg-accent/10 flex items-center justify-center mb-6 ${
                        isCircle ? "rounded-full mx-auto" : "rounded-xl"
                      }`}
                    >
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
