"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex w-full items-center justify-between border border-white/10 bg-[#030b1f]/88 px-4 py-1.5 backdrop-blur-xl shadow-[0_4px_32px_rgba(26,82,232,0.12)] md:px-8 md:py-2 xl:px-12">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <Image
            src="/assets/dts%20logo.png"
            alt="DTS Inc logo"
            width={120}
            height={48}
            priority
            className="h-auto w-[100px] md:w-[120px]"
          />
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[14px] font-medium transition-colors hover:text-white ${
                pathname === item.href
                  ? "rounded-sm border border-[#cc2e26] px-1.5 py-0.5 text-[#ff6a60] shadow-[0_0_12px_rgba(204,46,38,0.5)]"
                  : "text-[#e7edf9]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-white/15 p-1.5"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full border border-white/10 px-5 py-4 glass-card lg:hidden"
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
