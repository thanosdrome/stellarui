"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface XRayCardProps {
  /** The cover image shown normally. */
  baseSrc: string;
  /** The "inside" image revealed under the brush. */
  revealSrc: string;
  /** Brush width in px. */
  radius?: number;
  /** Show CRT-style scanlines over the reveal. */
  scanlines?: boolean;
  /** Brushy, path-tracing reveal. Falls back to a plain circle when false. */
  liquid?: boolean;
  /** Edge ripple amount in px (turbulence = bristle texture). */
  wobble?: number;
  /** Seconds the paint holds before it begins drying after the cursor leaves. */
  healDelay?: number;
  /** Trail length — how long wet paint lingers behind the brush. */
  lag?: number;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

type Pt = { x: number; y: number; t: number };

const POOL = 72; // max soft dabs that make up the stroke

/**
 * X-ray hover with a paintbrush reveal. The stroke is a trail of soft dabs that
 * trace the cursor's path; a goo filter fuses them into one smooth brush, and
 * each dab shrinks as it ages so the tail tapers and dries gradually (smooth
 * heal) instead of clipping off. Points are interpolated so fast sweeps stay
 * continuous, and turbulence gives the edge a bristly feel.
 */
export const XRayCard: React.FC<XRayCardProps> = ({
  baseSrc,
  revealSrc,
  radius = 130,
  scanlines = true,
  liquid = true,
  wobble = 10,
  healDelay = 0.2,
  lag = 1,
  alt = "",
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const pointsRef = useRef<Pt[]>([]);
  const lastRawRef = useRef<{ x: number; y: number } | null>(null);
  const hoveringRef = useRef(false);
  const leaveAtRef = useRef(0);

  const uid = useId().replace(/:/g, "");
  const gooId = `goo-${uid}`;
  const liquidId = `liquid-${uid}`;
  const maskId = `mask-${uid}`;
  const scanId = `scan-${uid}`;

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const useBrush = liquid && !reduced;

  const dab = radius * 0.5; // dab radius
  const spacing = Math.max(2, dab * 0.5); // keep dabs overlapping
  const life = 380 * Math.max(0.25, lag); // ms a dab stays wet

  // Imperative draw loop — keeps the per-frame work off React state.
  useEffect(() => {
    if (!useBrush) return;
    let running = true;
    const draw = () => {
      if (!running) return;
      const now = performance.now();

      // healDelay holds the paint, then aging resumes from the leave moment.
      let effNow = now;
      if (!hoveringRef.current) {
        const idle = now - leaveAtRef.current;
        const hold = healDelay * 1000;
        effNow = idle < hold ? leaveAtRef.current : now - hold;
      }

      // Drop fully-dried dabs, cap to the pool size.
      let pts = pointsRef.current.filter((p) => effNow - p.t < life);
      if (pts.length > POOL) pts = pts.slice(pts.length - POOL);
      pointsRef.current = pts;

      for (let i = 0; i < POOL; i++) {
        const c = circleRefs.current[i];
        if (!c) continue;
        const p = pts[i];
        if (!p) {
          c.setAttribute("r", "0");
          continue;
        }
        const ageF = Math.max(0, 1 - (effNow - p.t) / life); // 1 fresh -> 0 dry
        const r = dab * ageF * ageF; // ease-in taper toward the tail
        c.setAttribute("cx", p.x.toFixed(1));
        c.setAttribute("cy", p.y.toFixed(1));
        c.setAttribute("r", r.toFixed(1));
      }
      requestAnimationFrame(draw);
    };
    const id = requestAnimationFrame(draw);
    return () => {
      running = false;
      cancelAnimationFrame(id);
    };
  }, [useBrush, dab, life, healDelay]);

  const addPoint = (px: number, py: number) => {
    const t = performance.now();
    const last = lastRawRef.current;
    if (last) {
      // Interpolate so fast sweeps don't leave gaps between dabs.
      const dx = px - last.x;
      const dy = py - last.y;
      const dist = Math.hypot(dx, dy);
      const steps = Math.floor(dist / spacing);
      for (let s = 1; s <= steps; s++) {
        const f = s / (steps + 1);
        pointsRef.current.push({ x: last.x + dx * f, y: last.y + dy * f, t });
      }
    }
    pointsRef.current.push({ x: px, y: py, t });
    lastRawRef.current = { x: px, y: py };
  };

  const setFromEvent = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    addPoint(px, py);
    x.set(px);
    y.set(py);
  };

  const handleEnter = (e: React.MouseEvent) => {
    hoveringRef.current = true;
    lastRawRef.current = null;
    setFromEvent(e);
    animate(active, 1, { duration: 0.4, ease: "easeOut" });
  };
  const handleMove = (e: React.MouseEvent) => setFromEvent(e);
  const handleLeave = () => {
    hoveringRef.current = false;
    leaveAtRef.current = performance.now();
    lastRawRef.current = null;
    animate(active, 0, { duration: 0.6, ease: "easeInOut", delay: healDelay });
  };

  // Fallback circle (reduced motion / liquid off).
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const active = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 450, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 450, damping: 40, mass: 0.4 });
  const sr = useSpring(
    useTransform(active, (a) => a * radius),
    {
      stiffness: 120,
      damping: 18,
      mass: 1,
    },
  );
  const circleMask = useMotionTemplate`radial-gradient(${sr}px circle at ${sx}px ${sy}px, #000 0%, #000 35%, transparent 95%)`;

  return (
    <div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("group relative overflow-hidden rounded-2xl", className)}
    >
      {/* Base / cover image */}
      <img
        src={baseSrc}
        alt={alt}
        draggable={false}
        className="block h-full w-full select-none object-cover"
      />

      {useBrush ? (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
          focusable="false"
        >
          <defs>
            {/* Fuse the dabs into one smooth brush. */}
            <filter id={gooId}>
              <feGaussianBlur in="SourceGraphic" stdDeviation={radius * 0.18} result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
                result="goo"
              />
            </filter>
            {/* Bristly, organic edge. */}
            <filter id={liquidId} x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.013"
                numOctaves={2}
                seed={11}
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="16s"
                  values="0.011;0.017;0.013;0.011"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={wobble}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>

            <mask id={maskId}>
              <g filter={`url(#${liquidId})`}>
                <g filter={`url(#${gooId})`}>
                  {Array.from({ length: POOL }).map((_, i) => (
                    <circle
                      key={i}
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                      cx={-9999}
                      cy={-9999}
                      r={0}
                      fill="#fff"
                    />
                  ))}
                </g>
              </g>
            </mask>

            {scanlines && (
              <pattern id={scanId} width="3" height="3" patternUnits="userSpaceOnUse">
                <rect width="3" height="1" fill="rgba(255,255,255,0.18)" />
              </pattern>
            )}
          </defs>

          {/* Reveal image, clipped to the brush stroke */}
          <image
            href={revealSrc}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask={`url(#${maskId})`}
          />

          {scanlines && (
            <rect
              width="100%"
              height="100%"
              fill={`url(#${scanId})`}
              mask={`url(#${maskId})`}
              opacity={0.4}
              style={{ mixBlendMode: "overlay" }}
            />
          )}
        </svg>
      ) : (
        <motion.img
          src={revealSrc}
          alt=""
          aria-hidden
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
          style={{
            WebkitMaskImage: circleMask,
            maskImage: circleMask,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      )}

      {children}
    </div>
  );
};

export const XRayCardExample: React.FC = () => (
  <XRayCard
    baseSrc="/heroimage1.png"
    revealSrc="/heroImage2.png"
    radius={120}
    alt="X-ray hover demo"
    className="h-80 w-full border border-neutral-800"
  >
    <div className="pointer-events-none absolute bottom-0 left-0 p-5">
      <p className="text-sm font-semibold text-white drop-shadow">Brush to reveal</p>
      <p className="text-xs text-neutral-300 drop-shadow">Sweep your cursor like a paintbrush.</p>
    </div>
  </XRayCard>
);

export default XRayCard;
