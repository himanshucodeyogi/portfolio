import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ContactGeo() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={ref} position={[0, -48, 0]}>
      <mesh>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh>
        <dodecahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}
