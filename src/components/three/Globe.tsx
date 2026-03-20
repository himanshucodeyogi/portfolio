import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particleGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2 + (Math.random() - 0.5) * 0.3;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseRef.current.y * 0.3,
        0.02
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        mouseRef.current.x * 0.1,
        0.02
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.08} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.04} />
      </mesh>
      <points ref={pointsRef} geometry={particleGeometry}>
        <pointsMaterial color="#00f0ff" size={0.015} transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  );
}
