import React, { useMemo } from "react";

// Boxy layout: square hub in the center, nodes stacked in two columns,
// joined by right-angle (Manhattan) traces like a schematic.
const HUB = { x: 380, y: 235, size: 104 };
const COL_L = 104;
const COL_R = 656;
const BUS_L = 250;
const BUS_R = 510;
const ROWS = [60, 177, 293, 410];
const GAP = 48; // gap between a label and where its trace begins

const LABELS = [
  "Components",
  "React",
  "TypeScript",
  "Tailwind",
  "Animations",
  "Accessible",
  "Dark Mode",
  "Zero-Config",
];

interface MindNode {
  i: number;
  label: string;
  x: number;
  y: number;
  path: string;
  left: boolean;
}

export const MindMap: React.FC = () => {
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const nodes: MindNode[] = useMemo(() => {
    const half = HUB.size / 2;
    return LABELS.map((label, i) => {
      const left = i < 4;
      const row = i % 4;
      const x = left ? COL_L : COL_R;
      const y = ROWS[row];
      const start = left ? x + GAP : x - GAP;
      const bus = left ? BUS_L : BUS_R;
      const hubEdge = left ? HUB.x - half : HUB.x + half;
      // horizontal out of the label -> vertical bus rail -> horizontal into the hub
      const path = `M ${start} ${y} H ${bus} V ${HUB.y} H ${hubEdge}`;
      return { i, label, x, y, path, left };
    });
  }, []);

  const half = HUB.size / 2;

  return (
    <div className="relative flex h-full min-h-[340px] w-full items-center justify-center">
      <svg
        viewBox="0 0 760 470"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        role="img"
        aria-label="StellarUI feature mind map"
      >
        <defs>
          <linearGradient id="mm-hub" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3a2418" />
            <stop offset="100%" stopColor="#141414" />
          </linearGradient>
          <radialGradient id="mm-ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cd5a25" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#cd5a25" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mm-pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f7a86a" stopOpacity="1" />
            <stop offset="60%" stopColor="#cd5a25" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#cd5a25" stopOpacity="0" />
          </radialGradient>
          <filter id="mm-glow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Ambient glow behind the hub */}
        <rect x={HUB.x - 150} y={HUB.y - 150} width={300} height={300} fill="url(#mm-ambient)" />

        {/* Connectors (base, right-angle traces) */}
        {nodes.map((n) => (
          <path
            key={`base-${n.i}`}
            id={`mm-path-${n.i}`}
            d={n.path}
            fill="none"
            stroke="rgba(205,90,37,0.18)"
            strokeWidth={1.25}
            strokeLinejoin="miter"
          />
        ))}

        {/* Junction dots where each trace leaves its label */}
        {nodes.map((n) => (
          <rect
            key={`dot-${n.i}`}
            x={(n.left ? n.x + GAP : n.x - GAP) - 2}
            y={n.y - 2}
            width={4}
            height={4}
            fill="#cd5a25"
          />
        ))}

        {/* Flowing light pulses travelling node -> hub (native SMIL, no re-renders) */}
        {!reduced &&
          nodes.map((n) => (
            <circle key={`pulse-${n.i}`} r={3.5} fill="url(#mm-pulse)" filter="url(#mm-glow)">
              <animateMotion
                dur={`${(2.6 + (n.i % 3) * 0.45).toFixed(2)}s`}
                begin={`${(n.i * 0.32).toFixed(2)}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#mm-path-${n.i}`} />
              </animateMotion>
            </circle>
          ))}

        {/* Node labels */}
        {nodes.map((n) => (
          <text
            key={`node-${n.i}`}
            x={n.x}
            y={n.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={13}
            fontWeight={500}
            fill="#d4d4d8"
            className="select-none"
          >
            {n.label}
          </text>
        ))}

        {/* Hub: expanding square pulse + core */}
        {!reduced && (
          <rect
            x={HUB.x - half}
            y={HUB.y - half}
            width={HUB.size}
            height={HUB.size}
            rx={18}
            fill="none"
            stroke="#cd5a25"
            strokeWidth={1.5}
          >
            <animate
              attributeName="x"
              values={`${HUB.x - half};${HUB.x - half - 20}`}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values={`${HUB.y - half};${HUB.y - half - 20}`}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values={`${HUB.size};${HUB.size + 40}`}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              values={`${HUB.size};${HUB.size + 40}`}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.45;0" dur="3s" repeatCount="indefinite" />
          </rect>
        )}
        <rect
          x={HUB.x - half}
          y={HUB.y - half}
          width={HUB.size}
          height={HUB.size}
          rx={18}
          fill="url(#mm-hub)"
          stroke="rgba(205,90,37,0.55)"
          strokeWidth={1.5}
        />
        <image href="/stellar.png" x={HUB.x - 14} y={HUB.y - 26} width={28} height={28} />
        <text
          x={HUB.x}
          y={HUB.y + 18}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={13}
          fontWeight={700}
          fill="#ffffff"
          className="select-none"
        >
          StellarUI
        </text>
      </svg>
    </div>
  );
};

export const MindMapExample = () => (
  <div className="space-y-4">
    <div>
      <h3 className="mb-1 text-lg font-semibold text-white">Feature mind map</h3>
      <p className="max-w-[60ch] text-sm text-neutral-400">
        A schematic graph with light pulses flowing along each trace into the StellarUI hub.
      </p>
    </div>
    <div className="h-96 overflow-hidden rounded-xl border border-neutral-800 bg-[#0b0b0b]">
      <MindMap />
    </div>
  </div>
);
