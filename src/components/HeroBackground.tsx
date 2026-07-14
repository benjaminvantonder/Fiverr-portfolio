import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useStore } from "../store/useStore";

function HeroStarfield({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement | null> }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let w = 0;
    let h = 0;

    const stars: { x: number; y: number; z: number; r: number; twinkleSpeed: number; twinkleOffset: number }[] = [];
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        r: 0.4 + Math.random() * 1.5,
        twinkleSpeed: 0.5 + Math.random() * 2,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      time += 0.016;

      for (const star of stars) {
        const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(time * star.twinkleSpeed + star.twinkleOffset));
        const px = star.x * w;
        const py = star.y * h;
        const size = star.r * (0.5 + star.z * 0.5);

        ctx!.globalAlpha = twinkle * (0.15 + star.z * 0.5);
        ctx!.fillStyle = "#34d399";
        ctx!.beginPath();
        ctx!.arc(px, py, size, 0, Math.PI * 2);
        ctx!.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);

  return null;
}

function GradientBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);

  const nx = useStore((s) => s.mouse.nx);
  const ny = useStore((s) => s.mouse.ny);

  const animate = useCallback(() => {
    const factor = 40;
    gsap.to(blob1Ref.current, {
      x: nx * factor,
      y: ny * -factor,
      duration: 1.2,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(blob2Ref.current, {
      x: nx * -factor * 0.7,
      y: ny * factor * 0.5,
      duration: 1.4,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(blob3Ref.current, {
      x: nx * factor * 0.5,
      y: ny * factor * 0.8,
      duration: 1.6,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(blob4Ref.current, {
      x: nx * -factor * 0.6,
      y: ny * -factor * 0.4,
      duration: 1.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [nx, ny]);

  useEffect(() => {
    animate();
  }, [animate]);

  useEffect(() => {
    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current, blob4Ref.current];
    const drifts = [
      { x: 30, y: -20, dur: 8 },
      { x: -25, y: 15, dur: 10 },
      { x: 20, y: 25, dur: 12 },
      { x: -15, y: -30, dur: 9 },
    ];

    const ctx = gsap.context(() => {
      blobs.forEach((blob, i) => {
        if (!blob) return;
        const d = drifts[i];
        gsap.to(blob, {
          x: `+=${d.x}`,
          y: `+=${d.y}`,
          duration: d.dur,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={blob1Ref}
        className="absolute w-[500px] h-[500px] rounded-full animate-drift"
        style={{
          top: "10%",
          left: "15%",
          background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.05) 60%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute w-[400px] h-[400px] rounded-full animate-drift-slow"
        style={{
          top: "30%",
          right: "10%",
          background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.04) 60%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        ref={blob3Ref}
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          bottom: "15%",
          left: "40%",
          background: "radial-gradient(circle, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0.03) 60%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />
      <div
        ref={blob4Ref}
        className="absolute w-[300px] h-[300px] rounded-full animate-drift"
        style={{
          top: "50%",
          left: "5%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.02) 60%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
    </div>
  );
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <GradientBlobs />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <HeroStarfield canvasRef={canvasRef} />
    </div>
  );
}
