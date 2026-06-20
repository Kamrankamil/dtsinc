"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BarChart2,
  Bot,
   ArrowRight,
  Boxes,
  Brain,
  ChevronRight,
  Cloud,
  Fingerprint,
  Globe,
  Headset,
  Layers,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import {
 Users,
 UserRound,
 Cpu
} from "lucide-react";

const OptimizationDashboard = dynamic(
  () => import("./blockchain/OptimizationDashboard"),
  { ssr: false }
);

const stats = [
 {
   value:"10000+",
   label:"Live Projects",
   icon: Users,
 },
 {
   value:"500K+",
   label:"Active Users",
   icon: UserRound,
 },
 {
   value:"25+",
   label:"Countries",
   icon: Globe,
 },
 {
   value:"AI & RPA",
   label:"Innovation",
   icon: Cpu,
 },
];
/* ── Data ─────────────────────────────────────────────── */


const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    body: "Advanced AI research, predictive analytics, deep learning, and intelligent automation solutions powering next-generation enterprise innovation.",
    href: "/about",
  },
  {
    icon: Bot,
    title: "Robotic Process Automation",
    body: "Intelligent process automation using semantic web algorithms, workflow orchestration, data mining, and autonomous business optimization.",
    href: "/about",
  },
  {
    icon: Boxes,
    title: "Blockchain Solutions",
    body: "Secure blockchain architectures, smart contracts, decentralized applications, ontology-driven fraud detection, and digital asset innovation.",
    href: "/blockchain",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    body: "Advanced cybersecurity solutions including secure digital wallets, threat intelligence, blockchain security, privacy protection, and cyber defense systems.",
    href: "/about",
  },
];

const products = [
  {
    icon: Layers,
    title: "Platinum Cache",
    body: "A high-performance caching system designed to reduce storage bottlenecks and improve enterprise I/O throughput.",
    href: "/about",
  },
  {
    icon: Cloud,
    title: "Act Cloud CRM",
    body: "A modern customer relationship platform with workflow automation, customer intelligence, and process customization.",
    href: "/about",
  },
  {
    icon: BarChart2,
    title: "DTS BI",
    body: "Business intelligence dashboards and reporting tools with fast decision-making for data and AI-driven market operations.",
    href: "/about",
  },
  {
    icon: Globe,
    title: "Semantic Web Crawling",
    body: "Semantic categorization engine that groups content, websites with ontology-backed contextual meaning and intent.",
    href: "/about",
  },
  {
    icon: Fingerprint,
    title: "Ontology Forensic Model",
    body: "Fraud, patent infringement, and suspicious transaction detection framework using OWL ontologies and transaction semantics.",
    href: "/about",
  },
  {
    icon: Globe,
    title: "GlocalizationBiz",
    body: "Global marketing platform helping SMEs promote products and expand visibility across high-growth international markets.",
    href: "/about",
  },
];

const wallet = {
  icon: Wallet,
  title: "IIC Secure Wallet (DTS WALLET)",
  body: "The world's first data-organization engine with digital banking wallet, designed to protect assets, support tokens, cryptocurrencies and modern security.",
  href: "/about",
};

/* ── Helpers ──────────────────────────────────────────── */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

/* ── Component ───────────────────────────────────────── */

export default function HomeSummary() {
  return (
    <>
      {/* ══════════════════════ STATS STRIP ══════════════════════ */}
   {/* ═════════════ PREMIUM STATS STRIP ═════════════ */}
<section className="bg-[#030b1f] pt-4 pb-10">
 <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
  
  <div className="
   rounded-3xl
   border border-[#20314f]
   bg-gradient-to-r
   from-[#071226]
   via-[#09182f]
   to-[#071226]
   shadow-[0_0_30px_rgba(30,80,180,.08)]
  ">

   <div className="grid sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((item,index)=>{
      const Icon = item.icon;

      return(
       <div
        key={item.label}
        className={`
         relative flex items-center gap-4 px-5 py-6 lg:px-10 lg:py-10
         ${index !== stats.length-1 
         ? "lg:border-r border-white/10" : "border-b lg:border-b-0 border-white/10"}
        `}
       >
        
        {/* glowing icon circle */}
        <div className="
         flex h-16 w-16 shrink-0 items-center justify-center
         rounded-full border border-[#c23f36]/40
         bg-[#b33a32]/10
         shadow-[0_0_20px_rgba(209,72,64,.12)]
        ">
          <Icon
            size={28}
            className="text-[#ff5f57]"
          />
        </div>

        {/* text */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-extrabold text-white">
            {item.value}
          </h3>

          <p className="mt-1 text-base text-[#86a0cb]">
            {item.label}
          </p>
        </div>

       </div>
      )
    })}
   </div>

  </div>

 </div>
</section>

      {/* ══════════════════════ SERVICE CARDS ══════════════════════ */}
      <section className="py-20 bg-[#030b1f]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  {...fade(i * 0.08)}
                  className="group flex flex-col rounded-2xl border border-white/8 bg-[#071226] p-6 transition-all duration-300 hover:border-[#b33a32]/50 hover:bg-[#0a1a38] hover:shadow-[0_0_32px_rgba(179,58,50,0.14)]"
                >
                  {/* icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#b33a32]/15 transition group-hover:bg-[#b33a32]/25">
                    <Icon size={22} className="text-[#ff5f57]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#7a93be]">{svc.body}</p>
                  <Link
                    href={svc.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#d14840] transition hover:gap-2"
                  >
                    Learn More <ChevronRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
 
    {/* ══════════════════════ ABOUT DTS ══════════════════════ */}
<section className="relative overflow-hidden bg-[#020917] pb-28 pt-10">
  {/* background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,78,255,.15),transparent_45%),radial-gradient(circle_at_65%_25%,rgba(255,60,60,.12),transparent_35%)]" />

  <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">

    <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
      
      {/* LEFT CONTENT */}
      <motion.div {...fade(0)}>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d14840]">
          WHO WE ARE
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
          About DTS
        </h2>

        <p className="mt-6 text-[16px] leading-8 text-[#8ca4c9]">
          DTS Inc was established in 1996 by Dr. Takahashi and has delivered
          advanced products and research in semantic web systems, AI prediction,
          blockchain, BI platforms, cybersecurity, and global consultancy operations.
        </p>

        <p className="mt-5 text-[16px] leading-8 text-[#8ca4c9]">
          DTS develops practical enterprise technologies including cache
          acceleration systems, CRM, business intelligence suites,
          ontology-driven categorization, forensic models for fraud detection,
          and overseas market expansion products.
        </p>
      </motion.div>


      {/* RIGHT IMAGE */}
      <motion.div
        {...fade(.15)}
        className="relative flex justify-center lg:justify-end"
      >
        {/* glow behind handshake */}
        <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute h-[320px] w-[320px] rounded-full bg-red-500/10 blur-[100px]" />

        <Image
          src="/assets/hand dts blockchain.png"
          alt="AI Handshake"
          width={720}
          height={480}
          loading="lazy"
          className="relative z-10 w-full max-w-[680px] object-contain
          drop-shadow-[0_0_45px_rgba(74,130,255,.35)]"
        />
      </motion.div>
    </div>


    {/* PRODUCT GRID */}
    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((p,i)=>{
        const Icon = p.icon
        return(
          <motion.div
            key={p.title}
            {...fade(i*.07)}
            className="
            rounded-2xl border border-[#20314f]
            bg-gradient-to-b from-[#071226] to-[#09172d]
            p-7 transition duration-300
            hover:border-[#c1453d]
            hover:shadow-[0_0_30px_rgba(209,72,64,.18)]"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#b33a32]/15">
              <Icon className="text-[#ff5f57]" size={20}/>
            </div>

            <h3 className="text-lg font-bold text-white">
              {p.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#8096bb]">
              {p.body}
            </p>

            <Link
              href={p.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d14840]"
            >
              Learn More <ChevronRight size={14}/>
            </Link>
          </motion.div>
        )
      })}
    </div>


    {/* Wallet wide card */}
    <motion.div
      {...fade(.15)}
      className="
      mt-6 rounded-2xl border border-[#20314f]
      bg-gradient-to-r from-[#071226] to-[#0b1730]
      p-7 flex flex-col md:flex-row md:items-center gap-5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b33a32]/15">
        <Wallet className="text-[#ff5f57]" />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-white">
          {wallet.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-[#8096bb]">
          {wallet.body}
        </p>
      </div>

      <Link
        href={wallet.href}
        className="font-semibold text-[#d14840]"
      >
        Learn More →
      </Link>
    </motion.div>
     
     <OptimizationDashboard />


  </div>
</section>

      {/* ══════════════════════ BOTTOM CTA ══════════════════════ */}
     <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#081631] p-6 md:p-7">
          <Image
            src="/assets/hand dts blockchain.png"
            alt="Build the future with DTS"
            fill
            className="object-cover object-right-center opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,49,0.9)_0%,rgba(7,19,49,0.82)_38%,rgba(7,19,49,0.38)_74%,rgba(7,19,49,0.22)_100%)]" />
          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
                Partner With Us
              </p>
              <h3 className="mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold text-white">Build the Future with DTS</h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#c5d4ee]">
                Let&apos;s work together to solve complex challenges, unlock new opportunities,
                and create a better tomorrow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-[#cc2e26] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(204,46,38,0.45)] transition hover:bg-[#e8403a] hover:shadow-[0_0_36px_rgba(232,64,58,0.6)]"
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/projects"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-[#0b1a3d]/55 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/45"
              >
                Explore Projects
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
    
    </>
  );
}

