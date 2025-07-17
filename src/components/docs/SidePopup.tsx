import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface SidePopupProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
  isVisible: boolean;
}

export const SidePopup: React.FC<SidePopupProps> = ({
  message,
  type = 'info',
  duration = 4000,
  onClose,
  isVisible,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      if (duration > 0) {
        const timer = setTimeout(() => {
          setShow(false);
          setTimeout(() => onClose?.(), 300);
        }, duration);
        return () => clearTimeout(timer);
      }
    } else {
      setShow(false);
    }
  }, [isVisible, duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-600/90',
          border: 'border-green-500',
          icon: CheckCircle,
        };
      case 'error':
        return {
          bg: 'bg-red-600/90',
          border: 'border-red-500',
          icon: AlertCircle,
        };
      case 'warning':
        return {
          bg: 'bg-yellow-600/90',
          border: 'border-yellow-500',
          icon: AlertTriangle,
        };
      default:
        return {
          bg: 'bg-blue-600/90',
          border: 'border-blue-500',
          icon: Info,
        };
    }
  };

  const { bg, border, icon: Icon } = getTypeStyles();

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose?.(), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <div
        className={`pointer-events-auto transition-transform duration-300 ease-out ${
          show ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className={`m-4 p-4 rounded-lg shadow-2xl backdrop-blur-sm ${bg} ${border} border-l-4 min-w-80 max-w-md`}>
          <div className="flex items-start space-x-3">
            <Icon className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-white font-medium leading-relaxed">{message}</p>
            </div>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors duration-200 flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook for easier usage
export const useSidePopup = () => {
  const [popup, setPopup] = useState<{
    isVisible: boolean;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration: number;
  }>({
    isVisible: false,
    message: '',
    type: 'info',
    duration: 4000,
  });

  const showPopup = (
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
    duration: number = 4000
  ) => {
    setPopup({ isVisible: true, message, type, duration });
  };

  const hidePopup = () => {
    setPopup(prev => ({ ...prev, isVisible: false }));
  };

  return {
    popup,
    showPopup,
    hidePopup,
  };
};