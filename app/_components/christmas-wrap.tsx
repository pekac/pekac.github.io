"use client";

import React, { useState, useLayoutEffect } from "react";

interface IChristmassWrapper {
  children: React.ReactNode;
}

type Snowflake = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  wobble: number;
  rotation: number;
  rotationSpeed: number; // New property for rotation control
};

const initialSnowflakes = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: -10 - Math.random() * 20,
  size: 0.03 + Math.random() * 0.5,
  speed: 0.5 + Math.random() * 1,
  wobble: Math.random() * 2,
  rotation: Math.random() * 360,
  rotationSpeed: 0.2 + Math.random() * 0.8, // Add random rotation speed (slower than before)
}));

export default function ChristmasWrapper({ children }: IChristmassWrapper) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>(initialSnowflakes);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((prev) =>
        prev.map((flake) => ({
          ...flake,
          y: flake.y >= 100 ? -10 : flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y * 0.05) * flake.wobble,
          rotation: ((flake.rotation + flake.rotationSpeed) % 360) + 150, // Use separate rotation speed
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        {snowflakes.map((flake) => (
          <g
            key={flake.id}
            transform={`translate(${flake.x}, ${flake.y}) scale(${flake.size}) rotate(${flake.rotation})`}
            opacity="0.6"
          >
            {/* Snowflake design */}
            <g stroke="#4AA5FF" strokeWidth="0.4" strokeLinecap="round">
              {/* Main spokes */}
              <line x1="0" y1="-2" x2="0" y2="2" />
              <line x1="-1.732" y1="-1" x2="1.732" y2="1" />
              <line x1="-1.732" y1="1" x2="1.732" y2="-1" />

              {/* Branch pattern that will be repeated */}
              <g id={`branch-${flake.id}`}>
                <line x1="0" y1="-0.75" x2="0.375" y2="-1.125" />
                <line x1="0" y1="-0.75" x2="-0.375" y2="-1.125" />
                <line x1="0" y1="-1.25" x2="0.25" y2="-1.5" />
                <line x1="0" y1="-1.25" x2="-0.25" y2="-1.5" />
              </g>

              {/* Rotate the branch pattern 6 times */}
              <use href={`#branch-${flake.id}`} transform="rotate(60)" />
              <use href={`#branch-${flake.id}`} transform="rotate(120)" />
              <use href={`#branch-${flake.id}`} transform="rotate(180)" />
              <use href={`#branch-${flake.id}`} transform="rotate(240)" />
              <use href={`#branch-${flake.id}`} transform="rotate(300)" />
            </g>
          </g>
        ))}
      </svg>
      {children}
    </div>
  );
}
