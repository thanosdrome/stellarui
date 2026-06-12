import React from 'react';
import { MindMap, FloatingDock, LiquidGlassButton } from '@/components/library';
import { LiquidButton, MetalButton } from '@/components/ui/glass-button';

const HeroShowcase: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <main className="px-6 pt-20 pb-16 mt-[100px]">
        <div className="max-w-7xl mx-auto">

          {/* Section header — left-aligned, not centered */}
          <div className="mb-12 max-w-xl">
            <span className="text-xs font-semibold text-[#cd5a25] tracking-wide mb-3 block">Showcase</span>
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
              Built for real products
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Production-ready components you can drop into your project today. No configuration needed.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[640px]">

            {/* Mind Map — large left */}
            <div className="col-span-7 row-span-6 bg-[#0f0f0f] rounded-2xl border border-zinc-800/50 p-6 hover:border-zinc-700/60 transition-colors overflow-hidden">
              <p className="text-xs text-zinc-500 font-medium mb-4">Mind Map</p>
              <div className="h-[calc(100%-2rem)]">
                <MindMap />
              </div>
            </div>

            {/* Glass buttons — top right */}
            <div className="col-span-5 row-span-2 bg-[#0f0f0f] rounded-2xl border border-zinc-800/50 p-5 flex flex-col hover:border-zinc-700/60 transition-colors">
              <p className="text-xs text-zinc-500 font-medium mb-4">Glass Buttons</p>
              <div className="flex-1 flex items-center gap-4 flex-wrap">
                <MetalButton className="text-gray-300">
                  Metal
                </MetalButton>
                <LiquidButton variant="default" size="xl" className="text-gray-200">
                  Liquid
                </LiquidButton>
                <LiquidGlassButton className="text-gray-200" variant="accent">
                  Glass
                </LiquidGlassButton>
              </div>
            </div>

            {/* Stat cell — right */}
            <div className="col-span-2 row-span-2 bg-[#0f0f0f] rounded-2xl border border-zinc-800/50 p-5 flex flex-col justify-center hover:border-zinc-700/60 transition-colors">
              <span className="text-3xl font-bold text-white tracking-tight">9</span>
              <span className="text-xs text-zinc-500 mt-1">components</span>
            </div>

            {/* Type-safe cell — right */}
            <div className="col-span-3 row-span-2 bg-[#0f0f0f] rounded-2xl border border-zinc-800/50 p-5 flex flex-col justify-center hover:border-zinc-700/60 transition-colors">
              <span className="text-sm font-semibold text-[#cd5a25]">TypeScript</span>
              <span className="text-xs text-zinc-400 mt-1 leading-relaxed">Full type safety out of the box</span>
            </div>

            {/* Floating Dock — bottom right wide */}
            <div className="col-span-5 row-span-2 bg-[#0f0f0f] rounded-2xl border border-zinc-800/50 p-5 flex flex-col hover:border-zinc-700/60 transition-colors">
              <p className="text-xs text-zinc-500 font-medium mb-3">Floating Dock</p>
              <div className="relative flex-1">
                <FloatingDock position="bottom" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroShowcase;
