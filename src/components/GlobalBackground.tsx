import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 1.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export const GlobalBackground = () => (
  <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
    {/* Cinematic Gradient Overlay */}
    <div className="absolute inset-0 bg-cinematic-gradient opacity-60 z-10" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
    
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Particles />
    </Canvas>
    
    {/* Grain Effect Overlay */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
  </div>
);
