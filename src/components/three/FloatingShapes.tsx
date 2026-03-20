import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShape({ position, geometry, color, speed }: {
  position: [number, number, number];
  geometry: 'torus' | 'icosahedron' | 'octahedron';
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {geometry === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
      {geometry === 'icosahedron' && <icosahedronGeometry args={[0.5, 0]} />}
      {geometry === 'octahedron' && <octahedronGeometry args={[0.4, 0]} />}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <group position={[0, -12, 0]}>
      <FloatingShape position={[-3, 0, -2]} geometry="torus" color="#00f0ff" speed={0.4} />
      <FloatingShape position={[3, 1, -3]} geometry="icosahedron" color="#8b5cf6" speed={0.6} />
      <FloatingShape position={[-1.5, 2, -1]} geometry="octahedron" color="#00f0ff" speed={0.5} />
      <FloatingShape position={[2, -1, -2]} geometry="torus" color="#8b5cf6" speed={0.35} />
    </group>
  );
}
