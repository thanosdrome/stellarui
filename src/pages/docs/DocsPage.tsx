import { useState, type ComponentType } from "react";
import { Menu, X, ChevronRight, Terminal, Package, Zap, Code, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import {
  CTAButtonDemo,
  FloatingDockDemo,
  GridDotBackgroundDemo,
  GradientCardDemo,
  XRayCardDemo,
  MindMapDemo,
  ButtonDemo,
  CalendarDemo,
  InputDemo,
  Simple3DCardDemo,
  BadgeDemo,
  LiquidGlassButtonDemo,
} from "./componentRegistry";

const CodeBlock = ({ code }: { code: string }) => (
  <div className="mb-4 rounded-lg border border-neutral-800 bg-neutral-900 p-4">
    <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-neutral-300">
      <code>{code}</code>
    </pre>
  </div>
);

const IntroductionPage = () => (
  <div className="space-y-12">
    <div>
      <div className="mb-5 flex items-center space-x-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#925C40] to-[#3d1a08]">
          <img src="/stellar.png" alt="StellarUI" className="h-5 w-5" />
        </div>
        <span className="text-xs text-neutral-500">StellarUI / documentation</span>
      </div>
      <h1 className="mb-5 text-4xl font-bold tracking-tight text-white">Introduction</h1>
      <p className="max-w-[65ch] text-base leading-relaxed text-neutral-400">
        StellarUI is a modern React component library built for developers who care about craft.
        Every component ships with smooth animations, dark-mode-first styling, and zero-config
        Tailwind integration.
      </p>
    </div>

    <div className="space-y-4">
      {[
        {
          icon: <Zap className="h-4 w-4" />,
          title: "Plug & play",
          desc: "Drop components in and they just work — no theme setup required.",
        },
        {
          icon: <Code className="h-4 w-4" />,
          title: "Fully typed",
          desc: "Written in TypeScript with complete prop types and intellisense support.",
        },
        {
          icon: <Layers className="h-4 w-4" />,
          title: "Animated by default",
          desc: "Smooth transitions baked in — no extra animation libraries needed.",
        },
      ].map(({ icon, title, desc }) => (
        <div
          key={title}
          className="flex items-start space-x-4 border-l border-neutral-700 py-1 pl-4"
        >
          <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-neutral-800 text-neutral-400">
            {icon}
          </div>
          <div>
            <h3 className="mb-1 text-sm font-semibold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-neutral-400">{desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div>
      <h2 className="mb-4 text-xl font-semibold text-white">What's included</h2>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
        {[
          "CTA Button",
          "Mind Map",
          "Liquid Glass Button",
          "Floating Dock",
          "Button",
          "Calendar",
          "Input",
          "Simple 3D Card",
          "Badge",
        ].map((name) => (
          <div
            key={name}
            className="group flex cursor-default items-center space-x-2.5 rounded-md px-3 py-2.5 transition-colors hover:bg-neutral-900"
          >
            <div className="h-1 w-1 flex-shrink-0 rounded-full bg-neutral-600 transition-colors group-hover:bg-neutral-400" />
            <span className="text-sm text-neutral-400 transition-colors group-hover:text-neutral-200">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-2 text-base font-semibold text-white">Ready to build?</h2>
      <p className="mb-4 text-sm text-neutral-400">
        Head to the Installation guide to get StellarUI into your project in under a minute.
      </p>
      <div className="flex items-center space-x-2 text-sm text-neutral-300">
        <Terminal className="h-4 w-4 text-neutral-500" />
        <code className="font-mono">npm install @stellarui/react</code>
      </div>
    </div>
  </div>
);

const InstallationPage = () => (
  <div className="space-y-10">
    <div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">Installation</h1>
      <p className="max-w-[65ch] text-base leading-relaxed text-neutral-400">
        Get StellarUI running in your React + Tailwind project in three steps.
      </p>
    </div>

    <div className="space-y-10">
      <div>
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-xs font-bold text-white">
            1
          </div>
          <h2 className="text-base font-semibold text-white">Install the package</h2>
        </div>
        <CodeBlock code="npm install @stellarui/react" />
        <p className="mb-2 text-sm text-neutral-500">Or with yarn / pnpm:</p>
        <CodeBlock code={`yarn add @stellarui/react\npnpm add @stellarui/react`} />
      </div>

      <div>
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-xs font-bold text-white">
            2
          </div>
          <h2 className="text-base font-semibold text-white">Configure Tailwind</h2>
        </div>
        <p className="mb-3 text-sm text-neutral-400">
          Add the StellarUI source to your{" "}
          <code className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-xs text-neutral-300">
            tailwind.config.js
          </code>{" "}
          content paths so utility classes are included in your build:
        </p>
        <CodeBlock
          code={`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@stellarui/react/dist/**/*.js',
  ],
  // ...
};`}
        />
      </div>

      <div>
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-xs font-bold text-white">
            3
          </div>
          <h2 className="text-base font-semibold text-white">Import and use</h2>
        </div>
        <p className="mb-3 text-sm text-neutral-400">
          Import any component by name — no provider or global setup required:
        </p>
        <CodeBlock
          code={`import { CTAButton, FloatingDock } from '@stellarui/react';

export default function App() {
  return (
    <div>
      <CTAButton label="Get Started" />
      <FloatingDock position="bottom" />
    </div>
  );
}`}
        />
      </div>
    </div>

    <div>
      <h2 className="mb-4 text-xl font-semibold text-white">Requirements</h2>
      <div className="divide-y divide-neutral-800">
        {[
          {
            icon: <Package className="h-4 w-4 text-neutral-500" />,
            label: "React",
            version: "≥ 18.0",
          },
          {
            icon: <Package className="h-4 w-4 text-neutral-500" />,
            label: "Tailwind CSS",
            version: "≥ 3.0",
          },
          {
            icon: <Package className="h-4 w-4 text-neutral-500" />,
            label: "TypeScript",
            version: "≥ 5.0 (optional but recommended)",
          },
        ].map(({ icon, label, version }) => (
          <div key={label} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              {icon}
              <span className="text-sm font-medium text-white">{label}</span>
            </div>
            <span className="font-mono text-xs text-neutral-500">{version}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <div className="flex items-start space-x-3">
        <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-neutral-700">
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
        </div>
        <p className="text-sm leading-relaxed text-neutral-400">
          StellarUI ships pre-compiled CSS via Tailwind utility classes. No additional CSS imports
          are needed — just make sure Tailwind is configured in your project.
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
    id: "cta-button",
    name: "CTA Button",
    description: "Animated call-to-action button with pulsing echo rings",
    component: CTAButtonDemo,
    isNew: true,
  },
  {
    id: "mind-map",
    name: "Mind Map",
    description: "Interactive mind map with animated glowing paths",
    component: MindMapDemo,
    isNew: true,
  },
  {
    id: "liquid-glass-button",
    name: "Liquid Glass Button",
    description: "Modern glassmorphism button with backdrop blur effects",
    component: LiquidGlassButtonDemo,
    isNew: true,
  },
  {
    id: "floating-dock",
    name: "Floating Dock",
    description: "Interactive social media dock with glow effects",
    component: FloatingDockDemo,
    isNew: true,
  },
  {
    id: "grid-dot-background",
    name: "Grid and Dot Backgrounds",
    description: "A simple grid and dots background to make your sections stand out.",
    component: GridDotBackgroundDemo,
    isNew: true,
    tags: ["Background", "Card", "Utility"],
  },
  {
    id: "gradient-card",
    name: "Gradient Card",
    description: "Card with a rotating free-form four-color gradient from the theme palette.",
    component: GradientCardDemo,
    isNew: true,
    tags: ["Card", "Gradient", "Animation"],
  },
  {
    id: "xray-card",
    name: "X-Ray Card",
    description:
      "Cursor-following lens that reveals a second image beneath the cover, with CRT scanlines.",
    component: XRayCardDemo,
    isNew: true,
    tags: ["Card", "Hover", "Image"],
  },
  {
    id: "button-component",
    name: "Button",
    description: "Customizable button component with variants",
    component: ButtonDemo,
    isNew: false,
  },
  {
    id: "calendar-component",
    name: "Calendar",
    description: "Interactive calendar component for date selection",
    component: CalendarDemo,
    isNew: false,
  },
  {
    id: "input-component",
    name: "Input",
    description: "Styled input fields with validation states",
    component: InputDemo,
    isNew: false,
  },
  {
    id: "simple-3d-card-component",
    name: "Simple 3D Card",
    description: "3D card component with hover effects",
    component: Simple3DCardDemo,
    isNew: false,
  },
  {
    id: "badge-component",
    name: "Badge",
    description: "Small status indicators and labels",
    component: BadgeDemo,
    isNew: false,
  },
];

const sidebarSections = [
  {
    title: "Getting started",
    items: [
      { name: "Introduction", id: "introduction", isNew: false },
      { name: "Installation", id: "installation", isNew: false },
    ],
  },
  {
    title: "New components",
    items: components
      .filter((c) => c.isNew)
      .map((c) => ({ name: c.name, id: c.id, isNew: c.isNew })),
  },
  {
    title: "Base components",
    items: components
      .filter((c) => !c.isNew)
      .map((c) => ({ name: c.name, id: c.id, isNew: c.isNew })),
  },
];

function DocsPage() {
  const [activeComponent, setActiveComponent] = useState("cta-button");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");

  const isStaticPage = activeComponent === "introduction" || activeComponent === "installation";
  const ActiveComponentDemo =
    components.find((c) => c.id === activeComponent)?.component || CTAButtonDemo;
  const activeComponentData = components.find((c) => c.id === activeComponent);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-5">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-md p-2 transition-colors hover:bg-neutral-800 lg:hidden"
              aria-label="Toggle navigation"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <Link to="/" className="group flex items-center space-x-2.5">
              <img src="/stellar.png" alt="StellarUI Logo" className="h-5 w-5" />
              <span className="text-sm font-semibold text-neutral-200 transition-colors group-hover:text-white">
                StellarUI
              </span>
              <span className="text-neutral-700">/</span>
              <span className="text-sm text-neutral-500">docs</span>
            </Link>
          </div>

          <nav className="hidden items-center space-x-6 md:flex">
            <button
              onClick={() => setActiveComponent("introduction")}
              className={`text-sm transition-colors ${activeComponent === "introduction" ? "text-white" : "text-neutral-400 hover:text-white"}`}
            >
              Introduction
            </button>
            <button
              onClick={() => setActiveComponent("installation")}
              className={`text-sm transition-colors ${activeComponent === "installation" ? "text-white" : "text-neutral-400 hover:text-white"}`}
            >
              Installation
            </button>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-60 transform border-r border-neutral-800 bg-neutral-950 transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} `}
        >
          <div className="flex h-full flex-col pt-14 lg:pt-0">
            <div className="flex-1 overflow-y-auto py-8">
              {sidebarSections.map((section) => (
                <div key={section.title} className="mb-7">
                  <h3 className="mb-2 px-5 text-xs font-medium text-neutral-500">
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
                        className={`flex w-full items-center justify-between rounded-md py-2 text-left text-sm transition-colors ${
                          activeComponent === item.id
                            ? "bg-neutral-800 px-3 text-white"
                            : "px-3 text-neutral-400 hover:bg-neutral-800/50 hover:text-white"
                        } `}
                      >
                        <span>{item.name}</span>
                        {item.isNew && (
                          <span className="rounded border border-neutral-700 bg-neutral-900 px-1.5 py-0.5 text-[10px] font-medium text-[#fefde0]">
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
            className="fixed inset-0 z-20 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="min-w-0 flex-1 lg:ml-0">
          <div className="w-full">
            <div className="flex">
              {/* Content */}
              <div className="min-w-0 flex-1 px-8 py-10">
                {/* Breadcrumb */}
                <nav className="mb-10 flex items-center space-x-1.5 text-xs text-neutral-500">
                  <span>Docs</span>
                  <ChevronRight className="h-3 w-3" />
                  <span>{isStaticPage ? "Getting started" : "Components"}</span>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-neutral-300">
                    {isStaticPage
                      ? activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1)
                      : activeComponentData?.name}
                  </span>
                </nav>

                {/* Static pages */}
                {activeComponent === "introduction" && <IntroductionPage />}
                {activeComponent === "installation" && <InstallationPage />}

                {/* Component demo pages */}
                {!isStaticPage && (
                  <>
                    <div className="mb-10">
                      {activeComponentData?.isNew && (
                        <span className="mb-3 inline-block rounded border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">
                          New
                        </span>
                      )}
                      <h1 className="mb-3 text-4xl font-bold tracking-tight text-white">
                        {activeComponentData?.name}
                      </h1>
                      <p className="mb-6 max-w-[65ch] text-base leading-relaxed text-neutral-400">
                        {activeComponentData?.description}
                      </p>
                      {activeComponentData?.tags && (
                        <div className="mb-6 flex flex-wrap items-center gap-2">
                          {activeComponentData.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs font-medium text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center space-x-3 border-t border-neutral-800 pt-5 text-xs text-neutral-500">
                        <div className="flex items-center space-x-2">
                          <img
                            src="/stellar.png"
                            alt="StellarUI Logo"
                            className="h-4 w-4 rounded-full"
                          />
                          <span>StellarUI team</span>
                        </div>
                        <span className="text-neutral-700">·</span>
                        <span>v1.5</span>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-neutral-800">
                      <nav className="flex space-x-6">
                        {["preview", "code"].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`border-b-2 px-1 py-3 text-sm font-medium capitalize transition-colors ${
                              activeTab === tab
                                ? "border-white text-white"
                                : "border-transparent text-neutral-400 hover:text-white"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </nav>
                    </div>

                    {activeTab === "preview" && (
                      <div className="mb-8 min-h-48 rounded-lg border border-neutral-800 bg-neutral-900 p-8">
                        <ActiveComponentDemo />
                      </div>
                    )}

                    {activeTab === "code" && (
                      <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                        <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-neutral-300">
                          <code>
                            {`import { ${activeComponentData?.name.replace(/\s+/g, "")} } from '@stellarui/react';

                              export default function Example() {
                                return (
                                  <${activeComponentData?.name.replace(/\s+/g, "")} />
                                );
                              }`}
                          </code>
                        </pre>
                      </div>
                    )}

                    <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                      <div className="flex items-start space-x-3">
                        <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-neutral-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                        </div>
                        <p className="text-sm leading-relaxed text-neutral-400">
                          The {activeComponentData?.name} component provides smooth animations and
                          customizable behavior that enhances user experience.
                        </p>
                      </div>
                    </div>

                    <section className="mb-12">
                      <h2 className="mb-4 text-xl font-semibold text-white">Installation</h2>
                      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                        <pre className="font-mono text-sm text-neutral-300">
                          <code>npm install @stellarui/react</code>
                        </pre>
                      </div>
                    </section>
                  </>
                )}
              </div>

              {/* Right Sidebar - Table of Contents */}
              <div className="hidden w-52 flex-shrink-0 py-10 pr-6 xl:block">
                <div className="sticky top-24">
                  <h3 className="mb-4 text-xs font-medium text-neutral-500">On this page</h3>
                  <nav className="space-y-2.5 text-sm">
                    {["Installation", "Examples", "Props"].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block text-neutral-400 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-12">
                    <p className="mb-4 text-xs leading-relaxed text-neutral-600">
                      Crafting modern UIs, one component at a time.
                    </p>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#925C40] to-[#3d1a08]">
                      <img src="/stellar.png" alt="StellarUI Logo" className="h-7 w-7" />
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
