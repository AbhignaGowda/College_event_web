import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <Float 
        rotateX={-Math.PI/4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <Book scale={[1.3, 1.3, 1.3]} /> {/* Scale the book to make it larger */}
      </Float>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
