"use client";

import Contact from "./Contact";
import CursorGlow from "./CursorGlow";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ParticlesBg from "./ParticlesBg";
import ThemeProvider from "./ThemeProvider";

type PageShellProps = {
  children: React.ReactNode;
  showContact?: boolean;
  backgroundMode?: "simple" | "interactive";
};

export default function PageShell({
  children,
  showContact = false,
  backgroundMode = "simple",
}: PageShellProps) {
  return (
    <ThemeProvider>
      <CursorGlow />
      <div className="relative min-h-screen overflow-hidden">
        <ParticlesBg mode={backgroundMode} />
        <Navbar />
        <main className="relative z-10 pt-24">{children}</main>
        {showContact ? <Contact /> : null}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
