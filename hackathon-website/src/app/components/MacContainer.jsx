import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

const MacContainer = () => {
    const model = useGLTF("/mac.glb");
    const txt = useTexture("/red.jpeg");
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const meshes = {};

    model.scene.traverse(e => {
        meshes[e.name] = e;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = txt;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 1;
    meshes.matte.material.roughness = 1;

    const data = useScroll();

    useFrame(() => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset * 90));
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Responsive scaling and positioning
    const scale = screenSize.width < 768 ? 0.4 : 1; // Adjust based on screen width
    const position = [
        0,
        screenSize.width < 768 ? -2 : -10, // Adjust vertical position for small screens
        screenSize.width < 768 ? 10 : 20  // Adjust depth position for small screens
    ];

    return (
        <group position={position} scale={[scale, scale, scale]}>
            <primitive object={model.scene} />
        </group>
    );
};

export default MacContainer;
