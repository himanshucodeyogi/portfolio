import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  const spheres = useMemo(() => {
    const items: { pos: [number, number, number]; color: string; delay: number }[] = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 4;
      const y = (i / count) * 8 - 4;
      items.push({ pos: [Math.cos(t) * 0.8, y, Math.sin(t) * 0.8], color: '#00f0ff', delay: i * 0.1 });
      items.push({ pos: [Math.cos(t + Math.PI) * 0.8, y, Math.sin(t + Math.PI) * 0.8], color: '#8b5cf6', delay: i * 0.1 });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[4, -36, -3]}>
      {spheres.map((s, i) => (
        <mesh key={i} position={s.pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color={s.color} transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}
