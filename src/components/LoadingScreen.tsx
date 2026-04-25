"use client";

import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  show: boolean;
};

export default function LoadingScreen({ show }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[80] grid place-items-center bg-[#060d1f]"
        >
          <div className="relative flex items-center gap-3 rounded-full px-8 py-4 glass-card animated-border">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="h-10 w-10 rounded-full border-2 border-[#b33a32] border-t-transparent"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#b2bfd8]">Loading</p>
              <p className="text-xl font-semibold text-white">DTS Inc</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
