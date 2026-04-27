"use client";

import { motion } from "framer-motion";
import { Gauge, TrendingUp, Zap } from "lucide-react";

const metrics = [
  {
    title: "Power Reduction",
    value: "62%",
    subtitle: "Reduced energy overhead",
    color: "from-[#3a72ff]/25 to-[#071b43]",
    progress: "62%",
    icon: Zap,
  },
  {
    title: "Hash Rate",
    value: "30.76 MH/s",
    subtitle: "Stable mining throughput",
    color: "from-[#cc2e26]/25 to-[#2b1012]",
    progress: "78%",
    icon: Gauge,
  },
  {
    title: "Optimization",
    value: "164W -> 102W",
    subtitle: "GPU power tuning",
    color: "from-emerald-500/20 to-[#0b2a1f]",
    progress: "70%",
    icon: TrendingUp,
  },
  {
    title: "Mining Efficiency",
    value: "2x",
    subtitle: "Cost-to-performance gain",
    color: "from-violet-500/20 to-[#1e1239]",
    progress: "68%",
    icon: TrendingUp,
  },
];

export default function OptimizationDashboard() {
  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(232,64,58,0.9),transparent)]" />
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9e7ff]">Performance Optimization Dashboard</p>
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(58,114,255,0.9),transparent)]" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {metrics.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className={`rounded-xl border border-white/10 bg-gradient-to-br ${item.color} p-4`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#c7d6f3]">{item.title}</p>
              <item.icon size={18} className="text-[#ff8a82]" />
            </div>
            <p className="mt-3 text-4xl font-bold text-white">{item.value}</p>
            <p className="mt-1 text-sm text-[#a8bde1]">{item.subtitle}</p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: item.progress }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-[linear-gradient(90deg,#cc2e26,#3a72ff)]"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
