"use client";

import {
  BarChart2,
  ChevronRight,
  Cpu,
  Boxes,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const floatingBadges = [
  { icon: ShieldCheck, label: "Security", className: "left-[8%] top-[14%]" },
  { icon: Wallet, label: "Wallet", className: "right-[6%] top-[18%]" },
  { icon: BarChart2, label: "Analytics", className: "right-[4%] bottom-[23%]" },
  { icon: Cpu, label: "AI Chip", className: "left-[12%] bottom-[18%]" },
  { icon: Boxes, label: "Blockchain", className: "left-[44%] top-[5%]" },
];

const particleDots = [
  { left: "10%", top: "22%", delay: 0 },
  { left: "16%", top: "65%", delay: 0.3 },
  { left: "23%", top: "43%", delay: 0.6 },
  { left: "34%", top: "72%", delay: 0.9 },
  { left: "41%", top: "18%", delay: 1.2 },
  { left: "53%", top: "56%", delay: 0.4 },
  { left: "64%", top: "28%", delay: 0.8 },
  { left: "71%", top: "67%", delay: 1.1 },
  { left: "82%", top: "38%", delay: 1.5 },
  { left: "90%", top: "60%", delay: 0.5 },
  { left: "58%", top: "10%", delay: 0.7 },
  { left: "77%", top: "84%", delay: 1.4 },
];

export default function Hero3D() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020917] pt-28"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#030b1f]/80" />
        <div className="absolute -left-32 top-0 h-[650px] w-[650px] rounded-full bg-red-600/20 blur-[140px]" />
        <div className="absolute right-0 top-20 h-[700px] w-[700px] rounded-full bg-blue-600/15 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(80,130,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(80,130,255,.6) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {particleDots.map((dot, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-400/70"
            style={{ left: dot.left, top: dot.top }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.85, 1.4, 0.85] }}
            transition={{ duration: 2.2, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-[1450px] items-center gap-10 px-6 lg:grid-cols-2 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[620px]"
        >
         <p className="mb-5 text-xs tracking-[.35em] uppercase font-bold text-[#e05a52]">
DTS ADVANCED BLOCKCHAIN AND AI LAB
</p>

<h1 className="leading-[1.05] text-white font-black text-5xl xl:text-7xl">
Building the Future <br/>
with <span className="text-[#ff5f57]">Blockchain</span> & AI
</h1>

<p className="mt-7 max-w-[520px] text-lg leading-8 text-[#8ea7cf]">
AI prediction systems, blockchain infrastructure,
RPA automation and secure digital solutions designed
for global enterprise innovation.
</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#c63d35] to-[#ff5f57] px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(209,72,64,.35)] transition hover:scale-105"
            >
              Read More <ChevronRight size={18} />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center rounded-xl border border-[#274169] bg-[#071226] px-8 py-4 font-semibold text-white transition hover:border-[#c63d35]"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        <div className="relative flex min-h-[760px] items-center justify-center">
          <div className="absolute h-[760px] w-[760px] rounded-full bg-blue-500/20 blur-[180px]" />
          <div className="absolute h-[560px] w-[560px] rounded-full bg-red-500/20 blur-[140px]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
            className="absolute h-[640px] w-[640px] rounded-full border border-blue-500/18"
          >
            <div className="absolute inset-10 rounded-full border border-red-500/20" />
            <div className="absolute inset-24 rounded-full border border-cyan-400/20" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-30"
          >
            <div className="absolute -bottom-14 left-1/2 h-24 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
            <Image
              src="/assets/hero_right.png"
              alt="Holographic blockchain globe"
              width={760}
              height={760}
              priority
              className="relative z-20 w-[680px] drop-shadow-[0_30px_90px_rgba(70,150,255,.42)] xl:w-[760px]"
            />
          </motion.div>

          <div className="absolute bottom-[78px] z-10">
            <div className="relative h-[180px] w-[520px]">
              <motion.div
                animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.96, 1.02, 0.96] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-blue-500/30"
              />
              <div className="absolute inset-6 rounded-full border border-red-500/30" />
              <div className="absolute inset-12 rounded-full border border-cyan-400/20" />
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-md" />
            </div>
          </div>

          {floatingBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.08, y: { duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" } }}
                className={`absolute z-40 hidden rounded-xl border border-[#ff5f57]/35 bg-[#071226]/85 px-3 py-2 text-[11px] uppercase tracking-wide text-[#ff7a72] shadow-[0_0_20px_rgba(209,72,64,.22)] backdrop-blur-md md:flex md:items-center md:gap-2 ${badge.className}`}
              >
                <Icon size={14} className="text-[#ff5f57]" />
                {badge.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}