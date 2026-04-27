"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutFeatures } from "@/data/site";
import {
  ArrowRight,
  Award,
  Blocks,
  BookOpen,
  Brain,
  FileText,
  FlaskConical,
  Globe,
  Rocket,
  Shield,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import PlexusBg from "./PlexusBg";

type AboutProps = {
  isHome?: boolean;
};

const heroStats = [
  { label: "Years Experience", value: "30+", icon: Trophy },
  { label: "Research Publications", value: "50+", icon: FileText },
  { label: "Blockchain Projects", value: "20+", icon: Blocks },
  { label: "Global Offices", value: "Global", icon: Globe },
];

const journey = [
  { year: "1996", detail: "Company founded by Dr. Takahashi in Tokyo, Japan." },
  { year: "2000+", detail: "Advanced research in Semantic Web and ontologies." },
  { year: "2008+", detail: "Enterprise cache systems and BI platform expansion." },
  { year: "2015+", detail: "Dedicated blockchain lab and global R&D initiatives." },
  { year: "2020+", detail: "AI integration, voting blockchain, and global delivery." },
];

const solutions = [
  {
    title: "Platinum Cache",
    body: "High-performance caching system to reduce storage bottlenecks and improve enterprise I/O throughput.",
    icon: Blocks,
  },
  {
    title: "Act Cloud CRM",
    body: "Modern CRM platform with workflow automation, customer intelligence, and orchestration.",
    icon: Users,
  },
  {
    title: "DTS Business Intelligence",
    body: "Dashboards and reporting focused on fast decision-making for global market operations.",
    icon: BookOpen,
  },
  {
    title: "Semantic Web Crawling",
    body: "Semantic engine that extracts meaningful intent using ontology-backed contextual analysis.",
    icon: Globe,
  },
  {
    title: "Ontology Forensic Model",
    body: "Fraud detection and transaction analysis using OWL ontologies and semantic forensic models.",
    icon: Shield,
  },
  {
    title: "GlocalizationBiz",
    body: "Global marketing platform helping SMEs expand visibility and growth across regions.",
    icon: Rocket,
  },
  {
    title: "C Secure Wallet",
    body: "Next-gen crypto wallet with multi-layer security and biometric protection mechanisms.",
    icon: Wallet,
  },
  {
    title: "Blockchain Optimization",
    body: "Scalable PoW/PoS optimization frameworks for secure and efficient blockchain systems.",
    icon: Brain,
  },
];

const strengths = [
  { title: "Innovation", body: "Pioneering AI, semantic web, and blockchain architectures.", icon: Brain },
  { title: "Security", body: "Enterprise-grade security by design across all solutions.", icon: Shield },
  { title: "Research Driven", body: "Academic rigor and continuous research-led execution.", icon: FlaskConical },
  { title: "Global Consulting", body: "Delivery across international markets and industries.", icon: Globe },
  { title: "AI + Blockchain", body: "Integrated intelligent automation with decentralized trust.", icon: Blocks },
];

const researchTimeline = [
  { year: "2008", title: "L3 Cache", body: "High-speed cache acceleration systems." },
  { year: "2012", title: "ADMLCS", body: "Adaptive distributed multi-level caching." },
  { year: "2018", title: "Blockchain Optimization", body: "Hash-rate and efficiency innovation." },
  { year: "2023", title: "Voting Blockchain", body: "Secure voting infrastructure and token trust." },
  { year: "2025", title: "Sustainable NFT Storage", body: "Eco-friendly, scalable blockchain storage." },
];

const globalCities = [
  { city: "Tokyo", country: "Japan", left: "83%", top: "44%" },
  { city: "San Jose", country: "USA", left: "18%", top: "52%" },
  { city: "Karachi", country: "Pakistan", left: "70%", top: "58%" },
];

export default function About({ isHome = false }: AboutProps) {
  if (isHome) {
    return (
      <section id="about" className="pb-24 pt-56 md:pt-64">
        <div className="section-shell">
          <SectionReveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="About DTS"
              description="DTS Inc was established in 1996 by Dr. Takahashi and has delivered advanced products and research in semantic web systems, AI prediction, blockchain, BI platforms, cybersecurity, and global consultancy operations."
            />
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="max-w-5xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
              DTS develops practical enterprise technologies including cache
              acceleration systems, CRM, business intelligence suites,
              ontology-driven categorization, forensic models for fraud
              detection, and overseas market expansion products.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {aboutFeatures.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass-card rounded-2xl p-6 animated-border"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="relative overflow-hidden pb-24 pt-6 md:pt-10">
      <PlexusBg opacity={0.34} tint="blue" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,34,0.9)_0%,rgba(4,12,34,0.6)_50%,rgba(4,12,34,0.88)_100%)]" />
      <div className="section-shell relative z-10 space-y-6">
        <section className="rounded-3xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 md:p-7">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
                Who We Are
              </p>
              <h1 className="mt-3 text-5xl font-bold text-white md:text-6xl">About DTS</h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[#b7c7e4]">
                Established in 1996, DTS pioneers AI, Semantic Web,
                Blockchain and Enterprise Security innovations.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-3"
                  >
                    <item.icon size={18} className="text-[#ff5f57]" />
                    <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
                    <p className="text-sm text-[#9cb0d3]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden h-[360px] overflow-hidden rounded-2xl border border-white/10 lg:block">
              <Image
                src="/assets/Dts project ai.png"
                alt="Digital globe and blockchain visualization"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,15,39,0.35),rgba(7,18,47,0.16))]" />
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-[linear-gradient(130deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
              Our Story
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">The Story of DTS</h2>
            <p className="mt-4 text-base leading-8 text-[#b7c7e4]">
              DTS was established in 1996 by Dr. Takahashi with a vision to
              solve enterprise challenges using emerging technologies. From
              semantic web research to blockchain infrastructure and AI-powered
              analytics, the company has continuously delivered practical,
              secure, and impactful solutions.
            </p>
            <p className="mt-4 text-base leading-8 text-[#b7c7e4]">
              Today, DTS drives innovation with global R&D partnerships and
              helps businesses and governments adopt future-ready systems.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-[linear-gradient(130deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
              Our Journey
            </p>
            <div className="mt-5 space-y-4">
              {journey.map((step) => (
                <div key={step.year} className="flex items-start gap-4">
                  <div className="mt-1 h-9 w-9 shrink-0 rounded-full border border-[#d14840]/55 bg-[#d14840]/10" />
                  <div className="flex-1 border-b border-white/8 pb-3">
                    <p className="text-2xl font-semibold text-white">{step.year}</p>
                    <p className="mt-1 text-sm leading-7 text-[#a9bddf]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
            Our Core Solutions
          </p>
          <h2 className="mt-2 text-4xl font-semibold text-white">
            Technologies That Power Our Innovation
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {solutions.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.07 }}
                className="rounded-xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-4"
              >
                <item.icon size={24} className="text-[#ff5f57]" />
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#a9bddf]">{item.body}</p>
                <a href="/links" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#ff6a61]">
                  Learn More
                  <ArrowRight size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
            Why DTS Stands Out
          </p>
          <div className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {strengths.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 md:border-0 md:bg-transparent"
              >
                <feature.icon size={28} className="text-[#ff5f57]" />
                <p className="mt-3 text-lg font-semibold text-white">{feature.title}</p>
                <p className="mt-2 text-sm leading-7 text-[#a9bddf]">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

  <section className="rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 md:p-6">
  <div className="grid gap-5 grid-cols-1 lg:grid-cols-[300px_1fr_0.82fr]">

    {/* LEFT CEO PROFILE CARD */}
    <div className="relative min-h-[560px] overflow-hidden rounded-[24px] border border-[#1a335f] bg-gradient-to-br from-[#06152f] via-[#081a42] to-[#132b63]">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,90,70,.18),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(65,120,255,.16),transparent_42%)]" />

      {/* Portrait Card */}
      <div className="absolute top-6 left-6 right-6 rounded-[22px] border border-white/10 bg-[#091528] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,.35)]">

        <div className="relative h-[430px] w-full">
          <Image
            src="/assets/ceo hero image.png"
            alt="Prof. Hiro Takahashi"
            fill
            priority
            className="object-cover object-top"
            sizes="400px"
          />

          {/* image fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#091528] via-transparent to-transparent" />
        </div>

        {/* Profile Content */}
        <div className="relative z-10 p-4 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff6358]">
            CEO PROFILE
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white">
            Prof. Hiro Takahashi
          </h3>

          <p className="mt-2 text-[#ff766b] text-lg">
            Founder & Chief Technology Officer
          </p>

          <p className="mt-4 text-sm leading-7 text-[#c5d4ef]">
            Pioneer in AI, Semantic Web, Blockchain innovation and
            enterprise security systems with decades of global impact.
          </p>

        
        </div>
      </div>

      {/* Bottom Accent Area */}
      <div className="absolute bottom-0 left-0 right-0 h-[210px] bg-gradient-to-br from-[#081735] to-[#213d78]" />

      <div className="absolute bottom-10 left-8 w-28 h-[2px] bg-gradient-to-r from-[#ff5649] to-transparent" />
    </div>


    {/* CENTER CONTENT */}
    <div className="rounded-xl border border-white/10 bg-[#091736]/70 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
        Our Leadership
      </p>

      <h3 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        Prof. Hiro Takahashi PhD
      </h3>

      <p className="mt-2 text-2xl font-medium text-[#ff7269]">
        Founder & Chief Technology Officer
      </p>

      <p className="mt-5 text-lg leading-8 text-[#c1d0ea]">
        A visionary leader in AI, Semantic Web, and Blockchain innovation
        with 30+ years of research and industry experience.
      </p>

      <ul className="mt-8 space-y-4 text-base leading-8 text-[#c3d3ee]">
        {[
          "Pioneer in Ontology-driven AI and Semantic Technologies",
          "Advisor to Global Enterprises and Government Institutions",
          "Author of 50+ Research Publications",
          "Holder of Multiple Patents in AI, Security & Blockchain",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff4d43] shadow-[0_0_8px_rgba(255,77,67,0.8)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-xl border border-[#233e6e] bg-[#0c1c40] p-5">
        <h4 className="text-xl font-semibold text-white mb-3">
          Visionary Contributions
        </h4>

        <p className="text-[#b8c8e6] leading-8">
          Leading innovations in blockchain optimization, ontology research,
          semantic intelligence and enterprise security solutions for global impact.
        </p>
      </div>
    </div>


    {/* RIGHT QUOTE PANEL */}
    <div className="rounded-xl border border-white/10 bg-[#0a1736]/78 p-6 lg:border-l lg:border-l-white/15">

      <p className="text-6xl leading-none text-[#ff4d43]">“</p>

      <p className="mt-4 text-2xl md:text-3xl lg:text-4xl leading-[1.35] text-white">
        Our mission is to build technologies that create a smarter,
        safer, and more transparent world.
      </p>

      <p className="mt-6 text-2xl italic text-[#d7e5ff]">
        H. Takahashi
      </p>

      <div className="mt-8 h-px bg-gradient-to-r from-[#ff5d52] to-transparent" />

      <p className="mt-8 text-xl font-semibold text-[#ff6d64]">
        Vision for the Future
      </p>

      <p className="mt-4 text-base leading-8 text-[#b8c8e6]">
        We envision a world where AI and blockchain empower people
        and organizations to collaborate securely, innovate fearlessly,
        and grow sustainably.
      </p>

      <div className="mt-10 rounded-xl border border-[#213760] bg-[#0d1e46] p-5">
        <h4 className="text-lg font-semibold text-white">
          Core Focus Areas
        </h4>

        <div className="mt-5 space-y-4">
          {[
            "Artificial Intelligence",
            "Blockchain Infrastructure",
            "Semantic Web",
            "Cybersecurity Systems",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-[#d5e4ff]">
              <span className="h-2 w-2 rounded-full bg-[#ff5548]" />
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>

  </div>
</section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
            Research &amp; Innovation Timeline
          </p>
          <div className="mt-5 overflow-x-auto pb-2">
            <div className="grid min-w-[980px] gap-4 md:grid-cols-5">
              {researchTimeline.map((item) => (
                <div key={item.year} className="rounded-xl border border-white/10 bg-[#091634] p-4">
                  <p className="text-xl font-bold text-[#ff6d64]">{item.year}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[#a9bddf]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
              Global Presence
            </p>
            <div className="relative mt-4 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(150deg,#0b1737,#09142f)]">
              <div className="relative h-[190px] border-b border-white/8">
                <svg
                  viewBox="0 0 1000 480"
                  className="absolute inset-0 h-full w-full opacity-55"
                  aria-hidden="true"
                >
                  <path
                    d="M58,208l42,-53l88,-18l72,15l48,32l16,45l-30,27l-95,-6l-80,-12z"
                    fill="#69739a"
                  />
                  <path
                    d="M355,155l72,-28l98,16l78,-13l76,24l71,42l-10,47l-88,18l-79,-19l-72,12l-88,-9l-65,-28z"
                    fill="#69739a"
                  />
                  <path
                    d="M742,188l79,-55l94,-16l76,22l34,53l-34,54l-83,26l-113,-9l-53,-34z"
                    fill="#69739a"
                  />
                </svg>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(79,130,255,0.2),transparent_40%),radial-gradient(circle_at_70%_35%,rgba(255,82,71,0.2),transparent_42%)]" />

                {globalCities.map((city) => (
                  <div key={city.city} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: city.left, top: city.top }}>
                    <span className="inline-flex h-3.5 w-3.5 rounded-full bg-[#ff4f47] shadow-[0_0_16px_rgba(255,79,71,0.9)]" />
                    <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff4f47]/55" />
                  </div>
                ))}
              </div>

              <div className="grid gap-1 px-3 py-3 md:grid-cols-3 md:gap-2 md:px-4">
                {[
                  { code: "JP", city: "Tokyo", country: "Japan" },
                  { code: "US", city: "San Jose", country: "USA" },
                  { code: "PK", city: "Karachi", country: "Pakistan" },
                ].map((item, index) => (
                  <div
                    key={item.city}
                    className={`flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.02] px-2 py-2 ${
                      index > 0 ? "md:border-l md:border-l-white/10" : ""
                    }`}
                  >
                    <span className="inline-flex h-5 min-w-8 items-center justify-center rounded bg-[#132548] px-1 text-[10px] font-bold text-white">
                      {item.code}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.city}</p>
                      <p className="text-xs text-[#9cb0d3]">{item.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
              Awards &amp; Recognitions
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                { image: "/assets/reward1.png", title: "Excellence in AI Innovation", year: "2021" },
                { image: "/assets/reward2.png", title: "Global Blockchain Leadership", year: "2023" },
                { image: "/assets/rewar3.png", title: "Best Enterprise Security", year: "2024" },
              ].map((award) => (
                <div key={award.title} className="rounded-xl border border-white/10 bg-[#0a1736]/75 p-3 text-center">
                  <div className="relative mx-auto h-20 w-20">
                    <Image src={award.image} alt={award.title} fill className="object-contain" />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{award.title}</p>
                  <p className="text-xs text-[#ff7b72]">{award.year}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

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
              <h3 className="mt-2 text-5xl font-semibold text-white">Build the Future with DTS</h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#c5d4ee]">
                Let&apos;s work together to solve complex challenges, unlock new opportunities,
                and create a better tomorrow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#cc2e26] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(204,46,38,0.45)] transition hover:bg-[#e8403a] hover:shadow-[0_0_36px_rgba(232,64,58,0.6)]"
              >
                Contact Us
                <ArrowRight size={14} />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-[#0b1a3d]/55 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/45"
              >
                Explore Projects
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-3xl font-semibold text-white">Stay Updated</p>
              <p className="mt-2 text-base text-[#a9bddf]">
                Subscribe to get the latest updates on AI, blockchain research,
                and enterprise innovation from DTS.
              </p>
            </div>
            <form className="flex w-full max-w-[520px] overflow-hidden rounded-lg border border-white/15 bg-[#0a1634]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-[#7f93b8] outline-none"
              />
              <button
                type="button"
                className="h-12 bg-[#cc2e26] px-5 text-sm font-semibold text-white transition hover:bg-[#e8403a]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </div>
    </section>
  );
}
