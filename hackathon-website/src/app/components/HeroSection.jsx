import { Environment, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import MacContainer from './MacContainer';

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen bg-black flex items-center justify-center overflow-hidden'>
      <div className='absolute flex flex-col items-center text-white top-12 left-1/2 -translate-x-1/2 px-4 text-center'>
        <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold masked-text'>
          HackFest
        </h3>
        <h5 className=' sm:text-lg md:text-xl lg:text-2xl mt-2 h5-text'>
          Code. Create. Conquer!
        </h5>
        <p className='text-xs sm:text-base md:text-lg lg:text-xl mt-2 p-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate sunt culpa adipisci.
        </p>
      </div>

      <Canvas
        camera={{ fov: 20, position: [0, -10, 130] }}
        className='absolute inset-0'
        style={{ height: '100vh', width: '100vw' }}
      >
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>

      {/* Inline styles for the text mask and additional elements */}
      <style jsx>{`
        .masked-text {
          background: linear-gradient(to right, #333, #555, #777);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
        }

        .h5-text {
          color: #ccc;
          text-shadow: 0 0 2px rgba(255, 255, 255, 0.6);
        }

        .p-text {
          color: #aaa;
          text-shadow: 0 0 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
