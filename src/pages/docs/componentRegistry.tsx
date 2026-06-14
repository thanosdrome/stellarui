import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CTAButtonExample,
  FloatingDockExample,
  MindMapExample,
  GridBackground,
  GradientCard,
  XRayCard,
} from "@/components/library";
import { LiquidButton } from "@/components/ui/glass-button";

const Preview = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-48 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 p-10">
    {children}
  </div>
);

const CodeBlock = ({ code }: { code: string }) => (
  <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
    <pre className="overflow-x-auto text-sm text-neutral-300">{code}</pre>
  </div>
);

export const CTAButtonDemo = () => (
  <div className="space-y-6">
    <Preview>
      <CTAButtonExample />
    </Preview>
    <CodeBlock
      code={`import { CTAButton } from '@stellarui/react';

<CTAButton label="Get Started" />`}
    />
  </div>
);

export const GridDotBackgroundDemo = () => (
  <div className="space-y-6">
    <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-[#0b0b0b]">
      <GridBackground />
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-5xl font-bold text-transparent sm:text-7xl">
        Background
      </p>
    </div>
    <CodeBlock
      code={`import GridBackground from '@stellarui/react';

<section className="relative h-96">
  <GridBackground />
  <p className="relative z-20 ...">Backgrounds</p>
</section>`}
    />
  </div>
);

export const GradientCardDemo = () => (
  <div className="space-y-6">
    <Preview>
      <GradientCard className="h-64 w-80">
        <div className="flex h-full flex-col justify-end p-6">
          <h3 className="text-lg font-semibold text-white">Gradient Card</h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-400">
            A rotating free-form gradient built from the StellarUI theme palette.
          </p>
        </div>
      </GradientCard>
    </Preview>
    <CodeBlock
      code={`import { GradientCard } from '@stellarui/react';

<GradientCard className="h-64 w-80" duration={8}>
  <div className="p-6">
    <h3>Gradient Card</h3>
    <p>A rotating free-form gradient.</p>
  </div>
</GradientCard>`}
    />
  </div>
);

export const XRayCardDemo = () => (
  <div className="space-y-6">
    <Preview>
      <XRayCard
        baseSrc="/heroimage1.png"
        revealSrc="/heroImage2.png"
        radius={120}
        healDelay={1}
        lag={4}
        alt="X-ray hover demo"
        className="h-80 w-full max-w-xl border border-neutral-800"
      >
        <div className="pointer-events-none absolute bottom-0 left-0 p-5">
          <p className="text-sm font-semibold text-white drop-shadow">Hover to x-ray</p>
          <p className="text-xs text-neutral-300 drop-shadow">
            Move your cursor to reveal what's underneath.
          </p>
        </div>
      </XRayCard>
    </Preview>
    <CodeBlock
      code={`import { XRayCard } from '@stellarui/react';

<XRayCard
  baseSrc="/cover.png"
  revealSrc="/inside.png"
  radius={120}
/>`}
    />
  </div>
);

export const FloatingDockDemo = () => (
  <div className="space-y-6">
    <FloatingDockExample />
    <CodeBlock
      code={`import { FloatingDock } from '@stellarui/react';

const icons = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Contact', href: 'mailto:you@example.com' },
];

<FloatingDock icons={icons} position="bottom" />`}
    />
  </div>
);

export const MindMapDemo = () => (
  <div className="space-y-6">
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
      <MindMapExample />
    </div>
    <CodeBlock
      code={`import { MindMap } from '@stellarui/react';

<MindMap
  centralButtons={buttons}
  outerNodes={nodes}
  onButtonClick={handleClick}
/>`}
    />
  </div>
);

export const LiquidGlassButtonDemo = () => (
  <div className="space-y-6">
    <Preview>
      <LiquidButton variant="default" size="xxl" className="text-gray-200">
        Liquid
      </LiquidButton>
    </Preview>
    <CodeBlock
      code={`import { LiquidButton } from '@stellarui/react';

                <LiquidButton variant="default" size="2xl" className="text-gray-200">
                  Liquid
                </LiquidButton>`}
    />
  </div>
);

export const ButtonDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-lg bg-gradient-to-br from-[#7F6A63] to-[#02080F] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
          Primary
        </button>
        <button className="rounded-lg border border-neutral-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-neutral-400">
          Secondary
        </button>
        <button className="rounded-lg bg-neutral-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
          Ghost
        </button>
        <button
          className="cursor-not-allowed rounded-lg bg-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-400"
          disabled
        >
          Disabled
        </button>
      </div>
    </Preview>
    <CodeBlock
      code={`import { Button } from '@stellarui/react';

<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary" size="md">Secondary</Button>
<Button variant="ghost" size="md">Ghost</Button>`}
    />
  </div>
);

export const CalendarDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="w-72 rounded-lg border border-neutral-700 bg-neutral-800 p-4">
        <div className="mb-4 flex items-center justify-between">
          <button className="rounded-lg p-1.5 transition-colors hover:bg-neutral-700">
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          <h3 className="text-sm font-semibold text-white">December 2024</h3>
          <button className="rounded-lg p-1.5 transition-colors hover:bg-neutral-700">
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="mb-2 grid grid-cols-7 gap-1">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div key={d} className="py-1 text-center text-xs font-medium text-neutral-500">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }, (_, i) => {
            const day = i - 6 + 1;
            const isCurrentMonth = day > 0 && day <= 31;
            const isToday = day === 15;
            const isSelected = day === 22;
            return (
              <button
                key={i}
                className={`mx-auto block h-7 w-7 rounded-lg text-xs transition-colors ${!isCurrentMonth ? "text-neutral-700" : "text-white hover:bg-neutral-700"} ${isToday ? "bg-[#7F6A63]" : ""} ${isSelected ? "bg-white !text-neutral-900" : ""}`}
              >
                {isCurrentMonth ? day : ""}
              </button>
            );
          })}
        </div>
      </div>
    </Preview>
    <CodeBlock
      code={`import { Calendar } from '@stellarui/react';

<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
/>`}
    />
  </div>
);

export const InputDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="w-full max-w-sm space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-neutral-400">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors focus:border-[#7F6A63] focus:outline-none focus:ring-1 focus:ring-[#7F6A63]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-neutral-400">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-red-500/60 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none"
          />
          <p className="mt-1 text-xs text-red-400">Password is required</p>
        </div>
      </div>
    </Preview>
    <CodeBlock
      code={`import { Input } from '@stellarui/react';

<Input
  type="email"
  placeholder="you@example.com"
  value={value}
  onChange={setValue}
  error={error}
/>`}
    />
  </div>
);

export const Simple3DCardDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="perspective-1000 group">
        <div className="transform-style-preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-6 relative h-44 w-72 transition-transform duration-500">
          <div className="backface-hidden absolute inset-0 rounded-xl bg-gradient-to-br from-[#02080F] to-[#7F6A63] p-6 shadow-2xl">
            <div className="flex h-full flex-col justify-between">
              <div>
                <h4 className="mb-1 text-lg font-bold text-[#FEFDE0]">StellarUI Card</h4>
                <p className="text-sm text-[#FEFDE0]/70">Hover to see the 3D effect.</p>
              </div>
              <span className="text-xs text-[#FEFDE0]/50">Interactive</span>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-xl bg-black/20 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
        </div>
      </div>
    </Preview>
    <CodeBlock
      code={`import { Simple3DCard } from '@stellarui/react';

<Simple3DCard
  title="Card Title"
  description="Hover to see the 3D effect"
  gradient="from-[#02080F] to-[#7F6A63]"
/>`}
    />
  </div>
);

export const BadgeDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="rounded-full border border-neutral-700 bg-[#02080F] px-2.5 py-1 text-xs font-medium text-white">
          Default
        </span>
        <span className="rounded-full bg-[#7F6A63] px-2.5 py-1 text-xs font-medium text-white">
          Primary
        </span>
        <span className="rounded-full border border-[#7F6A63] px-2.5 py-1 text-xs font-medium text-[#FEFDE0]">
          Outline
        </span>
      </div>
    </Preview>
    <CodeBlock
      code={`import { Badge } from '@stellarui/react';

<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="outline">Outline</Badge>`}
    />
  </div>
);
