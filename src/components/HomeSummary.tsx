"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart2,
  Bot,
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

const stats = [
 {
   value:"10+",
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
    body: "DTS Inc. established in 1996 by Dr. Taikachiafi with a depth IT and computer science expertise.",
    href: "/about",
  },
  {
    icon: Bot,
    title: "Robotic Process Automation",
    body: "Semantic web algorithms including crawling, vector, internet mining, and ontological forensic models.",
    href: "/about",
  },
  {
    icon: Boxes,
    title: "Blockchain Solutions",
    body: "Ontology-driven fraud and market transaction tracking for enterprise and financial systems.",
    href: "/blockchain",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    body: "C Secure Wallet (DTS WALLET) with advanced digital wallet with advanced protection for digital assets, devices, and modern cyber threats.",
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
  title: "C Secure Wallet (DTS WALLET)",
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
         relative flex items-center gap-5 px-10 py-10
         ${index !== stats.length-1 
         ? "lg:border-r border-white/10" : ""}
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
          <h3 className="text-4xl font-extrabold text-white">
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

    <div className="grid items-center gap-16 lg:grid-cols-2">
      
      {/* LEFT CONTENT */}
      <motion.div {...fade(0)}>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d14840]">
          WHO WE ARE
        </p>

        <h2 className="mt-4 text-5xl font-extrabold text-white leading-tight">
          About DTS
        </h2>

        <p className="mt-6 text-[16px] leading-8 text-[#8ca4c9]">
          DTS Inc was established in 1996 by Dr. Taikachiafi and has delivered
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
          priority
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

  </div>
</section>

      {/* ══════════════════════ BOTTOM CTA ══════════════════════ */}
    {/* ═════════════ FUTURISTIC CTA SECTION ═════════════ */}
<section className="bg-[#030b1f] pb-24">
 <div className="mx-auto max-w-[1400px] px-6 lg:px-14">

  <motion.div
   {...fade(.1)}
   className="
   relative overflow-hidden rounded-3xl
   border border-[#1d3356]
   bg-gradient-to-r from-[#081426] via-[#091a35] to-[#071221]
   px-10 py-12"
  >

   {/* background glow */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(40,120,255,.15),transparent_35%),radial-gradient(circle_at_75%_45%,rgba(255,60,60,.12),transparent_30%)]" />

   {/* city line glow */}
   <div className="absolute bottom-0 right-0 h-44 w-[45%] bg-[url('/assets/city-glow.png')] bg-contain bg-bottom bg-no-repeat opacity-60" />

   <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">

    {/* left text */}
    <div className="max-w-xl">
      <h2 className="text-4xl font-extrabold leading-tight text-white">
        Ready to build the <br />
        future with us?
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-[#8ca3ca]">
       Let's collaborate on AI, blockchain and intelligent
       automation solutions.
      </p>
    </div>


    {/* center play button */}
    <button className="
      group relative flex h-20 w-20 items-center justify-center
      rounded-full border border-[#c9473d]/50
      bg-[#0c1933]
      shadow-[0_0_35px_rgba(209,72,64,.22)]
      transition hover:scale-105
    ">
       <span className="absolute h-20 w-20 animate-ping rounded-full border border-red-500/20"></span>

       <div className="
        flex h-14 w-14 items-center justify-center
        rounded-full bg-gradient-to-r from-[#cf443d] to-[#ff5f57]
       ">
          ▶
       </div>
    </button>


    {/* right button */}
    <Link
      href="/contact"
      className="
      inline-flex items-center gap-2 rounded-xl
      bg-gradient-to-r from-[#c53931] to-[#ff5f57]
      px-8 py-4 text-sm font-bold text-white
      shadow-[0_0_30px_rgba(209,72,64,.28)]
      transition hover:scale-105
      "
    >
      Contact Us →
    </Link>

   </div>
  </motion.div>


  {/* bottom features row */}
  <div className="mt-8 grid gap-6 md:grid-cols-4">
    {[
      ["Trusted & Secure","Enterprise-grade security and data protection"],
      ["AI-Powered","Intelligent solutions built with advanced AI"],
      ["Global Reach","Serving clients across 25+ countries"],
      ["Dedicated Support","24/7 support from our expert team"],
    ].map(([title,text])=>(
      <div
       key={title}
       className="
       rounded-2xl border border-[#1d3356]
       bg-[#071226] p-5"
      >
        <h4 className="font-bold text-white">
         {title}
        </h4>

        <p className="mt-2 text-sm leading-6 text-[#7e97c0]">
         {text}
        </p>
      </div>
    ))}
  </div>

 </div>
</section>
    </>
  );
}

