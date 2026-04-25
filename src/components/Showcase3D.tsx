"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Group } from "three";
import SectionHeading from "./SectionHeading";

function DataScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color="#2c4f8a" wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#b33a32" emissive="#631f1a" />
      </mesh>
      <mesh position={[1.8, 0.7, 0.2]}>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial color="#7aa2ff" metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh position={[-1.7, -0.8, -0.3]}>
        <boxGeometry args={[0.55, 0.25, 0.55]} />
        <meshStandardMaterial color="#f0ad3a" metalness={0.5} roughness={0.25} />
      </mesh>
      <mesh position={[0.4, -1.3, 0.6]}>
        <torusGeometry args={[0.4, 0.12, 24, 60]} />
        <meshStandardMaterial color="#71d7ff" />
      </mesh>
    </group>
  );
}

export default function Showcase3D() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="3D Showcase"
          title="Interactive Blockchain Infrastructure"
          description="A stylized digital scene representing connected ledgers, dynamic data nodes, and intelligent mining orchestration."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-[460px] overflow-hidden rounded-3xl glass-card"
        >
          <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[4, 4, 4]} intensity={1.4} color="#f4f8ff" />
            <pointLight position={[-3, -2, 2]} intensity={0.8} color="#b33a32" />
            <DataScene />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
