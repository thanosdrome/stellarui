import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

// Refined glass bevel: bright inner top edge, soft inner bottom, hairline
// border, and a grounded outer drop shadow.
const GLASS_BEVEL =
  "inset 0 1px 1px rgba(255,255,255,0.45), inset 0 -1px 1px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.08), 0 6px 20px rgba(0,0,0,0.35)";

const VARIANT: Record<NonNullable<LiquidGlassButtonProps["variant"]>, string> = {
  primary: "bg-white/[0.08] border-white/20 text-white",
  secondary: "bg-white/[0.04] border-white/10 text-neutral-100",
  accent: "bg-[#925c40]/25 border-[#cd5a25]/40 text-[#fce9dc]",
};

const SIZE: Record<NonNullable<LiquidGlassButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  // Pointer position within the button (px), tracked outside the render cycle.
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  // Specular intensity eased with a spring so it blooms in/out smoothly.
  const glow = useSpring(0, { stiffness: 260, damping: 28 });

  const handleMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(e.clientX - rect.left);
    py.set(e.clientY - rect.top);
  };

  // Cursor-following light reflection — the signature liquid-glass specular.
  const specular = useMotionTemplate`radial-gradient(120px circle at ${px}px ${py}px, rgba(255,255,255,0.45), rgba(255,255,255,0.08) 35%, transparent 60%)`;

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      onPointerMove={handleMove}
      onPointerEnter={() => glow.set(1)}
      onPointerLeave={() => glow.set(0)}
      onPointerDown={() => glow.set(1.6)}
      onPointerUp={() => glow.set(1)}
      whileHover={disabled ? undefined : { scale: 1.04, y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      style={{ boxShadow: GLASS_BEVEL }}
      className={`group relative isolate overflow-hidden rounded-full border font-medium backdrop-blur-xl backdrop-saturate-150 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT[variant]} ${SIZE[size]} ${className} `}
    >
      {/* Top gloss — a glossy reflection across the upper half */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-white/5 to-transparent" />

      {/* Cursor-tracking specular highlight */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ background: specular, opacity: glow }}
      />

      {/* Sheen sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-[150%] rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />

      <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">{children}</span>
    </motion.button>
  );
};

// Example usage component
export const LiquidGlassButtonExample = () => {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-white">Variants</h4>
        <div className="flex flex-wrap gap-4">
          <LiquidGlassButton variant="primary">Primary Glass</LiquidGlassButton>
          <LiquidGlassButton variant="secondary">Secondary Glass</LiquidGlassButton>
          <LiquidGlassButton variant="accent">Accent Glass</LiquidGlassButton>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-white">Sizes</h4>
        <div className="flex flex-wrap items-center gap-4">
          <LiquidGlassButton size="sm">Small</LiquidGlassButton>
          <LiquidGlassButton size="md">Medium</LiquidGlassButton>
          <LiquidGlassButton size="lg">Large</LiquidGlassButton>
        </div>
      </div>

      {/* States */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-white">States</h4>
        <div className="flex flex-wrap gap-4">
          <LiquidGlassButton onClick={() => console.log("Liquid glass clicked")}>
            Interactive
          </LiquidGlassButton>
          <LiquidGlassButton disabled>Disabled</LiquidGlassButton>
        </div>
      </div>

      {/* Featured Example */}
      <div className="text-center">
        <h4 className="mb-6 text-lg font-semibold text-white">Featured Example</h4>
        <LiquidGlassButton variant="primary" size="lg" onClick={() => console.log("Liquid glass")}>
          Liquid Glass
        </LiquidGlassButton>
      </div>
    </div>
  );
};
