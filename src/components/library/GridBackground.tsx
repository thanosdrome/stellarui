'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type Cell = {
  phase: number;
  speed: number;
  baseLift: number;
  // blink animation state (replaces gsap tweens)
  blinkStart: number; // ms timestamp, 0 = idle
  blinkPeak: number; // 0..1 target brightness
  blinkAttack: number; // ms
  blinkDecay: number; // ms
};

interface GridBackgroundProps {
  /** Extra classes for the wrapper. It fills its nearest positioned ancestor. */
  className?: string;
}

export default function GridBackground({ className }: GridBackgroundProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- grid config (sizes at 100% zoom; rescaled against zoom so the
    // grid keeps the same on-screen size when the browser zooms) ---
    const BASE_CELL = 10; // spacing between dots
    const BASE_DOT = 3; // square size in px
    const BASE_R = 18, BASE_G = 18, BASE_B = 18; // dim resting square color
    const ACCENT = { r: 160, g: 160, b: 160 }; // neutral gray accent

    const initialDpr = window.devicePixelRatio || 1;
    let CELL = BASE_CELL;
    let DOT = BASE_DOT;

    let cols = 0, rows = 0, w = 0, h = 0, originX = 0, originY = 0;
    let cells: Cell[] = [];

    function resize() {
      if (!wrapper || !canvas || !ctx) return;
      const rawDpr = window.devicePixelRatio || 1;
      const zoom = rawDpr / initialDpr; // browser zoom relative to load
      CELL = BASE_CELL / zoom;
      DOT = BASE_DOT / zoom;

      const dpr = Math.min(rawDpr, 2);
      // Size against the wrapper (its positioned ancestor), not the viewport,
      // so the background works contained in a card or full-screen alike.
      w = wrapper.clientWidth;
      h = wrapper.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / CELL) + 1;
      rows = Math.ceil(h / CELL) + 1;
      originX = (w - (cols - 1) * CELL) / 2;
      originY = (h - (rows - 1) * CELL) / 2;

      cells = new Array(cols * rows);
      for (let i = 0; i < cells.length; i++) {
        cells[i] = {
          phase: Math.random() * Math.PI * 2,
          speed: 0.15 + Math.random() * 0.5,
          baseLift: Math.random() * 0.12,
          blinkStart: 0,
          blinkPeak: 0,
          blinkAttack: 0,
          blinkDecay: 0,
        };
      }
    }

    // Occasionally fire a bright independent "blink" on a random cell.
    let blinkTimer: ReturnType<typeof setTimeout>;
    function scheduleBlink() {
      const delay = prefersReduced ? 2500 : 120 + Math.random() * 500;
      blinkTimer = setTimeout(() => {
        const burst = prefersReduced ? 1 : 1 + Math.floor(Math.random() * 4);
        const now = performance.now();
        for (let b = 0; b < burst; b++) {
          const c = cells[(Math.random() * cells.length) | 0];
          if (!c) continue;
          c.blinkStart = now;
          c.blinkPeak = 0.8 + Math.random() * 0.2;
          c.blinkAttack = 180 + Math.random() * 150;
          c.blinkDecay = 600 + Math.random() * 900;
        }
        scheduleBlink();
      }, delay);
    }

    function flickAt(c: Cell, now: number) {
      if (!c.blinkStart) return 0;
      const elapsed = now - c.blinkStart;
      if (elapsed < c.blinkAttack) {
        const p = elapsed / c.blinkAttack;
        return c.blinkPeak * (1 - (1 - p) * (1 - p)); // ease-out
      }
      const p = (elapsed - c.blinkAttack) / c.blinkDecay;
      if (p >= 1) {
        c.blinkStart = 0;
        return 0;
      }
      return c.blinkPeak * (1 - p * p); // ease-in toward 0
    }

    let t = 0;
    let raf = 0;
    function draw() {
      if (!ctx) return;
      t += 0.016;
      const now = performance.now();
      ctx.fillStyle = '#0b0b0b';
      ctx.fillRect(0, 0, w, h);

      const half = DOT / 2;

      for (let y = 0; y < rows; y++) {
        const py = originY + y * CELL;
        for (let x = 0; x < cols; x++) {
          const c = cells[y * cols + x];
          const px = originX + x * CELL;

          // ambient breathing (very subtle)
          const breathe = prefersReduced
            ? 0.04
            : (Math.sin(t * c.speed + c.phase) * 0.5 + 0.5) * 0.1;

          const intensity = Math.min(1, c.baseLift + breathe + flickAt(c, now));

          const r = BASE_R + (ACCENT.r - BASE_R) * intensity;
          const g = BASE_G + (ACCENT.g - BASE_G) * intensity;
          const b = BASE_B + (ACCENT.b - BASE_B) * intensity;
          ctx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
          ctx.fillRect(px - half, py - half, DOT, DOT);
        }
      }
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);

    resize();
    scheduleBlink();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(blinkTimer);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={cn('absolute inset-0 overflow-hidden', className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* radial vignette + faint center lift */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(13,13,13,1) 100%), radial-gradient(120% 70% at 50% 50%, rgba(24,24,24,0.35) 0%, rgba(15,15,15,0) 55%), radial-gradient(140% 120% at 50% 50%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
