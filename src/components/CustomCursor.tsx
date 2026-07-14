import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useStore } from "../store/useStore";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursorVariant = useStore((s) => s.cursorVariant);
  const rafRef = useRef<number>(0);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringScale = useMotionValue(1);

  const springX = useSpring(ringX, { damping: 15, stiffness: 200 });
  const springY = useSpring(ringY, { damping: 15, stiffness: 200 });
  const springScale = useSpring(ringScale, { damping: 20, stiffness: 300 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      useStore.getState().setMouse(e.clientX, e.clientY);
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    },
    [ringX, ringY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onMove]);

  useEffect(() => {
    ringScale.set(cursorVariant === "hover" ? 1.6 : cursorVariant === "click" ? 0.8 : 1);
  }, [cursorVariant, ringScale]);

  return (
    <div className="hidden lg:block" style={{ pointerEvents: "none" }}>
      <motion.div
        ref={ringRef}
        className="fixed z-[9999] w-10 h-10 rounded-full border border-emerald-400/40 mix-blend-difference"
        style={{ x: springX, y: springY, scale: springScale }}
      />
      <div
        ref={dotRef}
        className="fixed z-[9999] w-2 h-2 rounded-full bg-emerald-400 mix-blend-difference pointer-events-none"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
