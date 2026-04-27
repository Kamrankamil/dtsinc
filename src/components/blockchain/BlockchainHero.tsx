"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";
import { Boxes, FileText, FlaskConical, Lightbulb, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import type { Group } from "three";

function GlobeVisual() {
  const globeRef = useRef<Group>(null);
  const cubesRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (globeRef.current) globeRef.current.rotation.y += delta * 0.28;
    if (cubesRef.current) cubesRef.current.rotation.y -= delta * 0.22;
  });

  return (
    <>
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[1.35, 48, 48]} />
          <meshStandardMaterial color="#2d74ff" emissive="#103a92" wireframe />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.05, 48, 48]} />
          <meshStandardMaterial color="#ff5f57" emissive="#7f211c" transparent opacity={0.2} />
        </mesh>
      </group>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.25, 0.06, 18, 140]} />
        <meshStandardMaterial color="#ff5f57" emissive="#a22f29" />
      </mesh>

      <group ref={cubesRef}>
        {[
          [2.4, 0.8, 0],
          [-2.3, 0.2, 1.1],
          [0.6, 2.1, -1.2],
          [-1.1, -1.8, -0.6],
        ].map((pos, idx) => (
          <mesh key={idx} position={[pos[0], pos[1], pos[2]]}>
            <boxGeometry args={[0.36, 0.36, 0.36]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? "#3a72ff" : "#ff5f57"}
              emissive="#1a2e64"
              wireframe
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

const stats = [
  { icon: FlaskConical, value: "30+", label: "Research Projects" },
  { icon: FileText, value: "50+", label: "Publications" },
  { icon: ShieldCheck, value: "10+", label: "Patents" },
  { icon: Lightbulb, value: "30+", label: "Years of Innovation" },
];

export default function BlockchainHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(140deg,rgba(4,15,42,0.92),rgba(2,10,28,0.9))] p-5 md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(232,64,58,0.18),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(58,114,255,0.18),transparent_36%)]" />

      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.52fr_0.48fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff5f57]">
            DTS Research and Development
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.08] text-white md:text-6xl">
            Blockchain R&amp;D Lab
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#b7c7e4] md:text-lg">
            Building secure decentralized systems, AI trading intelligence, and
            next-generation blockchain infrastructure.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/links"
              className="inline-flex items-center gap-2 rounded-lg bg-[#cc2e26] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(204,46,38,0.45)] transition hover:bg-[#e8403a]"
            >
              Explore Research
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 rounded-lg border border-[#2f4f8f] bg-[#0a1d45] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff5f57]"
            >
              View Publications
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((item, idx) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <item.icon size={16} className="text-[#ff5f57]" />
                <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
                <p className="text-xs text-[#9db1d9]">{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(58,114,255,0.2),transparent_44%),#071634] md:h-[520px]">
          <div className="absolute inset-0 opacity-70">
            <Canvas camera={{ position: [0, 0, 5.5], fov: 48 }}>
              <ambientLight intensity={0.45} />
              <pointLight position={[4, 3, 5]} intensity={1.1} color="#7ca5ff" />
              <pointLight position={[-4, -2, 3]} intensity={0.8} color="#ff5f57" />
              <GlobeVisual />
              <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} />
            </Canvas>
          </div>

          {[
            "left-[8%] top-[20%]",
            "right-[8%] top-[30%]",
            "left-[16%] bottom-[20%]",
            "right-[14%] bottom-[24%]",
          ].map((pos, idx) => (
            <span
              key={idx}
              className={`absolute ${pos} inline-flex rounded-lg border border-[#3a72ff]/40 bg-[#0a1c44]/70 p-2 text-[#8fb6ff]`}
            >
              <Boxes size={14} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
