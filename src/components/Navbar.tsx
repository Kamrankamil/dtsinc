"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <nav className="flex w-full items-center justify-between rounded-b-2xl border border-white/10 bg-[#030b1f]/88 px-4 py-3 backdrop-blur-xl shadow-[0_4px_32px_rgba(26,82,232,0.12)] md:px-8 xl:px-12">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Image
              src="/assets/dts%20logo.png"
              alt="DTS Inc logo"
              width={160}
              height={65}
              priority
            />
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium transition-colors hover:text-white ${
                  pathname === item.href
                    ? "rounded-sm border border-[#cc2e26] px-1.5 py-0.5 text-[#ff6a60] shadow-[0_0_12px_rgba(204,46,38,0.5)]"
                    : "text-[#e7edf9]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="rounded-lg border border-white/15 p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-[90%] max-w-[1600px] border border-white/10 px-5 py-4 glass-card lg:hidden"
        >
          <div className="grid gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/5 px-3 py-2 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
