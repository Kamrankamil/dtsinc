import type { Metadata } from "next";
import { Exo_2, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dts-inc.example.com"),
  title: "DTS Inc | AI, Semantic Intelligence & Blockchain R&D",
  description:
    "DTS Inc (Data Transmission System) delivers enterprise AI, semantic web, blockchain optimization, smart contracts, and global consultancy solutions.",
  keywords: [
    "DTS Inc",
    "Blockchain Development",
    "Semantic Web",
    "AI Prediction",
    "Smart Contracts",
    "NFT Marketplace",
    "Enterprise Consultancy",
  ],
  openGraph: {
    title: "DTS Inc | Advanced AI + Blockchain Solutions",
    description:
      "Explore DTS research labs, blockchain optimization, semantic intelligence products, and enterprise consulting expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${exo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
