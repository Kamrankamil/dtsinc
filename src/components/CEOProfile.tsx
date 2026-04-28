"use client";

import {
  Award,
  Briefcase,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  PlayCircle,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ceoExperience,
  ceoHighlights,
  ceoMediaLinks,
  ceoSeminar,
} from "@/data/site";
import { ceoDetailedProfile } from "@/data/ceoDetailedProfile";
import SectionHeading from "./SectionHeading";

const iconMap = [GraduationCap, Globe2, FileText, Users, Award];

export default function CEOProfile() {
  return (
    <section id="ceo" className="pb-24">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative min-h-[86vh] w-full overflow-hidden border-y border-white/10"
      >
          <div className="absolute inset-0 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/seminar/ceo image.mp4" type="video/mp4" />
  </video>
</div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,24,0.94)_0%,rgba(3,8,24,0.78)_40%,rgba(3,8,24,0.38)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[86vh] w-full max-w-[1400px] flex-col justify-between p-6 md:p-8 xl:p-10">
            <div className="max-w-[640px]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff5a52]">
                Profile of CEO
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-[1.06] text-white md:text-5xl xl:text-7xl">
                Prof. Hiro <span className="text-[#ff4137]">Takahashi,</span> Ph.D.
              </h1>
              <p className="mt-4 text-xl uppercase tracking-[0.14em] text-[#d9e5ff]">
                Visionary Leader | Innovator | Researcher
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-9 text-[#c2d0e8]">
                Prof. Hiro Takahashi is a distinguished researcher, innovator and leader in AI,
                blockchain, and semantic technologies with over 30 years of research and industry
                experience.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {ceoHighlights.map((item, index) => {
                  const Icon = iconMap[index % iconMap.length];
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/12 bg-black/30 p-3 backdrop-blur-sm"
                    >
                      <div className="inline-flex rounded-full border border-[#ff4f46] p-2 text-[#ff4f46]">
                        <Icon size={16} />
                      </div>
                      <p className="mt-2 text-xl font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-7 text-[#beccdf]">{item.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#d92f28] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f03f37]"
                >
                  <Download size={16} />
                  Connect with CEO
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Mail size={16} />
                  Send Message
                </a>
              </div>
            </div>

            <div className="ml-auto mt-8 w-full max-w-[560px] rounded-2xl border border-white/12 bg-black/45 p-5 backdrop-blur-sm">
              <p className="text-2xl text-[#ff3f37]">“</p>
              <p className="text-2xl italic leading-10 text-[#ebf0ff] md:text-3xl md:leading-11">
                Innovation is not just about technology, it is about creating meaningful impact
                for society.
              </p>
              <p className="mt-3 text-right text-xl font-semibold text-[#ff4f46]">
                - Prof. Hiro Takahashi
              </p>
            </div>
          </div>
      </motion.section>

      <div className="section-shell mt-12">
        <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <SectionHeading
              eyebrow="Academic and Industry Timeline"
              title="Career Roles and Contributions"
            />

            <div className="space-y-4">
              {ceoExperience.map((item, index) => (
                <motion.article
                  key={`${item.role}-${item.org}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-xl border border-white/12 bg-white/6 p-4"
                >
                  <p className="text-lg font-semibold">{item.role}</p>
                  <p className="mt-1 text-[#ff5a51]">{item.org}</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{item.duration}</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{item.location}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl p-5 glass-card">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#b2bfd8]">Media and Events</p>
              <div className="space-y-3">
                {ceoMediaLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-white/12 bg-white/6 px-4 py-3 transition hover:border-[#ff554b]"
                  >
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-[#ff5d54]">
                      <Briefcase size={14} />
                      {item.cta}
                    </p>
                  </a>
                ))}
              </div>

              <a
                href="https://www.youtube.com/watch?v=U1O0YiHWrrA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                <PlayCircle size={16} />
                Watch Web3 Event Talk
              </a>
            </div>

            <div className="rounded-2xl p-5 glass-card">
              <h3 className="text-xl font-semibold">{ceoSeminar.title}</h3>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <Image
                  src="/assets/seminar/ceo%20seminar%20image.jpg"
                  alt="CEO seminar image 1"
                  width={800}
                  height={500}
                  className="h-24 w-full rounded-md object-cover"
                />
                <Image
                  src="/assets/seminar/ceo%20seminar%20image2.jpg"
                  alt="CEO seminar image 2"
                  width={800}
                  height={500}
                  className="h-24 w-full rounded-md object-cover"
                />
                <Image
                  src="/assets/seminar/ceo%20seminar%20iamge3.jpg"
                  alt="CEO seminar image 3"
                  width={800}
                  height={500}
                  className="h-24 w-full rounded-md object-cover"
                />
              </div>
              <p className="mt-3 text-sm leading-8 text-[color:var(--muted)]">{ceoSeminar.detail}</p>
            </div>
          </div>
        </div>

        <section className="mt-12 space-y-6 rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 md:p-8">
          <SectionHeading
            eyebrow="Detailed Profile"
            title={ceoDetailedProfile.heading}
          />

          <div className="space-y-4 text-[15px] leading-8 text-[#b6c5df] md:text-base">
            {ceoDetailedProfile.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-[#07152f]/60 p-5">
              <h3 className="text-xl font-semibold text-white">Research Topics</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[#a9bddf]">
                {ceoDetailedProfile.researchTopics.map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#ff5a52]" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#07152f]/60 p-5">
              <h3 className="text-xl font-semibold text-white">Blockchain Projects</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[#a9bddf]">
                {ceoDetailedProfile.blockchainProjects.map((project) => (
                  <li key={project} className="flex gap-2">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#ff5a52]" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-xl border border-white/10 bg-[#07152f]/60 p-5">
            <h3 className="text-xl font-semibold text-white">
              Overseas Business Contribution and Public Sector Engagement
            </h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-[#a9bddf]">
              {ceoDetailedProfile.overseasContribution.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

     
        </section>
      </div>
    </section>
  );
}
