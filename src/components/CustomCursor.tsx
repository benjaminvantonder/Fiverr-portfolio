import { useEffect, useRef, useCallback } from "react";
import { useStore } from "../store/useStore";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const onMove = useCallback(
    (e: MouseEvent) => {
      useStore.getState().setMouse(e.clientX, e.clientY);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    },
    [],
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onMove]);

  return (
    <div className="hidden lg:block" style={{ pointerEvents: "none" }}>
      <div
        ref={dotRef}
        className="fixed z-[9999] w-2 h-2 rounded-full bg-emerald-400 mix-blend-difference pointer-events-none"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
