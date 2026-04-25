"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -120, y: -120 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[2] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{
        left: position.x,
        top: position.y,
        background:
          "radial-gradient(circle, rgba(179,58,50,0.22) 0%, rgba(179,58,50,0.02) 72%)",
      }}
    />
  );
}
