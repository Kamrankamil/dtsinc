"use client";

import React, { Fragment, useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
  FileText,
  Globe,
  Trophy,
  SortAsc,
} from "lucide-react";
import {
  domesticPapers,
  internationalReviewedPapers,
  invitedPapers,
  journalPapers,
  publicationAwards,
  type PublicationRecord,
} from "@/data/publicationCatalog";

function extractYear(dateStr: string): number {
  const m = dateStr.match(/\b(20\d{2}|19\d{2})\b/);
  return m ? parseInt(m[1], 10) : 0;
}

const TABS = [
  "Journal Papers",
  "International Conferences",
  "Invited Papers",
  "Domestic Papers",
  "Awards",
] as const;
type Tab = (typeof TABS)[number];

const TAB_DATA: Record<Exclude<Tab, "Awards">, PublicationRecord[]> = {
  "Journal Papers": journalPapers,
  "International Conferences": internationalReviewedPapers,
  "Invited Papers": invitedPapers,
  "Domestic Papers": domesticPapers,
};

const PER_PAGE = 10;

const MILESTONES = [
  { year: "2008", title: "L3 Cache Innovation", desc: "Autonomous L3 Cache Technology for High Responsiveness." },
  { year: "2012", title: "ADMLCS Architecture", desc: "Multi-Layer Cache System for High Availability and Timeliness." },
  { year: "2018", title: "Blockchain Optimization", desc: "SHA256d Hash Rate Enhancement by L3 Cache." },
  { year: "2023", title: "Voting Blockchain", desc: "AI-Powered Voting Blockchain for Secure Elections." },
  { year: "2025", title: "Sustainable NFT Storage", desc: "AI + Blockchain based Immutable & Sustainable Storage Solutions." },
];

const FEATURED_PAPERS = [
  { badge: "IEEE GCCE 2018", title: "SHA256d Hash Rate Enhancement by L3 Cache", authors: "Hironao Takahashi, Shinji Nakano, Uzair Lakhani", year: "2018" },
  { badge: "IEEE ISADS 2017", title: "Autonomous Decentralized Kernel Cache Architecture for Multi Ontology Based Information Extraction on Microsoft Windows", authors: "Dr. Hironao Takahashi", year: "2017" },
  { badge: "IEEE SASWIN 2017", title: "Improving the Understanding between Control Tower Operator & Pilot Using Semantic Techniques", authors: "Dr. Hironao Takahashi", year: "2017" },
  { badge: "IEEE GCCE 2016", title: "Pilot Eye Monitoring for Aircraft Safety Using Semantic Web Tools & Technologies", authors: "Dr. Hironao Takahashi", year: "2016" },
  { badge: "IEEE ISMS 2016", title: "Innovative High Quality Aircraft Maintenance by Wisdom of Semantic Database Using Historical Data of Operation Staffs", authors: "Dr. Hironao Takahashi", year: "2016" },
];

const AWARD_CARDS = [
  {
    image: "/assets/reward1.png",
    title: "Interop Finalist",
    desc: "DTS Autonomous Cache System was selected as Interop Tokyo 2010 Finalist.",
    year: "2010",
  },
  {
    image: "/assets/reward2.png",
    title: "Technology Venture Award",
    desc: "Recognized for outstanding contributions in Blockchain Research & Innovation.",
    year: "2018",
  },
  {
    image: "/assets/rewar3.png",
    title: "Innovation Recognitions",
    desc: "Awarded for Excellence in AI, Blockchain and Semantic Web Technologies.",
    year: "2023",
  },
];

function useCounter(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setCount(Math.round(t * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

function StatCard({
  value,
  suffix,
  label,
  icon,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}) {
  const { count, ref } = useCounter(value);
  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-5 flex items-center gap-4 border border-white/10 hover:border-[#b33a32]/40 transition-colors"
    >
      <div className="text-[#b33a32] shrink-0">{icon}</div>
      <div>
        <p className="text-3xl font-bold text-white tabular-nums">
          {count}{suffix}
        </p>
        <p className="text-xs text-[#98a8cb] mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = canvas.parentElement?.offsetWidth ?? window.innerWidth;
    let h = canvas.parentElement?.offsetHeight ?? 400;
    canvas.width = w;
    canvas.height = h;
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1 + Math.random() * 1.4,
      phase: Math.random() * Math.PI * 2,
    }));
    let tick = 0;
    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(179,58,50,${((1 - d / 120) * 0.2).toFixed(3)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        const pulse = 0.65 + 0.35 * Math.sin(tick * 0.022 + p.phase);
        ctx.fillStyle = `rgba(200,90,80,${(pulse * 0.7).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      w = canvas.parentElement?.offsetWidth ?? window.innerWidth;
      h = canvas.parentElement?.offsetHeight ?? 400;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Publications() {
  const [activeTab, setActiveTab] = useState<Tab>("Journal Papers");
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("All Years");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const allYears = useMemo(() => {
    const all = [
      ...journalPapers,
      ...internationalReviewedPapers,
      ...invitedPapers,
      ...domesticPapers,
    ];
    const years = new Set<number>();
    all.forEach((p) => {
      const y = extractYear(p.publishedDate);
      if (y) years.add(y);
    });
    return [
      "All Years",
      ...Array.from(years)
        .sort((a, b) => b - a)
        .map(String),
    ];
  }, []);

  const baseRows: PublicationRecord[] = useMemo(() => {
    if (activeTab === "Awards") return [];
    return TAB_DATA[activeTab as Exclude<Tab, "Awards">] ?? [];
  }, [activeTab]);

  const filtered: PublicationRecord[] = useMemo(() => {
    let data = [...baseRows];
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.authors.toLowerCase().includes(q)
      );
    }
    if (yearFilter !== "All Years") {
      data = data.filter(
        (r) => String(extractYear(r.publishedDate)) === yearFilter
      );
    }
    data.sort((a, b) => {
      const ya = extractYear(a.publishedDate),
        yb = extractYear(b.publishedDate);
      return sortDir === "desc" ? yb - ya : ya - yb;
    });
    return data.map((r, i) => ({ ...r, serial: i + 1 }));
  }, [baseRows, search, yearFilter, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageRows = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const resetPage = () => {
    setPage(1);
    setExpandedRow(null);
  };

  const pageNums = useMemo(() => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const start = Math.max(1, Math.min(page - 2, totalPages - 4));
    return Array.from({ length: 5 }, (_, i) => start + i);
  }, [page, totalPages]);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <HeroParticles />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(179,58,50,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(179,58,50,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,16,24,0.42)_0%,rgba(37,18,42,0.25)_26%,rgba(3,11,31,0)_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(179,58,50,0.13),transparent)]" />
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[64%] lg:block"
        >
          <Image
            src="/assets/Dts research paper.png"
            alt="DTS research paper"
            fill
            priority
            className="object-cover object-right-top opacity-80 brightness-[0.74] contrast-[1.08] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(179,58,50,0.24),transparent_56%),radial-gradient(ellipse_at_36%_72%,rgba(47,97,211,0.22),transparent_62%)]" />
          <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-[#030b1f] via-[#030b1f]/86 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#030b1f]/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030b1f]/88 to-transparent" />
        </motion.div>
        <div className="section-shell relative z-20 text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b33a32]"
          >
            Research and Publications
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl"
          >
            DTS Publications Archive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-base leading-7 text-[#c7d2e8]"
          >
            Complete journal papers, IEEE conference papers, invited
            presentations, domestic papers and awards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-10 text-[#b33a32]/35"
          >
            {[BookOpen, Globe, Award, FileText].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3 + i * 0.6,
                  repeat: Infinity,
                  delay: i * 0.45,
                }}
              >
                <Icon size={30} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-shell relative z-20 -mt-6 pb-12 md:-mt-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            value={50}
            suffix="+"
            label="Journal Papers"
            icon={<FileText size={34} />}
          />
          <StatCard
            value={40}
            suffix="+"
            label="IEEE Conferences"
            icon={<Globe size={34} />}
          />
          <StatCard
            value={10}
            suffix="+"
            label="Awards"
            icon={<Trophy size={34} />}
          />
          <StatCard
            value={30}
            suffix="+"
            label="Years of Research"
            icon={<BookOpen size={34} />}
          />
        </div>
      </section>

      {/* TABS + TABLE */}
      <section className="section-shell pb-16">
        <div className="flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSearch("");
                setYearFilter("All Years");
                setSortDir("desc");
                resetPage();
              }}
              className={`relative whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-white"
                  : "text-[#98a8cb] hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 rounded-lg bg-[#cc2e26]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "Awards" ? (
            <motion.div
              key="awards"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-[#b6c3dd]">
                    <th className="px-5 py-4 text-left font-semibold w-16">
                      S/No
                    </th>
                    <th className="px-5 py-4 text-left font-semibold">
                      Award
                    </th>
                    <th className="px-5 py-4 text-left font-semibold w-28">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {publicationAwards.map((a, i) => (
                    <tr
                      key={a.serial}
                      className={`border-b border-white/[0.06] transition-colors hover:bg-[#cc2e26]/8 ${
                        i % 2 === 1 ? "bg-white/[0.018]" : ""
                      }`}
                    >
                      <td className="px-5 py-4 font-mono text-xs text-[#d9e2f5]">
                        {a.serial}
                      </td>
                      <td className="px-5 py-4 text-[#e8eefc] leading-6">
                        {a.award}
                      </td>
                      <td className="px-5 py-4 text-xs text-[#98a8cb]">
                        {a.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <div className="mb-4 flex flex-wrap gap-3">
                <div className="relative min-w-[220px] flex-1">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98a8cb]"
                    size={15}
                  />
                  <input
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      resetPage();
                    }}
                    placeholder="Search by title, author, keyword..."
                    className="w-full rounded-lg border border-white/10 bg-white/[0.05] py-2.5 pl-9 pr-4 text-sm text-white placeholder-[#98a8cb] outline-none focus:border-[#b33a32]/60 focus:ring-1 focus:ring-[#b33a32]/30"
                  />
                </div>
                <select
                  value={yearFilter}
                  onChange={(e) => {
                    setYearFilter(e.target.value);
                    resetPage();
                  }}
                  className="rounded-lg border border-white/10 bg-[#070d1c] px-4 py-2.5 text-sm text-white outline-none focus:border-[#b33a32]/60"
                >
                  {allYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    setSortDir((d) => (d === "desc" ? "asc" : "desc"));
                    resetPage();
                  }}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white transition hover:bg-white/10"
                >
                  <SortAsc size={14} />
                  Sort: {sortDir === "desc" ? "Latest First" : "Oldest First"}
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
                <table className="w-full min-w-[820px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-[#b6c3dd]">
                      <th className="px-5 py-4 text-left font-semibold w-14">
                        S/No
                      </th>
                      <th className="px-5 py-4 text-left font-semibold w-52">
                        Author Name
                      </th>
                      <th className="px-5 py-4 text-left font-semibold">
                        Paper Title
                      </th>
                      <th className="px-5 py-4 text-left font-semibold w-36">
                        Published Date
                      </th>
                      <th className="px-5 py-4 text-left font-semibold w-24">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageRows.length === 0 ? (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-5 py-12 text-center text-[#98a8cb]"
                        >
                          No results found.
                        </td>
                      </tr>
                    ) : (
                      pageRows.map((row, i) => (
                        <Fragment key={`${activeTab}-pg${page}-${i}`}>
                          <tr
                            onClick={() =>
                              setExpandedRow(
                                expandedRow === row.serial ? null : row.serial
                              )
                            }
                            className={`border-b border-white/[0.06] cursor-pointer transition-colors hover:bg-[#cc2e26]/8 ${
                              i % 2 === 1 ? "bg-white/[0.015]" : ""
                            } ${
                              expandedRow === row.serial
                                ? "bg-[#cc2e26]/10"
                                : ""
                            }`}
                          >
                            <td className="px-5 py-4 font-mono text-xs text-[#d9e2f5]">
                              {row.serial}
                            </td>
                            <td className="px-5 py-4 text-xs leading-5 text-[#98a8cb]">
                              {row.authors}
                            </td>
                            <td className="px-5 py-4 leading-6 text-[#e8eefc]">
                              {row.title}
                            </td>
                            <td className="px-5 py-4 text-xs text-[#98a8cb]">
                              {row.publishedDate}
                            </td>
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-2">
                                <span className="rounded border border-[#b33a32]/45 px-2 py-0.5 text-[10px] font-bold text-[#b33a32]">
                                  DOI
                                </span>
                                {expandedRow === row.serial ? (
                                  <ChevronUp
                                    size={13}
                                    className="text-[#98a8cb]"
                                  />
                                ) : (
                                  <ChevronDown
                                    size={13}
                                    className="text-[#98a8cb]"
                                  />
                                )}
                              </div>
                            </td>
                          </tr>
                          {expandedRow === row.serial && (
                            <tr>
                              <td
                                colSpan={5}
                                className="border-b border-white/[0.06] bg-[#cc2e26]/[0.06] px-8 py-5"
                              >
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="space-y-1.5"
                                >
                                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b33a32]">
                                    Full Citation
                                  </p>
                                  <p className="text-sm leading-6 text-[#c8d4ef]">
                                    {row.title}
                                  </p>
                                  <p className="text-xs text-[#98a8cb]">
                                    <span className="text-white/60">
                                      Authors:
                                    </span>{" "}
                                    {row.authors}
                                  </p>
                                  <p className="text-xs text-[#98a8cb]">
                                    <span className="text-white/60">
                                      Published:
                                    </span>{" "}
                                    {row.publishedDate}
                                  </p>
                                </motion.div>
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[#98a8cb]">
                <span>
                  Showing{" "}
                  {filtered.length === 0 ? 0 : (page - 1) * PER_PAGE + 1} to{" "}
                  {Math.min(page * PER_PAGE, filtered.length)} of{" "}
                  {filtered.length} entries
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="rounded-md p-1.5 transition hover:bg-white/10 disabled:opacity-30"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  {pageNums.map((pg) => (
                    <button
                      key={pg}
                      onClick={() => setPage(pg)}
                      className={`h-8 w-8 rounded-md text-xs font-medium transition ${
                        page === pg
                          ? "bg-[#cc2e26] text-white shadow-[0_0_14px_rgba(204,46,38,0.45)]"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {pg}
                    </button>
                  ))}
                  {totalPages > 5 && page < totalPages - 2 && (
                    <span className="px-1">...</span>
                  )}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="rounded-md p-1.5 transition hover:bg-white/10 disabled:opacity-30"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* TIMELINE */}
      <section className="section-shell pb-16">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b33a32]">
          Research Journey &amp; Milestones
        </p>
        <div className="relative mt-10 overflow-x-auto pb-4">
          <div className="min-w-[680px]">
            <div className="absolute left-[10%] right-[10%] top-[38px] h-px bg-gradient-to-r from-transparent via-[#b33a32]/50 to-transparent" />
            <div className="flex justify-between">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.13 }}
                  className="flex w-1/5 flex-col items-center"
                >
                  <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#b33a32]/45 bg-[#070d1c] shadow-[0_0_22px_rgba(179,58,50,0.22)]">
                    <span className="text-[11px] font-bold text-[#b33a32]">
                      {m.year}
                    </span>
                  </div>
                  <p className="mt-3 text-center text-xs font-semibold text-white">
                    {m.title}
                  </p>
                  <p className="mt-1 text-center text-[10px] leading-[1.5] text-[#98a8cb]">
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IEEE PAPERS */}
      <section className="section-shell pb-16">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-base font-bold uppercase tracking-wider text-white">
            Featured IEEE Papers
          </p>
          <button className="text-xs text-[#b33a32] transition hover:underline">
            View All Papers
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-3">
          {FEATURED_PAPERS.map((paper, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card min-w-[210px] max-w-[230px] shrink-0 rounded-xl border border-white/10 p-4 hover:border-[#b33a32]/35 transition-colors"
            >
              <span className="inline-block rounded border border-[#cc2e26]/55 bg-[#cc2e26]/12 px-2 py-0.5 text-[10px] font-bold text-[#e8403a]">
                {paper.badge}
              </span>
              <p className="mt-3 line-clamp-3 text-xs font-semibold leading-5 text-white">
                {paper.title}
              </p>
              <p className="mt-2 text-[10px] text-[#98a8cb]">{paper.authors}</p>
              <p className="mt-0.5 text-[10px] text-[#98a8cb]">{paper.year}</p>
              <button className="mt-4 text-[11px] font-semibold text-[#b33a32] transition hover:underline">
                Read Paper
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="section-shell pb-24">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-base font-bold uppercase tracking-wider text-white">
            Awards &amp; Recognitions
          </p>
          <button className="text-xs text-[#b33a32] transition hover:underline">
            View All Awards
          </button>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {AWARD_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 transition-colors hover:border-[#b33a32]/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(179,58,50,0.2),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(31,81,181,0.16),transparent_46%)] opacity-80" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="w-[110px] shrink-0">
                  <div className="relative h-[100px] w-[100px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain drop-shadow-[0_0_18px_rgba(255,180,86,0.45)]"
                    />
                  </div>
                  <p className="mt-2 text-center text-2xl font-bold leading-none text-[#e7eefc]">
                    {card.year}
                  </p>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#c3d2ea] md:text-base">
                  {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
