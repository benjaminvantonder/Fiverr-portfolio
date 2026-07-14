import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import StarfieldBackground from "./StarfieldBackground";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const projects = [
  {
    title: "lokkie-bos",
    description: "Web application project showcasing interactive UI and responsive design patterns",
    tags: ["TypeScript", "React", "Web App"],
    url: "https://benjaminvantonder.github.io/lokkie-bos/",
    repo: "https://github.com/benjaminvantonder/lokkie-bos",
  },
  {
    title: "Stellerindustries",
    description: "Business website for Steller Industries — a clean, professional landing page",
    tags: ["HTML", "CSS", "Business"],
    url: "https://stellerindustries.co.za",
  },
  {
    title: "CertSA",
    description: "Emergency response team website",
    tags: ["React", "TypeScript", "Web App"],
    url: "https://certsa.org",
  },
  {
    title: "orcTD-raylib",
    description: "Tower defense game built with raylib in C — classic gameplay with custom mechanics",
    tags: ["C", "raylib", "Game"],
    url: "https://github.com/benjaminvantonder/orcTD-raylib",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 bg-surface">
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
              Portfolio
            </span>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Projects &amp; Work
            </motion.h2>
            <motion.p
              className="text-lg text-foreground-muted max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A selection of projects I've built — from client sites to open-source tools and games
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -6 }}
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/15 via-accent/10 to-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative glass-card rounded-xl overflow-hidden flex flex-col h-full">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-40 flex items-center justify-center">
                    <Github className="w-16 h-16 text-foreground-muted" />
                  </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
<div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-surface-card border border-boundary text-foreground-muted text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold text-accent hover:text-emerald-700"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold text-foreground-muted hover:text-foreground"
                      >
                        <Github className="w-4 h-4" /> Source
                      </a>
                    )}
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
