import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalSliderProps {
  items: React.ReactNode[];
  itemsPerView?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  className?: string;
}

export const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  items,
  itemsPerView = 4,
  autoScroll = false,
  autoScrollInterval = 3000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateItemWidth = () => {
      if (viewportRef.current) {
        const containerWidth = viewportRef.current.offsetWidth;
        const gapSize = 16; // gap-x-4 = 16px
        const totalGapSpace = (itemsPerView - 1) * gapSize;
        setItemWidth((containerWidth - totalGapSpace) / itemsPerView);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, [itemsPerView]);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, currentIndex]);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const handlePrevious = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.max(0, prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Slider Container */}
      <div ref={viewportRef} className="relative overflow-hidden rounded-lg">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          disabled={!canScrollLeft || isAnimating}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          disabled={!canScrollRight || isAnimating}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          className="flex gap-x-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (itemWidth + 16)}px)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${itemWidth}px` }}
            >
              <div className="h-full">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 300);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage component
export const HorizontalSliderExample = () => {
  const sampleItems = [
    <div key={1} className="bg-zinc-800 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700">Card 1</div>,
    <div key={2} className="bg-zinc-800 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700">Card 2</div>,
    <div key={3} className="bg-zinc-800 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700">Card 3</div>,
    <div key={4} className="bg-zinc-800 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700">Card 4</div>
  ];

  return (
    <HorizontalSlider
      items={sampleItems}
      itemsPerView={4}
      autoScroll={false}
    />
  );
};