"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type AnimatedCoinProps = {
  size?: number;
  delay?: number;
  className?: string;
};

export default function AnimatedCoin({
  size = 280,
  delay = 0,
  className = "",
}: AnimatedCoinProps) {
  const [coinSrc, setCoinSrc] = useState("/assets/blockchain%20animate.gif");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotateZ: [0, 2, 0, -2, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={coinSrc}
            alt="DTS animated coin"
            width={size}
            height={size}
            unoptimized
            priority
            onError={() => setCoinSrc("/assets/coin-fallback.svg")}
            className="drop-shadow-[0_14px_38px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(240,173,58,0.36),transparent_66%)] blur-xl" />
    </motion.div>
  );
}
