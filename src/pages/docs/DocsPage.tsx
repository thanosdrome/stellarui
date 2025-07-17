import { useState } from 'react';
import {  Menu, X, Moon, ChevronRight } from 'lucide-react';
import {
  RotatingCarouselDemo,
  SidePopupDemo,
  StepFormDemo,
  ToggleSwitchDemo,
  HorizontalSliderDemo,
  FloatingDockDemo,
  MindMapDemo,
  ButtonDemo,
  CalendarDemo,
  InputDemo,
  Simple3DCardDemo,
  BadgeDemo,
  LiquidGlassButtonDemo,
} from './Components';

const components = [
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
    id: 'rotating-carousel',
    name: 'Rotating Carousel',
    description: '3D-style image carousel with smooth animations',
    component: RotatingCarouselDemo,
    isNew: true,
  },
  {
    id: 'side-popup',
    name: 'Side Popup',
    description: 'Notification popup that slides from the left',
    component: SidePopupDemo,
    isNew: true,
  },
  {
    id: 'step-form',
    name: 'Step Form',
    description: 'Multi-step form with progress tracking',
    component: StepFormDemo,
    isNew: true,
  },
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    description: 'Animated toggle switch with customization',
    component: ToggleSwitchDemo,
    isNew: true,
  },
  {
    id: 'horizontal-slider',
    name: 'Horizontal Slider',
    description: 'Scrollable content with navigation controls',
    component: HorizontalSliderDemo,
    isNew: true,
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
    title: 'Getting Started',
    items: [
      { name: 'Introduction', id: 'introduction' },
      { name: 'Installation', id: 'installation' },
    ]
  },
  {
    title: 'UI Components',
    items: components.filter(c => c.isNew).map(c => ({ name: c.name, id: c.id, isNew: c.isNew }))
  },
  {
    title: 'Other Components',
    items: components.filter(c => !c.isNew).map(c => ({ name: c.name, id: c.id, isNew: c.isNew }))
  }
];

function DocsPage() {
  const [activeComponent, setActiveComponent] = useState('mind-map');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  const ActiveComponentDemo = components.find(c => c.id === activeComponent)?.component || MindMapDemo;
  const activeComponentData = components.find(c => c.id === activeComponent);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-zinc-800 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center space-x-2">
              <img src="/stellar.png" alt="StellarUI Logo" className="w-6 h-6" />
              <span className="text-lg font-semibold">StellarUI</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#docs" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Docs
            </a>
            <a href="#components" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Components
            </a>
            <button className="p-2 rounded-md hover:bg-zinc-800 transition-colors">
              <Moon className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-zinc-950 border-r border-zinc-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-14 lg:pt-0">
            <div className="flex-1 overflow-y-auto py-6">
              {sidebarSections.map((section) => (
                <div key={section.title} className="mb-8">
                  <h3 className="px-6 mb-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <nav className="space-y-1 px-3">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveComponent(item.id);
                          setSidebarOpen(false);
                        }}
                        className={`
                          w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between group
                          ${activeComponent === item.id 
                            ? 'bg-zinc-800 text-white' 
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                          }
                        `}
                      >
                        <span>{item.name}</span>
                        {item && (
                          <span className="px-1.5 py-0.5 text-xs bg-[#02080F] text-[#FEFDE0] rounded">
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
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-6xl mx-auto">
            <div className="flex">
              {/* Content */}
              <div className="flex-1 px-6 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                  <span>Documentation</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>Components</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">{activeComponentData?.name}</span>
                </nav>

                {/* Component Header */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {activeComponentData?.name}
                  </h1>
                  <p className="text-lg text-zinc-400 mb-6">
                    {activeComponentData?.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-zinc-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-700"><img src="/stellar.png" alt="StellarUI Logo" className="w-6 h-6" /></div> 
                      <span>Written by StellarUI Team</span>
                    </div>
                    <span>Last updated 1h</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-zinc-800 mb-8">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'preview'
                          ? 'border-white text-white'
                          : 'border-transparent text-zinc-400 hover:text-white'
                      }`}
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'code'
                          ? 'border-white text-white'
                          : 'border-transparent text-zinc-400 hover:text-white'
                      }`}
                    >
                      Code
                    </button>
                  </nav>
                </div>

                {/* Component Demo */}
                {activeTab === 'preview' && (
                  <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-8 mb-8">
                    <ActiveComponentDemo />
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 mb-8">
                    <pre className="text-sm text-zinc-300 overflow-x-auto">
                      <code>{`import { ${activeComponentData?.name.replace(/\s+/g, '')} } from '@stellarui/react';

export default function Example() {
  return (
    <${activeComponentData?.name.replace(/\s+/g, '')} />
  );
}`}</code>
                    </pre>
                  </div>
                )}

                {/* Info Box */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <p className="text-sm text-blue-200">
                      The {activeComponentData?.name} component adds an engaging interactive effect to child elements, 
                      providing smooth animations and customizable behavior that enhances user experience.
                    </p>
                  </div>
                </div>

                {/* Installation Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
                  <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4">
                    <pre className="text-sm text-zinc-300">
                      <code>npm install @stellarui/react</code>
                    </pre>
                  </div>
                </section>
              </div>

              {/* Right Sidebar - Table of Contents */}
              <div className="hidden xl:block w-64 py-8 pr-6">
                <div className="sticky top-24">
                  <h3 className="text-sm font-semibold text-white mb-4">On This Page</h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#installation" className="block text-zinc-400 hover:text-white transition-colors">
                      Installation
                    </a>
                    <a href="#examples" className="block text-zinc-400 hover:text-white transition-colors">
                      Examples
                    </a>
                    <a href="#props" className="block text-zinc-400 hover:text-white transition-colors">
                      Props
                    </a>
                  </nav>
                  
                  <div className="mt-12 text-center ">
                    <p className="text-sm text-zinc-500 mb-4">Crafting modern UIs, one component at a time</p>
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#7F6A63] to-[#02080F]  rounded-xl flex items-center justify-center">
                      <img src="/stellar.png" alt="StellarUI Logo" className="w-8 h-8" />
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