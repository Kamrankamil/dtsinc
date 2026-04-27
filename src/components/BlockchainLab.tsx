"use client";

import { motion } from "framer-motion";
import BlockchainHero from "./blockchain/BlockchainHero";
import CollaborationCTA from "./blockchain/CollaborationCTA";
import FeaturedInnovations from "./blockchain/FeaturedInnovations";
import InnovationGrid from "./blockchain/InnovationGrid";
import OptimizationDashboard from "./blockchain/OptimizationDashboard";
import ResearchFocus from "./blockchain/ResearchFocus";
import ResearchFooterPanel from "./blockchain/ResearchFooterPanel";
import Timeline from "./blockchain/Timeline";

export default function BlockchainLab() {
  return (
    <section id="blockchain" className="relative py-6 md:py-10">
      <div className="section-shell space-y-8">
        <BlockchainHero />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <InnovationGrid />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Timeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <OptimizationDashboard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <ResearchFocus />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <FeaturedInnovations />
        </motion.div>

        <CollaborationCTA />
        <ResearchFooterPanel />
      </div>
    </section>
  );
}
