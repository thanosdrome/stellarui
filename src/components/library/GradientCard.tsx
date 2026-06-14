"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Theme palette — pulled from the StellarUI tokens in tailwind.css so the
 * gradient stays consistent with the rest of the design system. Ordered as a
 * warm dark -> light ramp so the sweep reads with depth.
 *   --accent-orange-dark   #a05a00
 *   (#cd5a25 primary accent)
 *   --accent-orange-light  #C26B3A
 *   --glow-light           #E0A784
 */
const THEME_GRADIENT_COLORS = ["#242424", "#2b2b2b", "#2b2b2b", "#201813"] as const;

interface GradientCardProps {
  children?: React.ReactNode;
  className?: string;
  /** Override the four gradient colors. Defaults to the theme palette. */
  colors?: readonly [string, string, string, string];
  /** Seconds for one full 360° sweep. */
  duration?: number;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  className,
  colors = THEME_GRADIENT_COLORS,
  duration = 8,
}) => {
  const [c1, c2, c3, c4] = colors;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-neutral-800/60 bg-[#0a0a0a]",
        className,
      )}
    >
      {/* Free-form mesh gradient — four soft radial blobs (one per colour) that
          drift around the corners via the auroraDrift keyframe (see tailwind.css).
          The loop's first/last frame match, so it flows continuously with no jump,
          and the radial + blurred blobs read as organic colour, not a hard line. */}
      <div
        className="absolute -inset-8 blur-2xl"
        style={{
          backgroundColor: c1,
          backgroundImage: `
            radial-gradient(circle at center, ${c1} 0%, transparent 55%),
            radial-gradient(circle at center, ${c2} 0%, transparent 55%),
            radial-gradient(circle at center, ${c3} 0%, transparent 55%),
            radial-gradient(circle at center, ${c4} 0%, transparent 55%)
          `,
          backgroundSize: "200% 200%",
          backgroundRepeat: "no-repeat",
          animation: `auroraDrift ${duration}s linear infinite`,
        }}
      />

      {/* Legibility scrim so content stays readable over the bright gradient. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
};

export const GradientCardExample: React.FC = () => (
  <GradientCard className="h-64 w-80">
    <div className="flex h-full flex-col justify-end p-6">
      <h3 className="text-lg font-semibold text-white">Gradient Card</h3>
      <p className="mt-1 text-sm leading-relaxed text-neutral-100/80">
        A continuously sweeping gradient built from the StellarUI theme palette.
      </p>
    </div>
  </GradientCard>
);

export default GradientCard;
