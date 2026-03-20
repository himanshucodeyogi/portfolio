import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useIsLowPerf } from '@/hooks/use-low-perf';

export default function Starfield() {
  const ref = useRef<THREE.Points>(null);
  const isMobile = useIsLowPerf();

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = isMobile ? 250 : 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [isMobile]);

  // Skip per-frame position updates on mobile
  useFrame((state) => {
    if (isMobile || !ref.current) return;
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length / 3; i++) {
      positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.002;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color="#00f0ff" size={0.02} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}
