import { useMousePosition } from "../hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
      aria-hidden
    >
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.03] bg-emerald-400"
        style={{
          transform: `translate(${x - 400}px, ${y - 400}px)`,
          transition: "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
