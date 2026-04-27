"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe, ShieldCheck, Users, Wallet, Zap } from "lucide-react";

const pillars = [
  {
    title: "Original PoA Blockchain with Voting Function",
    body: "Our original PoA blockchain includes a voting function for blockchain mining by participant nodes, helping avoid high electric energy consumption associated with conventional mining structures.",
    icon: Users,
  },
  {
    title: "FT & NFT Transfer Confirmation",
    body: "It includes a unique FT and NFT transfer confirmation function that verifies true or untrue transfer state before completion, helping prevent token transfer mistakes, unknown transaction failure, and hacking-related accidents.",
    icon: ShieldCheck,
  },
  {
    title: "Global Industry & Digital Financial Solutions",
    body: "Today, we provide these technologies to the global industry market and digital financial domain through partners, and we continue delivering stable blockchain networks with highly secure token transfer mechanisms and wallet infrastructure.",
    icon: Globe,
  },
  {
    title: "Human-to-Physical AI Value Exchange Society",
    body: "This work supports our long-term goal of enabling a human-to-physical AI value exchange society.",
    icon: Wallet,
  },
];

const highlights = [
  {
    title: "High Security",
    body: "Advanced security architecture protects against unknown failures and attacks.",
    icon: ShieldCheck,
    accent: "from-[#0f366e] to-[#0a203f]",
    iconColor: "text-[#53a3ff]",
  },
  {
    title: "Energy Efficient",
    body: "PoA consensus with voting function reduces energy consumption significantly.",
    icon: Zap,
    accent: "from-[#0d4737] to-[#092a20]",
    iconColor: "text-[#34d399]",
  },
  {
    title: "Safe Transfers",
    body: "Transfer confirmation mechanism prevents mistakes and ensures transaction integrity.",
    icon: Wallet,
    accent: "from-[#2f2376] to-[#1b1748]",
    iconColor: "text-[#a78bfa]",
  },
  {
    title: "Global Impact",
    body: "Building the foundation for a secure, fair, and connected digital future.",
    icon: Globe,
    accent: "from-[#5f430f] to-[#2f250f]",
    iconColor: "text-[#fbbf24]",
  },
];

export default function OptimizationDashboard() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-3xl border border-[#173155] bg-[linear-gradient(140deg,#020a1e_0%,#031433_52%,#071d4a_100%)] p-5 shadow-[0_0_45px_rgba(18,77,188,0.15)] md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(232,64,58,0.16),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(58,114,255,0.2),transparent_36%)]" />

      <div className="relative z-10 grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          <span className="inline-flex rounded-full border border-[#c1443a]/45 bg-[#5c1a1a]/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#ff766d]">
            Blockchain Innovation Since 1996
          </span>

          <h3 className="max-w-xl text-4xl font-bold leading-[1.05] text-white md:text-6xl">
            DTS decentralized network research and secure transfer
            <span className="block bg-[linear-gradient(90deg,#41b0ff,#6f81ff)] bg-clip-text text-transparent">
              architecture
            </span>
          </h3>

          <p className="max-w-xl text-sm leading-8 text-[#9cb5df] md:text-base">
            DTS Group has continued research, innovation, and development in decentralized network systems
            and distributed data technologies, backed by its own memory caching technology.
          </p>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[#2092ec]/65 bg-[#07203e]/85 px-4 py-2 text-sm font-semibold text-[#9ed2ff] transition hover:bg-[#0b2f57]"
          >
            Watch Overview
            <ArrowRight size={15} />
          </button>

          <div className="relative mt-2 h-[220px] overflow-hidden rounded-2xl border border-[#1f3b65]">
            <Image
              src="/assets/poanetwork.png"
              alt="PoA Network Diagram"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-2">
          {pillars.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="rounded-2xl border border-white/10 bg-[#071531]/80 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex rounded-lg border border-[#2a4f87] bg-[#0b254f] p-2 text-[#7fc3ff]">
                  <item.icon size={18} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-[#a8bde1]">{item.body}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((card, idx) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className={`rounded-2xl border border-white/10 bg-gradient-to-br ${card.accent} p-4`}
          >
            <div className={`inline-flex rounded-full border border-white/20 bg-black/20 p-2 ${card.iconColor}`}>
              <card.icon size={18} />
            </div>
            <h4 className="mt-3 text-lg font-semibold text-white">{card.title}</h4>
            <p className="mt-1 text-sm leading-7 text-[#bcd0f1]">{card.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
