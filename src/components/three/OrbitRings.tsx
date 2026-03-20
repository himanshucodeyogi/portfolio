import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Ring({ radius, speed, tilt, color, opacity }: {
  radius: number; speed: number; tilt: [number, number, number]; color: string; opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.008, 8, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

export default function OrbitRings() {
  return (
    <group position={[0, 0, 0]}>
      <Ring radius={2.8} speed={0.2} tilt={[1.2, 0.3, 0]} color="#00f0ff" opacity={0.25} />
      <Ring radius={3.2} speed={-0.15} tilt={[0.8, -0.5, 0.4]} color="#8b5cf6" opacity={0.15} />
      <Ring radius={3.6} speed={0.1} tilt={[1.5, 0.8, -0.2]} color="#00f0ff" opacity={0.1} />
    </group>
  );
}
