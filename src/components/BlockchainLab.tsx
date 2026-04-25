"use client";

import { motion } from "framer-motion";
import { blockchainRoadmap } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function BlockchainLab() {
  return (
    <section id="blockchain" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="DTS Research and Development"
          title="Blockchain R&D Lab"
          description="From Layer 1 voting systems to AI-powered trading engines and NFT tooling, DTS Lab builds blockchain systems with practical performance gains."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {blockchainRoadmap.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-card rounded-xl p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#b33a32]">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item}</h3>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 rounded-3xl p-6 glass-card lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <h3 className="text-2xl font-semibold">Voting Blockchain Detail</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              DTS voting blockchain architecture uses a representative-node model on PoA voting
              chains to harden wallet user security and improve the reliability of high-value
              token movement. The design focuses on secure consensus participation, delayed
              settlement safety checks, and stronger protection against malicious or compromised
              relay paths.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--muted)]">
              <li>Representative nodes validate and relay secure wallet-originated transfers.</li>
              <li>Late transaction settlement model increases fraud-resistance in token transfer.</li>
              <li>PoA voting flows reduce attack surface while keeping operational efficiency.</li>
              <li>Designed for mobile-wallet environments requiring high trust and uptime.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#b2bfd8]">Core Focus</p>
            <div className="mt-3 grid gap-2 text-sm">
              <p className="rounded-lg bg-white/5 px-3 py-2">PoA Voting Security</p>
              <p className="rounded-lg bg-white/5 px-3 py-2">Representative Node Trust Model</p>
              <p className="rounded-lg bg-white/5 px-3 py-2">Secure Mobile Wallet Settlement</p>
              <p className="rounded-lg bg-white/5 px-3 py-2">High-Security Crypto Token Transfer</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl p-6 glass-card lg:grid-cols-[0.55fr_0.45fr]">
          <div>
            <h3 className="text-2xl font-semibold">Ethereum AMD VEGA56 Optimization</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Algorithm: Ethash. Average default mining result: 30.76 MH/s. DTS optimization
              reduces power draw from 164W to 102W while preserving performance characteristics
              for sustained pool operations.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Hash Rate</span>
                  <span>30.76 MH/s</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "84%" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-[#4f82ff]"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Default Power</span>
                  <span>164W</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-[#b33a32]"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>DTS Optimized Power</span>
                  <span>102W</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "62%" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-emerald-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#b2bfd8]">Outcome</p>
            <p className="mt-3 text-5xl font-semibold text-emerald-300">62%</p>
            <p className="mt-2 text-lg">Power Savings</p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              DTS provides optimization for blockchain mining workloads to improve hash-rate
              economics and lower operational energy costs in production systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
