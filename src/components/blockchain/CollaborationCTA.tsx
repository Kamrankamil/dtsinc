import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollaborationCTA() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#081631] p-5 md:p-7">
      <Image
        src="/assets/hand dts blockchain.png"
        alt="Collaboration handshake"
        fill
        className="object-cover object-right-center opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,49,0.92)_0%,rgba(7,19,49,0.85)_38%,rgba(7,19,49,0.4)_74%,rgba(7,19,49,0.2)_100%)]" />

      <div className="relative z-10 grid gap-5 md:grid-cols-[0.7fr_0.3fr] md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d14840]">
            Collaboration
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-white md:text-5xl">
            Let&apos;s Build the Future Together
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[#c5d4ee]">
            Collaborate with DTS Lab for breakthrough research, secure blockchain
            engineering, and enterprise-scale innovation programs.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link
            href="/links"
            className="inline-flex items-center gap-2 rounded-lg bg-[#cc2e26] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(204,46,38,0.45)] transition hover:bg-[#e8403a]"
          >
            Collaborate With Us
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-[#0b1a3d]/55 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/45"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
