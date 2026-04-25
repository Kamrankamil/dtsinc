"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrainCircuit, Rocket, ShieldCheck, Users2 } from "lucide-react";

const teamMembers = [
  {
    name: "Prof. Hiro Takahashi",
    role: "Founder & CTO",
    focus: "AI, Semantic Web, Blockchain Architecture",
    image: "/assets/ceo%20hero%20image.png",
  },
  {
    name: "DTS AI Engineering Team",
    role: "Machine Learning",
       image: "/assets/Team/uzair%20arshad.jfif",
    focus: "Market intelligence, prediction systems, and automation",
    initials: "AI",
  },
  {
    name: "DTS Blockchain Lab",
    role: "Blockchain R&D",
     image: "/assets/Team/uzair%20lakhani.jfif",
    focus: "Secure wallets, voting chains, and optimization",
    initials: "BC",
  },
  {
    name: "DTS Security Team",
    role: "Cybersecurity",
    focus: "Transaction protection and enterprise defense layers",
    initials: "CS",
  },
];

const dtsPeople = [
     {
    name: "Uzair Arshad",
    role: "Driving Web3 Innovation at MVTZ Dubai | Blockchain, Crypto Wallet & Metaverse Project Supervision",
            image: "/assets/Team/uzair%20arshad.jfif",
    connection: "2nd",
    cta: "Connect",
  },
    {
    name: "Uzair Lakhani",
    role: "Senior Software Engineer at Data Transmission System",
    connection: "1st",
    image: "/assets/Team/uzair%20lakhani.jfif",
    cta: "Message",
  },
   {
    name: "Muhammad Kamran",
    role:  "Blockchain Developer | Smart Contracts | Solidity | Frontend Engineering",
    connection: "1st",
    image: "/assets/Team/muhmmadkamran-blockchain.jpg",
    cta: "Message",
  },
  {
    name: "Mubashir Khan",
    role: "Blockchain Architect | Blockchain Core Developer | Blockchain Analyst",
    connection: "1st",
    cta: "Message",
  },

  {
    name: "Iftikhar Mustafa",
    role: "Software Engineer at DTS Inc.",
    connection: "2nd",
    cta: "Connect",
  },

  {
    name: "Irfan Ali",
    role: "DTS Team Member",
    connection: "1st",
    cta: "Message",
  },
  {
    name: "Muhammad Waqar",
    role: "Software Engineer",
    connection: "1st",
    cta: "Message",
  },
 
  {
    name: "Rizwan Ali",
    role: "Software Engineer at DTS-INC",
    connection: "1st",
    cta: "Message",
  },
  {
    name: "Asadullah Soomro",
    role: "Software Engineer at DTS Inc.",
    connection: "1st",
    status: "Open to work",
    cta: "Message",
  },
  {
    name: "Engr GM",
    role: "Java Developer | Spring Boot | REST APIs | Hibernate | Microservices",
    connection: "2nd",
    cta: "Connect",
  },
  {
    name: "Faizan Hameed",
    role: "Software Engineer",
    connection: "2nd",
    cta: "Connect",
  },
  {
    name: "Shahbaz Idrees",
    role: ".NET Developer | ASP.NET Core | MVC | REST APIs | Entity Framework",
    connection: "2nd",
    status: "Open to work",
    cta: "Connect",
  },
  {
    name: "Syed Isar Kashif",
    role: "Software Engineer | JavaScript | Node.js",
    connection: "2nd",
    status: "Open to work",
    cta: "Connect",
  },
  {
    name: "Ghulam Mustafa",
    role: "Java / C# / ASP.NET Web API Trainer & Developer",
    connection: "2nd",
    cta: "Connect",
  },
  
];

const pillars = [
  {
    title: "Research Driven",
    body: "Academic rigor and practical engineering shape every product release.",
    icon: BrainCircuit,
  },
  {
    title: "Security by Design",
    body: "From protocol level to UI, every layer is built with trust in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Global Delivery",
    body: "Teams collaborate across regions to deliver resilient enterprise systems.",
    icon: Rocket,
  },
  {
    title: "Collaborative Culture",
    body: "Cross-functional experts work together to solve complex challenges.",
    icon: Users2,
  },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden pb-20 pt-6 md:pt-10">
      <div className="section-shell relative z-10 space-y-6">
        <section className="rounded-3xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e8403a]">
            Our Team
          </p>
          <h1 className="mt-3 text-5xl font-bold text-white md:text-6xl">Meet The People Behind DTS</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#b7c7e4]">
            A multidisciplinary team of researchers, engineers, and product builders advancing
            AI, Blockchain, and RPA solutions for global enterprises.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <pillar.icon size={24} className="text-[#ff5f57]" />
              <h2 className="mt-3 text-xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[#a9bddf]">{pillar.body}</p>
            </motion.article>
          ))}
        </section>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5"
            >
              {member.image ? (
                <div className="relative h-44 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex h-44 items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_20%_25%,rgba(232,64,58,0.35),transparent_42%),radial-gradient(circle_at_80%_75%,rgba(58,114,255,0.3),transparent_44%),#091734]">
                  <span className="text-4xl font-bold text-white">{member.initials}</span>
                </div>
              )}
              <h3 className="mt-4 text-2xl font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[#ff7a72]">{member.role}</p>
              <p className="mt-2 text-sm leading-7 text-[#a9bddf]">{member.focus}</p>
            </motion.article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e8403a]">
                DTS LinkedIn Network
              </p>
              <h2 className="mt-2 text-4xl font-semibold text-white md:text-5xl">
                Team Members & Professional Connections
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-[#a9bddf]">
                A curated list of software engineers, blockchain specialists, and technical leaders connected with DTS.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {dtsPeople.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-[#071226]/70 p-5"
              >
                {person.image ? (
                  <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-white/10 bg-[#0a1836] p-2">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      unoptimized
                      className="object-contain object-center"
                    />
                  </div>
                ) : null}

                <h3 className="text-2xl font-semibold text-white">{person.name}</h3>
                <p className="mt-2 text-sm leading-7 text-[#a9bddf]">{person.role}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
