'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { Experience } from './GamingExperience';
import { useAtom } from 'jotai';
import { themeAtom, THEMES, UI } from './GamingUI';

export default function GamingPage() {
  const [theme] = useAtom(themeAtom);

  return (
    <>
     <div style={{ width: '100%', height: '100vh' }}>

      <Leva />
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 50 }}>
        <color attach="background" args={[THEMES[theme].skyColor]} />
        <fog attach="fog" args={[THEMES[theme].skyColor, 12, 20]} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
     </div>
      
    </>
  );
}
