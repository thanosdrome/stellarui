import React, { useEffect, useState } from "react";

export const PointerTracker: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let targetPosition = { x: 0, y: 0 };

    const animate = () => {
      setMousePosition((prev) => {
        const lerp = 0.06; // Lower value for slower animation
        const x = prev.x + (targetPosition.x - prev.x) * lerp;
        const y = prev.y + (targetPosition.y - prev.y) * lerp;
        return { x, y };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-700"
      style={{
        background: `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(224, 167, 132, 0.15) 0%, rgba(194, 107, 58, 0.08) 30%, transparent 80%)`,
        mixBlendMode: "screen",
      }}
    />
  );
};
