import { useRef, useEffect } from "react";

interface StarfieldProps {
  count?: number;
  color?: string;
  speed?: number;
  opacity?: number;
  className?: string;
}

export default function StarfieldBackground({
  count = 600,
  color = "#34d399",
  speed = 0.02,
  opacity = 0.3,
  className = "",
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let w = 0;
    let h = 0;

    const stars: { x: number; y: number; z: number; r: number }[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        z: Math.random(),
        r: 0.3 + Math.random() * 1.2,
      });
    }

    const parsedColor = color;

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
      time += speed;

      for (const star of stars) {
        const sx = ((star.x + time * 0.1) % 2 + 2) % 2 - 1;
        const sy = ((star.y + time * 0.03) % 2 + 2) % 2 - 1;
        const px = (sx * 0.5 + 0.5) * w;
        const py = (sy * 0.5 + 0.5) * h;
        const size = star.r * (0.5 + star.z * 0.5);

        ctx!.globalAlpha = opacity * (0.3 + star.z * 0.7);
        ctx!.fillStyle = parsedColor;
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
  }, [count, color, speed, opacity]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
