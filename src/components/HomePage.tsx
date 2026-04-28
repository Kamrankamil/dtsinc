"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CursorGlow from "./CursorGlow";
import Footer from "./Footer";
import Hero3D from "./Hero3D";
import HomeSummary from "./HomeSummary";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import ParticlesBg from "./ParticlesBg";
import ThemeProvider from "./ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHydrated(true);
    const timer = window.setTimeout(() => setLoading(false), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 28, opacity: 0.55 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );
    });

    const counterNodes = gsap.utils.toArray<HTMLElement>(".counter");
    counterNodes.forEach((node) => {
      const finalValue = Number(node.dataset.counter || "0");
      const suffix = node.dataset.suffix || "";
      const proxy = { value: 0 };

      gsap.to(proxy, {
        value: finalValue,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: node,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          node.textContent = `${Math.round(proxy.value)}${suffix}`;
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <LoadingScreen show={hydrated && loading} />
      <CursorGlow />
      <div className="relative min-h-screen overflow-hidden">
        <ParticlesBg />
        <Navbar />
        <main className="relative z-10">
          <Hero3D />
          <HomeSummary />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
