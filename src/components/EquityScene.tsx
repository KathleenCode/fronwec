"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid, Float, Text, MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Scene() {
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cubeRef.current) {
      cubeRef.current.rotation.y = t / 2;
    }
  });

  return (
    <>
      <OrbitControls makeDefault enablePan={false} />
      <Grid infiniteGrid fadeDistance={40} sectionColor="#1a1a1a" cellColor="#222" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* THE BARRIER */}
      <mesh position={[0, 1, -2]}>
        <boxGeometry args={[10, 2, 0.1]} />
        <meshStandardMaterial color="#00f3ff" wireframe opacity={0.3} transparent />
      </mesh>

      {/* EQUALITY FIGURE */}
      <group position={[-2, 0, 0]}>
        <mesh position={[0, 1.25, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 2.5]} />
          <meshStandardMaterial color="#ffffff" wireframe />
        </mesh>
        <Text position={[0, 3, 0]} fontSize={0.2} color="white">Fair Advantage</Text>
      </group>

      {/* EQUITY FIGURE */}
      <group position={[2, 0, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshWobbleMaterial factor={0.2} speed={1} color="#ff007b" wireframe />
        </mesh>
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 1.8]} />
          <meshStandardMaterial color="#ffffff" wireframe />
        </mesh>
        <Text position={[0, 3.2, 0]} fontSize={0.25} color="#ff007b">Support</Text>
      </group>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 4, -5]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#ff007b" wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function EquityCanvas() {
  return (
    /* Reduced height to 100% to fill the new compact container */
    <div className="h-full w-full bg-black overflow-hidden border-l border-zinc-900">
      <Canvas camera={{ position: [6, 4, 8], fov: 40 }}>
        <Scene />
      </Canvas>
    </div>
  );
}