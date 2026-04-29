"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Shapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3.8, 1.6, 0]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshBasicMaterial color="#e63946" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[3.8, -1.1, -1]}>
          <torusKnotGeometry args={[0.7, 0.22, 80, 16]} />
          <meshBasicMaterial color="#4361ee" wireframe />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[3.2, 2.4, -2]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshBasicMaterial color="#0a0a0a" wireframe />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-3.2, -2.4, -1]} rotation={[0.2, 0.4, 0.1]}>
          <octahedronGeometry args={[0.8]} />
          <meshBasicMaterial color="#ffd60a" wireframe />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[0, 0, -3]}>
          <torusGeometry args={[2.2, 0.5, 12, 48]} />
          <meshBasicMaterial
            color="#0a0a0a"
            wireframe
            opacity={0.35}
            transparent
          />
        </mesh>
      </Float>
    </group>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0 pointer-events-none"
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <Shapes />
        <CameraRig />
      </Suspense>
    </Canvas>
  );
}
