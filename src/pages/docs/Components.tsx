import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RotatingCarousel } from '../../components/docs/RotatingCarousel';
import { SidePopup, useSidePopup } from '../../components/docs/SidePopup';
import { StepFormExample } from '../../components/docs/StepForm';
import { ToggleSwitchExample } from '../../components/docs/ToggleSwitch';
import { HorizontalSliderExample } from '../../components/docs/HorizontalSlider';
import { FloatingDockExample } from '../../components/docs/FloatingDock';
import { MindMapExample } from '../../components/docs/MindMap';
import { LiquidGlassButtonExample } from '../../components/docs/LiquidGlassButton';

export const RotatingCarouselDemo = () => {
  const sampleImages = [
    'https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-143409.jpg',
    'https://img.freepik.com/free-vector/black-background-with-particles-mesh_1017-23616.jpg',
    'https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background_53876-97989.jpg',
    'https://img.freepik.com/free-vector/vektor-latar-belakang-pola-gelombang-abstrak-3d_53876-166839.jpg',
    'https://img.freepik.com/premium-vector/wave-particles-digital-wave-background-concept-abstract-technology-background-big-data-visualization-vector-illustration_634443-1163.jpg',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Rotating Image Carousel</h3>
        <p className="text-shiny-gray mb-6">
          A 3D-style image carousel that displays five images at a time with smooth rotation animations.
          Click on any image to bring it to the center, or use the navigation buttons.
        </p>
        <RotatingCarousel images={sampleImages} autoRotate={false} />
      </div>
      
      <div className="bg-dark-gray rounded-lg p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-shiny-gray overflow-x-auto">
{`<RotatingCarousel 
  images={imageUrls} 
  autoRotate={true}
  autoRotateInterval={3000}
/>`}
        </pre>
      </div>
    </div>
  );
};

export const SidePopupDemo = () => {
  const { popup, showPopup, hidePopup } = useSidePopup();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Side Popup</h3>
        <p className="text-shiny-gray mb-6">
          A notification-style popup that slides in from the left side and automatically disappears after a set duration.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => showPopup('This is a success message!', 'success')}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Show Success
          </button>
          <button
            onClick={() => showPopup('This is an error message!', 'error')}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Show Error
          </button>
          <button
            onClick={() => showPopup('This is an info message!', 'info')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Show Info
          </button>
          <button
            onClick={() => showPopup('This is a warning message!', 'warning')}
            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
          >
            Show Warning
          </button>
        </div>
      </div>

      <SidePopup
        isVisible={popup.isVisible}
        message={popup.message}
        type={popup.type}
        duration={popup.duration}
        onClose={hidePopup}
      />
      
      <div className="bg-dark-gray rounded-lg p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-shiny-gray overflow-x-auto">
{`const { popup, showPopup, hidePopup } = useSidePopup();

showPopup('Message text', 'success', 4000);

<SidePopup
  isVisible={popup.isVisible}
  message={popup.message}
  type={popup.type}
  onClose={hidePopup}
/>`}
        </pre>
      </div>
    </div>
  );
};

export const StepFormDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Step Form</h3>
        <p className="text-shiny-gray mb-6">
          A three-step progressive form component with navigation buttons and progress tracking.
          Each step can contain custom content and the form data is collected throughout the process.
        </p>
        <StepFormExample />
      </div>
      
      <div className="bg-dark-gray rounded-lg p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-shiny-gray overflow-x-auto">
{`const steps = [
  { title: 'Step 1', content: <YourStepComponent /> },
  { title: 'Step 2', content: <YourStepComponent /> },
  { title: 'Step 3', content: <YourStepComponent /> },
];

<StepForm 
  steps={steps} 
  onComplete={(data) => console.log(data)} 
/>`}
        </pre>
      </div>
    </div>
  );
};

export const ToggleSwitchDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Toggle Switch</h3>
        <p className="text-shiny-gray mb-6">
          A sleek, sliding toggle button with customizable colors, sizes, and optional icons.
          Perfect for settings, preferences, and boolean inputs.
        </p>
        <ToggleSwitchExample />
      </div>
      
      <div className="bg-dark-gray rounded-lg p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-shiny-gray overflow-x-auto">
{`<ToggleSwitch
  checked={isEnabled}
  onChange={setIsEnabled}
  label="Enable Feature"
  color="blue"
  size="md"
  onIcon="✓"
  offIcon="✗"
/>`}
        </pre>
      </div>
    </div>
  );
};

export const HorizontalSliderDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Horizontal Slider</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          A responsive horizontal content slider with smooth animations and intuitive navigation controls. 
          Features customizable items per view, optional auto-scroll functionality, and progress indicators 
          for enhanced user experience.
        </p>
        
        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
          <HorizontalSliderExample />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Basic Usage
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`import { HorizontalSlider } from '@stellarui/react';

const items = [
  <YourComponent key={1} />,
  <YourComponent key={2} />,
  <YourComponent key={3} />,
];

<HorizontalSlider
  items={items}
  itemsPerView={3}
/>`}
          </pre>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Advanced Options
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`<HorizontalSlider
  items={items}
  itemsPerView={4}
  autoScroll={true}
  autoScrollInterval={5000}
  className="custom-slider"
/>`}
          </pre>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          </div>
          <div>
            <h4 className="text-blue-200 font-semibold mb-2">Key Features</h4>
            <ul className="text-sm text-blue-200/80 space-y-1">
              <li>• Responsive design with proper gap spacing and alignment</li>
              <li>• Smooth animations with customizable transition duration</li>
              <li>• Navigation controls with disabled states</li>
              <li>• Progress indicators for visual feedback</li>
              <li>• Optional auto-scroll with configurable intervals</li>
              <li>• Flexible item rendering with React components</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Props</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-2 text-zinc-300 font-medium">Prop</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Type</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Default</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">items</td>
                <td className="py-2">React.ReactNode[]</td>
                <td className="py-2">-</td>
                <td className="py-2">Array of React components to display</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">itemsPerView</td>
                <td className="py-2">number</td>
                <td className="py-2">5</td>
                <td className="py-2">Number of items visible at once</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">autoScroll</td>
                <td className="py-2">boolean</td>
                <td className="py-2">false</td>
                <td className="py-2">Enable automatic scrolling</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">autoScrollInterval</td>
                <td className="py-2">number</td>
                <td className="py-2">3000</td>
                <td className="py-2">Auto-scroll interval in milliseconds</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-blue-400">className</td>
                <td className="py-2">string</td>
                <td className="py-2">''</td>
                <td className="py-2">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const FloatingDockDemo = () => {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Floating Dock</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          An elegant floating dock component featuring social media icons with smooth hover animations. 
          Icons grow on hover with a subtle delay, while neighboring elements glow with a beautiful 
          gradient effect that creates an engaging interactive experience.
        </p>
        
        <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 relative min-h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Interactive Demo</h4>
              <p className="text-zinc-400">Hover over the social icons to see the glow effect</p>
            </div>
          </div>
          <FloatingDockExample />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7F6A63] rounded-full mr-3"></span>
            Basic Usage
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`import { FloatingDock } from '@stellarui/react';

<FloatingDock 
  position="bottom"
  icons={socialIcons}
/>`}
          </pre>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#FEFDE0] rounded-full mr-3"></span>
            Custom Icons
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`const customIcons = [
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com' 
  },
  { 
    icon: Twitter, 
    label: 'Twitter', 
    onClick: () => alert('Clicked!') 
  },
];`}
          </pre>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#02080F]/20 to-[#7F6A63]/20 border border-[#7F6A63]/30 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7F6A63] to-[#02080F] flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full bg-[#FEFDE0]"></div>
          </div>
          <div>
            <h4 className="text-[#FEFDE0] font-semibold mb-2">Key Features</h4>
            <ul className="text-sm text-[#FEFDE0]/80 space-y-1">
              <li>• Smooth scaling animations with staggered delays</li>
              <li>• Beautiful glow effects on hover with gradient colors</li>
              <li>• Neighboring elements glow with reduced intensity</li>
              <li>• Customizable positioning (bottom, top, left, right)</li>
              <li>• Tooltips with icon labels</li>
              <li>• Support for custom icons and actions</li>
              <li>• Backdrop blur and transparency effects</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Props</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-2 text-zinc-300 font-medium">Prop</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Type</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Default</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-[#7F6A63]">icons</td>
                <td className="py-2">IconConfig[]</td>
                <td className="py-2">Social icons</td>
                <td className="py-2">Array of icon configurations</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-[#7F6A63]">position</td>
                <td className="py-2">'bottom' | 'top' | 'left' | 'right'</td>
                <td className="py-2">'bottom'</td>
                <td className="py-2">Dock position on screen</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-[#7F6A63]">className</td>
                <td className="py-2">string</td>
                <td className="py-2">''</td>
                <td className="py-2">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const MindMapDemo = () => {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Interactive Mind Map</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          A sophisticated mind map component featuring animated glowing paths that connect outer nodes 
          to central interactive buttons. Click on any central button to activate its connected paths 
          with smooth flowing animations and visual feedback.
        </p>
        
        <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
          <MindMapExample />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
            Basic Usage
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`import { MindMap } from '@stellarui/react';

<MindMap 
  centralButtons={buttons}
  outerNodes={nodes}
  onButtonClick={handleClick}
/>`}
          </pre>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
            Custom Configuration
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`const nodes = [
  { 
    id: 'node1', 
    label: 'React', 
    connectedTo: 0 
  },
  { 
    id: 'node2', 
    label: 'JavaScript', 
    connectedTo: 1 
  },
];`}
          </pre>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
          </div>
          <div>
            <h4 className="text-yellow-200 font-semibold mb-2">Key Features</h4>
            <ul className="text-sm text-yellow-200/80 space-y-1">
              <li>• Animated glowing paths with smooth transitions</li>
              <li>• Interactive central buttons with visual feedback</li>
              <li>• SVG-based curved path connections</li>
              <li>• Responsive layout with percentage-based positioning</li>
              <li>• Customizable node connections and labels</li>
              <li>• Professional glow effects with SVG filters</li>
              <li>• Click-to-activate path animations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Props</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-2 text-zinc-300 font-medium">Prop</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Type</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Default</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-yellow-400">centralButtons</td>
                <td className="py-2">CentralButton[]</td>
                <td className="py-2">Default buttons</td>
                <td className="py-2">Array of central interactive buttons</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-yellow-400">outerNodes</td>
                <td className="py-2">Node[]</td>
                <td className="py-2">Default nodes</td>
                <td className="py-2">Array of outer nodes with connections</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-yellow-400">onButtonClick</td>
                <td className="py-2">function</td>
                <td className="py-2">-</td>
                <td className="py-2">Callback when button is clicked</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-yellow-400">className</td>
                <td className="py-2">string</td>
                <td className="py-2">''</td>
                <td className="py-2">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const LiquidGlassButtonDemo = () => {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Liquid Glass Button</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          A modern button component featuring glassmorphism design with backdrop blur effects, 
          subtle gradients, and smooth animations. Perfect for creating premium, futuristic interfaces 
          with a liquid glass aesthetic.
        </p>
        
        <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 relative min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl"></div>
          <div className="relative z-10">
            <LiquidGlassButtonExample />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
            Basic Usage
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`import { LiquidGlassButton } from '@stellarui/react';

<LiquidGlassButton
  variant="primary"
  size="md"
  onClick={handleClick}
>
  Liquid Glass
</LiquidGlassButton>`}
          </pre>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
            Advanced Options
          </h4>
          <pre className="text-sm text-zinc-300 overflow-x-auto bg-zinc-950 rounded-md p-4">
{`<LiquidGlassButton
  variant="accent"
  size="lg"
  disabled={false}
  className="custom-class"
>
  Custom Button
</LiquidGlassButton>`}
          </pre>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div>
            <h4 className="text-blue-200 font-semibold mb-2">Key Features</h4>
            <ul className="text-sm text-blue-200/80 space-y-1">
              <li>• Glassmorphism design with backdrop blur effects</li>
              <li>• Multiple variants: primary, secondary, and accent</li>
              <li>• Three size options: small, medium, and large</li>
              <li>• Smooth hover animations with scale and glow effects</li>
              <li>• Liquid-like shine animation on interaction</li>
              <li>• Accessibility features with focus states</li>
              <li>• Customizable with additional CSS classes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Props</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-2 text-zinc-300 font-medium">Prop</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Type</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Default</th>
                <th className="text-left py-2 text-zinc-300 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">children</td>
                <td className="py-2">React.ReactNode</td>
                <td className="py-2">-</td>
                <td className="py-2">Button content</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">variant</td>
                <td className="py-2">'primary' | 'secondary' | 'accent'</td>
                <td className="py-2">'primary'</td>
                <td className="py-2">Visual style variant</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">size</td>
                <td className="py-2">'sm' | 'md' | 'lg'</td>
                <td className="py-2">'md'</td>
                <td className="py-2">Button size</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">onClick</td>
                <td className="py-2">function</td>
                <td className="py-2">-</td>
                <td className="py-2">Click handler function</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono text-blue-400">disabled</td>
                <td className="py-2">boolean</td>
                <td className="py-2">false</td>
                <td className="py-2">Disable button interaction</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-blue-400">className</td>
                <td className="py-2">string</td>
                <td className="py-2">''</td>
                <td className="py-2">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const ButtonDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Button Component</h3>
        <p className="text-zinc-400 mb-6">
          A versatile button component with multiple variants, sizes, and states for all your interface needs.
        </p>
        
        <div className="space-y-6">
          {/* Primary Buttons */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Primary Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-br from-[#7F6A63] to-[#02080F]  hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                Primary
              </button>
              <button className="px-6 py-3 bg-gradient-to-br from-[#7F6A63] to-[#02080F] hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                Large Primary
              </button>
              <button className="px-3 py-1.5 bg-gradient-to-br from-[#7F6A63] to-[#02080F]  hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm">
                Small Primary
              </button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Secondary Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 border border-zinc-600 hover:border-zinc-500 text-white rounded-lg transition-colors font-medium">
                Secondary
              </button>
              <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium">
                Ghost
              </button>
              <button className="px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Link
              </button>
            </div>
          </div>

          {/* State Buttons */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Button States</h4>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium">
                Success
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium">
                Danger
              </button>
              <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors font-medium">
                Warning
              </button>
              <button className="px-4 py-2 bg-zinc-600 text-zinc-400 rounded-lg cursor-not-allowed font-medium" disabled>
                Disabled
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-zinc-300 overflow-x-auto">
{`<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="secondary" size="lg">
  Secondary Action
</Button>`}
        </pre>
      </div>
    </div>
  );
};

export const CalendarDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Calendar Component</h3>
        <p className="text-zinc-400 mb-6">
          An interactive calendar component for date selection with month navigation and customizable styling.
        </p>
        
        <div className="max-w-sm mx-auto bg-zinc-800 rounded-lg border border-zinc-700 p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-zinc-700 rounded-lg transition-colors">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <h3 className="text-white font-semibold">December 2024</h3>
            <button className="p-2 hover:bg-zinc-700 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-zinc-400 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6 + 1;
              const isCurrentMonth = day > 0 && day <= 31;
              const isToday = day === 15;
              const isSelected = day === 22;
              
              return (
                <button
                  key={i}
                  className={`
                    h-8 w-8 text-sm rounded-lg transition-colors
                    ${!isCurrentMonth ? 'text-zinc-600' : 'text-white hover:bg-zinc-700'}
                    ${isToday ? 'bg-[#7F6A63] text-white' : ''}
                    ${isSelected ? 'bg-white text-zinc-900' : ''}
                  `}
                >
                  {isCurrentMonth ? day : ''}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-zinc-300 overflow-x-auto">
{`<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
  minDate={new Date()}
  maxDate={new Date('2025-12-31')}
/>`}
        </pre>
      </div>
    </div>
  );
};

export const InputDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Input Component</h3>
        <p className="text-zinc-400 mb-6">
          Styled input fields with various states, validation, and customizable appearances.
        </p>
        
        <div className="space-y-6 max-w-md">
          {/* Basic Input */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Basic Input
            </label>
            <input
              type="text"
              placeholder="Enter text here..."
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Success State */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Success State
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              value="user@example.com"
              className="w-full px-4 py-3 bg-zinc-800 border border-green-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
            />
            <p className="text-green-400 text-sm mt-1">Email is valid</p>
          </div>

          {/* Error State */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Error State
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
            />
            <p className="text-red-400 text-sm mt-1">Password is required</p>
          </div>

          {/* Disabled State */}
          <div>
            <label className="block text-sm font-medium text-zinc-500 mb-2">
              Disabled Input
            </label>
            <input
              type="text"
              placeholder="Disabled input"
              disabled
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 placeholder-zinc-600 cursor-not-allowed"
            />
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Textarea
            </label>
            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-zinc-300 overflow-x-auto">
{`<Input
  type="text"
  placeholder="Enter text..."
  value={value}
  onChange={setValue}
  error={error}
  disabled={false}
/>`}
        </pre>
      </div>
    </div>
  );
};

export const Simple3DCardDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Simple 3D Card</h3>
        <p className="text-zinc-400 mb-6">
          An interactive 3D card component with hover effects and smooth animations.
        </p>
        
        <div className="flex justify-center">
          <div className="group perspective-1000">
            <div className="relative w-80 h-48 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#02080F] to-[#7F6A63] rounded-xl shadow-2xl p-6 backface-hidden">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#FEFDE0] mb-2">3D Card</h4>
                    <p className="text-[#FEFDE0] text-sm">
                      Hover over this card to see the 3D transformation effect in action.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8  rounded-full"><img src="https://hackathon.dev/assets/b-CZEoU1bW.avif" className="mx-1 h-8 w-6"/></div>
                    <span className="text-[#FEFDE0] text-sm">Interactive</span>
                  </div>
                </div>
              </div>
              
              {/* Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-xl transform translate-y-2 translate-x-2 -z-10 transition-transform duration-500 group-hover:translate-y-4 group-hover:translate-x-4"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gradient-to-br from-[#02080F] to-[#7F6A63] rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7F6A63] to-[#02080F]  rounded-lg mb-3"></div>
            <h5 className="text-white font-medium mb-2">Feature Card</h5>
            <p className="text-zinc-400 text-sm">Simple card with hover effects</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#02080F] to-[#7F6A63] rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-[#02080F] rounded-lg mb-3"></div>
            <h5 className="text-white font-medium mb-2">Info Card</h5>
            <p className="text-zinc-400 text-sm">Another example card layout</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#02080F] to-[#7F6A63] rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-[#02080F] rounded-lg mb-3"></div>
            <h5 className="text-white font-medium mb-2">Action Card</h5>
            <p className="text-zinc-400 text-sm">Card with call-to-action</p>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-zinc-300 overflow-x-auto">
{`<Simple3DCard
  title="Card Title"
  description="Card description"
  gradient="from-blue-600 to-purple-700"
  hover3D={true}
/>`}
        </pre>
      </div>
    </div>
  );
};

export const BadgeDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Badge Component</h3>
        <p className="text-zinc-400 mb-6">
          Small status indicators and labels for categorizing and highlighting content.
        </p>
        
        <div className="space-y-6">
          {/* Basic Badges */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Basic Badges</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[#02080F] text-white text-xs font-medium rounded-full">
                Primary
              </span>
              <span className="px-2 py-1 bg-[#7F6A63] text-white text-xs font-medium rounded-full">
                Secondary
              </span>
              <span className="px-2 py-1 bg-[#FEFDE0]  text-[#02080F] text-xs font-medium rounded-full">
                Success
              </span>
              <span className="px-2 py-1 bg-[#FEFDE0]  text-[#02080F] text-xs font-medium rounded-full">
                Error
              </span>
              <span className="px-2 py-1 bg-yellow-600 text-white text-xs font-medium rounded-full">
                Warning
              </span>
            </div>
          </div>

          {/* Outlined Badges */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Outlined Badges</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-[#7F6A63]text-blue-400 text-xs font-medium rounded-full">
                Primary
              </span>
              <span className="px-2 py-1 border border-[#FEFDE0] text-zinc-400 text-xs font-medium rounded-full">
                Secondary
              </span>
              <span className="px-2 py-1 border border-green-500 text-green-400 text-xs font-medium rounded-full">
                Success
              </span>
              <span className="px-2 py-1 border border-red-500 text-red-400 text-xs font-medium rounded-full">
                Error
              </span>
            </div>
          </div>

          {/* Different Sizes */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Sizes</h4>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-1.5 py-0.5bg-gradient-to-br from-[#02080F] to-[#7F6A63]text-white text-xs font-medium rounded">
                Small
              </span>
              <span className="px-2 py-1 bg-gradient-to-br from-[#02080F] to-[#7F6A63] text-sm font-medium rounded-md">
                Medium
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-br from-[#02080F] to-[#7F6A63]e text-base font-medium rounded-lg">
                Large
              </span>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">With Icons</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Online
              </span>
              <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Offline
              </span>
              <span className="px-2 py-1 bg-yellow-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Pending
              </span>
            </div>
          </div>

          {/* Number Badges */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Number Badges</h4>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <div className="w-8 h-8 bg-zinc-700 rounded-lg"></div>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="relative">
                <div className="w-8 h-8 bg-zinc-700 rounded-lg"></div>
                <span className="absolute -top-2 -right-2 w-6 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  99+
                </span>
              </div>
              <div className="relative">
                <div className="w-8 h-8 bg-zinc-700 rounded-lg"></div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4">
        <h4 className="text-lg font-medium text-white mb-2">Usage</h4>
        <pre className="text-sm text-zinc-300 overflow-x-auto">
{`<Badge variant="primary" size="md">
  New
</Badge>

<Badge variant="outline" color="success">
  Completed
</Badge>

<Badge variant="dot" color="error" count={5} />`}
        </pre>
      </div>
    </div>
  );
};