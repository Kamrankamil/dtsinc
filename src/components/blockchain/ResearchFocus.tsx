"use client";

import { motion } from "framer-motion";
import { Brain, Boxes, Database, Shield, ShieldCheck, Wallet } from "lucide-react";

const focusAreas = [
  {
    title: "PoW Optimization",
    body: "High-performance mining algorithm optimization and throughput tuning.",
    icon: Brain,
  },
  {
    title: "PoS Infrastructure",
    body: "Scalable proof-of-stake architecture with resilient validator behavior.",
    icon: Shield,
  },
  {
    title: "Secure Wallet Systems",
    body: "Advanced wallet protection with layered transaction safeguards.",
    icon: Wallet,
  },
  {
    title: "AI Trading Models",
    body: "Autonomous strategy systems for market analysis and execution.",
    icon: Brain,
  },
  {
    title: "Semantic Blockchain Security",
    body: "Ontology-backed fraud detection and semantic risk scoring.",
    icon: ShieldCheck,
  },
  {
    title: "Decentralized Storage",
    body: "Distributed storage topology with high durability and availability.",
    icon: Database,
  },
];

export default function ResearchFocus() {
  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(232,64,58,0.9),transparent)]" />
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9e7ff]">Core Research Focus</p>
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(58,114,255,0.9),transparent)]" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {focusAreas.map((area, idx) => (
          <motion.article
            key={area.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.05 }}
            className="rounded-xl border border-white/10 bg-[#081731]/70 p-4"
          >
            <div className="inline-flex rounded-full border border-[#3a72ff]/45 bg-[#3a72ff]/10 p-3 text-[#8fb6ff]">
              <area.icon size={20} />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{area.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#a8bde1]">{area.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
