"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    title: "Voting Blockchain Demo",
    body: "Tamper-proof voting system with real-time audit and transparent results.",
    image: "/assets/voting.png",
  },
  {
    title: "GPU Optimization Case Study",
    body: "AMD VEGA56 optimization achieving major power savings and efficiency gains.",
    image: "/assets/gpu.png",
  },
  {
    title: "IEEE GCCE Publication",
    body: "Published peer-reviewed research on blockchain optimization and secure transfer.",
    image: "/assets/iee.png",
  },
  {
    title: "Sustainable NFT Storage",
    body: "Green NFT storage architecture reducing cost and environmental impact.",
    image: "/assets/nftcube.png",
  },
];

export default function FeaturedInnovations() {
  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(232,64,58,0.9),transparent)]" />
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9e7ff]">Featured Innovations</p>
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(58,114,255,0.9),transparent)]" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featured.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#071531]/75"
          >
            <div className="relative h-36 w-full border-b border-white/10">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#a8bde1]">{item.body}</p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#ff5f57] transition hover:gap-2"
              >
                View Research
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
