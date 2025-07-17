import React, { useState, useEffect, useRef } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  connectedTo: number; // Index of central button (0, 1, or 2)
}

interface CentralButton {
  id: string;
  label: string;
  number: number;
}

interface LightTrail {
  id: string;
  pathId: string;
  progress: number;
  speed: number;
  intensity: number;
}

export const MindMap: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [lightTrails, setLightTrails] = useState<LightTrail[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Central buttons data
  const centralButtons: CentralButton[] = [
    { id: 'blind', label: 'STELLAR UI', number: 1 },
  ];

  // Outer nodes data with their connections to central buttons
  const outerNodes: Node[] = [
    { id: 'accessibility', label: 'Sliders', x: 15, y: 15, connectedTo: 1 },
    { id: 'frontend-design', label: 'Front-End', x: 85, y: 15, connectedTo: 1 },
    { id: 'javascript', label: 'Functionality', x: 15, y: 35, connectedTo: 1 },
    { id: 'dom', label: 'Modern', x: 85, y: 35, connectedTo: 1 },
    { id: 'react', label: 'React', x: 15, y: 55, connectedTo: 1},
    { id: 'internationalization', label: 'Easy Import', x: 85, y: 55, connectedTo: 1 },
    { id: 'networking', label: 'Designs', x: 15, y: 75, connectedTo: 1},
    { id: 'user-interfaces', label: 'User interfaces', x: 85, y: 75, connectedTo: 1 },
    { id: 'data-structures', label: 'Flow', x: 15, y: 95, connectedTo: 1 },
    { id: 'performance', label: 'Performance', x: 85, y: 95, connectedTo: 1 },
  ];

  // Generate random light trails
  useEffect(() => {
    const generateTrails = () => {
      const trails: LightTrail[] = [];

      outerNodes.forEach((node, index) => {
        // Create 1-2 trails per path for dynamic effect
        const trailCount = 1;
        
        for (let i = 0; i < trailCount; i++) {
          trails.push({
            id: `${node.id}-trail-${i}`,
            pathId: `path-${node.id}`,
            progress: Math.random() * 100, // Random starting position
            speed: 0.3 + Math.random() * 0.7, // Random speed between 0.3 and 1.0
            intensity: 0.4 + Math.random() * 0.6, // Random intensity
          });
        }
      });

      setLightTrails(trails);
    };

    generateTrails();
  }, []);

  // Animate light trails - one direction only
  useEffect(() => {
    const animateTrails = () => {
      setLightTrails(prevTrails => 
        prevTrails.map(trail => {
          let newProgress = trail.progress + trail.speed;

          // Reset to beginning when reaching the end
          if (newProgress >= 100) {
            newProgress = 0;
          }

          return {
            ...trail,
            progress: newProgress,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animateTrails);
    };

    animationRef.current = requestAnimationFrame(animateTrails);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Generate SVG path between two points with curve
  const generatePath = (startX: number, startY: number, endX: number, endY: number) => {
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    
    // Create control points for smooth curves
    const controlX1 = startX + (midX - startX) * 0.5;
    const controlY1 = startY;
    const controlX2 = endX - (endX - midX) * 0.5;
    const controlY2 = endY;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  // Get central button position (center of the container)
  const getCentralButtonPosition = (index: number) => {
    return {
      x: 50, // Center horizontally
      y: 45 + (index * 8), // Stack vertically with spacing
    };
  };

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(activeButton === buttonIndex ? null : buttonIndex);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800"
    >
      {/* Outer Nodes */}
      {outerNodes.map((node) => (
        <div
          key={node.id}
          className="absolute text-white text-sm font-medium whitespace-nowrap"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="flex items-center space-x-2">
            <span>{node.label}</span>
            {activeButton === node.connectedTo && (
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#cd5a25] to-transparent"></div>
            )}
          </div>
        </div>
      ))}

      {/* Central Buttons */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2">
        {centralButtons.map((button, index) => {
          const isActive = activeButton === index;
          return (
            <button
              key={button.id}
              onClick={() => handleButtonClick(index)}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg border transition-all duration-300
                ${isActive 
                  ? 'bg-zinc-800 border-[#cd5a25] text-white shadow-lg shadow-yellow-400/20' 
                  : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white'
                }
              `}
            >
            
              <span className="font-medium">{button.label}</span>
            </button>
          );
        })}
      </div>

      {/* SVG Paths with Light Trails */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          {/* Custom gradient for light trails */}
          <linearGradient id="customTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cd5a25" stopOpacity="0" />
            <stop offset="0%" stopColor="#925c40" stopOpacity="0.3" />
            <stop offset="0%" stopColor="#cd5a25" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#cd5a25" stopOpacity="0.8" />
            <stop offset="64%" stopColor="#925c40" stopOpacity="1" />
            <stop offset="100%" stopColor="#925c40" stopOpacity="0.6" />
          </linearGradient>

          {/* Moving gradient for animated effect */}
          {lightTrails.map(trail => (
            <linearGradient key={`moving-gradient-${trail.id}`} id={`moving-gradient-${trail.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cd5a25" stopOpacity="0" />
              <stop offset="100%" stopColor="#925c40" stopOpacity={trail.intensity * 0.7} />
            </linearGradient>
          ))}
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Enhanced glow filter for trails */}
          <filter id="trailGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feGaussianBlur stdDeviation="8" result="bigBlur"/>
            <feMerge> 
              <feMergeNode in="bigBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {outerNodes.map((node) => {
          const centralPos = getCentralButtonPosition(node.connectedTo);
          
          // Convert percentages to SVG coordinates
          const startX = (node.x / 100) * (containerRef.current?.offsetWidth || 800);
          const startY = (node.y / 100) * (containerRef.current?.offsetHeight || 400);
          const endX = (centralPos.x / 100) * (containerRef.current?.offsetWidth || 800);
          const endY = (centralPos.y / 100) * (containerRef.current?.offsetHeight || 400);
          
          const pathData = generatePath(startX, startY, endX, endY);
          
          return (
            <g key={`path-group-${node.id}`}>
              {/* Base path */}
              <path
                id={`path-${node.id}`}
                d={pathData}
                stroke="rgba(64, 64, 64, 0.3)"
                strokeWidth="1"
                fill="none"
              />
              
              {/* Light trails for this path */}
              {lightTrails
                .filter(trail => trail.pathId === `path-${node.id}`)
                .map(trail => (
                  <path
                    key={trail.id}
                    d={pathData}
                    stroke={`url(#moving-gradient-${trail.id})`}
                    strokeWidth="4"
                    fill="none"
                    filter="url(#trailGlow)"
                    style={{
                      strokeDasharray: '30 200',
                      strokeDashoffset: `${230 - (trail.progress * 2.3)}`,
                      opacity: trail.intensity,
                    }}
                  />
                ))
              }
              
              {/* Enhanced glow when button is active */}
              {activeButton === node.connectedTo && (
                <path
                  d={pathData}
                  stroke="url(#customTrailGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  className="animate-pulse"
                  style={{
                    opacity: 0.8,
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Example usage component
export const MindMapExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Interactive Mind Map</h3>
        <p className="text-zinc-400 mb-6">
          Click on the central button to activate enhanced glowing effects. 
          Watch the beautiful gradient light trails move smoothly along the paths in one direction.
          Each trail features a custom gradient with pink, green, yellow, and cyan colors.
        </p>
        <MindMap />
      </div>
    </div>
  );
};