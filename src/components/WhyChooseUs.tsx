"use client";

import { BrainCircuit, Cog, Globe2, Headset, ShieldCheck, Waypoints } from "lucide-react";
import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/site";
import SectionHeading from "./SectionHeading";
import AnimatedCoin from "./AnimatedCoin";

const iconMap = [Cog, Headset, Waypoints, BrainCircuit, ShieldCheck, Globe2];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.4fr_0.6fr]">
        <div className="mx-auto">
          <AnimatedCoin size={320} delay={0.1} className="pulse-glow" />
        </div>

        <div>
          <SectionHeading eyebrow="Why Choose Us" title="What Makes Us Stand Out?" />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[index % iconMap.length];

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card rounded-xl p-4"
                >
                  <Icon className="text-[#4f82ff]" size={26} />
                  <h3 className="mt-3 text-xl font-semibold">{item}</h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                    Built for enterprise uptime, security, and measurable outcomes across AI and
                    blockchain products.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
