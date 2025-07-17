import React from 'react';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return '';
      case 'accent':
        return 'bg-gradient-to-r from-[#925c40] to-[#212121] border-[#212121] ';
      default:
        return 'rounded-xxl hover:scale-105 shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] transition-all';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-full border backdrop-blur-md
        font-medium text-white transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] 
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
      >
      {/* Liquid reflection overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      
      {/* Animated shine effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 hover:translate-x-full" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Example usage component
export const LiquidGlassButtonExample = () => {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Variants</h4>
        <div className="flex flex-wrap gap-4">
          <LiquidGlassButton variant="primary">
            Primary Glass
          </LiquidGlassButton>
          <LiquidGlassButton variant="secondary">
            Secondary Glass
          </LiquidGlassButton>
          <LiquidGlassButton variant="accent">
            Accent Glass
          </LiquidGlassButton>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Sizes</h4>
        <div className="flex flex-wrap items-center gap-4">
          <LiquidGlassButton size="sm">
            Small
          </LiquidGlassButton>
          <LiquidGlassButton size="md">
            Medium
          </LiquidGlassButton>
          <LiquidGlassButton size="lg">
            Large
          </LiquidGlassButton>
        </div>
      </div>

      {/* States */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">States</h4>
        <div className="flex flex-wrap gap-4">
          <LiquidGlassButton onClick={() => alert('Clicked!')}>
            Interactive
          </LiquidGlassButton>
          <LiquidGlassButton disabled>
            Disabled
          </LiquidGlassButton>
        </div>
      </div>

      {/* Featured Example */}
      <div className="text-center">
        <h4 className="text-lg font-semibold text-white mb-6">Featured Example</h4>
        <LiquidGlassButton 
          variant="primary" 
          size="lg"
          onClick={() => alert('Welcome to the future!')}
        >
          Liquid Glass
        </LiquidGlassButton>
      </div>
    </div>
  );
};