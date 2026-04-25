"use client";

import { motion } from "framer-motion";
import { offices, phones } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.48fr_0.52fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get Support from Our Team"
            description="Reach our global offices and experts for project consultation, implementation planning, and technical collaboration."
          />

          <div className="space-y-4">
            {offices.map((office) => (
              <article key={office.city} className="glass-card rounded-2xl p-4">
                <h3 className="text-lg font-semibold">{office.city}</h3>
                <p className="mt-1 text-sm leading-7 text-[color:var(--muted)]">{office.address}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/15 p-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#b2bfd8]">Phone</p>
            <div className="mt-3 space-y-1 text-sm">
              {phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-6 glass-card"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span>Your Name</span>
              <input className="rounded-lg border border-white/20 bg-black/20 px-3 py-2" placeholder="Name" />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Your Email</span>
              <input className="rounded-lg border border-white/20 bg-black/20 px-3 py-2" placeholder="Email" />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Your Subject</span>
              <input className="rounded-lg border border-white/20 bg-black/20 px-3 py-2" placeholder="Subject" />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Your Number</span>
              <input className="rounded-lg border border-white/20 bg-black/20 px-3 py-2" placeholder="Phone" />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm">
            <span>Write A Message</span>
            <textarea
              className="min-h-28 rounded-lg border border-white/20 bg-black/20 px-3 py-2"
              placeholder="Write your message"
            />
          </label>

          <div className="mt-4 rounded-lg border border-dashed border-white/30 px-3 py-3 text-sm text-[color:var(--muted)]">
            Verify Captcha (placeholder)
          </div>

          <button
            type="button"
            className="mt-5 rounded-full bg-[#b33a32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ca5048]"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
}
