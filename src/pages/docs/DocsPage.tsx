import { useState, type ComponentType } from 'react';
import { Menu, X, ChevronRight, Terminal, Package, Zap, Code, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  CTAButtonDemo,
  FloatingDockDemo,
  GridDotBackgroundDemo,
  MindMapDemo,
  ButtonDemo,
  CalendarDemo,
  InputDemo,
  Simple3DCardDemo,
  BadgeDemo,
  LiquidGlassButtonDemo,
} from './componentRegistry';

const CodeBlock = ({ code }: { code: string }) => (
  <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4 mb-4">
    <pre className="text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed"><code>{code}</code></pre>
  </div>
);

const IntroductionPage = () => (
  <div className="space-y-12">
    <div>
      <div className="flex items-center space-x-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#925C40] to-[#3d1a08] flex items-center justify-center">
          <img src="/stellar.png" alt="StellarUI" className="w-5 h-5" />
        </div>
        <span className="text-xs text-neutral-500">StellarUI / documentation</span>
      </div>
      <h1 className="text-4xl font-bold text-white mb-5 tracking-tight">Introduction</h1>
      <p className="text-base text-neutral-400 leading-relaxed max-w-[65ch]">
        StellarUI is a modern React component library built for developers who care about craft.
        Every component ships with smooth animations, dark-mode-first styling, and zero-config Tailwind integration.
      </p>
    </div>

    <div className="space-y-4">
      {[
        { icon: <Zap className="w-4 h-4" />, title: 'Plug & play', desc: 'Drop components in and they just work — no theme setup required.' },
        { icon: <Code className="w-4 h-4" />, title: 'Fully typed', desc: 'Written in TypeScript with complete prop types and intellisense support.' },
        { icon: <Layers className="w-4 h-4" />, title: 'Animated by default', desc: 'Smooth transitions baked in — no extra animation libraries needed.' },
      ].map(({ icon, title, desc }) => (
        <div key={title} className="flex items-start space-x-4 border-l border-neutral-700 pl-4 py-1">
          <div className="w-7 h-7 rounded-md bg-neutral-800 flex items-center justify-center text-neutral-400 flex-shrink-0 mt-0.5">
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div>
      <h2 className="text-xl font-semibold text-white mb-4">What's included</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
        {[
          'CTA Button', 'Mind Map', 'Liquid Glass Button', 'Floating Dock',
          'Button', 'Calendar', 'Input', 'Simple 3D Card', 'Badge',
        ].map((name) => (
          <div key={name} className="flex items-center space-x-2.5 px-3 py-2.5 rounded-md hover:bg-neutral-900 transition-colors group cursor-default">
            <div className="w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0 group-hover:bg-neutral-400 transition-colors" />
            <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">{name}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
      <h2 className="text-base font-semibold text-white mb-2">Ready to build?</h2>
      <p className="text-sm text-neutral-400 mb-4">Head to the Installation guide to get StellarUI into your project in under a minute.</p>
      <div className="flex items-center space-x-2 text-sm text-neutral-300">
        <Terminal className="w-4 h-4 text-neutral-500" />
        <code className="font-mono">npm install @stellarui/react</code>
      </div>
    </div>
  </div>
);

const InstallationPage = () => (
  <div className="space-y-10">
    <div>
      <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Installation</h1>
      <p className="text-base text-neutral-400 leading-relaxed max-w-[65ch]">
        Get StellarUI running in your React + Tailwind project in three steps.
      </p>
    </div>

    <div className="space-y-10">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-7 h-7 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-white">1</div>
          <h2 className="text-base font-semibold text-white">Install the package</h2>
        </div>
        <CodeBlock code="npm install @stellarui/react" />
        <p className="text-sm text-neutral-500 mb-2">Or with yarn / pnpm:</p>
        <CodeBlock code={`yarn add @stellarui/react\npnpm add @stellarui/react`} />
      </div>

      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-7 h-7 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-white">2</div>
          <h2 className="text-base font-semibold text-white">Configure Tailwind</h2>
        </div>
        <p className="text-sm text-neutral-400 mb-3">
          Add the StellarUI source to your{' '}
          <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-xs font-mono">tailwind.config.js</code>{' '}
          content paths so utility classes are included in your build:
        </p>
        <CodeBlock code={`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@stellarui/react/dist/**/*.js',
  ],
  // ...
};`} />
      </div>

      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-7 h-7 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-white">3</div>
          <h2 className="text-base font-semibold text-white">Import and use</h2>
        </div>
        <p className="text-sm text-neutral-400 mb-3">Import any component by name — no provider or global setup required:</p>
        <CodeBlock code={`import { CTAButton, FloatingDock } from '@stellarui/react';

export default function App() {
  return (
    <div>
      <CTAButton label="Get Started" />
      <FloatingDock position="bottom" />
    </div>
  );
}`} />
      </div>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Requirements</h2>
      <div className="divide-y divide-neutral-800">
        {[
          { icon: <Package className="w-4 h-4 text-neutral-500" />, label: 'React', version: '≥ 18.0' },
          { icon: <Package className="w-4 h-4 text-neutral-500" />, label: 'Tailwind CSS', version: '≥ 3.0' },
          { icon: <Package className="w-4 h-4 text-neutral-500" />, label: 'TypeScript', version: '≥ 5.0 (optional but recommended)' },
        ].map(({ icon, label, version }) => (
          <div key={label} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              {icon}
              <span className="text-sm text-white font-medium">{label}</span>
            </div>
            <span className="text-xs text-neutral-500 font-mono">{version}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <div className="w-4 h-4 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed">
          StellarUI ships pre-compiled CSS via Tailwind utility classes. No additional CSS imports are needed — just make sure Tailwind is configured in your project.
        </p>
      </div>
    </div>
  </div>
);

interface ComponentEntry {
  id: string;
  name: string;
  description: string;
  component: ComponentType;
  isNew: boolean;
  tags?: string[];
}

const components: ComponentEntry[] = [
  {
    id: 'cta-button',
    name: 'CTA Button',
    description: 'Animated call-to-action button with pulsing echo rings',
    component: CTAButtonDemo,
    isNew: true,
  },
  {
    id: 'mind-map',
    name: 'Mind Map',
    description: 'Interactive mind map with animated glowing paths',
    component: MindMapDemo,
    isNew: true,
  },
  {
    id: 'liquid-glass-button',
    name: 'Liquid Glass Button',
    description: 'Modern glassmorphism button with backdrop blur effects',
    component: LiquidGlassButtonDemo,
    isNew: true,
  },
  {
    id: 'floating-dock',
    name: 'Floating Dock',
    description: 'Interactive social media dock with glow effects',
    component: FloatingDockDemo,
    isNew: true,
  },
  {
    id: 'grid-dot-background',
    name: 'Grid and Dot Backgrounds',
    description: 'A simple grid and dots background to make your sections stand out.',
    component: GridDotBackgroundDemo,
    isNew: true,
    tags: ['Background', 'Card', 'Utility'],
  },
  {
    id: 'button-component',
    name: 'Button',
    description: 'Customizable button component with variants',
    component: ButtonDemo,
    isNew: false,
  },
  {
    id: 'calendar-component',
    name: 'Calendar',
    description: 'Interactive calendar component for date selection',
    component: CalendarDemo,
    isNew: false,
  },
  {
    id: 'input-component',
    name: 'Input',
    description: 'Styled input fields with validation states',
    component: InputDemo,
    isNew: false,
  },
  {
    id: 'simple-3d-card-component',
    name: 'Simple 3D Card',
    description: '3D card component with hover effects',
    component: Simple3DCardDemo,
    isNew: false,
  },
  {
    id: 'badge-component',
    name: 'Badge',
    description: 'Small status indicators and labels',
    component: BadgeDemo,
    isNew: false,
  },
];

const sidebarSections = [
  {
    title: 'Getting started',
    items: [
      { name: 'Introduction', id: 'introduction' },
      { name: 'Installation', id: 'installation' },
    ]
  },
  {
    title: 'New components',
    items: components.filter(c => c.isNew).map(c => ({ name: c.name, id: c.id, isNew: c.isNew }))
  },
  {
    title: 'Base components',
    items: components.filter(c => !c.isNew).map(c => ({ name: c.name, id: c.id, isNew: c.isNew }))
  }
];

function DocsPage() {
  const [activeComponent, setActiveComponent] = useState('cta-button');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  const isStaticPage = activeComponent === 'introduction' || activeComponent === 'installation';
  const ActiveComponentDemo = components.find(c => c.id === activeComponent)?.component || CTAButtonDemo;
  const activeComponentData = components.find(c => c.id === activeComponent);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
        <div className="flex items-center justify-between h-14 px-5">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-neutral-800 transition-colors"
              aria-label="Toggle navigation"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
            <Link to="/" className="flex items-center space-x-2.5 group">
              <img src="/stellar.png" alt="StellarUI Logo" className="w-5 h-5" />
              <span className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">StellarUI</span>
              <span className="text-neutral-700">/</span>
              <span className="text-sm text-neutral-500">docs</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setActiveComponent('introduction')}
              className={`text-sm transition-colors ${activeComponent === 'introduction' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
            >
              Introduction
            </button>
            <button
              onClick={() => setActiveComponent('installation')}
              className={`text-sm transition-colors ${activeComponent === 'installation' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
            >
              Installation
            </button>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-30 w-60 bg-neutral-950 border-r border-neutral-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-14 lg:pt-0">
            <div className="flex-1 overflow-y-auto py-8">
              {sidebarSections.map((section) => (
                <div key={section.title} className="mb-7">
                  <h3 className="px-5 mb-2 text-xs text-neutral-500 font-medium">
                    {section.title}
                  </h3>
                  <nav className="space-y-0.5 px-3">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveComponent(item.id);
                          setSidebarOpen(false);
                        }}
                        className={`
                          w-full text-left py-2 rounded-md text-sm transition-colors flex items-center justify-between
                          ${activeComponent === item.id
                            ? 'bg-neutral-800 text-white px-3'
                            : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50 px-3'
                          }
                        `}
                      >
                        <span>{item.name}</span>
                        {item.isNew && (
                          <span className="px-1.5 py-0.5 text-[10px] font-medium bg-neutral-900 text-[#fefde0] rounded border border-neutral-700">
                            New
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 min-w-0">
          <div className="w-full">
            <div className="flex">
              {/* Content */}
              <div className="flex-1 px-8 py-10 min-w-0">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-1.5 text-xs text-neutral-500 mb-10">
                  <span>Docs</span>
                  <ChevronRight className="w-3 h-3" />
                  <span>{isStaticPage ? 'Getting started' : 'Components'}</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-neutral-300">
                    {isStaticPage
                      ? activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1)
                      : activeComponentData?.name}
                  </span>
                </nav>

                {/* Static pages */}
                {activeComponent === 'introduction' && <IntroductionPage />}
                {activeComponent === 'installation' && <InstallationPage />}

                {/* Component demo pages */}
                {!isStaticPage && (
                  <>
                    <div className="mb-10">
                      {activeComponentData?.isNew && (
                        <span className="inline-block text-[10px] font-medium px-1.5 py-0.5 bg-neutral-800 text-neutral-400 rounded border border-neutral-700 mb-3">
                          New
                        </span>
                      )}
                      <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
                        {activeComponentData?.name}
                      </h1>
                      <p className="text-base text-neutral-400 mb-6 max-w-[65ch] leading-relaxed">
                        {activeComponentData?.description}
                      </p>
                      {activeComponentData?.tags && (
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                          {activeComponentData.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium bg-neutral-900 text-neutral-400 rounded-md border border-neutral-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center space-x-3 text-xs text-neutral-500 border-t border-neutral-800 pt-5">
                        <div className="flex items-center space-x-2">
                          <img src="/stellar.png" alt="StellarUI Logo" className="w-4 h-4 rounded-full" />
                          <span>StellarUI team</span>
                        </div>
                        <span className="text-neutral-700">·</span>
                        <span>v1.5</span>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-neutral-800 mb-8">
                      <nav className="flex space-x-6">
                        {['preview', 'code'].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors capitalize ${
                              activeTab === tab
                                ? 'border-white text-white'
                                : 'border-transparent text-neutral-400 hover:text-white'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </nav>
                    </div>

                    {activeTab === 'preview' && (
                      <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-8 mb-8 min-h-48">
                        <ActiveComponentDemo />
                      </div>
                    )}

                    {activeTab === 'code' && (
                      <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6 mb-8">
                        <pre className="text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
                          <code>{`import { ${activeComponentData?.name.replace(/\s+/g, '')} } from '@stellarui/react';

export default function Example() {
  return (
    <${activeComponentData?.name.replace(/\s+/g, '')} />
  );
}`}</code>
                        </pre>
                      </div>
                    )}

                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <div className="w-4 h-4 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        </div>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                          The {activeComponentData?.name} component provides smooth animations and customizable behavior that enhances user experience.
                        </p>
                      </div>
                    </div>

                    <section className="mb-12">
                      <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
                      <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4">
                        <pre className="text-sm text-neutral-300 font-mono">
                          <code>npm install @stellarui/react</code>
                        </pre>
                      </div>
                    </section>
                  </>
                )}
              </div>

              {/* Right Sidebar - Table of Contents */}
              <div className="hidden xl:block w-52 py-10 pr-6 flex-shrink-0">
                <div className="sticky top-24">
                  <h3 className="text-xs font-medium text-neutral-500 mb-4">On this page</h3>
                  <nav className="space-y-2.5 text-sm">
                    {['Installation', 'Examples', 'Props'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block text-neutral-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-12">
                    <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Crafting modern UIs, one component at a time.</p>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#925C40] to-[#3d1a08] rounded-lg flex items-center justify-center">
                      <img src="/stellar.png" alt="StellarUI Logo" className="w-7 h-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DocsPage;
