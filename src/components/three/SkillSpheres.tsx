import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Orb({ position, color, size, speed }: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.5;
      ref.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
    </mesh>
  );
}

export default function SkillSpheres() {
  return (
    <group position={[0, -24, 0]}>
      <Orb position={[-3, 0, -2]} color="#00f0ff" size={0.8} speed={0.5} />
      <Orb position={[2.5, 1, -3]} color="#8b5cf6" size={0.6} speed={0.7} />
      <Orb position={[0, -1, -1]} color="#00f0ff" size={0.5} speed={0.4} />
      <Orb position={[-2, 2, -2]} color="#8b5cf6" size={0.7} speed={0.6} />
      <Orb position={[3, -0.5, -2]} color="#00f0ff" size={0.4} speed={0.8} />
    </group>
  );
}
