import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";

export default function EnhancedMouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const setMouse = useStore((s) => s.setMouse);

  const onMove = useCallback(
    (e: MouseEvent) => {
      setMouse(e.clientX, e.clientY);
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    },
    [setMouse],
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onMove]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden lg:block" aria-hidden>
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06] bg-accent"
        style={{
          filter: "blur(100px)",
          willChange: "transform",
          transition: "transform 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/30"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/30"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 left-1/3 w-1 h-1 rounded-full bg-accent/20"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
