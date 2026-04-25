"use client";

import { motion } from "framer-motion";
import { services } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Enterprise Delivery Portfolio"
          description="We design secure, scalable, and research-backed solutions for enterprise digital transformation."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-[#b33a32]"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#b2bfd8]">
                Service 0{index + 1}
              </p>
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                Tailored architecture, implementation, and optimization aligned to business
                outcomes and security requirements.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
