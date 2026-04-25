"use client";

import { useEffect, useRef } from "react";

type ParticlesBgProps = {
  mode?: "simple" | "interactive";
};

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  /** 0 = blue-white, 1 = red accent, 2 = teal */
  color: 0 | 1 | 2;
  pulsePhase: number;
};

type Mote = {
  /** index of start node */
  from: number;
  /** index of end node */
  to: number;
  /** 0..1 progress along the link */
  t: number;
  speed: number;
  alpha: number;
};

type ClickPulse = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
};

const NODE_COUNT = 72;
const LINK_DISTANCE = 160;
const MOTE_COUNT = 30;

export default function ParticlesBg({ mode = "simple" }: ParticlesBgProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (mode !== "interactive") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes: NodePoint[] = [];
    const motes: Mote[] = [];
    const clickPulses: ClickPulse[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;
    let tick = 0;

    // Palette
    const COLORS = [
      // blue-white
      { dot: "rgba(180,200,255,", link: "rgba(140,170,255," },
      // red accent
      { dot: "rgba(220,70,60,",  link: "rgba(200,60,50," },
      // teal/cyan
      { dot: "rgba(80,210,200,", link: "rgba(60,190,180," },
    ];

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const colorIdx = i < 3 ? (i as 0|1|2) : ([0, 0, 0, 0, 1, 2][Math.floor(Math.random() * 6)] as 0|1|2);
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          radius: 1.6 + Math.random() * 1.6,
          color: colorIdx,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const initMotes = () => {
      motes.length = 0;
      for (let i = 0; i < MOTE_COUNT; i++) {
        motes.push({
          from: Math.floor(Math.random() * NODE_COUNT),
          to: Math.floor(Math.random() * NODE_COUNT),
          t: Math.random(),
          speed: 0.003 + Math.random() * 0.005,
          alpha: 0.5 + Math.random() * 0.5,
        });
      }
    };

    const onClick = (e: MouseEvent) => {
      clickPulses.push({ x: e.clientX, y: e.clientY, radius: 0, alpha: 0.9 });
      // spawn a new mote from the nearest node
      let best = 0;
      let bestD = Infinity;
      nodes.forEach((n, i) => {
        const d = Math.hypot(n.x - e.clientX, n.y - e.clientY);
        if (d < bestD) { bestD = d; best = i; }
      });
      const to = (best + 1 + Math.floor(Math.random() * (NODE_COUNT - 1))) % NODE_COUNT;
      motes.push({ from: best, to, t: 0, speed: 0.012, alpha: 1 });
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    const drawHexGrid = () => {
      const size = 90;
      const cols = Math.ceil(width / (size * 1.5)) + 2;
      const rows = Math.ceil(height / (size * Math.sqrt(3))) + 2;
      ctx.strokeStyle = "rgba(100,130,200,0.045)";
      ctx.lineWidth = 0.8;
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const cx2 = c * size * 1.5;
          const cy2 = r * size * Math.sqrt(3) + (c % 2 === 0 ? 0 : size * Math.sqrt(3) * 0.5);
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const angle = (Math.PI / 180) * (60 * k - 30);
            const px = cx2 + size * Math.cos(angle);
            const py = cy2 + size * Math.sin(angle);
            if (k === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    const drawLinks = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const t = 1 - dist / LINK_DISTANCE;
            // use the dominant color of the two endpoints
            const ci = a.color !== 0 ? a.color : b.color;
            const palette = COLORS[ci];
            ctx.strokeStyle = `${palette.link}${(t * 0.22).toFixed(3)})`;
            ctx.lineWidth = t * 1.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawNodes = () => {
      tick++;
      for (const n of nodes) {
        // move
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const pulseMul = 0.85 + 0.15 * Math.sin(tick * 0.025 + n.pulsePhase);
        const r = n.radius * pulseMul;
        const palette = COLORS[n.color];

        // outer glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
        grd.addColorStop(0, `${palette.dot}0.22)`);
        grd.addColorStop(1, `${palette.dot}0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
        ctx.fill();

        // core dot
        ctx.fillStyle = `${palette.dot}0.9)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawMotes = () => {
      for (let i = motes.length - 1; i >= 0; i--) {
        const m = motes[i];
        const a = nodes[m.from];
        const b = nodes[m.to];
        if (!a || !b) { motes.splice(i, 1); continue; }

        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist > LINK_DISTANCE * 1.3) {
          // re-route to a closer node
          let best = m.to;
          let bestD = Infinity;
          nodes.forEach((n, idx) => {
            const d = Math.hypot(a.x - n.x, a.y - n.y);
            if (idx !== m.from && d < bestD && d < LINK_DISTANCE) { bestD = d; best = idx; }
          });
          m.to = best;
          m.t = 0;
          continue;
        }

        m.t += m.speed;
        if (m.t >= 1) {
          m.from = m.to;
          m.to = (m.to + 1 + Math.floor(Math.random() * (NODE_COUNT - 1))) % NODE_COUNT;
          m.t = 0;
          m.speed = 0.003 + Math.random() * 0.006;
        }

        const mx = a.x + (b.x - a.x) * m.t;
        const my = a.y + (b.y - a.y) * m.t;

        const ci = a.color !== 0 ? a.color : b.color;
        const palette = COLORS[ci];

        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 7);
        grd.addColorStop(0, `${palette.dot}${m.alpha})`);
        grd.addColorStop(1, `${palette.dot}0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(mx, my, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${m.alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(mx, my, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawMouseAura = () => {
      if (!mouse.active) return;
      // highlight nearby nodes
      for (const n of nodes) {
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (d < 160) {
          const t = 1 - d / 160;
          ctx.strokeStyle = `rgba(255,200,200,${t * 0.5})`;
          ctx.lineWidth = t;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      // cursor glow ring
      const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 90);
      grd.addColorStop(0, "rgba(200,80,70,0.14)");
      grd.addColorStop(0.5, "rgba(140,160,255,0.07)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 90, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawClickPulses = () => {
      for (let i = clickPulses.length - 1; i >= 0; i--) {
        const p = clickPulses[i];
        p.radius += 4;
        p.alpha -= 0.018;

        // concentric rings
        for (let r = 0; r < 3; r++) {
          const ringRadius = p.radius - r * 14;
          if (ringRadius <= 0) continue;
          ctx.strokeStyle = `rgba(200,70,60,${p.alpha * (1 - r * 0.3)})`;
          ctx.lineWidth = 1.5 - r * 0.4;
          ctx.beginPath();
          ctx.arc(p.x, p.y, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
        }

        if (p.alpha <= 0) clickPulses.splice(i, 1);
      }
    };

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);
      drawHexGrid();
      drawLinks();
      drawMotes();
      drawNodes();
      drawMouseAura();
      drawClickPulses();
      raf = requestAnimationFrame(render);
    };

    setSize();
    initNodes();
    initMotes();
    render();

    const onResize = () => { setSize(); initNodes(); };

    window.addEventListener("resize", onResize);
    window.addEventListener("click", onClick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [mode]);

  if (mode === "simple") {
    return (
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 32 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white/35"
            style={{
              left: `${(index * 31) % 100}%`,
              top: `${(index * 17) % 100}%`,
              animation: `floaty ${4 + (index % 6)}s ease-in-out infinite`,
              animationDelay: `${index * 0.12}s`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="h-full w-full opacity-75" />
    </div>
  );
}
