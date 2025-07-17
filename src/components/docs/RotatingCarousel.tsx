import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RotatingCarouselProps {
  images: string[];
  autoRotate?: boolean;
  autoRotateInterval?: number;
  className?: string;
}

export const RotatingCarousel: React.FC<RotatingCarouselProps> = ({
  images,
  autoRotate = false,
  autoRotateInterval = 3000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, autoRotateInterval, currentIndex]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleImageClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getImageStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = diff > images.length / 2 ? diff - images.length : diff < -images.length / 2 ? diff + images.length : diff;
    
    let transform = '';
    let zIndex = 0;
    let opacity = 0.4;
    
    if (normalizedDiff === 0) {
      transform = 'translateX(0) scale(1) rotateY(0deg)';
      zIndex = 3;
      opacity = 1;
    } else if (normalizedDiff === 1) {
      transform = 'translateX(120px) scale(0.8) rotateY(-25deg)';
      zIndex = 2;
      opacity = 0.7;
    } else if (normalizedDiff === -1) {
      transform = 'translateX(-120px) scale(0.8) rotateY(25deg)';
      zIndex = 2;
      opacity = 0.7;
    } else if (normalizedDiff === 2) {
      transform = 'translateX(200px) scale(0.6) rotateY(-45deg)';
      zIndex = 1;
      opacity = 0.4;
    } else if (normalizedDiff === -2) {
      transform = 'translateX(-200px) scale(0.6) rotateY(45deg)';
      zIndex = 1;
      opacity = 0.4;
    } else {
      transform = 'translateX(300px) scale(0.4) rotateY(-60deg)';
      zIndex = 0;
      opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
    };
  };

  if (images.length === 0) {
    return <div className="text-shiny-gray">No images provided</div>;
  }

  return (
    <div className={`relative w-full h-80 overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute cursor-pointer transition-all duration-600 ease-out"
            style={getImageStyle(index)}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Carousel image ${index + 1}`}
              className="w-64 h-48 object-cover rounded-lg shadow-2xl border border-light-gray"
            />
          </div>
        ))}
      </div>
      
      <button
        onClick={handlePrevious}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-dark-gray/80 hover:bg-medium-gray/80 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-dark-gray/80 hover:bg-medium-gray/80 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-shiny-gray/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};