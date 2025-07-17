import React from 'react';
import { MindMap } from './docs/MindMap';
import { FloatingDock } from './docs/FloatingDock';
import { RotatingCarousel } from './docs/RotatingCarousel';
import { HorizontalSlider } from './docs/HorizontalSlider';
import { LiquidButton, MetalButton } from "./liquid-glass-button";
import {LiquidGlassButton} from "./docs/LiquidGlassButton"


const GridLayout: React.FC = () => {
  // Sample data for components
  const carouselImages = [
    'https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-143409.jpg',
    'https://img.freepik.com/free-vector/black-background-with-particles-mesh_1017-23616.jpg',
    'https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background_53876-97989.jpg',
    'https://img.freepik.com/free-vector/vektor-latar-belakang-pola-gelombang-abstrak-3d_53876-166839.jpg',
    'https://img.freepik.com/premium-vector/wave-particles-digital-wave-background-concept-abstract-technology-background-big-data-visualization-vector-illustration_634443-1163.jpg',
  ];

  const sliderItems = [
    <div key={1} className="bg-zinc-800/50 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700 backdrop-blur-sm">Feature 1</div>,
    <div key={2} className="bg-zinc-800/50 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700 backdrop-blur-sm">Feature 2</div>,
    <div key={3} className="bg-zinc-800/50 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700 backdrop-blur-sm">Feature 3</div>,
    <div key={4} className="bg-zinc-800/50 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700 backdrop-blur-sm">Feature 4</div>,
    <div key={5} className="bg-zinc-800/50 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700 backdrop-blur-sm">Feature 5</div>,
    <div key={6} className="bg-zinc-800/50 h-32 rounded-lg flex items-center justify-center text-white font-semibold border border-zinc-700 backdrop-blur-sm">Feature 6</div>,
  ];

  return (
    <div className="bg-zinc-950 text-white displayGrid">
      {/* Main Content */}
      <main className="p-6 mt-[150px]">
        <div className="max-w-7xl mx-[auto]">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Component Display</h1>
            <p className="text-lg text-zinc-400">
              Interactive showcase of StellarUI components in a beautiful bento grid layout
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[700px]">
            {/* Mind Map - Large top left */}
            <div className="col-span-6 row-span-4 bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 backdrop-blur-sm">
              <div className="h-full">
                <div className="h-full">
                  <MindMap />
                </div>
              </div>
            </div>

            {/* Rotating Carousel - Top right */}
            <div className="col-span-6 row-span-3 bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 backdrop-blur-sm">
              <div className="h-full">
                <div className="h-full">
                  <RotatingCarousel images={carouselImages} autoRotate={true} autoRotateInterval={4000} />
                </div>
              </div>
            </div>

            {/* Liquid Glass Button - Small top right */}
              <div className="col-span-6 row-span-1 bg-zinc-800 rounded-xl border border-zinc-800 p-6 backdrop-blur-sm relative">
              <MetalButton className="text-gray-300 z-10 ">
                Metal Button
              </MetalButton> 
              <LiquidButton   variant="default" size="xl" className=' ml-9 text-gray-200'>
                Liquid Button
              </LiquidButton>
              <LiquidGlassButton  className=' ml-9 text-gray-200'  variant="accent">
                          Accent Glass
              </LiquidGlassButton>

              </div>    
        

            {/* Horizontal Slider - Bottom left */}
            <div className="col-span-8 row-span-2 bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 backdrop-blur-sm">
              <div className="h-full">
                <div className="h-[calc(100%-2rem)]">
                  <HorizontalSlider 
                    items={sliderItems} 
                    itemsPerView={3} 
                    autoScroll={true}
                    autoScrollInterval={3000}
                  />
                </div>
              </div>
            </div>

            {/* Floating Dock - Bottom right */}
            <div className="col-span-4 row-span-2 bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 backdrop-blur-sm relative">
              <div className="h-full">
                <div className='h-[100px] flex justify-center items-center w-full rounded-xl hover:scale-105 
                    shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] 
                    transition-all'
                ><h2>Floating Dock</h2></div>
                <div className="h-auto relative">
                  <FloatingDock position="bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GridLayout;