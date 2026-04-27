"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Boxes, Brain, Code2, Database, ShieldCheck } from "lucide-react";

const innovations = [
  {
    id: "01",
    title: "ETH Smart Contracts",
    body: "Enterprise-grade smart contracts, tokenization and DeFi protocol architecture.",
    icon: Code2,
  },
  {
    id: "02",
    title: "Voting Layer 1 Blockchain",
    body: "Representative-node consensus and tamper-resistant validation for secure ballots.",
    icon: Boxes,
  },
  {
    id: "03",
    title: "Secure PoS Storage Node",
    body: "Hardened storage architecture with encrypted proofs and resilient node uptime.",
    icon: Database,
  },
  {
    id: "04",
    title: "AI Prediction Engine",
    body: "Ontology-driven forecasting and neural analytics for crypto market direction.",
    icon: Brain,
  },
  {
    id: "05",
    title: "AI Trading Bot",
    body: "Autonomous algorithmic execution for BTC/USD and ETH/USD strategy operations.",
    icon: Bot,
  },
  {
    id: "06",
    title: "NFT Marketplace + DNN Creator",
    body: "AI-assisted NFT generation, metadata security, and decentralized catalog tooling.",
    icon: ShieldCheck,
  },
];

export default function InnovationGrid() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(232,64,58,0.9),transparent)]" />
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9e7ff]">Our Innovations</p>
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(58,114,255,0.9),transparent)]" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {innovations.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.06 }}
            className="group rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-[#cc2e26]/55 hover:shadow-[0_0_24px_rgba(204,46,38,0.25)]"
          >
            <p className="text-lg font-bold text-[#ff5f57]">{item.id}</p>
            <div className="mt-3 inline-flex rounded-full border border-[#3a72ff]/40 bg-[#3a72ff]/10 p-3 text-[#8fb6ff] group-hover:border-[#ff5f57]/45 group-hover:bg-[#ff5f57]/10 group-hover:text-[#ff8a82]">
              <item.icon size={22} />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#a8bde1]">{item.body}</p>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#ff5f57] transition group-hover:gap-2"
            >
              Learn More
              <ArrowRight size={14} />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
