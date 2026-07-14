import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2 } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import StarfieldBackground from "./StarfieldBackground";


const skills = [
  "TypeScript", "React", "Tailwind", "Vite",
  "Node.js", "C/C++", "Git", "Figma",
];

function TimelineNode({
  year,
  label,
  desc,
  index,
}: {
  year: string;
  label: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex items-start gap-6 group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/30 relative z-10"
          whileHover={{ scale: 1.5 }}
        />
        {index < 2 && <div className="w-px h-16 bg-accent/20" />}
      </div>
      <div className="pb-12">
        <span className="text-accent text-sm font-bold tracking-widest">{year}</span>
        <h4 className="text-xl font-bold text-foreground mt-1">{label}</h4>
        <p className="text-foreground-muted text-sm mt-1 max-w-md">{desc}</p>
      </div>
    </motion.div>
  );
}

function OrbitingSkills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const radius = 130;
  const positions = useMemo(
    () =>
      skills.map((_, i) => {
        const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
        return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
      }),
    [],
  );

  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-6 py-4">
        <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/10">
          <Code2 className="w-8 h-8 text-accent" />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="px-4 py-2 rounded-full text-sm font-medium bg-surface-card border border-boundary text-foreground cursor-default whitespace-nowrap shadow-sm hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
                {name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[320px] h-[320px] mx-auto flex-shrink-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/10">
          <Code2 className="w-8 h-8 text-accent" />
        </div>
      </div>
      {skills.map((name, i) => {
        const cx = 160 + positions[i].x;
        const cy = 160 + positions[i].y;
        return (
          <motion.div
            key={name}
            className="absolute"
            style={{ left: cx, top: cy }}
            initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
            whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.15 }}
          >
            <div className="px-4 py-2 rounded-full text-sm font-medium bg-surface-card border border-boundary text-foreground cursor-default whitespace-nowrap shadow-sm hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
              {name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function ServiceFlowSVG() {
  const pathRef = useRef<SVGPathElement>(null);

  const nodes = [
    { y: 30, r: 8, label: "Website", side: "left" as const, delay: 0.2, isFirst: true },
    { y: 90, r: 6, label: "Plan & Strategy", side: "right" as const, delay: 0.5 },
    { y: 150, r: 6, label: "Design & UX", side: "left" as const, delay: 0.8 },
    { y: 210, r: 6, label: "Build & Develop", side: "right" as const, delay: 1.1 },
    { y: 270, r: 6, label: "Test & Launch", side: "left" as const, delay: 1.4 },
    { y: 330, r: 10, label: "Growth & Leads", side: "right" as const, delay: 1.7, isLast: true },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: "400 / 360" }}>
      <svg
        viewBox="0 0 400 360"
        className="w-full h-full absolute inset-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <motion.path
          ref={pathRef}
          d="M200,30 C200,60 200,60 200,90 C200,120 200,120 200,150 C200,180 200,180 200,210 C200,240 200,240 200,270 C200,300 200,300 200,330"
          className="text-accent/30"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {nodes.map((node) => (
          <motion.circle
            key={node.y}
            cx={200} cy={node.y} r={node.r}
            className={node.isFirst || node.isLast ? "fill-accent text-accent" : "fill-accent/60 text-accent"}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay }}
          />
        ))}
      </svg>

      <div className="absolute inset-0">
        {nodes.map((node) => (
          <motion.div
            key={node.y}
            className="absolute flex items-center"
            style={{
              top: `${(node.y / 360) * 100}%`,
              transform: "translateY(-50%)",
              ...(node.side === "left"
                ? { right: "54%", justifyContent: "flex-end" }
                : { left: "54%", justifyContent: "flex-start" }),
              width: "46%",
            }}
            initial={{ opacity: 0, x: node.side === "left" ? -10 : 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay + 0.15 }}
          >
            <span
              className={
                node.isLast
                  ? "text-emerald-400 font-normal text-sm"
                  : "text-foreground-muted font-normal text-sm"
              }
            >
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CounterStat({ end, label }: { end: number; label: string }) {
  const { ref, display } = useCountUp(end);
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="text-4xl md:text-5xl font-bold text-accent tabular-nums"
      >
        {display}
      </span>
      <span className="text-4xl md:text-5xl font-bold text-accent">+</span>
      <p className="text-foreground-muted text-sm mt-1">{label}</p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 bg-surface"
    >
      <StarfieldBackground count={600} color="#34d399" speed={0.02} opacity={0.3} />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none"
        style={{ y: bgY }}
      />

      <div className="container mx-auto px-8 sm:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4 block font-medium">
              About
            </span>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Hi, I&rsquo;m Benjamin
            </motion.h2>
            <motion.p
              className="text-lg text-foreground-muted max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A developer from South Africa with 6+ years of coding experience — I build fast, modern
              websites for local businesses that drive real results.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-28">
            <motion.div style={{ y: textY }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                My Journey
              </h3>
              <TimelineNode
                year="2020"
                label="Started Coding"
                desc="Began learning to code — built web apps, games, and developer tools in TypeScript and C++."
                index={0}
              />
              <TimelineNode
                year="2024"
                label="Built Real Sites"
                desc="Launched production websites for Steller Industries and CERT-SA. Found my niche: local service businesses."
                index={1}
              />
              <TimelineNode
                year="2025"
                label="Running BvT Web"
                desc="Full-time focus on helping South African trades, contractors, and shops get online with fast, performant sites."
                index={2}
              />
            </motion.div>

            <motion.div
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                What I Work With
              </h3>
              <OrbitingSkills />

              <div className="grid grid-cols-3 gap-6 mt-12">
                <CounterStat end={12} label="Repos on GitHub" />
                <CounterStat end={5} label="Client Sites" />
                <CounterStat end={6} label="Years Coding" />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-surface-alt to-surface border border-boundary overflow-hidden mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                I build websites that drive phone calls
              </h3>
              <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
                No fluff. Every site is designed to turn visitors into leads — whether
                that&rsquo;s a phone call, quote request, or contact form submission.
              </p>
              <ServiceFlowSVG />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
