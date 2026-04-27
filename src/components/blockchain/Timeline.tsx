"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2008",
    title: "L3 Cache Innovation",
    body: "Research on cache architecture and performance optimization.",
  },
  {
    year: "2012",
    title: "ADMLCS Architecture",
    body: "Autonomous decentralized multi-layered cache system engineering.",
  },
  {
    year: "2018",
    title: "Blockchain Optimization",
    body: "Mining optimization and blockchain performance research.",
  },
  {
    year: "2023",
    title: "Voting Blockchain",
    body: "Development of secure voting blockchain with PoA model.",
  },
  {
    year: "2025",
    title: "Sustainable NFT Storage",
    body: "Eco-friendly NFT storage and green blockchain solutions.",
  },
];

export default function Timeline() {
  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(232,64,58,0.9),transparent)]" />
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9e7ff]">Blockchain Research Timeline</p>
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(58,114,255,0.9),transparent)]" />
      </div>

      <div className="relative hidden md:block">
        <div className="absolute left-8 right-8 top-8 h-px bg-[linear-gradient(90deg,rgba(232,64,58,0.7),rgba(58,114,255,0.8))]" />
        <div className="grid gap-3 md:grid-cols-5">
          {milestones.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-white/10 bg-[#081731]/70 p-4"
            >
              <span className="mx-auto mb-3 block h-5 w-5 rounded-full border border-[#ff5f57]/70 bg-[#070f24] shadow-[0_0_12px_rgba(232,64,58,0.65)]" />
              <p className="text-2xl font-bold text-white">{item.year}</p>
              <p className="mt-1 text-lg font-semibold text-[#ff8a82]">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-[#a8bde1]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        {milestones.map((item, index) => (
          <motion.article
            key={item.year}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="rounded-xl border border-white/10 bg-[#081731]/70 p-4"
          >
            <p className="text-xl font-bold text-white">{item.year}</p>
            <p className="mt-1 text-base font-semibold text-[#ff8a82]">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-[#a8bde1]">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
