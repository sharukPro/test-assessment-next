'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const CreativePage = () => {

  const router = useRouter();

  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount?.appendChild(renderer.domElement);

    // Add a spinning cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      mount?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="h-screen w-full" onClick={() => router.push('/')}>
      <Head>
        <title>Creative Page</title>
      </Head>
      <div ref={mountRef} className="h-auto w-full" />
    </div>
  );
};
export default CreativePage;
