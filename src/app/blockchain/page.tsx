import type { Metadata } from "next";
import BlockchainLab from "@/components/BlockchainLab";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Blockchain R&D Lab | DTS Inc",
  description:
    "DTS Blockchain R&D Lab builds secure decentralized systems, AI trading intelligence, and next-generation blockchain infrastructure.",
};

export default function BlockchainPage() {
  return (
    <PageShell backgroundMode="interactive">
      <BlockchainLab />
    </PageShell>
  );
}
