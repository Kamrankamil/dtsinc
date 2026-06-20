"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef({ x: -120, y: -120 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const paint = () => {
      const node = glowRef.current;
      if (!node) return;
      node.style.left = `${pointerRef.current.x}px`;
      node.style.top = `${pointerRef.current.y}px`;
      rafRef.current = null;
    };

    const onMove = (event: MouseEvent) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(paint);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed z-[2] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{
        left: -120,
        top: -120,
        background:
          "radial-gradient(circle, rgba(179,58,50,0.22) 0%, rgba(179,58,50,0.02) 72%)",
      }}
    />
  );
}
