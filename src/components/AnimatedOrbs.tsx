import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Orb {
  color: string;
  size: string;
  position: string;
  animation: string;
  blur?: string;
}

interface AnimatedOrbsProps {
  orbs?: Orb[];
  scrollSpeed?: number;
}

const defaultOrbs: Orb[] = [
  {
    color: "bg-accent/8",
    size: "w-[500px] h-[500px]",
    position: "top-1/4 -left-40",
    animation: "animate-drift",
    blur: "blur-[100px]",
  },
  {
    color: "bg-cyan-500/6",
    size: "w-[400px] h-[400px]",
    position: "bottom-1/4 -right-32",
    animation: "animate-drift-slow",
    blur: "blur-[80px]",
  },
  {
    color: "bg-violet-500/5",
    size: "w-[350px] h-[350px]",
    position: "top-1/2 left-1/3",
    animation: "animate-drift",
    blur: "blur-[120px]",
  },
];

export default function AnimatedOrbs({
  orbs = defaultOrbs,
  scrollSpeed = 0.15,
}: AnimatedOrbsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${scrollSpeed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ y }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${orb.color} ${orb.size} ${orb.position} ${orb.animation} ${orb.blur || "blur-[100px]"}`}
        />
      ))}
    </motion.div>
  );
}
