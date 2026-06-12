import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  CTAButtonExample,
  FloatingDockExample,
  MindMapExample,
  LiquidGlassButton,
  GridBackground,
} from '@/components/library';

const Preview = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center rounded-xl bg-zinc-900/50 border border-zinc-800 p-10 min-h-48">
    {children}
  </div>
);

const CodeBlock = ({ code }: { code: string }) => (
  <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4">
    <pre className="text-sm text-zinc-300 overflow-x-auto">{code}</pre>
  </div>
);

export const CTAButtonDemo = () => (
  <div className="space-y-6">
    <Preview>
      <CTAButtonExample />
    </Preview>
    <CodeBlock code={`import { CTAButton } from '@stellarui/react';

<CTAButton label="Get Started" />`} />
  </div>
);

export const GridDotBackgroundDemo = () => (
  <div className="space-y-6">
    <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-[#0b0b0b]">
      <GridBackground />
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-5xl sm:text-7xl font-bold text-transparent">
        Backgrounds
      </p>
    </div>
    <CodeBlock code={`import GridBackground from '@stellarui/react';

<section className="relative h-96">
  <GridBackground />
  <p className="relative z-20 ...">Backgrounds</p>
</section>`} />
  </div>
);

export const FloatingDockDemo = () => (
  <div className="space-y-6">
    <FloatingDockExample />
    <CodeBlock code={`import { FloatingDock } from '@stellarui/react';

const icons = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Contact', href: 'mailto:you@example.com' },
];

<FloatingDock icons={icons} position="bottom" />`} />
  </div>
);

export const MindMapDemo = () => (
  <div className="space-y-6">
    <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 p-8">
      <MindMapExample />
    </div>
    <CodeBlock code={`import { MindMap } from '@stellarui/react';

<MindMap
  centralButtons={buttons}
  outerNodes={nodes}
  onButtonClick={handleClick}
/>`} />
  </div>
);

export const LiquidGlassButtonDemo = () => (
  <div className="space-y-6">
    <Preview>
      <LiquidGlassButton variant="primary" size="lg">
        Liquid Glass
      </LiquidGlassButton>
    </Preview>
    <CodeBlock code={`import { LiquidGlassButton } from '@stellarui/react';

<LiquidGlassButton variant="primary" size="md">
  Get Started
</LiquidGlassButton>`} />
  </div>
);

export const ButtonDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="px-5 py-2.5 bg-gradient-to-br from-[#7F6A63] to-[#02080F] text-white rounded-lg font-medium text-sm transition-opacity hover:opacity-90">
          Primary
        </button>
        <button className="px-5 py-2.5 border border-zinc-600 hover:border-zinc-400 text-white rounded-lg font-medium text-sm transition-colors">
          Secondary
        </button>
        <button className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium text-sm transition-colors">
          Ghost
        </button>
        <button className="px-5 py-2.5 bg-zinc-700 text-zinc-400 rounded-lg font-medium text-sm cursor-not-allowed" disabled>
          Disabled
        </button>
      </div>
    </Preview>
    <CodeBlock code={`import { Button } from '@stellarui/react';

<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary" size="md">Secondary</Button>
<Button variant="ghost" size="md">Ghost</Button>`} />
  </div>
);

export const CalendarDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="w-72 bg-zinc-800 rounded-lg border border-zinc-700 p-4">
        <div className="flex items-center justify-between mb-4">
          <button className="p-1.5 hover:bg-zinc-700 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <h3 className="text-white font-semibold text-sm">December 2024</h3>
          <button className="p-1.5 hover:bg-zinc-700 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <div key={d} className="text-center text-xs font-medium text-zinc-500 py-1">{d}</div>
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
                className={`h-7 w-7 text-xs rounded-lg transition-colors mx-auto block
                  ${!isCurrentMonth ? 'text-zinc-700' : 'text-white hover:bg-zinc-700'}
                  ${isToday ? 'bg-[#7F6A63]' : ''}
                  ${isSelected ? 'bg-white !text-zinc-900' : ''}`}
              >
                {isCurrentMonth ? day : ''}
              </button>
            );
          })}
        </div>
      </div>
    </Preview>
    <CodeBlock code={`import { Calendar } from '@stellarui/react';

<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
/>`} />
  </div>
);

export const InputDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#7F6A63] focus:ring-1 focus:ring-[#7F6A63] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2.5 bg-zinc-800 border border-red-500/60 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none transition-colors"
          />
          <p className="text-red-400 text-xs mt-1">Password is required</p>
        </div>
      </div>
    </Preview>
    <CodeBlock code={`import { Input } from '@stellarui/react';

<Input
  type="email"
  placeholder="you@example.com"
  value={value}
  onChange={setValue}
  error={error}
/>`} />
  </div>
);

export const Simple3DCardDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="group perspective-1000">
        <div className="relative w-72 h-44 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#02080F] to-[#7F6A63] rounded-xl shadow-2xl p-6 backface-hidden">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="text-lg font-bold text-[#FEFDE0] mb-1">StellarUI Card</h4>
                <p className="text-[#FEFDE0]/70 text-sm">Hover to see the 3D effect.</p>
              </div>
              <span className="text-[#FEFDE0]/50 text-xs">Interactive</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20 rounded-xl translate-y-2 translate-x-2 -z-10 transition-transform duration-500 group-hover:translate-y-4 group-hover:translate-x-4" />
        </div>
      </div>
    </Preview>
    <CodeBlock code={`import { Simple3DCard } from '@stellarui/react';

<Simple3DCard
  title="Card Title"
  description="Hover to see the 3D effect"
  gradient="from-[#02080F] to-[#7F6A63]"
/>`} />
  </div>
);

export const BadgeDemo = () => (
  <div className="space-y-6">
    <Preview>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="px-2.5 py-1 bg-[#02080F] text-white text-xs font-medium rounded-full border border-zinc-700">Default</span>
        <span className="px-2.5 py-1 bg-[#7F6A63] text-white text-xs font-medium rounded-full">Primary</span>
        <span className="px-2.5 py-1 border border-[#7F6A63] text-[#FEFDE0] text-xs font-medium rounded-full">Outline</span>
      </div>
    </Preview>
    <CodeBlock code={`import { Badge } from '@stellarui/react';

<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="outline">Outline</Badge>`} />
  </div>
);
