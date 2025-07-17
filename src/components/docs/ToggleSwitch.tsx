import React, { useState } from 'react';

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'red';
  label?: string;
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
  className?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  color = 'blue',
  label,
  onIcon,
  offIcon,
  className = '',
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          switch: 'w-8 h-4',
          thumb: 'w-3 h-3',
          translate: 'translate-x-4 translate-y-[0.5px]',
        };
      case 'lg':
        return {
          switch: 'w-14 h-7',
          thumb: 'w-6 h-6',
          translate: 'translate-x-7 translate-y-px',
        };
      default:
        return {
          switch: 'w-12 h-5',
          thumb: 'w-4 h-4',
          translate: 'translate-x-7 translate-y-px',
        };
    } 
  };

  const getColorClasses = () => {
    const baseColors = {
      blue: isChecked ? 'bg-blue-600' : 'bg-light-gray',
      green: isChecked ? 'bg-green-600' : 'bg-light-gray',
      purple: isChecked ? 'bg-purple-600' : 'bg-light-gray',
      red: isChecked ? 'bg-red-600' : 'bg-light-gray',
    };
    return baseColors[color];
  };

  const { switch: switchSize, thumb: thumbSize, translate } = getSizeClasses();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {label && (
        <label className="text-white font-medium cursor-pointer" onClick={handleToggle}>
          {label}
        </label>
      )}
      
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-offset-deep-black focus:ring-blue-500
          ${switchSize} ${getColorClasses()}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <span className="sr-only">Toggle switch</span>
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 
            transition-transform duration-200 ease-in-out flex items-center justify-center
            ${thumbSize}
            ${isChecked ? translate : 'translate-x-0'}
          `}
        >
          {isChecked && onIcon && (
            <span className="text-xs">{onIcon}</span>
          )}
          {!isChecked && offIcon && (
            <span className="text-xs">{offIcon}</span>
          )}
        </span>
      </button>
    </div>
  );
};

// Example usage component
export const ToggleSwitchExample = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="space-y-6">
      <ToggleSwitch
        checked={darkMode}
        onChange={setDarkMode}
        label="Dark Mode"
        color="blue"
        size="md"
      />
      
      <ToggleSwitch
        checked={notifications}
        onChange={setNotifications}
        label="Push Notifications"
        color="green"
        size="lg"
        onIcon="🔔"
        offIcon="🔕"
      />
      
      <ToggleSwitch
        checked={autoSave}
        onChange={setAutoSave}
        label="Auto Save"
        color="purple"
        size="sm"
      />
      
      <ToggleSwitch
        checked={false}
        disabled={true}
        label="Disabled Toggle"
        color="red"
      />
    </div>
  );
};