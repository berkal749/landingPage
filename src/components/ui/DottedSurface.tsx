import { cn } from '../../lib/utils'; // Adjusted to project-relative path
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'> & {
    isDark?: boolean;
};

export function DottedSurface({ className, isDark = true, ...props }: DottedSurfaceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const geometryRef = useRef<THREE.BufferGeometry | null>(null);

    // 1. Core Three.js Scene Setup (Runs once on mount)
    useEffect(() => {
        if (!containerRef.current) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        const SEPARATION = 150;
        const AMOUNTX = 40;
        const AMOUNTY = 60;
        const totalParticles = AMOUNTX * AMOUNTY;

        // Scene configuration
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0xffffff, 2000, 10000);

        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
        camera.position.set(0, 220, 1100);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        // Cap pixel ratio at 2 to preserve performance on Retina/4K displays
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.setClearColor(scene.fog.color, 0);
        renderer.domElement.style.display = 'block';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';

        containerRef.current.appendChild(renderer.domElement);

        // Pre-allocate typed arrays for efficient memory usage
        const positions = new Float32Array(totalParticles * 3);
        const colors = new Float32Array(totalParticles * 3);

        const geometry = new THREE.BufferGeometry();
        geometryRef.current = geometry;

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                positions[i + 1] = 0; // Handled dynamically in animation loop
                positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

                // Dynamic color initiation based on theme prop
                const initialColor = isDark ? 0.8 : 0.1;
                colors[i] = initialColor;
                colors[i + 1] = initialColor;
                colors[i + 2] = initialColor;

                i += 3;
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 8,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let count = 0;
        let animationId: number;

        // Optimized continuous rendering frame
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const positionAttribute = geometry.attributes.position;
            const posArray = positionAttribute.array as Float32Array;

            let index = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    posArray[index + 1] =
                        Math.sin((ix + count) * 0.3) * 50 +
                        Math.sin((iy + count) * 0.5) * 50;
                    index += 3;
                }
            }

            positionAttribute.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.1;
        };

        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener('resize', handleResize);
        animate();

        // Complete teardown to prevent canvas duplicates on component remounts
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometryRef.current = null;
        };
    }, []);

    // 2. Dynamic Theme Updates (Re-runs only when isDark toggles)
    useEffect(() => {
        const geometry = geometryRef.current;
        if (!geometry) return;

        const colorAttribute = geometry.attributes.color;
        const colors = colorAttribute.array as Float32Array;
        const targetColor = isDark ? 0.8 : 0.1;

        for (let i = 0; i < colors.length; i++) {
            colors[i] = targetColor;
        }
        
        colorAttribute.needsUpdate = true;
    }, [isDark]);

    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none fixed inset-0 z-0 overflow-hidden', className)}
            {...props}
        />
    );
}