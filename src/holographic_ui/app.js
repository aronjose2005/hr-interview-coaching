import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';

const App = () => {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.ConeGeometry(1, 2, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);

    camera.position.z = 5;

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef}>Interview Coaching Dashboard</div>;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
