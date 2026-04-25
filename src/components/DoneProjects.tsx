"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { doneProjects } from "@/data/site";
import PlexusBg from "./PlexusBg";
import {
  ArrowRight,
  Blocks,
  Brain,
  ChevronDown,
  FlaskConical,
  Globe,
  Rocket,
  Search,
  Shield,
  Users,
  Wallet,
} from "lucide-react";

type Category =
  | "All Categories"
  | "AI / Trading"
  | "Wallets"
  | "Infrastructure"
  | "Research & Development";

type Status = "All Status" | "Live" | "Production";

type ProjectMeta = {
  category: Exclude<Category, "All Categories">;
  status: Exclude<Status, "All Status">;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const PROJECT_META: Record<string, ProjectMeta> = {
  "ICC Wallet Extension": { category: "Wallets", status: "Live", icon: Wallet },
  "S Wallet iOS": { category: "Wallets", status: "Live", icon: Wallet },
  "IIC Wallet Android": {
    category: "Wallets",
    status: "Production",
    icon: Wallet,
  },
  "IIC Blockchain": {
    category: "Infrastructure",
    status: "Production",
    icon: Blocks,
  },
  "DTS AI Trading": {
    category: "AI / Trading",
    status: "Live",
    icon: Brain,
  },
  "DTS FinTech Lab": {
    category: "Research & Development",
    status: "Live",
    icon: FlaskConical,
  },
  "XENEA Wallet": {
    category: "Wallets",
    status: "Production",
    icon: Shield,
  },
  "XENEA Blockchain": {
    category: "Infrastructure",
    status: "Live",
    icon: Blocks,
  },
};

const CATEGORY_OPTIONS: Category[] = [
  "All Categories",
  "AI / Trading",
  "Wallets",
  "Infrastructure",
  "Research & Development",
];

const STATUS_OPTIONS: Status[] = ["All Status", "Live", "Production"];

export default function DoneProjects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All Categories");
  const [status, setStatus] = useState<Status>("All Status");
  const [sortBy, setSortBy] = useState<"latest" | "a-z">("latest");

  const projects = useMemo(() => {
    const withMeta = doneProjects.map((project, index) => {
      const fallbackMeta: ProjectMeta = {
        category: "Infrastructure",
        status: "Live",
        icon: Blocks,
      };
      return {
        ...project,
        index,
        ...(PROJECT_META[project.title] ?? fallbackMeta),
      };
    });

    const filtered = withMeta.filter((project) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q);
      const matchesCategory =
        category === "All Categories" || project.category === category;
      const matchesStatus = status === "All Status" || project.status === status;
      return matchesQuery && matchesCategory && matchesStatus;
    });

    if (sortBy === "a-z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filtered.sort((a, b) => a.index - b.index);
    }

    return filtered;
  }, [query, category, status, sortBy]);

  return (
    <section id="projects" className="relative overflow-hidden pb-16 pt-5 md:pb-20 md:pt-8">
      <PlexusBg opacity={0.42} tint="blue" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,34,0.93)_0%,rgba(4,12,34,0.72)_46%,rgba(4,12,34,0.45)_100%)]" />

      <div className="section-shell relative z-10">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 md:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d14840]">
                Our Projects
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
                Building the Future with Blockchain &amp; AI
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#b7c7e4]">
                Explore our portfolio of innovative projects in AI trading,
                secure wallets, and blockchain infrastructure, all designed to
                deliver security, transparency, and real-world impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Blocks size={20} className="text-[#ff5f57]" />
                  <div>
                    <p className="text-2xl font-bold text-white">10000+</p>
                    <p className="text-xs text-[#9cb0d3]">Live Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Users size={20} className="text-[#9dc7ff]" />
                  <div>
                    <p className="text-2xl font-bold text-white">500K+</p>
                    <p className="text-xs text-[#9cb0d3]">Active Users</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Globe size={20} className="text-[#7fa4ff]" />
                  <div>
                    <p className="text-2xl font-bold text-white">25+</p>
                    <p className="text-xs text-[#9cb0d3]">Countries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden h-[360px] overflow-hidden rounded-3xl border border-white/10 lg:block">
              <Image
                src="/assets/Dts project ai.png"
                alt="DTS AI projects visual"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(52,119,255,0.28),transparent_42%),radial-gradient(circle_at_56%_78%,rgba(255,92,74,0.28),transparent_40%),linear-gradient(120deg,rgba(3,11,30,0.68),rgba(7,21,53,0.52))]" />
              <div className="absolute left-1/2 top-[74%] h-16 w-44 -translate-x-1/2 rounded-[999px] border border-[#ff5f57]/35 bg-[#ff5f57]/10 blur-[0.2px]" />

              {[
                { label: "shield", x: "10%", y: "18%" },
                { label: "wallet", x: "20%", y: "58%" },
                { label: "growth", x: "80%", y: "54%" },
                { label: "node", x: "84%", y: "20%" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="absolute flex h-14 w-14 items-center justify-center rounded-xl border border-[#ff5f57]/50 bg-[#130f23]/60 text-[11px] uppercase tracking-wider text-[#ff6a61]"
                  style={{ left: chip.x, top: chip.y }}
                >
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-[#08132d]/70 p-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3">
              <Search size={16} className="text-[#95a7ca]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="h-11 w-full bg-transparent text-sm text-white placeholder:text-[#7f93b8] outline-none"
              />
            </label>

            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.02] px-4 pr-10 text-sm text-white outline-none"
              >
                {CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-[#07112a]">
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#93a8cf]" />
            </div>

            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as Status)}
                className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.02] px-4 pr-10 text-sm text-white outline-none"
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-[#07112a]">
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#93a8cf]" />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "latest" | "a-z")}
                className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.02] px-4 pr-10 text-sm text-white outline-none"
              >
                <option value="latest" className="bg-[#07112a]">
                  Sort by: Latest
                </option>
                <option value="a-z" className="bg-[#07112a]">
                  Sort by: A-Z
                </option>
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#93a8cf]" />
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.07 }}
                  className="group rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d14840]/45 bg-[#d14840]/10 text-[#ff6f66]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-[28px] font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="mt-3 inline-flex rounded-md border border-white/12 px-2.5 py-1 text-[18px] text-[#9eb2d7]">
                    {project.category}
                  </span>
                  <p className="mt-4 min-h-[112px] text-[17px] leading-7 text-[#b8c8e5]">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#d14840]/60 px-4 py-2 text-[17px] font-semibold text-white transition hover:bg-[#d14840]/18"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </a>
                    {project.title === "XENEA Blockchain" && (
                      <a
                        href="https://faucet.xenea.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-[16px] text-white/85 transition hover:border-white/50 hover:text-white"
                      >
                        Faucet
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-7 md:px-8">
            <h3 className="text-3xl font-semibold text-white">Why Our Projects Stand Out</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-5">
              {[
                {
                  icon: Shield,
                  title: "Security First",
                  body: "Enterprise-grade security standards and audits across all projects.",
                },
                {
                  icon: Blocks,
                  title: "Decentralized",
                  body: "Built on decentralization principles for transparency and trust.",
                },
                {
                  icon: Brain,
                  title: "AI-Powered",
                  body: "Advanced AI and machine learning driving smarter decisions.",
                },
                {
                  icon: Rocket,
                  title: "Scalable",
                  body: "Designed to scale with millions of users and real-world adoption.",
                },
                {
                  icon: Globe,
                  title: "Global Impact",
                  body: "Empowering users and businesses worldwide with blockchain.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/8 bg-white/[0.015] p-4 md:border-0 md:bg-transparent"
                >
                  <feature.icon size={34} className="text-[#ff5f57]" />
                  <p className="mt-3 text-xl font-semibold text-white">{feature.title}</p>
                  <p className="mt-2 text-[16px] leading-7 text-[#9cb0d2]">{feature.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative isolate mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#061632]">
            <div className="grid items-center gap-6 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
              <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
                Partner With Us
              </p>
              <h3 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
                Let&apos;s Build the Future Together
              </h3>
              <p className="mt-4 max-w-xl text-[17px] leading-8 text-[#b9c9e7]">
                We collaborate with forward-thinking organizations and developers
                to build secure, scalable, and impactful blockchain solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#cc2e26] px-6 py-3 text-[17px] font-semibold text-white shadow-[0_0_28px_rgba(204,46,38,0.45)] transition hover:bg-[#e8403a] hover:shadow-[0_0_40px_rgba(232,64,58,0.6)]"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/links"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-[#0b1938]/55 px-6 py-3 text-[17px] font-semibold text-white transition hover:border-white/50"
                >
                  Explore Collaboration
                  <ArrowRight size={16} />
                </a>
              </div>
              </div>

              <div className="relative hidden h-[260px] overflow-hidden rounded-xl bg-[#071634] md:block">
                <Image
                  src="/assets/Blockchain network with glowing cubes.png"
                  alt="Blockchain network with glowing cubes"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,49,0.4)_0%,rgba(7,20,49,0.12)_42%,rgba(7,20,49,0.08)_100%)]" />
              </div>
            </div>
          </section>

          <section className="mt-10 grid items-center gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(110deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 md:grid-cols-[1fr_auto] md:p-6">
            <div>
              <p className="text-2xl font-semibold text-white">Stay Updated</p>
              <p className="mt-2 text-[16px] text-[#9eb2d8]">
                Subscribe to get the latest updates on our projects, research,
                and breakthroughs.
              </p>
            </div>
            <form className="flex w-full max-w-[520px] overflow-hidden rounded-lg border border-white/15 bg-[#0a1634]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 bg-transparent px-4 text-[16px] text-white placeholder:text-[#7f93b8] outline-none"
              />
              <button
                type="button"
                className="h-12 bg-[#d14840] px-6 text-[16px] font-semibold text-white transition hover:bg-[#ea5b53]"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
