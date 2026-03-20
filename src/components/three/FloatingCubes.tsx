import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Cube({ position, size, speed, color }: {
  position: [number, number, number]; size: number; speed: number; color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5 + position[0]) * 0.6;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  );
}

export default function FloatingCubes() {
  return (
    <group position={[0, -18, 0]}>
      <Cube position={[-4, 0, -3]} size={0.5} speed={0.3} color="#00f0ff" />
      <Cube position={[3.5, 1.5, -2]} size={0.4} speed={0.5} color="#8b5cf6" />
      <Cube position={[-1, -2, -4]} size={0.6} speed={0.25} color="#00f0ff" />
      <Cube position={[4.5, -1, -3]} size={0.35} speed={0.45} color="#8b5cf6" />
      <Cube position={[-3, 2, -1]} size={0.45} speed={0.35} color="#8b5cf6" />
    </group>
  );
}
