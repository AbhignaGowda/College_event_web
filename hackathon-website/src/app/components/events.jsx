import { useRouter } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useEffect, useState } from 'react';

export default function Events() {
  const router = useRouter();
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Events';
  let index = 0;

  useEffect(() => {
    const typeInterval = setInterval(() => {
      setTypewriterText(fullText.substring(0, index + 1));
      index += 1;
      if (index >= fullText.length) {
        clearInterval(typeInterval);
      }
    }, 150); // Adjust typing speed here
    return () => clearInterval(typeInterval);
  }, []);

  const navigateTo = (event) => {
    router.push(`/events/${event}`);
  };

  return (
    <div className='w-full h-screen flex flex-col md:flex-row bg-gray-900'>
      {/* Events Section (Left Side) */}
      <div className='w-full md:w-1/2 p-4 md:p-8 flex flex-col'>
        <h1
          className='text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white relative'
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderRight: '2px solid white',
            animation: 'blink-caret 0.75s step-end infinite'
          }}
        >
          {typewriterText}
        </h1>
        <div className='grid grid-cols-1 gap-6'>
          <div
            className='bg-gray-800 text-white rounded-lg p-4 md:p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300'
            style={{
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5), inset 2px 2px 5px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => navigateTo('quiz')}
          >
            <h2 className='text-xl md:text-2xl font-semibold mb-4'>Quiz</h2>
            <p>A fun and competitive quiz event</p>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>Go to Quiz</button>
          </div>

          <div
            className='bg-gray-800 text-white rounded-lg p-4 md:p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300'
            style={{
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5), inset 2px 2px 5px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => navigateTo('hackathon')}
          >
            <h2 className='text-xl md:text-2xl font-semibold mb-4'>Hackathon</h2>
            <p>Build innovative solutions in 24 hours</p>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>Go to Hackathon</button>
          </div>

          <div
            className='bg-gray-800 text-white rounded-lg p-4 md:p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300'
            style={{
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5), inset 2px 2px 5px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => navigateTo('gaming')}
          >
            <h2 className='text-xl md:text-2xl font-semibold mb-4'>Gaming</h2>
            <p>Compete in popular games with other participants</p>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>Go to Gaming</button>
          </div>
        </div>
      </div>

      {/* Animation Section (Right Side) */}
      <div className='w-full md:w-1/2 h-[60vh] md:h-full overflow-hidden'>
        <Canvas style={{ height: '100%', width: '100%' }} camera={{ fov: 35 }}>
          <OrbitControls />
          <ambientLight />
          <Cyl />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={12.0}
              luminanceSmoothing={0.1}
              luminanceThreshold={0}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}
