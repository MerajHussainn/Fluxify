// ThreeSection.jsx  (Framer-Motion entry + hover + bounce)
import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import * as THREE from 'three';

const IMG = [
    '/src/assets/Fluxify logo.png',
    '/src/assets/Fluxify logo.png',
    '/src/assets/Fluxify logo.png',
    '/src/assets/Fluxify logo.png',
    '/src/assets/Fluxify logo.png',
    '/src/assets/Fluxify logo.png',
    // add 5 more
];

function MarketingCube() {
    const mesh = useRef();
    const textures = useLoader(THREE.TextureLoader, IMG);
    const materials = useMemo(() => textures.map(t => new THREE.MeshPhysicalMaterial({
        map: t,
        roughness: 0.8,
        metalness: 1,
    })), [textures]);

    // GSAP smooth cursor
    const target = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const onMove = (e) => {
            target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            target.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    const autoAngle = useRef(0);
    useFrame((state, delta) => {
        if (!mesh.current) return;
        autoAngle.current += delta * 0.25;
        gsap.to(mesh.current.rotation, {
            duration: 0.4,
            x: autoAngle.current - target.current.y * 0.5,
            y: autoAngle.current + target.current.x * 0.5,
            ease: 'power2.out',
        });
    });

    return (
        <mesh ref={mesh} material={materials}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
        </mesh>
    );
}

// ----------- Framer-Motion Wrapper -----------
export function ThreeSection() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: 'easeOut' },
        });
    }, [controls]);

    return (
        <motion.div
            className="flex-1 h-[300px] ml-[3vw] md:h-[500px] w-full mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
        >
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true }}
                dpr={[1, 2]}>
                <Suspense fallback={null}>
                    {/* Remove HDR Environment */}
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} />
                    <pointLight position={[0, 0, 5]} intensity={1} />
                    <MarketingCube />
                </Suspense>
            </Canvas>

        </motion.div>
    );
}

export default ThreeSection;