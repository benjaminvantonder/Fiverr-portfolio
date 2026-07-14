import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useStore } from "../store/useStore";

function TorusKnot() {
  const ref = useRef<THREE.Mesh>(null!);
  const { nx, ny } = useStore((s) => s.mouse);

  useFrame((_, dt) => {
    if (!ref.current) return;
    const rot = dt * 0.3;
    ref.current.rotation.x += rot * 0.6;
    ref.current.rotation.y += rot * 0.8;
    ref.current.rotation.x += (ny * 0.3 - ref.current.rotation.x) * 0.02;
    ref.current.rotation.y += (nx * 0.4 - ref.current.rotation.y) * 0.02;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.4, 180, 24]} />
      <meshPhysicalMaterial
        color="#10b981"
        emissive="#059669"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
        clearcoat={0.3}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function Particles({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null!);
  const { nx, ny } = useStore((s) => s.mouse);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = 0.02 + Math.random() * 0.06;
    }
    return [pos, sz];
  }, [count]);

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.04;
    ref.current.rotation.x += (ny * 0.08 - ref.current.rotation.x) * 0.01;
    ref.current.rotation.y += (nx * 0.1 - ref.current.rotation.y) * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#34d399"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#10b981" />
        <pointLight position={[-5, -3, 2]} intensity={0.6} color="#06b6d4" />
        <TorusKnot />
        <Particles />
      </Canvas>
    </div>
  );
}
