"use client";

import { useEffect, useRef } from "react";

type PlexusBgProps = {
  /** Opacity of the whole canvas layer (0-1). Defaults to 0.55 */
  opacity?: number;
  /** Node tint: "blue" (default) | "red" | "purple" */
  tint?: "blue" | "red" | "purple";
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  brightness: number;
  phase: number;
};

const NODE_COUNT = 90;
const LINK_DIST = 170;

const TINTS = {
  blue:   { node: "210,228,255", line: "180,210,255" },
  red:    { node: "240,180,170", line: "220,110,100" },
  purple: { node: "220,210,255", line: "180,160,255" },
};

export default function PlexusBg({ opacity = 0.55, tint = "blue" }: PlexusBgProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const palette = TINTS[tint];
    let nodes: Node[] = [];
    let raf = 0;
    let tick = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      w = rect.width || window.innerWidth;
      h = rect.height || window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      init();
    };

    const init = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: 1.2 + Math.random() * 2.2,
          brightness: 0.45 + Math.random() * 0.55,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, w, h);

      // --- draw links first ---
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const t = 1 - dist / LINK_DIST;
            // occasional triangle fill (when 3 nodes form a tight cluster)
            ctx.strokeStyle = `rgba(${palette.line},${(t * t * 0.35).toFixed(3)})`;
            ctx.lineWidth = t * 1.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // --- draw polygon fills for close triplets (every 3rd frame for perf) ---
      if (tick % 3 === 0) {
        for (let i = 0; i < nodes.length; i++) {
          const a = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j];
            if (Math.hypot(a.x - b.x, a.y - b.y) > LINK_DIST * 0.65) continue;
            for (let k = j + 1; k < nodes.length; k++) {
              const c = nodes[k];
              if (
                Math.hypot(a.x - c.x, a.y - c.y) < LINK_DIST * 0.65 &&
                Math.hypot(b.x - c.x, b.y - c.y) < LINK_DIST * 0.65
              ) {
                ctx.fillStyle = `rgba(${palette.line},0.025)`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.lineTo(c.x, c.y);
                ctx.closePath();
                ctx.fill();
              }
            }
          }
        }
      }

      // --- draw nodes ---
      for (const n of nodes) {
        // move
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        const pulse = 0.8 + 0.2 * Math.sin(tick * 0.022 + n.phase);
        const r = n.r * pulse;
        const bright = n.brightness;

        // outer soft glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5.5);
        grd.addColorStop(0, `rgba(${palette.node},${(bright * 0.28).toFixed(3)})`);
        grd.addColorStop(1, `rgba(${palette.node},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 5.5, 0, Math.PI * 2);
        ctx.fill();

        // bright core
        ctx.fillStyle = `rgba(${palette.node},${bright.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        // specular highlight on larger nodes
        if (n.r > 2.5) {
          ctx.fillStyle = `rgba(255,255,255,${(bright * 0.7).toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(n.x - r * 0.25, n.y - r * 0.25, r * 0.35, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [tint]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
