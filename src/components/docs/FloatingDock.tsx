import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Instagram, Facebook, Youtube, Mail, Globe } from 'lucide-react';

interface FloatingDockProps {
  icons?: Array<{
    icon: React.ComponentType<any>;
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
  position?: 'bottom' | 'top' | 'left' | 'right';
  className?: string;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  icons = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' }
  ], 
  position = 'bottom',
  className = '',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDockHovered, setIsDockHovered] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'left':
        return 'left-4 top-1/2 transform -translate-y-1/2 flex-col';
      case 'right':
        return 'right-4 top-1/2 transform -translate-y-1/2 flex-col';
      default:
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
    }
  };

  const getGlowIntensity = (index: number) => {
    if (hoveredIndex === null) return 0;
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1; // Hovered item
    if (distance === 1) return 0.6; // Adjacent items
    if (distance === 2) return 0.3; // Second neighbors
    return 0;
  };

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.3; // Hovered item grows most
    if (distance === 1) return 1.15; // Adjacent items grow slightly
    return 1;
  };

  const getColorTransitionDelay = (index: number) => {
    if (hoveredIndex === null) return '0ms';
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return '0ms'; // Hovered item changes immediately
    if (distance === 1) return '100ms'; // Adjacent items have slight delay
    if (distance === 2) return '200ms'; // Second neighbors have more delay
    return '300ms';
  };

  const handleIconClick = (icon: typeof icons[0]) => {
    if (icon.onClick) {
      icon.onClick();
    } else if (icon.href) {
      window.open(icon.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`fixed z-50 ${getPositionClasses()} ${className}`}
      onMouseEnter={() => setIsDockHovered(true)}
      onMouseLeave={() => setIsDockHovered(false)}
    >
      <div className={`
        flex ${position === 'left' || position === 'right' ? 'flex-col' : 'flex-row'} 
        items-center bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl
        shadow-2xl transition-all duration-300 ease-out
        ${isDockHovered ? 'gap-6 px-6 py-4' : 'gap-2 p-3'}
      `}>
        {icons.map((iconData, index) => {
          const Icon = iconData.icon;
          const glowIntensity = getGlowIntensity(index);
          const scale = getScale(index);
          const colorDelay = getColorTransitionDelay(index);
          
          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => handleIconClick(iconData)}
                className={`
                  relative w-12 h-12 rounded-xl flex items-center justify-center
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index 
                    ? 'bg-gradient-to-br from-[#7F6A63] to-[#02080F]' 
                    : 'bg-zinc-800 hover:bg-zinc-700'
                  }
                `}
                style={{
                  transform: `scale(${scale})`,
                  boxShadow: glowIntensity > 0 
                    ? `0 0 ${20 * glowIntensity}px rgba(254, 253, 224, ${0.4 * glowIntensity}), 
                       0 0 ${40 * glowIntensity}px rgba(127, 106, 99, ${0.3 * glowIntensity})`
                    : 'none',
                  transitionDelay: hoveredIndex === index ? '0ms' : `${Math.abs(index - (hoveredIndex || 0)) * 50}ms`,
                  // Add separate transition delays for different properties
                  transitionProperty: 'transform, box-shadow, background-color',
                  transitionDuration: '500ms, 500ms, 600ms',
                  transitionTimingFunction: 'ease-out, ease-out, ease-in-out',
                  // Color transition gets its own delay
                  '--color-delay': colorDelay,
                }}
              >
                <Icon 
                  className={`w-6 h-6  transition-colors duration-700 ease-in-out ${
                    hoveredIndex === index ? 'text-[#FEFDE0]' : 'text-white'
                  }`}
                  style={{
                    transitionDelay: colorDelay,
                  }}
                />
              </button>
              
              {/* Tooltip */}
              <div className={`
                absolute ${position === 'bottom' ? 'bottom-full mb-2' : 
                         position === 'top' ? 'top-full mt-2' :
                         position === 'left' ? 'left-full ml-2' : 'right-full mr-2'}
                left-1/2 transform -translate-x-1/2
                ${position === 'left' || position === 'right' ? 'left-auto top-1/2 -translate-y-1/2' : ''}
                px-2 py-1 bg-zinc-900 text-white text-xs rounded-md
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                pointer-events-none whitespace-nowrap z-10 
              `}>
                {iconData.label}
                <div className={`
                  absolute w-2 h-2 bg-zinc-900 transform rotate-45
                  ${position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 -mt-1' :
                    position === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1' :
                    position === 'left' ? 'right-full top-1/2 -translate-y-1/2 -mr-1' :
                    'left-full top-1/2 -translate-y-1/2 -ml-1'}
                `} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Example usage component
export const FloatingDockExample = () => {
  const customIcons = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Mail, label: 'Contact', href: 'mailto:hello@stellarui.com' },
  ];

  return (
    <div className="relative h-96 bg-zinc-900 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Floating Dock Demo</h3>
          <p className="text-zinc-400">Hover over the social icons at the bottom</p>
        </div>
      </div>
      
      <FloatingDock icons={customIcons} position="bottom" />
    </div>
  );
};