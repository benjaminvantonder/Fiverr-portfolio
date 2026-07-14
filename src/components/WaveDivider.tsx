interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export default function WaveDivider({
  className = "",
  flip = false,
  color = "var(--bg)",
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginTop: -1, marginBottom: -1 }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function MeshGradientDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-24 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-24 bg-accent/5 blur-[80px] rounded-full animate-drift" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-20 bg-cyan-500/5 blur-[60px] rounded-full animate-drift-slow" />
    </div>
  );
}
