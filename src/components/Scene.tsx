import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Globe from './three/Globe';
import FloatingShapes from './three/FloatingShapes';
import SkillSpheres from './three/SkillSpheres';
import ContactGeo from './three/ContactGeo';

export default function Scene({ scrollY }: { scrollY: number }) {
  const cameraY = -(scrollY / window.innerHeight) * 12;

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <group position={[0, cameraY, 0]}>
            <Globe />
            <FloatingShapes />
            <SkillSpheres />
            <ContactGeo />
          </group>
          <ambientLight intensity={0.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}
