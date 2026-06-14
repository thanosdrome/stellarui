import React from "react";
import { FloatingDock, GridBackground, GradientCard } from "@/components/library";
import { MetalButton } from "@/components/ui/glass-button";

const HeroShowcase: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <main className="mt-[100px] px-6 pb-16 pt-20">
        <div className="mx-auto max-w-[1500px]">
          {/* Section header — left-aligned, not centered */}
          <div className="mb-12 max-w-xl">
            <span className="mb-3 block text-xs font-semibold tracking-wide text-[#cd5a25]">
              Showcase
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white">
              Built for real products
            </h2>
            <p className="text-base leading-relaxed text-neutral-400">
              Production-ready components you can drop into your project today. No configuration
              needed.
            </p>
          </div>

          {/* Bento Grid — scattered cards over crossing dashed lines, with negative space */}
          <div className="relative h-[920px]">
            {/* Dashed line overlay — full-bleed lines that cross each other end to end */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {/* vertical lines */}
              <div className="absolute bottom-0 left-[41.666%] top-0 border-l border-dashed border-neutral-700/60" />
              <div className="absolute bottom-0 left-[40.666%] top-0 border-l border-dashed border-neutral-700/60" />
              <div className="absolute bottom-0 left-[66.666%] top-0 border-l border-dashed border-neutral-700/60" />
              <div className="absolute bottom-0 left-[65.666%] top-0 border-l border-dashed border-neutral-700/60" />
              {/* horizontal lines */}
              <div className="absolute left-0 right-0 top-[25%] border-t border-dashed border-neutral-700/60" />
              <div className="absolute left-0 right-0 top-[26.666%] border-t border-dashed border-neutral-700/60" />
              <div className="absolute left-0 right-0 top-[50%] border-t border-dashed border-neutral-700/60" />
              <div className="absolute left-0 right-0 top-[51.666%] border-t border-dashed border-neutral-700/60" />
              <div className="absolute left-0 right-0 top-[75%] border-t border-dashed border-neutral-700/60" />
              <div className="absolute left-0 right-0 top-[76.666%] border-t border-dashed border-neutral-700/60" />
            </div>

            {/* Cards — explicitly placed so empty cells reveal the dashed grid */}
            <div className="relative z-10 grid h-full grid-cols-12 grid-rows-8 gap-4">
              {/* Hero image 1 — large top Left, full image visibility */}
              <div className="bg-blacks group flex flex-col overflow-hidden rounded-2xl bg-black [grid-column:1/8] [grid-row:1/5]">
                <div className="px-5 pb-3 pt-5">
                  <p className="text-sm font-semibold text-white">All-in-One Crypto Companion</p>
                  <p className="mt-1 text-xs text-neutral-400">
                    Production-ready hero sections — copy, paste, ship.
                  </p>
                </div>
                <div className="flex-1 overflow-hidden">
                  <img
                    src="/heroimage1.png"
                    alt="All-in-one crypto companion"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Sign-up form on Gradient Card — top right */}
              <div className="[grid-column:8/13] [grid-row:1/5]">
                <div className="px-5 pb-3 pt-5">
                  <p className="text-sm font-semibold text-white">Signup form made elegant</p>
                  <p className="mt-1 text-xs text-neutral-400">Production-ready form</p>
                </div>
                <GradientCard className="h-[85%] w-[85%]" duration={10}>
                  <div className="flex h-full flex-col items-center justify-center px-5 py-6">
                    <div className="w-[95%]">
                      <h3 className="mb-1 text-lg font-semibold text-white">Create your account</h3>
                      <p className="mb-5 text-xs text-neutral-200/80">
                        Start building with StellarUI in seconds.
                      </p>
                      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-neutral-200">
                              First name
                            </label>
                            <input
                              type="text"
                              placeholder="Christian"
                              className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-neutral-400 backdrop-blur-sm transition-colors focus:border-[#cd5a25] focus:outline-none focus:ring-1 focus:ring-[#cd5a25]"
                            />
                          </div>
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-neutral-200">
                              Last name
                            </label>
                            <input
                              type="text"
                              placeholder="Bale"
                              className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-neutral-400 backdrop-blur-sm transition-colors focus:border-[#cd5a25] focus:outline-none focus:ring-1 focus:ring-[#cd5a25]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-neutral-200">
                            Email address
                          </label>
                          <input
                            type="email"
                            placeholder="christian@stellarui.com"
                            className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-neutral-400 backdrop-blur-sm transition-colors focus:border-[#cd5a25] focus:outline-none focus:ring-1 focus:ring-[#cd5a25]"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-neutral-200">
                            Password
                          </label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-neutral-400 backdrop-blur-sm transition-colors focus:border-[#cd5a25] focus:outline-none focus:ring-1 focus:ring-[#cd5a25]"
                          />
                        </div>
                        <button
                          type="submit"
                          className="mt-1 w-full rounded-lg bg-[#7D3716] py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                          Sign Up &rarr;
                        </button>
                      </form>
                    </div>
                  </div>
                </GradientCard>
              </div>
              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl p-5 [grid-column:1/6] [grid-row:5/7]">
                <GridBackground />
                <MetalButton className="relative z-10 text-neutral-800">Metal</MetalButton>
              </div>
              {/* Floating Dock */}
              <div className="relative flex flex-col overflow-hidden rounded-2xl p-5 [grid-column:1/6] [grid-row:7/9]">
                <p className="relative z-10 mb-3 text-xs font-medium text-neutral-500">
                  Floating Dock
                </p>
                <div className="relative z-10 flex-1">
                  <FloatingDock position="bottom" />
                </div>
              </div>
              {/* Hero image 2 — wide bottom right, full image visibility */}
              <div className="group overflow-hidden rounded-2xl bg-black [grid-column:6/13] [grid-row:5/9]">
                <div className="w-1/3 shrink-0 justify-center px-5 py-5">
                  <p className="text-sm font-semibold text-white">Features &amp; Benefits</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                    Full landing-page layouts assembled entirely from StellarUI primitives.
                  </p>
                </div>
                <div className="flex-1 overflow-hidden">
                  <img
                    src="/heroImage2.png"
                    alt="Features and benefits"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroShowcase;
