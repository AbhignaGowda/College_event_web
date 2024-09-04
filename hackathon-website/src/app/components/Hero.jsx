import React, { useRef, useState, useEffect } from 'react';
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";
import ChatInterface from './ChatInterface';

const Hero = () => {
  const heroRef = useRef(null);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate loading before showing the hero section
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen relative">
      {/* ChatInterface with higher z-index to ensure it's above the hero-section */}
      <div className="relative z-20">
        <ChatInterface onLetsGoClick={scrollToHero} />
      </div>

      {/* Hero section with increased height */}
      {showHero && (
        <section
          ref={heroRef}
          id='hero-section'
          className="relative w-screen min-h-[70vh] overflow-hidden z-10"
          style={{ background: "radial-gradient(#5a47ce, #232323 80%)" }}
        >
          <UI />
          <Loader />
          <div className="absolute top-0 left-0 w-full h-full" style={{ overflow: 'hidden' }}>
            <Canvas 
              shadows 
              camera={{ position: [-0.5, 1, 4], fov: 45 }} 
              style={{ 
                height: '600px', // Fixed height
                width: '800px',  // Fixed width
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', // Centering
                zIndex: 1 // Ensure it's below UI and ChatInterface
              }}
            >
              <group position-y={0}>
                <Suspense fallback={null}>
                  <Experience />
                </Suspense>
              </group>
            </Canvas>
          </div>
        </section>
      )}
    </div>
  );
};

export default Hero;
